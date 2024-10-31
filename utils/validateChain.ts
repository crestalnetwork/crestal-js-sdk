import { SupportedChainIds, supportedChainIdsArray } from './types';

/**
 * Utility function to check if a chain ID is supported.
 * 
 * @param chainId - The chain ID to check.
 * @returns A boolean indicating if the chain is supported.
 */
export const isChainSupported = (chainId: number): chainId is SupportedChainIds =>
    supportedChainIdsArray.includes(chainId as SupportedChainIds);
