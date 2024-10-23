export interface WhiteList {
    address?: string;
    name?: string;
    networkType?: WhiteListNetworkTypeEnum;
    createdAt?: string;
}
export declare const WhiteListNetworkTypeEnum: {
    readonly Mainnet: "Mainnet";
    readonly Testnet: "Testnet";
};
export type WhiteListNetworkTypeEnum = typeof WhiteListNetworkTypeEnum[keyof typeof WhiteListNetworkTypeEnum];
export declare function instanceOfWhiteList(value: object): value is WhiteList;
export declare function WhiteListFromJSON(json: any): WhiteList;
export declare function WhiteListFromJSONTyped(json: any, ignoreDiscriminator: boolean): WhiteList;
export declare function WhiteListToJSON(json: any): WhiteList;
export declare function WhiteListToJSONTyped(value?: WhiteList | null, ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=WhiteList.d.ts.map