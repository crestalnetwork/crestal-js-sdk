import type { SolverProposal } from './SolverProposal';
export interface SolverProposals {
    solverProposals?: Array<SolverProposal>;
}
export declare function instanceOfSolverProposals(value: object): value is SolverProposals;
export declare function SolverProposalsFromJSON(json: any): SolverProposals;
export declare function SolverProposalsFromJSONTyped(json: any, ignoreDiscriminator: boolean): SolverProposals;
export declare function SolverProposalsToJSON(json: any): SolverProposals;
export declare function SolverProposalsToJSONTyped(value?: SolverProposals | null, ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=SolverProposals.d.ts.map