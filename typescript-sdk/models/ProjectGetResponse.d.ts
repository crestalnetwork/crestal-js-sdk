import type { Solver } from './Solver';
import type { Worker } from './Worker';
export interface ProjectGetResponse {
    proposedSolver?: Solver;
    deployedWorkers?: Array<Worker>;
}
export declare function instanceOfProjectGetResponse(value: object): value is ProjectGetResponse;
export declare function ProjectGetResponseFromJSON(json: any): ProjectGetResponse;
export declare function ProjectGetResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProjectGetResponse;
export declare function ProjectGetResponseToJSON(json: any): ProjectGetResponse;
export declare function ProjectGetResponseToJSONTyped(value?: ProjectGetResponse | null, ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=ProjectGetResponse.d.ts.map