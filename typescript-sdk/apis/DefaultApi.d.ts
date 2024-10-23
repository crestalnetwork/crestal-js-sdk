import * as runtime from '../runtime';
import type { APIKey, Chat, ChatRequest, CommonResponse, DA, DAInfoResource, Deployment, Deployments, GetNonce200Response, GraphDAInfoResponse, ListDAInfoResponse, LoginRequest, LoginResponse, PostResponse, ProjectResource, ProjectUpdate, Projects, Proposal, Quests, Referral, Score, Solver, SolverProposals, SolversProposals, SolversProposalsResponse, Token, User, UserPostQuests, UserQuest, WeeklyQuests, WhiteList, Worker } from '../models/index';
export interface APIKeyRequest {
    userAddress: string;
}
export interface AcceptSolverProposalsRequest {
    loginRequest: LoginRequest;
}
export interface ClaimReferCodeRequest {
    code: string;
    isClaimed?: boolean;
}
export interface CreateAPIKeyRequest {
    loginRequest: LoginRequest;
}
export interface CreateDARequest {
    dA: DA;
}
export interface CreateQuestsRequest {
    quests: Quests;
}
export interface CreateSolverRequest {
    solver: Solver;
}
export interface CreateWorkerDeploymentRequest {
    loginRequest: LoginRequest;
}
export interface DeploymentPostRequest {
    deployment: Deployment;
}
export interface GetChatRequest {
    projectId: string;
}
export interface GetDAsRequest {
    name: GetDAsNameEnum;
    networkType?: GetDAsNetworkTypeEnum;
}
export interface GetDAsTemporaryRequest {
    name: GetDAsTemporaryNameEnum;
    networkType?: GetDAsTemporaryNetworkTypeEnum;
}
export interface GetDeploymentByIdRequest {
    deploymentId: number;
}
export interface GetDeploymentsRequest {
    userAddress?: string;
    proposalId?: number;
    proposalHash?: string;
}
export interface GetNonceRequest {
    userAddress: string;
}
export interface GetProjectStatusRequest {
    userAddress?: string;
    proposalId?: number;
    deploymentId?: number;
}
export interface GetProjectStatusByIdRequest {
    projectId: string;
}
export interface GetProposalByIDRequest {
    proposalId: number;
}
export interface GetRecommendProposalsRequest {
    sla: number;
    cost: number;
    throughput: number;
    errorRate: number;
}
export interface GetScoresRequest {
    topK?: number;
}
export interface GetSolverByUUIDRequest {
    solverUuid: string;
}
export interface GetSolversProposalsRequest {
    requestId: string;
}
export interface GetUserInfoRequest {
    userAddress: string;
}
export interface GetWorkerByUUIDRequest {
    workerUuid: string;
}
export interface GetWorkerDeploymentsRequest {
    requestId: string;
}
export interface GraphDAInfoEndPointRequest {
    fromTime: number;
    toTime: number;
    networkType: GraphDAInfoEndPointNetworkTypeEnum;
    daList: Array<GraphDAInfoEndPointDaListEnum>;
}
export interface ImportUserQuestsRequest {
    userPostQuests: UserPostQuests;
}
export interface InteractRequest {
    userAddress?: string;
    type?: InteractTypeEnum;
}
export interface ListDAInfoRequest {
    name: ListDAInfoNameEnum;
    networkType: ListDAInfoNetworkTypeEnum;
}
export interface LoginOperationRequest {
    loginRequest: LoginRequest;
}
export interface ProjectCancelledRequest {
    projectId: string;
}
export interface ProjectPatchRequest {
    projectId: string;
    projectUpdate: ProjectUpdate;
}
export interface ProjectPostRequest {
    projectUpdate: ProjectUpdate;
}
export interface ProjectStopRequest {
    projectId: string;
}
export interface RefreshTokenRequest {
    userAddress: string;
}
export interface SendChatRequest {
    chatRequest: ChatRequest;
}
export interface SetDAInfoRequest {
    data: DAInfoResource;
}
export interface SetNodeDAInfoRequest {
    loginRequest: LoginRequest;
}
export interface SetProposalRequest {
    proposal: Proposal;
}
export interface SetWhiteListRequest {
    whiteList: WhiteList;
}
export interface UpdateQuestsRequest {
    questId: number;
    quests: Quests;
}
export interface UpdateWorkerDeploymentRequest {
    loginRequest: LoginRequest;
}
export declare class DefaultApi extends runtime.BaseAPI {
    aPIKeyRaw(requestParameters: APIKeyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<APIKey>>;
    aPIKey(requestParameters: APIKeyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<APIKey>;
    acceptSolverProposalsRaw(requestParameters: AcceptSolverProposalsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SolversProposals>>;
    acceptSolverProposals(requestParameters: AcceptSolverProposalsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SolversProposals>;
    claimReferCodeRaw(requestParameters: ClaimReferCodeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CommonResponse>>;
    claimReferCode(requestParameters: ClaimReferCodeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CommonResponse>;
    createAPIKeyRaw(requestParameters: CreateAPIKeyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<APIKey>>;
    createAPIKey(requestParameters: CreateAPIKeyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<APIKey>;
    createDARaw(requestParameters: CreateDARequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DA>>;
    createDA(requestParameters: CreateDARequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DA>;
    createQuestsRaw(requestParameters: CreateQuestsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Quests>>;
    createQuests(requestParameters: CreateQuestsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Quests>;
    createSolverRaw(requestParameters: CreateSolverRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Solver>>;
    createSolver(requestParameters: CreateSolverRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Solver>;
    createWorkerDeploymentRaw(requestParameters: CreateWorkerDeploymentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Deployment>>;
    createWorkerDeployment(requestParameters: CreateWorkerDeploymentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Deployment>;
    deploymentPostRaw(requestParameters: DeploymentPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Deployment>>;
    deploymentPost(requestParameters: DeploymentPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Deployment>;
    getChatRaw(requestParameters: GetChatRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Chat>>>;
    getChat(requestParameters: GetChatRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Chat>>;
    getDAsRaw(requestParameters: GetDAsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DA>>;
    getDAs(requestParameters: GetDAsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DA>;
    getDAsTemporaryRaw(requestParameters: GetDAsTemporaryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DA>>;
    getDAsTemporary(requestParameters: GetDAsTemporaryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DA>;
    getDeploymentByIdRaw(requestParameters: GetDeploymentByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Deployment>>;
    getDeploymentById(requestParameters: GetDeploymentByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Deployment>;
    getDeploymentsRaw(requestParameters: GetDeploymentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Deployments>>;
    getDeployments(requestParameters?: GetDeploymentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Deployments>;
    getNonceRaw(requestParameters: GetNonceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetNonce200Response>>;
    getNonce(requestParameters: GetNonceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetNonce200Response>;
    getProjectStatusRaw(requestParameters: GetProjectStatusRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Projects>>;
    getProjectStatus(requestParameters?: GetProjectStatusRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Projects>;
    getProjectStatusByIdRaw(requestParameters: GetProjectStatusByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProjectResource>>;
    getProjectStatusById(requestParameters: GetProjectStatusByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProjectResource>;
    getProposalByIDRaw(requestParameters: GetProposalByIDRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Proposal>>;
    getProposalByID(requestParameters: GetProposalByIDRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Proposal>;
    getQuestsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Quests>>>;
    getQuests(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Quests>>;
    getRecommendProposalsRaw(requestParameters: GetRecommendProposalsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SolverProposals>>;
    getRecommendProposals(requestParameters: GetRecommendProposalsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SolverProposals>;
    getScoresRaw(requestParameters: GetScoresRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Score>>>;
    getScores(requestParameters?: GetScoresRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Score>>;
    getSolverByUUIDRaw(requestParameters: GetSolverByUUIDRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Solver>>;
    getSolverByUUID(requestParameters: GetSolverByUUIDRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Solver>;
    getSolversProposalsRaw(requestParameters: GetSolversProposalsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SolversProposalsResponse>>;
    getSolversProposals(requestParameters: GetSolversProposalsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SolversProposalsResponse>;
    getUserInfoRaw(requestParameters: GetUserInfoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<User>>;
    getUserInfo(requestParameters: GetUserInfoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<User>;
    getUserQuestsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<UserQuest>>>;
    getUserQuests(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<UserQuest>>;
    getUserReferralRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Referral>>>;
    getUserReferral(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Referral>>;
    getWeeklyQuestsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<WeeklyQuests>>;
    getWeeklyQuests(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<WeeklyQuests>;
    getWhiteListsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<WhiteList>>>;
    getWhiteLists(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<WhiteList>>;
    getWorkerByUUIDRaw(requestParameters: GetWorkerByUUIDRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Worker>>;
    getWorkerByUUID(requestParameters: GetWorkerByUUIDRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Worker>;
    getWorkerDeploymentsRaw(requestParameters: GetWorkerDeploymentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Deployment>>;
    getWorkerDeployments(requestParameters: GetWorkerDeploymentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Deployment>;
    getWorkersRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Worker>>>;
    getWorkers(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Worker>>;
    graphDAInfoEndPointRaw(requestParameters: GraphDAInfoEndPointRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GraphDAInfoResponse>>;
    graphDAInfoEndPoint(requestParameters: GraphDAInfoEndPointRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GraphDAInfoResponse>;
    healthCheckGetRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    healthCheckGet(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    importUserQuestsRaw(requestParameters: ImportUserQuestsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CommonResponse>>;
    importUserQuests(requestParameters: ImportUserQuestsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CommonResponse>;
    interactRaw(requestParameters: InteractRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    interact(requestParameters?: InteractRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    listDAInfoRaw(requestParameters: ListDAInfoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ListDAInfoResponse>>;
    listDAInfo(requestParameters: ListDAInfoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ListDAInfoResponse>;
    loginRaw(requestParameters: LoginOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LoginResponse>>;
    login(requestParameters: LoginOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LoginResponse>;
    projectCancelledRaw(requestParameters: ProjectCancelledRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProjectResource>>;
    projectCancelled(requestParameters: ProjectCancelledRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProjectResource>;
    projectPatchRaw(requestParameters: ProjectPatchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProjectResource>>;
    projectPatch(requestParameters: ProjectPatchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProjectResource>;
    projectPostRaw(requestParameters: ProjectPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProjectResource>>;
    projectPost(requestParameters: ProjectPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProjectResource>;
    projectStopRaw(requestParameters: ProjectStopRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProjectResource>>;
    projectStop(requestParameters: ProjectStopRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProjectResource>;
    refreshTokenRaw(requestParameters: RefreshTokenRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Token>>;
    refreshToken(requestParameters: RefreshTokenRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Token>;
    sendChatRaw(requestParameters: SendChatRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Chat>>;
    sendChat(requestParameters: SendChatRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Chat>;
    setDAInfoRaw(requestParameters: SetDAInfoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PostResponse>>;
    setDAInfo(requestParameters: SetDAInfoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PostResponse>;
    setNodeDAInfoRaw(requestParameters: SetNodeDAInfoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PostResponse>>;
    setNodeDAInfo(requestParameters: SetNodeDAInfoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PostResponse>;
    setProposalRaw(requestParameters: SetProposalRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Proposal>>;
    setProposal(requestParameters: SetProposalRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Proposal>;
    setWhiteListRaw(requestParameters: SetWhiteListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<WhiteList>>;
    setWhiteList(requestParameters: SetWhiteListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<WhiteList>;
    updateQuestsRaw(requestParameters: UpdateQuestsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Quests>>;
    updateQuests(requestParameters: UpdateQuestsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Quests>;
    updateWorkerDeploymentRaw(requestParameters: UpdateWorkerDeploymentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Deployment>>;
    updateWorkerDeployment(requestParameters: UpdateWorkerDeploymentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Deployment>;
}
export declare const GetDAsNameEnum: {
    readonly All: "all";
    readonly EigenDa: "EigenDA";
    readonly NearDa: "NearDA";
    readonly Celestia: "Celestia";
    readonly Avail: "Avail";
    readonly Ethereum: "Ethereum";
    readonly _0g: "0g";
};
export type GetDAsNameEnum = typeof GetDAsNameEnum[keyof typeof GetDAsNameEnum];
export declare const GetDAsNetworkTypeEnum: {
    readonly Mainnet: "Mainnet";
    readonly Testnet: "Testnet";
};
export type GetDAsNetworkTypeEnum = typeof GetDAsNetworkTypeEnum[keyof typeof GetDAsNetworkTypeEnum];
export declare const GetDAsTemporaryNameEnum: {
    readonly All: "all";
    readonly EigenDa: "EigenDA";
    readonly NearDa: "NearDA";
    readonly Celestia: "Celestia";
    readonly Avail: "Avail";
    readonly Ethereum: "Ethereum";
    readonly _0g: "0g";
};
export type GetDAsTemporaryNameEnum = typeof GetDAsTemporaryNameEnum[keyof typeof GetDAsTemporaryNameEnum];
export declare const GetDAsTemporaryNetworkTypeEnum: {
    readonly Mainnet: "Mainnet";
    readonly Testnet: "Testnet";
};
export type GetDAsTemporaryNetworkTypeEnum = typeof GetDAsTemporaryNetworkTypeEnum[keyof typeof GetDAsTemporaryNetworkTypeEnum];
export declare const GraphDAInfoEndPointNetworkTypeEnum: {
    readonly Mainnet: "Mainnet";
    readonly Testnet: "Testnet";
};
export type GraphDAInfoEndPointNetworkTypeEnum = typeof GraphDAInfoEndPointNetworkTypeEnum[keyof typeof GraphDAInfoEndPointNetworkTypeEnum];
export declare const GraphDAInfoEndPointDaListEnum: {
    readonly EigenDa: "EigenDA";
    readonly NearDa: "NearDA";
    readonly Celestia: "Celestia";
    readonly Avail: "Avail";
    readonly Ethereum: "Ethereum";
    readonly _0g: "0g";
    readonly All: "all";
};
export type GraphDAInfoEndPointDaListEnum = typeof GraphDAInfoEndPointDaListEnum[keyof typeof GraphDAInfoEndPointDaListEnum];
export declare const InteractTypeEnum: {
    readonly InteractWithDashboard: "interact_with_dashboard";
    readonly UseDeployedBlueprintProposal: "use_deployed_blueprint_proposal";
};
export type InteractTypeEnum = typeof InteractTypeEnum[keyof typeof InteractTypeEnum];
export declare const ListDAInfoNameEnum: {
    readonly All: "all";
    readonly EigenDa: "EigenDA";
    readonly NearDa: "NearDA";
    readonly Celestia: "Celestia";
    readonly Avail: "Avail";
    readonly Ethereum: "Ethereum";
    readonly _0g: "0g";
};
export type ListDAInfoNameEnum = typeof ListDAInfoNameEnum[keyof typeof ListDAInfoNameEnum];
export declare const ListDAInfoNetworkTypeEnum: {
    readonly Mainnet: "Mainnet";
    readonly Testnet: "Testnet";
};
export type ListDAInfoNetworkTypeEnum = typeof ListDAInfoNetworkTypeEnum[keyof typeof ListDAInfoNetworkTypeEnum];
//# sourceMappingURL=DefaultApi.d.ts.map