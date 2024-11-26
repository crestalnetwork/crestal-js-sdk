import { submitProofOfDeploymentContract } from "../submitProofOfDeploymentContract";
import { MachineInfo, ProofOfDeploymentContract, ServiceInfo } from "../types";

(async () => {

const privateKey = 'WORKER_ADDRESS_PRIVATE_KEY'; 
const projectId = 'PROJECT_ID'; 
const requestId = 'REQUEST_ID'; 
const workerAddress = `WORKER_ADDRESS`; 

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
    request_id: requestId,
    proposal_base64: proposalBase64,
    expiration_date: Date.now() + 3600 * 1000, // Set to 1 hour from now
    worker_address: workerAddress,
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

  await submitProofOfDeploymentContract(privateKey, "berachain", projectId, requestId, proofOfDeployment);
})();
