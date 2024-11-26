import fetch from 'node-fetch';
import { generateDeploymentSIWE } from './generateDeploymentSIWE';
import { signMessageWithPrivateKey } from './signMessage';
import { Deployment } from './types';
import { LoginRequest } from 'typescript-sdk';

export async function updateDeploymentStatus(
  deploymentData: Deployment,
  privateKey: string,
) {
  try {
    const { worker_address: workerAddress, chain_id: chainId } = deploymentData;

    // Generate the SIWE message
    const siweMessage = await generateDeploymentSIWE(deploymentData, workerAddress, chainId);
    const signature = (await signMessageWithPrivateKey(siweMessage, privateKey)).toString();

    // Construct the login request payload
    const loginRequest: LoginRequest = {
      userAddress: workerAddress,
      siweMsg: siweMessage,
      signature: signature,
    };

    // Define the full request body
    const requestBody = {
      user_address: loginRequest.userAddress,
      signature: loginRequest.signature,
      siwe_msg: loginRequest.siweMsg,
    };

    // Make the POST request using fetch
    const response = await fetch('https://api.service.testnet.crestal.xyz/v1/deployments/worker/status', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });

    // Display the raw response text
    const rawResponse = await response.text();
    console.log('Raw response:', rawResponse);

    // Parse the response as JSON if the status is OK
    if (response.ok) {
      const responseData = JSON.parse(rawResponse);
      console.log('Parsed JSON response:', responseData);
      return responseData;
    } else {
      console.error(`Request failed with status: ${response.status} - ${response.statusText}`);
      throw new Error(`Request failed with status: ${response.status}`);
    }
  } catch (error) {
    console.error('Error making the POST request:', error instanceof Error ? error.message : String(error));
    throw error;
  }
}
