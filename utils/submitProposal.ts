import { DefaultApi, LoginRequest } from '../typescript-sdk';
import { createApiClient } from './apiClient';

/**
 * Submits a proposal using the provided SIWE message and signature.
 * @param {string} solverAddress - Ethereum address of the solver.
 * @param {string} siweMessage - SIWE message generated for authentication.
 * @param {string} signature - Signature of the SIWE message.
 * @returns {Promise<any>} The parsed response data if successful, or an error message if an error occurred.
 */
export async function submitProposal(solverAddress: string, siweMessage: string, signature: string): Promise<any> {
  const api = createApiClient();

  const loginRequest: LoginRequest = {
    userAddress: solverAddress,
    siweMsg: siweMessage,
    signature: signature,
  };

  try {
    // Submit the proposal using the SDK's acceptSolverProposals method
    const response = await api.acceptSolverProposals({ loginRequest });

    // Return the parsed response data
    return response;
  } catch (error) {
    console.error('Error submitting proposal:', error instanceof Error ? error.message : String(error));
    return { error: error instanceof Error ? error.message : String(error) };
  }
}
