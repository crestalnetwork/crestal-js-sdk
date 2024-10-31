export interface LoginRequest {
    userAddress: string;
    signature: string;
    siweMsg: string;
}
export declare function instanceOfLoginRequest(value: object): value is LoginRequest;
export declare function LoginRequestFromJSON(json: any): LoginRequest;
export declare function LoginRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): LoginRequest;
export declare function LoginRequestToJSON(json: any): LoginRequest;
export declare function LoginRequestToJSONTyped(value?: LoginRequest | null, ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=LoginRequest.d.ts.map