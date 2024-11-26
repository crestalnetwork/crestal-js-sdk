import { SiweMessage } from 'siwe';
import { Deployment } from './types'; // Import your Deployment type
import { BASE_PATH } from '../typescript-sdk'; // Your base path for the API
import { createApiClient } from './apiClient'; // Your API client

/**
 * Generates a signed SIWE message for deployment data.
 *
 * @param deploymentData - The deployment data to serialize and sign.
 * @param workerAddress - The Ethereum address of the worker.
 * @param chainId - The chain ID for the Ethereum network.
 * @returns The prepared SIWE message string or an error message.
 */
export async function generateDeploymentSIWE(
  deploymentData: Deployment,
  workerAddress: string,
  chainId: number
): Promise<string> {
  const api = createApiClient();

  try {
    const { nonce } = await api.getNonce({ userAddress: workerAddress });
    const domain = new URL(BASE_PATH).hostname;

    // Set up timestamps for the SIWE message
    const issuedAt = new Date().toISOString();
    const expirationTime = new Date(Date.now() + 10 * 60 * 1000).toISOString(); // 10 minutes expiry

    // Construct the SIWE message
    const siweMessage = new SiweMessage({
      domain,
      address: workerAddress,
      uri: BASE_PATH,
      version: '1',
      chainId,
      nonce,
      issuedAt,
      expirationTime,
      statement: JSON.stringify(deploymentData), // Serialize deployment data as the statement
    });

    return siweMessage.prepareMessage();

  } catch (error) {
    console.error('Failed to generate SIWE message:', error);
    return 'Error generating SIWE message';
  }
}
