import { createContractFunctions, RPC_PROVIDERS } from './contractFunctions';
import { MachineInfo, ProofOfDeploymentContract, ServiceInfo } from './types';

export async function submitProofOfDeploymentContract(
  privateKey: string,
  network: keyof typeof RPC_PROVIDERS, 
  projectId: string,
  requestId: string,
  deploymentDetails: object
) {
  try {
    // Convert deployment details to Base64
    const proofBase64 = Buffer.from(JSON.stringify(deploymentDetails)).toString('base64');

    const contractFunctions = await createContractFunctions(privateKey, network);

    const receipt = await contractFunctions.submitProofOfDeployment(
      projectId,
      requestId,
      proofBase64
    );

    console.log('Transaction confirmed:', receipt);
  } catch (error) {
    console.error('Error calling submitProofOfDeployment:', error);
  }
}



















// Example usage
(async () => {

// Define machine info with dummy values
const machineInfo: MachineInfo = {
    mac_address: "00:1B:44:11:3A:B7",
    cloud_provider: "AWS",
    unique_id: "i-0abcd12345efgh678"
  };
  
  // Populate ServiceInfo with dummy API details
  const serviceInfo: ServiceInfo = {
    api_infos: [
      {
        endpoint: "https://test.com/api/test",
        method: "GET",
        request: '{"param1": "value1"}',
        response: '{"result": "success"}'
      },
      {
        endpoint: "https://test.com/api/submit",
        method: "POST",
        request: '{"data": "exampleData"}',
        response: '{"status": "submitted"}'
      }
    ]
  };









  
  // Example proposal data to be encoded in base64
  const chainId = 80084;
  
  const proposal = {
    chain_id: chainId,
    da_name: "Avail",
    network_type: "Testnet",
    gas_token: "ETH",
    avg_cost: 3.2,
    max_throughput: 10.5,
    latency: 0.3,
    finality_time: 2.0,
    geo_coverage: 8,
    grants_available: false,
    number_of_projects: 1,
    uptime: 10,
    block_time: 10,
    total_transactions: 1000000002,
    total_blocks: 1000000003,
    number_of_nodes: 5000,
    cost_per_transaction: 0.3,
    cost_per_mb: 0.2,
    error_rate: 0.02,
    init_cost: 100,
    maintenance_cost: 20
  };
  
  // Encode proposal to Base64
  const proposalBase64 = Buffer.from(JSON.stringify(proposal)).toString('base64');
  
  // Construct ProofOfDeployment data object
  const proofOfDeployment: ProofOfDeploymentContract = {
    request_id: '0x179b63bd4b9cfe7bf709dae4120d2bc321c0e4442ad18ec0c2859f5269e3d951',
    proposal_base64: proposalBase64,
    expiration_date: Date.now() + 3600 * 1000, // Set to 1 hour from now
    worker_address: "0x1e22A1C3AB5DfbA41d61d546f39b08A43410caC8",
    server_https_url: 'https://test.com',
    server_http_url: 'http://test.com',
    server_web_socket_url: 'wss://test.com',
    server_rpc_endpoint: 'ws://test.com',
    server_grpc_endpoint: 'grpc://test.com',
    deployment_pick_up_time: Date.now(), // Current timestamp as pick-up time
    deployment_deployed_time: 0, 
    machine_info: machineInfo,
    service_info: serviceInfo,
  };
  

  
  const privateKey = '469f21a9bf88257a595177404d4765a142e4304a8bffa89d93a8fbf15ca1d3a0';
  const projectId = '0x879f3153ed293641c71c34b97b7ee1ef4c9d53243c127d14e704f9a4c4fb24e0';
  const requestId = '0x179b63bd4b9cfe7bf709dae4120d2bc321c0e4442ad18ec0c2859f5269e3d951';

  await submitProofOfDeploymentContract(privateKey, "berachain", projectId, requestId, proofOfDeployment);
})();
