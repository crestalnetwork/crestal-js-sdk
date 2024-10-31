import type { Solver } from './Solver';
import type { Worker } from './Worker';
export interface ProjectResource {
    id: string;
    proposalRequestId?: string;
    deploymentRequestId?: string;
    name: string;
    userAddress: string;
    targetPerformance?: number;
    payAmount?: number;
    status?: ProjectResourceStatusEnum;
    daName?: string;
    cost?: number;
    solverUuid?: string;
    proposalId?: number;
    workersUuid?: string;
    deploymentId?: number;
    pop?: string;
    recommendationParam?: object;
    proposedSolver?: Solver;
    deployedWorkers?: Array<Worker>;
}
export declare const ProjectResourceStatusEnum: {
    readonly Draft: "draft";
    readonly WaitingProposal: "waiting_proposal";
    readonly SettingProposal: "setting_proposal";
    readonly SettingPay: "setting_pay";
    readonly WaitingDeployment: "waiting_deployment";
    readonly Deploying: "deploying";
    readonly Live: "live";
    readonly Terminated: "terminated";
};
export type ProjectResourceStatusEnum = typeof ProjectResourceStatusEnum[keyof typeof ProjectResourceStatusEnum];
export declare function instanceOfProjectResource(value: object): value is ProjectResource;
export declare function ProjectResourceFromJSON(json: any): ProjectResource;
export declare function ProjectResourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProjectResource;
export declare function ProjectResourceToJSON(json: any): ProjectResource;
export declare function ProjectResourceToJSONTyped(value?: ProjectResource | null, ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=ProjectResource.d.ts.map