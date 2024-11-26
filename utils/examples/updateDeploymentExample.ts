import { updateDeploymentStatus } from "../updateDeploymentStatus";
import { Deployment } from "../types";

(async () => {
  const workerAddress = `WORKER_ADDRESS`; 
  const privateKey = 'WORKER_ADDRESS_PRIVATE_KEY'; 
  const projectId = 'PROJECT_ID'; 
  const requestId = 'REQUEST_ID'; 
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
    maintenance_cost: 20,
  };

  const deploymentData: Deployment = {
    request_id: requestId, //YOUR_REQUEST_ID
    project_id: projectId, //YOUR_PROJECT_ID
    chain_id: chainId,
    worker_address: workerAddress,
    solver_address: workerAddress,
    status: 'deployed',
    proposal: proposal,
  };

  try {
    const result = await updateDeploymentStatus(deploymentData, privateKey);
    console.log('Function result:', result);
  } catch (error) {
    console.error('Error during function execution:', error);
  }
})();
