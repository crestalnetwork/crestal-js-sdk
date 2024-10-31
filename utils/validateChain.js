import { supportedChainIdsArray } from './types';

/**
 * Utility function to check if a chain ID is supported.
 * 
 * @param {number} chainId - The chain ID to check.
 * @returns {boolean} A boolean indicating if the chain is supported.
 */
export const isChainSupported = (chainId) => supportedChainIdsArray.includes(chainId);
