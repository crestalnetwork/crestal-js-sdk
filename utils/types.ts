export interface DAProposal {
  id: number;
  project_id: string;
  chain_id: number;
  init_cost: number;
  maintenance_cost: number;
  fit: number; // Specific to DA
  rank: number; // Specific to DA
  accept_currencies: string;
  worker_address: string;
}

export interface PostProposal {
  project_id: string;
  request_id: string;
  target_performance: number;
  solver_address: string;
  da_proposals: string[]; // Array of Base64-encoded DA proposal strings
}


export interface Proposal {
  fit: number;
  rank: number;
  project_id: string;
  worker_address: string;
  type: string;
  da: DAProposal;
}
