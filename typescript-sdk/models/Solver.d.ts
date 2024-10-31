export interface Solver {
    address?: string;
    uuid?: string;
    name?: string;
    reputation?: number;
    logoUrl?: string;
    totalStaked?: number;
}
export declare function instanceOfSolver(value: object): value is Solver;
export declare function SolverFromJSON(json: any): Solver;
export declare function SolverFromJSONTyped(json: any, ignoreDiscriminator: boolean): Solver;
export declare function SolverToJSON(json: any): Solver;
export declare function SolverToJSONTyped(value?: Solver | null, ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=Solver.d.ts.map