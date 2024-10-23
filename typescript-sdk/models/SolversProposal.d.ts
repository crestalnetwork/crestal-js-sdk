import type { DAProposal } from './DAProposal';
import type { StorageProposal } from './StorageProposal';
import type { IndexingProposal } from './IndexingProposal';
import type { ComputeProposal } from './ComputeProposal';
export interface SolversProposal {
    requestId?: string;
    solverAddress?: string;
    solverReputation?: number;
    fit?: number;
    rank?: number;
    da?: DAProposal;
    indexing?: IndexingProposal;
    compute?: ComputeProposal;
    storage?: StorageProposal;
}
export declare function instanceOfSolversProposal(value: object): value is SolversProposal;
export declare function SolversProposalFromJSON(json: any): SolversProposal;
export declare function SolversProposalFromJSONTyped(json: any, ignoreDiscriminator: boolean): SolversProposal;
export declare function SolversProposalToJSON(json: any): SolversProposal;
export declare function SolversProposalToJSONTyped(value?: SolversProposal | null, ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=SolversProposal.d.ts.map