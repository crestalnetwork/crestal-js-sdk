import type { DAHistoryData } from './DAHistoryData';
export interface GraphDAInfoResponse {
    data?: Array<DAHistoryData>;
    networkType?: string;
}
export declare function instanceOfGraphDAInfoResponse(value: object): value is GraphDAInfoResponse;
export declare function GraphDAInfoResponseFromJSON(json: any): GraphDAInfoResponse;
export declare function GraphDAInfoResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GraphDAInfoResponse;
export declare function GraphDAInfoResponseToJSON(json: any): GraphDAInfoResponse;
export declare function GraphDAInfoResponseToJSONTyped(value?: GraphDAInfoResponse | null, ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=GraphDAInfoResponse.d.ts.map