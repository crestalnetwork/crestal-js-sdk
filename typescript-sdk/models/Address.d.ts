export interface Address {
    userAddress?: string;
}
export declare function instanceOfAddress(value: object): value is Address;
export declare function AddressFromJSON(json: any): Address;
export declare function AddressFromJSONTyped(json: any, ignoreDiscriminator: boolean): Address;
export declare function AddressToJSON(json: any): Address;
export declare function AddressToJSONTyped(value?: Address | null, ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=Address.d.ts.map