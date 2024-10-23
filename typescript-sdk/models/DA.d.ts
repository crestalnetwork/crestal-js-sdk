export interface DA {
    daName?: string;
    networkType?: DANetworkTypeEnum;
    network?: string;
    gasToken?: string;
    explorer?: string;
    launchDate?: string;
    consensusAlgorithm?: string;
    dataAvailabilitySampling?: boolean;
}
export declare const DANetworkTypeEnum: {
    readonly Mainnet: "Mainnet";
    readonly Testnet: "Testnet";
};
export type DANetworkTypeEnum = typeof DANetworkTypeEnum[keyof typeof DANetworkTypeEnum];
export declare function instanceOfDA(value: object): value is DA;
export declare function DAFromJSON(json: any): DA;
export declare function DAFromJSONTyped(json: any, ignoreDiscriminator: boolean): DA;
export declare function DAToJSON(json: any): DA;
export declare function DAToJSONTyped(value?: DA | null, ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=DA.d.ts.map