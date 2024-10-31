export interface IndexingProposal {
    rank?: number;
    fit?: number;
}
export declare function instanceOfIndexingProposal(value: object): value is IndexingProposal;
export declare function IndexingProposalFromJSON(json: any): IndexingProposal;
export declare function IndexingProposalFromJSONTyped(json: any, ignoreDiscriminator: boolean): IndexingProposal;
export declare function IndexingProposalToJSON(json: any): IndexingProposal;
export declare function IndexingProposalToJSONTyped(value?: IndexingProposal | null, ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=IndexingProposal.d.ts.map