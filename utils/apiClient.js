import { DefaultApi, Configuration, BASE_PATH } from '../typescript-sdk';
/**
 * Creates and returns an API client with the given base path.
 * @param basePath - The base path for the API.
 * @returns Configured API client instance.
 */
export const createApiClient = (basePath = BASE_PATH) => {
    const config = new Configuration({ basePath });
    return new DefaultApi(config);
};
