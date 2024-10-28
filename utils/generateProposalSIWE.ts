import { SiweMessage } from 'siwe';
import { DAProposal, PostProposal } from './types';
import { BASE_PATH } from '../typescript-sdk';
import { signMessageWithPrivateKey } from './signMessage';
import { isAddress } from 'ethers';
import { isChainSupported } from './validateChain';
import { createApiClient } from './apiClient';

/**
 * Encodes a DAProposal object to a Base64-encoded JSON string.
 * 
 * @param daProposal - The DAProposal object.
 * @returns A Base64-encoded string of the DAProposal.
 */
function encodeDAProposal(daProposal: DAProposal): string {
  const jsonString = JSON.stringify(daProposal);
  return Buffer.from(jsonString).toString('base64');
}

/**
 * Creates a SIWE message for a proposal.
 * 
 * @param userAddress - Ethereum wallet address of the user.
 * @param chainId - Chain ID.
 * @param proposal - PostProposal object.
 * @returns The prepared SIWE message.
 */
export const createSiweMessage = async (
  userAddress: string,
  chainId: number,
  proposal: PostProposal
): Promise<string> => {
  if (!isAddress(userAddress)) {
    throw new Error(`Invalid Ethereum address: ${userAddress}`);
  }
  if (!isChainSupported(chainId)) {
    throw new Error(`Unsupported chain ID: ${chainId}`);
  }

  const proposalStatement = JSON.stringify(proposal);
  const domain = new URL(BASE_PATH).hostname;
  const api = createApiClient();

  const dataMap = {
    issuedAt: new Date().toISOString(),
    expirationTime: new Date(Date.now() + 10 * 60 * 1000).toISOString(),
    requestId: proposal.request_id,
  };

  const nonceResponse = await api.getNonce({ userAddress });
  const nonce = nonceResponse.nonce;

  const message = new SiweMessage({
    domain,
    address: userAddress,
    statement: proposalStatement,
    uri: BASE_PATH,
    version: '1',
    chainId,
    nonce,
    issuedAt: dataMap.issuedAt,
    expirationTime: dataMap.expirationTime,
    resources: [dataMap.requestId],
  });

  return message.prepareMessage();
};

/**
 * Test function to generate and sign a SIWE message for proposals.
 */
async function testSiweGenerator() {
  const solverAddress = '0x1e22A1C3AB5DfbA41d61d546f39b08A43410caC8';
  const chainId = 80084;

  const daProposals: DAProposal[] = [
    {
      id: 1,
      project_id: "0xfd4016ce66edd3ca2914a598163627d8c77658492c7e6242fa5ac445f9059178",
      chain_id: 80084,
      init_cost: 120,
      maintenance_cost: 100,
      accept_currencies: "USDC",
      fit: 0.9,
      rank: 1,
      worker_address: "0xBB900BbE1A20dA4d474666B79a5fa6CE12629733"
    },
    {
      id: 1,
      project_id: "0xfd4016ce66edd3ca2914a598163627d8c77658492c7e6242fa5ac445f9059178",
      chain_id: 80084,
      init_cost: 130,
      maintenance_cost: 20,
      accept_currencies: "USDC",
      fit: 0.92,
      rank: 2,
      worker_address: "0xBB900BbE1A20dA4d474666B79a5fa6CE12629733"
    }
  ];

  const encodedDAProposals = daProposals.map(encodeDAProposal);

  const generatedProposal: PostProposal = {
    project_id: "0xfd4016ce66edd3ca2914a598163627d8c77658492c7e6242fa5ac445f9059178",
    request_id: "0xaf4c617c909508cab271e2f8cf14dd407144bc4c78dd5aa458391ff6b29e62b2",
    target_performance: 0.95,
    solver_address: solverAddress,
    da_proposals: encodedDAProposals
  };

  try {
    const siweMessage = await createSiweMessage(solverAddress, chainId, generatedProposal);
    const privateKey = '469f21a9bf88257a595177404d4765a142e4304a8bffa89d93a8fbf15ca1d3a0';
    const signature = await signMessageWithPrivateKey(siweMessage, privateKey);

    console.log('Generated SIWE Message:', siweMessage);
    console.log('Generated Signature:', signature);
  } catch (error) {
    console.error('Error in SIWE message generation or signing:', error);
  }
}

testSiweGenerator();
