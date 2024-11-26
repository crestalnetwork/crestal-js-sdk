import fetch from 'node-fetch';
import { generateDeploymentSIWE } from './generateDeploymentSIWE';
import { signMessageWithPrivateKey } from './signMessage';
import { Deployment } from './types'; // Import your Deployment data structure

/**
 * Function to submit a deployment
 * @param {string} workerAddress - The address of the worker
 * @param {number} chainId - The chain ID
 * @param {Deployment} deploymentData - The deployment data object
 * @param {string} privateKey - The private key to sign the message
 * @returns {Promise<void>} - Returns a promise that resolves when the request is complete
 */
export async function submitDeployment(
  workerAddress: string,
  chainId: number,
  deploymentData: Deployment,
  privateKey: string
): Promise<void> {
  // Generate the SIWE message
  const siweMessage = await generateDeploymentSIWE(deploymentData, workerAddress, chainId);
  const signature = (await signMessageWithPrivateKey(siweMessage, privateKey)).toString();

  const requestBody = {
    user_address: workerAddress,
    signature: signature,
    siwe_msg: siweMessage,
  };

  try {
    const response = await fetch('https://api.service.testnet.crestal.xyz/v1/deployments/worker', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });

    // Display the raw response
    const rawData = await response.text();
    console.log('Raw Response:', rawData);
  } catch (error) {
    console.error('Error making the POST request:', error instanceof Error ? error.message : String(error));
  }
}
