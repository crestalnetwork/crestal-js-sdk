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
  },
  {
    "anonymous": false,
    "inputs": [
      { "indexed": true, "internalType": "bytes32", "name": "projectID", "type": "bytes32" },
      { "indexed": true, "internalType": "bytes32", "name": "requestID", "type": "bytes32" },
      { "indexed": true, "internalType": "address", "name": "workerAddress", "type": "address" }
    ],
    "name": "AcceptDeployment",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      { "indexed": true, "internalType": "bytes32", "name": "projectID", "type": "bytes32" },
      { "indexed": true, "internalType": "bytes32", "name": "requestID", "type": "bytes32" },
      { "indexed": false, "internalType": "string", "name": "base64DeploymentProof", "type": "string" }
    ],
    "name": "GeneratedProofOfDeployment",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      { "indexed": true, "internalType": "bytes32", "name": "projectID", "type": "bytes32" },
      { "indexed": false, "internalType": "address", "name": "walletAddress", "type": "address" },
      { "indexed": false, "internalType": "address", "name": "solverAddress", "type": "address" },
      { "indexed": true, "internalType": "bytes32", "name": "requestID", "type": "bytes32" },
      { "indexed": false, "internalType": "string", "name": "base64Proposal", "type": "string" },
      { "indexed": false, "internalType": "string", "name": "serverURL", "type": "string" }
    ],
    "name": "RequestDeployment",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      { "indexed": true, "internalType": "bytes32", "name": "projectID", "type": "bytes32" },
      { "indexed": false, "internalType": "address", "name": "walletAddress", "type": "address" },
      { "indexed": false, "internalType": "address", "name": "privateWorkerAddress", "type": "address" },
      { "indexed": false, "internalType": "address", "name": "solverAddress", "type": "address" },
      { "indexed": true, "internalType": "bytes32", "name": "requestID", "type": "bytes32" },
      { "indexed": false, "internalType": "string", "name": "base64Proposal", "type": "string" },
      { "indexed": false, "internalType": "string", "name": "serverURL", "type": "string" }
    ],
    "name": "RequestPrivateDeployment",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      { "indexed": true, "internalType": "bytes32", "name": "projectID", "type": "bytes32" },
      { "indexed": false, "internalType": "address", "name": "walletAddress", "type": "address" },
      { "indexed": false, "internalType": "address", "name": "privateSolverAddress", "type": "address" },
      { "indexed": true, "internalType": "bytes32", "name": "requestID", "type": "bytes32" },
      { "indexed": false, "internalType": "string", "name": "base64RecParam", "type": "string" },
      { "indexed": false, "internalType": "string", "name": "serverURL", "type": "string" }
    ],
    "name": "RequestPrivateProposal",
    "type": "event"
  }
];

const provider = new ethers.JsonRpcProvider('https://data-seed-prebsc-1-s1.binance.org:8545/');
const contract = new ethers.Contract(blueprintAddress, blueprintAbi, provider);

interface ChainRequestParam {
  Types: string[];
  DAProposal?: any;
}

function decodeBase64(base64String: string): any | null {
  try {
    const decoded = Buffer.from(base64String, 'base64').toString('utf-8');
    return JSON.parse(decoded);
  } catch (err) {
    console.error('Error parsing base64 string:', err);
    return null;
  }
}

export async function bsclistenToEvents() {
  console.log('Listening for all events...');

  contract.on('RequestProposal', (projectID, walletAddress, requestID, base64RecParam, serverURL, event) => {
    console.log('RequestProposal Event Detected');
    const chainRequestParam = decodeBase64(base64RecParam);
    console.log({
      projectID: ethers.hexlify(projectID),
      walletAddress,
      requestID: ethers.hexlify(requestID),
      chainRequestParam,
      serverURL,
      raw: event
    });
  });

  contract.on('AcceptDeployment', (projectID, requestID, workerAddress, event) => {
    console.log('AcceptDeployment Event Detected');
    console.log({
      projectID: ethers.hexlify(projectID),
      requestID: ethers.hexlify(requestID),
      workerAddress,
      raw: event
    });
  });

  contract.on('GeneratedProofOfDeployment', (projectID, requestID, base64DeploymentProof, event) => {
    console.log('GeneratedProofOfDeployment Event Detected');
    const decodedProof = decodeBase64(base64DeploymentProof);
    console.log({
      projectID: ethers.hexlify(projectID),
      requestID: ethers.hexlify(requestID),
      decodedProof,
      raw: event
    });
  });

  contract.on('RequestDeployment', (projectID, walletAddress, solverAddress, requestID, base64Proposal, serverURL, event) => {
    console.log('RequestDeployment Event Detected');
    const decodedProposal = decodeBase64(base64Proposal);
    console.log({
      projectID: ethers.hexlify(projectID),
      walletAddress,
      solverAddress,
      requestID: ethers.hexlify(requestID),
      decodedProposal,
      serverURL,
      raw: event
    });
  });

  contract.on('RequestPrivateDeployment', (projectID, walletAddress, privateWorkerAddress, solverAddress, requestID, base64Proposal, serverURL, event) => {
    console.log('RequestPrivateDeployment Event Detected');
    const decodedProposal = decodeBase64(base64Proposal);
    console.log({
      projectID: ethers.hexlify(projectID),
      walletAddress,
      privateWorkerAddress,
      solverAddress,
      requestID: ethers.hexlify(requestID),
      decodedProposal,
      serverURL,
      raw: event
    });
  });

  contract.on('RequestPrivateProposal', (projectID, walletAddress, privateSolverAddress, requestID, base64RecParam, serverURL, event) => {
    console.log('RequestPrivateProposal Event Detected');
    const chainRequestParam = decodeBase64(base64RecParam);
    console.log({
      projectID: ethers.hexlify(projectID),
      walletAddress,
      privateSolverAddress,
      requestID: ethers.hexlify(requestID),
      chainRequestParam,
      serverURL,
      raw: event
    });
  });
}
