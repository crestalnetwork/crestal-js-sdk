import { PostProposal, Proposal } from "utils/types";
import { generateProposalSIWE } from "../generateProposalSIWE";
import { signMessageWithPrivateKey } from "../signMessage";
import { submitProposal } from "../submitProposal";


async function main() {
  const solverAddress = 'SOLVER_ADDRESS';
  const workerAddress = `WORKER_ADDRESS`; 
  const privateKey = 'WORKER_ADDRESS_PRIVATE_KEY'; 
  const projectId = 'PROJECT_ID'; 
  const requestId = 'REQUEST_ID'; 
  const chainId = 80084; // Berachain Bartio testnet chain id
  const postSolverProposal = {
    project_id: projectId,
    request_id: requestId,
    //Dummy values for these parameters
    target_performance: 10,
    solver_address: solverAddress,
    proposals: [
      {
        fit: 0.9,
        rank: 1,
        worker_address: workerAddress,
        type: "private",
        da: {
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
        }
      }
    ]
  };
  
  // Generate the SIWE message and signature
  try {
    const siweMessage = await generateProposalSIWE(postSolverProposal, solverAddress, chainId);
    
    if (siweMessage) {
      const signature = await signMessageWithPrivateKey(siweMessage, privateKey);
      

      // Submit the proposal using the generated SIWE message and signature
      const response = await submitProposal(solverAddress, siweMessage, signature);
      console.log("response:", response);


    } else {
      console.log('Failed to generate SIWE message.');
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

main();

