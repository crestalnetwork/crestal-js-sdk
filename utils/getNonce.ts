import { Configuration, DefaultApi, GetNonceRequest } from '../typescript-sdk'; 
import { GetNonce200ResponseFromJSON } from '../typescript-sdk/models/GetNonce200Response';
import { BASE_PATH } from '../typescript-sdk';
import { ethers } from 'ethers'; 

const config = new Configuration({
  basePath: BASE_PATH,
});

// Create an instance of the API client
const apiClient = new DefaultApi(config);

export async function getNonce(userAddress: string): Promise<string | null> {
  try {
    if (!ethers.isAddress(userAddress)) {
      throw new Error('Invalid Ethereum address');
    }

    const request: GetNonceRequest = { userAddress };
    const response = await apiClient.getNonce(request);
    const nonceResponse = GetNonce200ResponseFromJSON(response);

    return nonceResponse.nonce || null;
  } catch (error) {
    console.error('Error fetching nonce:', error);
    return null; // Return null in case of an error
  }
}
