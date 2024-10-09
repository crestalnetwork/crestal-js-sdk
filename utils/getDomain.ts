/**
 * Utility function to extract the domain from a given URL.
 * 
 * @param basePath - The base path of the API (e.g., BASE_PATH).
 * @returns The domain of the API (e.g., "api.service.testnet.crestal.xyz").
 */
export const getDomainFromBasePath = (basePath: string): string => {
  try {
    const url = new URL(basePath);
    return url.hostname;
  } catch (error) {
    console.error(`Invalid URL: ${basePath}`, error);
    return '';
  }
};
