export interface Proposal {
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
export declare function instanceOfProposal(value: object): value is Proposal;
export declare function ProposalFromJSON(json: any): Proposal;
export declare function ProposalFromJSONTyped(json: any, ignoreDiscriminator: boolean): Proposal;
export declare function ProposalToJSON(json: any): Proposal;
export declare function ProposalToJSONTyped(value?: Proposal | null, ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=Proposal.d.ts.map