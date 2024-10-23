import { SiweMessage } from 'siwe';
import { getDomainFromBasePath } from './getDomain';
import { BASE_PATH } from '../typescript-sdk';
import { validateNonce } from './validateNonce';
import { isChainSupported } from './validateChain';
import { isAddress } from 'ethers';

/**
 * Utility function to generate a SIWE message with added nonce validation.
 * 
 * @param userAddress - The user's wallet address in hexadecimal format.
 * @param nonce - A unique nonce for the SIWE message.
 * @param chainId - The blockchain network chain ID.
 * @returns The prepared SIWE message string.
 */
export const createSiweMessage = (userAddress: string, nonce: string | undefined, chainId: number): string => {
  // Validate the nonce before using it
  if (!validateNonce(nonce)) {
    throw new Error(`Invalid nonce: ${nonce}`);
  }

  if (!isAddress(userAddress)) {
    throw new Error(`Invalid Ethereum address: ${userAddress}`);
  }

  if (!isChainSupported(chainId)) {
    throw new Error(`Unsupported or invalid chain ID: ${chainId}.`);
  }
  
  const domain = getDomainFromBasePath(BASE_PATH);
  const message = new SiweMessage({
    domain,
    nonce,
    address: userAddress,
    uri: BASE_PATH,
    version: '1',
    chainId,
    issuedAt: new Date().toISOString(),
  });
  return message.prepareMessage();
};
