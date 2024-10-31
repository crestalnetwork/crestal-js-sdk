import { isChainSupported } from './validateChain';
import { createApiClient } from './apiClient';
import { createSiweMessage } from './generateSIWE';
import { signMessageWithPrivateKey } from './signMessage';
import { logErrorDetails } from './error';
import { isAddress } from 'ethers';
/**
 * Login function to authenticate using SIWE.
 * @param {string} privateKey - User's private key to sign the SIWE message.
 * @param {string} userAddress - Ethereum address of the user.
 * @param {number} chainId - Blockchain network chain ID.
 */
export const login = async (privateKey, userAddress, chainId) => {
    // Validate Ethereum address
    if (!isAddress(userAddress)) {
        console.error(`Invalid Ethereum address: ${userAddress}.`);
        return;
    }
    // Validate chain ID
    if (isNaN(chainId)) {
        console.error('Invalid CHAIN_ID.');
        return;
    }
    // Check if chain is supported
    if (!isChainSupported(chainId)) {
        console.error(`Unsupported chain ID: ${chainId}. SIWE message generation is not allowed.`);
        return;
    }
    // Step 1: Set up the API client configuration using BASE_PATH
    const api = createApiClient();
    try {
        // Step 2: Retrieve nonce using the key 'userAddress'
        const nonceResponse = await api.getNonce({ userAddress });
        const nonce = nonceResponse.nonce;
        // Step 3: Use `createSiweMessage` to create a SIWE message
        const siweMsg = createSiweMessage(userAddress, nonce, chainId);
        console.log('SIWE Message:', siweMsg);
        // Step 4: Sign the SIWE message using `signMessageWithPrivateKey` 
        const signature = await signMessageWithPrivateKey(siweMsg, privateKey);
        console.log('Signature generated:', signature);
        // Step 5: Create the login request payload
        const loginPayload = {
            userAddress,
            siweMsg,
            signature,
        };
        // Step 6: Wrap the LoginRequest in LoginOperationRequest
        const loginOperationRequest = {
            loginRequest: loginPayload,
        };
        // Step 7: Make the login request
        const response = await api.login(loginOperationRequest);
        console.log('Login successful:', response);
    }
    catch (err) {
        logErrorDetails(err);
    }
};
