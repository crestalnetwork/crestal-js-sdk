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

export const supportedChainIdsArray = [80002, 80084, 97] as const;

export type SupportedChainIds = typeof supportedChainIdsArray[number];







export type DeployStatus =
  | 'init'
  | 'pick_up'
  | 'deploying'
  | 'deployed'
  | 'generating_proof'
  | 'generated_proof';

  export type DeploymentDetails = {
    access_url: string;
    server_https_url: string;
    server_http_url: string;
    server_ws_url: string;
    server_wss_url: string;
    server_web_socket_url?: string;
    server_grpc_endpoint?: string;
    server_rpc_endpoint?: string;
    token: string;
  };
  

export interface Deployment {
  request_id: string; // Required field, unique ID for the deployment request
  chain_id: number;
  project_id?: string; // Optional field, project ID from the Crestal website
  worker_name?: string; // Optional field, name of the worker
  worker_address: string; // Required field, worker's Ethereum address in hex format
  solver_address: string; // Required field, solver's Ethereum address in hex format
  status: DeployStatus; // Required field, current status of the deployment
  proposal_hash?: string; // Optional field, hash of the proposal
  proposal?: object; // Optional field, serialized JSON string of the proposal
  deployment_details?: DeploymentDetails ; // Optional field, serialized JSON string of the deployment details
}


export interface DeploymentResponse {
  id: number;
  request_id: string;
  user_address: string;
  worker_name: string;
  worker_uuid: string;
  proposal_hash: string;
  proposal_id: number;
  deployment_details: DeploymentDetails; 
  proposal: Proposal;
  status: "init" | "pick_up" | "deploying" | "deployed" | "generated_proof";
  updated_at: string; // ISO date string
  created_at: string; // ISO date string
}

export type APIInfo = {
  endpoint: string;
  method: string;
  request?: string;
  response?: string;
};

export type ServiceInfo = {
  api_infos: APIInfo[];
};

export type MachineInfo = {
  mac_address: string;
  cloud_provider: string;
  unique_id: string;
};

export type ProofOfDeploymentContract = {
  request_id: string;
  proposal_base64: string;
  expiration_date: number;
  worker_address: string;
  server_https_url?: string;
  server_http_url?: string;
  server_web_socket_url?: string;
  server_rpc_endpoint?: string;
  server_grpc_endpoint?: string;
  deployment_pick_up_time: number;
  deployment_deployed_time: number;
  description?: string;
  machine_info?: MachineInfo;
  service_info?: ServiceInfo;
};
