import type { Deployment } from './Deployment';
export interface Deployments {
    deployments?: Array<Deployment>;
    userAddress?: string;
}
export declare function instanceOfDeployments(value: object): value is Deployments;
export declare function DeploymentsFromJSON(json: any): Deployments;
export declare function DeploymentsFromJSONTyped(json: any, ignoreDiscriminator: boolean): Deployments;
export declare function DeploymentsToJSON(json: any): Deployments;
export declare function DeploymentsToJSONTyped(value?: Deployments | null, ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=Deployments.d.ts.map