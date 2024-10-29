export interface DAProposal {
  // DAProposal-specific fields
  id?: number; // Example: 1
  da_name?: string; // Example: 'celestia'
  chain_id?: number;
  project_id?: string;
  error_rate?: number; // Example: 0.02
  init_cost?: number;
  maintenance_cost?: number;
  accept_currencies?: string;
  extra_attribute?: Record<string, any>; 
  hash?: string;
  fit?: number;
  rank?: number;
  worker_address?: string;
  type?: string; // Ex: 'private' or 'public', if public no need to add worker address
  created_at?: string; // ISO date format as a string

  // DAInfo fields embedded directly within DAProposal
  network_type: string;
  gas_token?: string;
  avg_cost?: number;
  max_throughput?: number;
  latency?: number;
  finality_time?: number;
  geo_coverage?: number;
  grants_available?: boolean;
  number_of_projects?: number;
  uptime?: number;
  block_time?: number;
  total_transactions?: number;
  total_blocks?: number;
  total_fee?: number;
  total_fee_usd?: number;
  total_staked?: number;
  total_staked_usd?: number;
  number_of_nodes?: number;
  throughput?: number;
  node_reliability?: number;
  cost_per_transaction?: number;
  gas_per_transaction?: number;
  cost_per_block?: number;
  gas_per_block?: number;
  cost_per_mb?: number;
  gas_per_mb?: number;
  total_value_locked?: number;
  send_blob_latency?: number;
  total_data_transacted?: number;
  sender_name?: string;
  sender_address?: string;
  node_info?: any;
}

export interface PostProposal {
  project_id?: string;
  request_id?: string;
  target_performance?: number;
  solver_address?: string;
  proposals?: Proposal[];
}

export interface Proposal {
  fit?: number;
  rank?: number;
  project_id?: string;
  worker_address?: string;
  type?: string; // Ex: 'private' or 'public', if public no need to add worker address
  da?: DAProposal;
}

export type DAName = 
  | "Avail"
  | "Celestia"
  | "EigenDA"
  | "NuffleDA"
  | "VictionDA"
  | "0g"
  | "Ethereum";

export type NetworkType = "Mainnet" | "Testnet";
