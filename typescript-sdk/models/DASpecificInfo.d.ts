import type { State } from './State';
export interface DASpecificInfo {
    state?: State;
    geoCoverage?: number;
    grantsAvailable?: boolean;
    numberOfProjects?: number;
    nodeInfo?: object;
}
export declare function instanceOfDASpecificInfo(value: object): value is DASpecificInfo;
export declare function DASpecificInfoFromJSON(json: any): DASpecificInfo;
export declare function DASpecificInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): DASpecificInfo;
export declare function DASpecificInfoToJSON(json: any): DASpecificInfo;
export declare function DASpecificInfoToJSONTyped(value?: DASpecificInfo | null, ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=DASpecificInfo.d.ts.map