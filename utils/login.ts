import { isChainSupported } from './validateChain';
import { DefaultApi, Configuration, LoginRequest, LoginOperationRequest, BASE_PATH } from '../typescript-sdk';
import { createApiClient } from './apiClient';
import { createSiweMessage } from './generateSIWE';
import { signMessageWithPrivateKey } from './signMessage';
import { logErrorDetails } from './error';
import { validateEnvVars } from './validateEnvVars'; 
import { config } from 'dotenv';
import { isAddress } from 'ethers';

// Load environment variables from .env file
config();

async function testLogin() {
  if (!validateEnvVars()) return; 

  const privateKey = process.env.PRIVATE_KEY as string;
  const userAddress = process.env.USER_ADDRESS as string;
  const chainId = parseInt(process.env.CHAIN_ID as string); 
  
  if (!isAddress(userAddress)) {
    console.error(`Invalid Ethereum address: ${userAddress}.`);
    return;
  }
  if (isNaN(chainId)) {
    console.error('Invalid CHAIN_ID in environment variables.');
    return;
  }
  if (!isChainSupported(chainId)) {
    console.error(`Unsupported chain ID: ${chainId}. SIWE message generation is not allowed.`);
    return;
  }

  // Step 1: Set up the API client configuration using BASE_PATH
  const api = createApiClient();

  try {
    // Step 2: Retrieve nonce using the key 'userAddress'
    const nonceResponse = await api.getNonce({ userAddress });
    const nonce = nonceResponse.nonce;

    // Step 3: Use `createSiweMessage` to create a SIWE message
    const siweMsg = createSiweMessage(userAddress, nonce, chainId);
    console.log('SIWE Message:', siweMsg);

    // Step 4: Sign the SIWE message using `signMessageWithPrivateKey` 
    const signature = await signMessageWithPrivateKey(siweMsg, privateKey);
    console.log('Signature generated:', signature);

    // Step 5: Create the login request payload
    const loginPayload: LoginRequest = {
      userAddress,
      siweMsg,
      signature,
    };

    // Step 6: Wrap the LoginRequest in LoginOperationRequest
    const loginOperationRequest: LoginOperationRequest = {
      loginRequest: loginPayload,
    };

    // Step 7: Make the login request
    const response = await api.login(loginOperationRequest);
    console.log('Login successful:', response);
  } catch (err) {
    logErrorDetails(err);
  }
}

testLogin();
