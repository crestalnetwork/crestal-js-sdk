/**
 * Validates the given nonce to ensure it adheres to expected format and constraints.
 * @param nonce - The nonce to validate.
 * @returns {boolean} - True if the nonce is valid, false otherwise.
 */
export const validateNonce = (nonce: string): boolean => {
    if (typeof nonce !== 'string') {
      console.error(`Invalid nonce type: ${typeof nonce}. Expected a string.`);
      return false;
    }
  
    if (nonce.length < 6) {
      console.error(`Nonce too short: ${nonce}. Minimum length should be 6.`);
      return false;
    }
  
    if (!/^\d+$/.test(nonce)) {
      console.error(`Invalid nonce format: ${nonce}. Nonce should only contain digits.`);
      return false;
    }
  
    return true;
  };
  