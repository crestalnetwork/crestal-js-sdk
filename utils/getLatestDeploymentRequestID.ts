
import { createContractFunctions, RPC_PROVIDERS } from './contractFunctions';

// Function to fetch the latest deployment request ID
export async function getLatestDeploymentRequestID(
  privateKey: string,
  network: keyof typeof RPC_PROVIDERS,  
  userAddress: string
) {
  try {
    const contractFunctions = await createContractFunctions(privateKey, network);

    // Call the function to get the latest deployment request ID
    const latestDeploymentRequestID = await contractFunctions.getLatestDeploymentRequestID(userAddress);

    console.log('Latest Deployment Request ID:', latestDeploymentRequestID);
    return latestDeploymentRequestID;
  } catch (error) {
    console.error('Error calling getLatestDeploymentRequestID:', error instanceof Error ? error.message : String(error));
    throw error;
  }
}


