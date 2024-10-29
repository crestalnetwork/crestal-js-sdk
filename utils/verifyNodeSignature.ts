import { ethers } from 'ethers';
import { SiweMessage } from 'siwe';

/**
 * Verifies if a signature matches the provided SIWE message and expected address.
 *
 * @param messageStr - The SIWE message string.
 * @param signature - The hex-encoded signature string.
 * @param expectedAddress - The expected Ethereum address to verify.
 * @returns `true` if verification is successful, `false` otherwise.
 */
async function verifySignature(
  messageStr: string,
  signature: string,
  expectedAddress: string
): Promise<boolean> {
  try {
    // Parse the SIWE message
    const message = new SiweMessage(messageStr);

    // Prepare the message for verification
    const preparedMessage = message.prepareMessage();

    // Verify the message and recover the address
    const recoveredAddress = ethers.verifyMessage(preparedMessage, signature);

    // Check if the recovered address matches the expected address
    return recoveredAddress.toLowerCase() === expectedAddress.toLowerCase();
  } catch (error) {
    console.error("Verification failed:", error instanceof Error ? error.message : error);
    return false;
  }
}
