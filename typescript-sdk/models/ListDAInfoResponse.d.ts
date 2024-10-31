import type { DAInfo } from './DAInfo';
export interface ListDAInfoResponse {
    daInfos?: Array<DAInfo>;
    networkType?: string;
}
export declare function instanceOfListDAInfoResponse(value: object): value is ListDAInfoResponse;
export declare function ListDAInfoResponseFromJSON(json: any): ListDAInfoResponse;
export declare function ListDAInfoResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListDAInfoResponse;
export declare function ListDAInfoResponseToJSON(json: any): ListDAInfoResponse;
export declare function ListDAInfoResponseToJSONTyped(value?: ListDAInfoResponse | null, ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=ListDAInfoResponse.d.ts.map