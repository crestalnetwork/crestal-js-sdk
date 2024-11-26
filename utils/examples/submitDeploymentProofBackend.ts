import { updateDeploymentStatus } from '../updateDeploymentStatus';
import { Deployment } from '../types';

(async () => {
    const solverAddress = 'SOLVER_ADDRESS';
    const workerAddress = `WORKER_ADDRESS`;
    const privateKey = 'WORKER_ADDRESS_PRIVATE_KEY'; 
    const projectId = `PROJECT_ID`;
    const requestId = `REQUEST_ID`;
  // Define deployment data with required fields
  const deploymentData: Deployment = {
    request_id: requestId,
    project_id: projectId,
    worker_address: workerAddress,
    chain_id: 80084,
    solver_address: solverAddress,
    status: 'generated_proof',
    proposal_hash: '',
    proposal: {
      chain_id: 80084,
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
    },
    deployment_details: {
      access_url: 'https://test.com',
      server_https_url: 'https://test.com',
      server_http_url: 'http://test.com',
      server_wss_url: 'wss://test.com',
      server_ws_url: 'ws://test.com',
      token: 'test',
    },
  };

  try {
    const response = await updateDeploymentStatus(deploymentData, privateKey);
    console.log('Deployment status updated successfully:', response);
  } catch (error) {
    console.error('Failed to update deployment status:', error);
  }
})();
