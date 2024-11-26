import { createContractFunctions, RPC_PROVIDERS } from './contractFunctions';
import { ethers } from 'ethers';

// Function to submit a deployment request to the contract
export async function submitDeploymentToContract(
  privateKey: string,
  network: keyof typeof RPC_PROVIDERS, 
  projectId: string,
  requestId: string
) {
  try {
    const contractFunctions = await createContractFunctions(privateKey, network);
    const receipt = await contractFunctions.submitDeploymentRequest(projectId, requestId);

    console.log('Transaction confirmed:', receipt);
  } catch (error) {
    console.error('Error submitting deployment request:', error instanceof Error ? error.message : String(error));
  }
}

