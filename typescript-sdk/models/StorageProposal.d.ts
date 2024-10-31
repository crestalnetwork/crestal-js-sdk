export interface StorageProposal {
    rank?: number;
    fit?: number;
}
export declare function instanceOfStorageProposal(value: object): value is StorageProposal;
export declare function StorageProposalFromJSON(json: any): StorageProposal;
export declare function StorageProposalFromJSONTyped(json: any, ignoreDiscriminator: boolean): StorageProposal;
export declare function StorageProposalToJSON(json: any): StorageProposal;
export declare function StorageProposalToJSONTyped(value?: StorageProposal | null, ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=StorageProposal.d.ts.map