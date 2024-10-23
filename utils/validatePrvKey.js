/**
 * Validates if the given private key has the correct format.
 * @param privateKey - The private key to validate.
 * @returns True if the private key format is valid, false otherwise.
 */
export const validatePrivateKey = (privateKey) => {
    return privateKey.startsWith('0x') && privateKey.length === 66;
};
