export interface ProjectUpdate {
    id: string;
    proposalRequestId?: string;
    deploymentRequestId?: string;
    name: string;
    userAddress: string;
    targetPerformance?: number;
    payAmount?: number;
    status?: ProjectUpdateStatusEnum;
    daName?: string;
    cost?: number;
    solverUuid?: string;
    proposalId?: number;
    workersUuid?: string;
    deploymentId?: number;
    pop?: string;
    recommendationParam?: object;
}
export declare const ProjectUpdateStatusEnum: {
    readonly Draft: "draft";
    readonly WaitingProposal: "waiting_proposal";
    readonly SettingProposal: "setting_proposal";
    readonly SettingPay: "setting_pay";
    readonly WaitingDeployment: "waiting_deployment";
    readonly Deploying: "deploying";
    readonly Live: "live";
    readonly Terminated: "terminated";
};
export type ProjectUpdateStatusEnum = typeof ProjectUpdateStatusEnum[keyof typeof ProjectUpdateStatusEnum];
export declare function instanceOfProjectUpdate(value: object): value is ProjectUpdate;
export declare function ProjectUpdateFromJSON(json: any): ProjectUpdate;
export declare function ProjectUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProjectUpdate;
export declare function ProjectUpdateToJSON(json: any): ProjectUpdate;
export declare function ProjectUpdateToJSONTyped(value?: ProjectUpdate | null, ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=ProjectUpdate.d.ts.map