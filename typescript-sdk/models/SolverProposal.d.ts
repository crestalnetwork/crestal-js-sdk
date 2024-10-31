import type { Proposal } from './Proposal';
export interface SolverProposal {
    proposals?: Array<Proposal>;
    solverUuid?: string;
    solverReputation?: number;
}
export declare function instanceOfSolverProposal(value: object): value is SolverProposal;
export declare function SolverProposalFromJSON(json: any): SolverProposal;
export declare function SolverProposalFromJSONTyped(json: any, ignoreDiscriminator: boolean): SolverProposal;
export declare function SolverProposalToJSON(json: any): SolverProposal;
export declare function SolverProposalToJSONTyped(value?: SolverProposal | null, ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=SolverProposal.d.ts.map