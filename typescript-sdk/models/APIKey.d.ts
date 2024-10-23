export interface APIKey {
    userAddress?: string;
    apiKey?: string;
}
export declare function instanceOfAPIKey(value: object): value is APIKey;
export declare function APIKeyFromJSON(json: any): APIKey;
export declare function APIKeyFromJSONTyped(json: any, ignoreDiscriminator: boolean): APIKey;
export declare function APIKeyToJSON(json: any): APIKey;
export declare function APIKeyToJSONTyped(value?: APIKey | null, ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=APIKey.d.ts.map