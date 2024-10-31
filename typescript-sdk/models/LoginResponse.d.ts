export interface LoginResponse {
    userAddress?: string;
    accessToken?: string;
    refreshToken?: string;
}
export declare function instanceOfLoginResponse(value: object): value is LoginResponse;
export declare function LoginResponseFromJSON(json: any): LoginResponse;
export declare function LoginResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): LoginResponse;
export declare function LoginResponseToJSON(json: any): LoginResponse;
export declare function LoginResponseToJSONTyped(value?: LoginResponse | null, ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=LoginResponse.d.ts.map