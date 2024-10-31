import type { Proposal } from './Proposal';
export interface Deployment {
    id?: number;
    requestId?: string;
    userAddress: string;
    workerName?: string;
    workerUuid?: string;
    proposalHash?: string;
    proposalId: number;
    deploymentDetails?: object;
    proposal?: Proposal;
    status?: DeploymentStatusEnum;
}
export declare const DeploymentStatusEnum: {
    readonly Init: "init";
    readonly PickUp: "pick_up";
    readonly Deploying: "deploying";
    readonly Deployed: "deployed";
    readonly GeneratedProof: "generated_proof";
};
export type DeploymentStatusEnum = typeof DeploymentStatusEnum[keyof typeof DeploymentStatusEnum];
export declare function instanceOfDeployment(value: object): value is Deployment;
export declare function DeploymentFromJSON(json: any): Deployment;
export declare function DeploymentFromJSONTyped(json: any, ignoreDiscriminator: boolean): Deployment;
export declare function DeploymentToJSON(json: any): Deployment;
export declare function DeploymentToJSONTyped(value?: Deployment | null, ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=Deployment.d.ts.map