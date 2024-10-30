import { ethers } from 'ethers';

const blueprintAddress = '0x5D8d432C96DcEE25c9B3B72634B20f11AA5516d7';
const blueprintAbi = [
  {
    "anonymous": false,
    "inputs": [
      { "indexed": true, "internalType": "bytes32", "name": "projectID", "type": "bytes32" },
      { "indexed": false, "internalType": "address", "name": "walletAddress", "type": "address" },
      { "indexed": true, "internalType": "bytes32", "name": "requestID", "type": "bytes32" },
      { "indexed": false, "internalType": "string", "name": "base64RecParam", "type": "string" },
      { "indexed": false, "internalType": "string", "name": "serverURL", "type": "string" }
    ],
    "name": "RequestProposal",
    "type": "event"
  }
];

const provider = new ethers.JsonRpcProvider('https://bartio.rpc.berachain.com');
const contract = new ethers.Contract(blueprintAddress, blueprintAbi, provider);

interface ChainRequestParam {
  Types: string[];
  DAProposal?: any; 
}

function decodeBase64RecParam(base64RecParam: string): ChainRequestParam | null {
  try {
    const decoded = Buffer.from(base64RecParam, 'base64').toString('utf-8');
    return JSON.parse(decoded) as ChainRequestParam;
  } catch (err) {
    console.error('Error parsing base64RecParam:', err);
    return null;
  }
}

export async function listenToEvents() {
  console.log('Listening for RequestProposal events...');

  contract.on(
    'RequestProposal',
    (
      projectID: ethers.BytesLike,
      walletAddress: string,
      requestID: ethers.BytesLike,
      base64RecParam: string,
      serverURL: string,
      event: ethers.Log // The raw event data
    ) => {
      console.log('RequestProposal Event Detected');

      // Decode base64RecParam into a human-readable object
      const chainRequestParam = decodeBase64RecParam(base64RecParam);

      // Log the decoded data and the event information
      console.log({
        projectID: ethers.hexlify(projectID),
        walletAddress,
        requestID: ethers.hexlify(requestID),
        chainRequestParam, // Decoded ChainRequestParam
        serverURL,
        raw: event 
      });
    }
  );
}
