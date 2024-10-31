/**
 * Validates required environment variables.
 * @param requiredEnvVars - Array of required environment variable names.
 * @returns A boolean indicating if all necessary variables are present.
 */
export const validateEnvVars = (requiredEnvVars: string[] = ['PRIVATE_KEY', 'USER_ADDRESS', 'CHAIN_ID']): boolean => {
    const missingVars = requiredEnvVars.filter((envVar) => !process.env[envVar]);
  
    if (missingVars.length) {
      console.error(`Missing required environment variables: ${missingVars.join(', ')}`);
      return false;
    }
    return true;
  };
  