import { LoginRequest, CreateWorkerDeploymentRequest, DefaultApi, Configuration } from '../typescript-sdk';
import { BASE_PATH } from '../typescript-sdk';
import { signMessageWithPrivateKey } from './signMessage';

export async function executeWorkerDeploymentRequest() {
  const userAddress = '0x1e22A1C3AB5DfbA41d61d546f39b08A43410caC8';
  const siweMessage = `api.service.testnet.crestal.xyz wants you to sign in with your Ethereum account:
  0x1e22A1C3AB5DfbA41d61d546f39b08A43410caC8
  
  {"ProjectID":"0xfd4016ce66edd3ca2914a598163627d8c77658492c7e6242fa5ac445f9059178","RequestID":"0xaf4c617c909508cab271e2f8cf14dd407144bc4c78dd5aa458391ff6b29e62b2","TargetPerformance":0.95,"SolverAddress":"0x1e22A1C3AB5DfbA41d61d546f39b08A43410caC8","DAProposals":[{"ID":1,"ProjectID":"0xfd4016ce66edd3ca2914a598163627d8c77658492c7e6242fa5ac445f9059178","ChainId":80084,"InitCost":120,"MaintenanceCost":100,"AcceptCurrencies":"USDC","Fit":0.9,"Rank":1,"WorkerAddress":"0xBB900BbE1A20dA4d474666B79a5fa6CE12629733"},{"ID":1,"ProjectID":"0xfd4016ce66edd3ca2914a598163627d8c77658492c7e6242fa5ac445f9059178","ChainId":80084,"InitCost":130,"MaintenanceCost":20,"AcceptCurrencies":"USDC","Fit":0.92,"Rank":2,"WorkerAddress":"0xBB900BbE1A20dA4d474666B79a5fa6CE12629733"}]}
  
  URI: https://api.service.testnet.crestal.xyz/v1
  Version: 1
  Chain ID: 80084
  Nonce: 100000004
  Issued At: 2024-10-28T02:31:44.066Z
  Expiration Time: 2024-10-28T02:41:44.066Z
  Resources:
  - 0xaf4c617c909508cab271e2f8cf14dd407144bc4c78dd5aa458391ff6b29e62b2`;

  // Sign the SIWE message
const privateKey = '0x469f21a9bf88257a595177404d4765a142e4304a8bffa89d93a8fbf15ca1d3a0';

  const sig = await signMessageWithPrivateKey(siweMessage, privateKey);
  const signature = '0x' + Buffer.from(sig).toString('hex');

// Alternatively, with ethers.js utility (if in Uint8Array or Buffer form)

  // Create LoginRequest and wrap in CreateWorkerDeploymentRequest
  const loginRequest: LoginRequest = {
    userAddress: userAddress,
    siweMsg: siweMessage,
    signature,
  };

  const workerDeploymentRequest: CreateWorkerDeploymentRequest = { loginRequest };

  // Log the payload structure
  console.log('Request Payload:', JSON.stringify(workerDeploymentRequest, null, 2));

  try {
    const config = new Configuration({ basePath: BASE_PATH });
    const apiClient = new DefaultApi(config);

    const response = await apiClient.createWorkerDeployment(workerDeploymentRequest);

    console.log('Deployment Response:', response);
  } catch (error) {

      console.error('Unexpected Error:', error);
      
    
  }
}

executeWorkerDeploymentRequest();
