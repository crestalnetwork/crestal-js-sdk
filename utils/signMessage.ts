import { ethers } from 'ethers';

/**
 * Signs a message using a private key.
 * 
 * @param message - The message to sign.
 * @param privateKey - The private key to use for signing.
 * @returns The signed message.
 */
export const signMessageWithPrivateKey = async (message: string, privateKey: string): Promise<string> => {
  const wallet = new ethers.Wallet(privateKey);
  return wallet.signMessage(message);
};

