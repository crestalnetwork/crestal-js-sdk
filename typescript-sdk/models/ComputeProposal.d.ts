export interface ComputeProposal {
    rank?: number;
    fit?: number;
}
export declare function instanceOfComputeProposal(value: object): value is ComputeProposal;
export declare function ComputeProposalFromJSON(json: any): ComputeProposal;
export declare function ComputeProposalFromJSONTyped(json: any, ignoreDiscriminator: boolean): ComputeProposal;
export declare function ComputeProposalToJSON(json: any): ComputeProposal;
export declare function ComputeProposalToJSONTyped(value?: ComputeProposal | null, ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=ComputeProposal.d.ts.map