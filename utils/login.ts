import { isChainSupported } from './validateChain';
import { DefaultApi, Configuration, LoginRequest, LoginOperationRequest, BASE_PATH } from '../typescript-sdk';
import { createApiClient } from './apiClient';
import { createSiweMessage } from './generateSIWE';
import { signMessageWithPrivateKey } from './signMessage';
import { logErrorDetails } from './error';
import { validateEnvVars } from './validateEnvVars';
import { isAddress } from 'ethers';

/**
 * Login function to authenticate using SIWE.
 * @param {string} privateKey - User's private key to sign the SIWE message.
 * @param {string} userAddress - Ethereum address of the user.
 * @param {number} chainId - Blockchain network chain ID.
 */
export const login = async (privateKey: string, userAddress: string, chainId: number): Promise<void> => {

  // Validate Ethereum address
  if (!isAddress(userAddress)) {
    console.error(`Invalid Ethereum address: ${userAddress}.`);
    return;
  }

  // Validate chain ID
  if (isNaN(chainId)) {
    console.error('Invalid CHAIN_ID.');
    return;
  }

  // Check if chain is supported
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
    const siweMsg = `api.service.testnet.crestal.xyz wants you to sign in with your Ethereum account:
0x1e22A1C3AB5DfbA41d61d546f39b08A43410caC8

{"project_id":"0xfd4016ce66edd3ca2914a598163627d8c77658492c7e6242fa5ac445f9059178","request_id":"0xaf4c617c909508cab271e2f8cf14dd407144bc4c78dd5aa458391ff6b29e62b2","target_performance":0.95,"solver_address":"0x1e22A1C3AB5DfbA41d61d546f39b08A43410caC8","da_proposals":["eyJpZCI6MSwicHJvamVjdF9pZCI6IjB4ZmQ0MDE2Y2U2NmVkZDNjYTI5MTRhNTk4MTYzNjI3ZDhjNzc2NTg0OTJjN2U2MjQyZmE1YWM0NDVmOTA1OTE3OCIsImNoYWluX2lkIjo4MDA4NCwiaW5pdF9jb3N0IjoxMjAsIm1haW50ZW5hbmNlX2Nvc3QiOjEwMCwiYWNjZXB0X2N1cnJlbmNpZXMiOiJVU0RDIiwiZml0IjowLjksInJhbmsiOjEsIndvcmtlcl9hZGRyZXNzIjoiMHhCQjkwMEJiRTFBMjBkQTRkNDc0NjY2Qjc5YTVmYTZDRTEyNjI5NzMzIn0=","eyJpZCI6MSwicHJvamVjdF9pZCI6IjB4ZmQ0MDE2Y2U2NmVkZDNjYTI5MTRhNTk4MTYzNjI3ZDhjNzc2NTg0OTJjN2U2MjQyZmE1YWM0NDVmOTA1OTE3OCIsImNoYWluX2lkIjo4MDA4NCwiaW5pdF9jb3N0IjoxMzAsIm1haW50ZW5hbmNlX2Nvc3QiOjIwLCJhY2NlcHRfY3VycmVuY2llcyI6IlVTREMiLCJmaXQiOjAuOTIsInJhbmsiOjIsIndvcmtlcl9hZGRyZXNzIjoiMHhCQjkwMEJiRTFBMjBkQTRkNDc0NjY2Qjc5YTVmYTZDRTEyNjI5NzMzIn0="]}

URI: https://api.service.testnet.crestal.xyz/v1
Version: 1
Chain ID: 80084
Nonce: 100000013
Issued At: 2024-10-28T14:38:40.393Z
Expiration Time: 2024-10-28T14:48:40.393Z
Resources:
- 0xaf4c617c909508cab271e2f8cf14dd407144bc4c78dd5aa458391ff6b29e62b2`;
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
};
// Usage example
const privateKey = '469f21a9bf88257a595177404d4765a142e4304a8bffa89d93a8fbf15ca1d3a0';
const userAddress = '0x1e22A1C3AB5DfbA41d61d546f39b08A43410caC8';
login(privateKey, userAddress, 80084);
