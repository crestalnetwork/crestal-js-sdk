export interface Token {
    refreshToken?: string;
    accessToken?: string;
}
export declare function instanceOfToken(value: object): value is Token;
export declare function TokenFromJSON(json: any): Token;
export declare function TokenFromJSONTyped(json: any, ignoreDiscriminator: boolean): Token;
export declare function TokenToJSON(json: any): Token;
export declare function TokenToJSONTyped(value?: Token | null, ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=Token.d.ts.map