import { SiweMessage } from 'siwe';
import { PostProposal, Proposal } from './types';
import { BASE_PATH } from '../typescript-sdk';
import { createApiClient } from './apiClient';

/**
 * Generates a signed SIWE message for proposals.
 *
 * @param postSolverProposal - The proposal data to serialize and sign.
 * @param solverAddress - The address of the solver submitting the proposal.
 * @param chainId - The chain ID for the proposal transaction.
 * @returns The prepared SIWE message string.
 */
export async function generateProposalSIWE(postSolverProposal: PostProposal, solverAddress: string, chainId: number): Promise<string | undefined> {
  const api = createApiClient();

  try {
    // Fetch nonce required for SIWE message
    const { nonce } = await api.getNonce({ userAddress: solverAddress });
    const domain = new URL(BASE_PATH).hostname;

    // Define SIWE message options
    const issuedAt = new Date().toISOString();
    const expirationTime = new Date(Date.now() + 10 * 60 * 1000).toISOString(); // Expires in 10 minutes

    const siweMessage = new SiweMessage({
      domain,
      address: solverAddress,
      uri: BASE_PATH,
      version: '1',
      chainId,
      nonce,
      issuedAt,
      expirationTime,
      statement: JSON.stringify(postSolverProposal), // Serialize the proposal directly as statement
    });

    return siweMessage.prepareMessage();

  } catch (error) {
    console.error('Failed to generate SIWE message:', error);
    return undefined;
  }
}

