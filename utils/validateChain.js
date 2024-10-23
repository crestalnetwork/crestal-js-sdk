export const supportedChainIds = [80084, 80002]; // berachainTestnet: 80084, polygonAmoy: 80002
/**
 * Utility function to check if a chain ID is supported.
 *
 * @param chainId - The chain ID to check.
 * @returns A boolean indicating if the chain is supported.
 */
export const isChainSupported = (chainId) => supportedChainIds.includes(chainId);
