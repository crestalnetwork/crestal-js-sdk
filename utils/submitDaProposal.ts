import * as siwe from 'siwe';
import { ethers } from 'ethers';
import fetch from 'node-fetch';

// Utility to build the SIWE message
export async function buildSiweMessage(proposals: any, solverAddress: string): Promise<siwe.Message> {
  const dataMap: { [key: string]: any } = {};

  const issuedAt = new Date().toISOString();
  const expirationTime = new Date(Date.now() + 1 * 60 * 1000).toISOString(); // Expire in 1 minute

  dataMap['issuedAt'] = issuedAt;
  dataMap['expirationTime'] = expirationTime;

  const requestId = '0xabc123...';  // Example request ID, or use a generator
  dataMap['requestId'] = requestId;

  const proposalDataStr = JSON.stringify(proposals);
  dataMap['statement'] = proposalDataStr;

  const nonce = siwe.generateNonce();

  const message = new siwe.Message({
    domain: "crestal.xyz",
    address: solverAddress,
    statement: proposalDataStr,
    uri: "https://crestal.xyz",
    version: "1",
    chainId: 1,  // Mainnet or whichever chain you're using
    nonce,
    issuedAt,
    expirationTime,
  });

  return message;
}

// Utility to sign the SIWE message
export async function signSiweMessage(siweMessage: siwe.Message, privateKey: string): Promise<string> {
  const wallet = new ethers.Wallet(privateKey);
  return wallet.signMessage(siweMessage.toMessage());
}

// Utility to submit the proposal to the backend
export async function submitProposal(
  userAddress: string, 
  signature: string, 
  siweMessage: siwe.Message
): Promise<any> {
  const response = await fetch('https://api.crestal.xyz/proposals', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${signature}`
    },
    body: JSON.stringify({
      user_address: userAddress,
      signature: signature,
      siwe_msg: siweMessage.toMessage(),
    })
  });

  return response.json();
}
