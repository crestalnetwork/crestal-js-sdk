import type { SolversProposal } from './SolversProposal';
export interface SolversProposals {
    proposals?: Array<SolversProposal>;
    solverAddress?: string;
    solverReputation?: number;
    requestId?: string;
}
export declare function instanceOfSolversProposals(value: object): value is SolversProposals;
export declare function SolversProposalsFromJSON(json: any): SolversProposals;
export declare function SolversProposalsFromJSONTyped(json: any, ignoreDiscriminator: boolean): SolversProposals;
export declare function SolversProposalsToJSON(json: any): SolversProposals;
export declare function SolversProposalsToJSONTyped(value?: SolversProposals | null, ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=SolversProposals.d.ts.map