export interface DAProposal {
    initCost?: number;
    maintenanceCost?: number;
    payPeriod?: number;
    acceptCurrency?: string;
    cost?: number;
    fit?: number;
    throughput?: number;
    sla?: number;
    errorRate?: number;
    rank?: number;
    extraAttribute?: object;
}
export declare function instanceOfDAProposal(value: object): value is DAProposal;
export declare function DAProposalFromJSON(json: any): DAProposal;
export declare function DAProposalFromJSONTyped(json: any, ignoreDiscriminator: boolean): DAProposal;
export declare function DAProposalToJSON(json: any): DAProposal;
export declare function DAProposalToJSONTyped(value?: DAProposal | null, ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=DAProposal.d.ts.map