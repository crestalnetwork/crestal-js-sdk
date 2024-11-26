import { ethers } from 'ethers';
import * as fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Contract address
const blueprintAddress = '0x5D8d432C96DcEE25c9B3B72634B20f11AA5516d7';

const abiPath = path.resolve(__dirname, '../blueprint.abi'); 
const blueprintAbi = JSON.parse(fs.readFileSync(abiPath, 'utf-8'));

// Define available RPC providers
export const RPC_PROVIDERS = {
  berachain: 'https://bartio.rpc.berachain.com',
  binance: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
  polygon: 'https://rpc-amoy.polygon.technology/',
};

function getProvider(network: keyof typeof RPC_PROVIDERS) {
  if (!RPC_PROVIDERS[network]) {
    throw new Error(`Unsupported network: ${network}`);
  }
  return new ethers.JsonRpcProvider(RPC_PROVIDERS[network]);
}

export async function createContractFunctions(
  privateKey: string,
  network: keyof typeof RPC_PROVIDERS = 'berachain'
) {
  const provider = getProvider(network);
  const wallet = new ethers.Wallet(privateKey, provider);
  const contract = new ethers.Contract(blueprintAddress, blueprintAbi, wallet);

  const contractFunctions: Record<string, (...args: any[]) => Promise<any>> = {};

  // Iterate over the ABI to create function wrappers
  blueprintAbi.forEach((item: any) => {
    if (item.type === 'function' && typeof item.name === 'string') {
      const functionName = item.name as string;
      contractFunctions[functionName] = async (...args: any[]) => {
        try {
          if (item.stateMutability === 'view' || item.stateMutability === 'pure') {
            // Directly call view/pure functions without sending a transaction
            return await contract[functionName](...args);
          } else {
            // For non-view functions, send a transaction and wait for it
            const tx = await contract[functionName](...args);
            console.log('Transaction sent:', tx.hash);
            const receipt = await tx.wait();
            return receipt;
          }
        } catch (error) {
          console.error(`Error calling ${functionName}:`, error);
          throw error;
        }
      };
    }
  });

  return contractFunctions;
}
