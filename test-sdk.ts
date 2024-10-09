import { DefaultApi, Configuration, LoginRequest, LoginOperationRequest } from './typescript-sdk';
import { SiweMessage } from 'siwe';
import { ethers } from 'ethers';

async function testLogin() {
  const privateKey = "0x702b31e07df61a323ae6f55db2253164a4b050158496aa9191df818f380dbb3d";
  const userAddress = "0xBB900BbE1A20dA4d474666B79a5fa6CE12629733";

  // Step 1: Set up the API client configuration
  const config = new Configuration({
    basePath: 'https://api.service.testnet.crestal.xyz/v1',
  });

  const api = new DefaultApi(config);

  try {
    // Step 2: Retrieve nonce using the key 'userAddress'
    const nonceResponse = await api.getNonce({ userAddress: userAddress });
    console.log('Nonce received:', nonceResponse);
    const nonce = nonceResponse.nonce;

    // Step 3: Create SIWE message
    const siweMessage = new SiweMessage({
      domain: 'api.service.testnet.crestal.xyz',
      address: userAddress,
      statement: 'Sign in with Ethereum to authenticate with Crestal services.',
      uri: 'https://api.service.testnet.crestal.xyz',
      version: '1',
      chainId: 5,
      nonce: nonce,
      issuedAt: new Date().toISOString(),
    });

    const siweMsg = siweMessage.prepareMessage(); // Format SIWE message

    // Step 4: Sign the SIWE message using ethers.js
    const wallet = new ethers.Wallet(privateKey);
    const signature = await wallet.signMessage(siweMsg);
    console.log('Signature generated:', signature);

    // Step 5: Create the login request payload
    const loginPayload: LoginRequest = {
      userAddress: userAddress,
      siweMsg: siweMsg,
      signature: signature,
    };

    // Step 6: Wrap the LoginRequest in LoginOperationRequest
    const loginOperationRequest: LoginOperationRequest = {
      loginRequest: loginPayload,
    };

    // Step 7: Make the login request
    const response = await api.login(loginOperationRequest);
    console.log('Login successful:', response);
  } catch (err) {
    console.error('Login failed:', err);

    if (err.response) {
      console.log('Error response status:', err.response.status);
      console.log('Error response status text:', err.response.statusText);
      console.log('Error response body:', await err.response.text());
    }
  }
}

testLogin();
