export interface CommonResponse {
    message?: string;
    status?: string;
}
export declare function instanceOfCommonResponse(value: object): value is CommonResponse;
export declare function CommonResponseFromJSON(json: any): CommonResponse;
export declare function CommonResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommonResponse;
export declare function CommonResponseToJSON(json: any): CommonResponse;
export declare function CommonResponseToJSONTyped(value?: CommonResponse | null, ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=CommonResponse.d.ts.map