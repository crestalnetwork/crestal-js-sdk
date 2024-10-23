export interface MetadataMetric {
    id?: number;
    category?: MetadataMetricCategoryEnum;
    showInChart?: boolean;
    orderInChart?: number;
    showInTable?: boolean;
    orderInTable?: number;
    fieldName?: string;
    displayName?: string;
    description?: string;
    unitInName?: string;
    unitInValue?: string;
    valueType?: MetadataMetricValueTypeEnum;
    valueFormat?: string;
    canSort?: boolean;
}
export declare const MetadataMetricCategoryEnum: {
    readonly PublicInfo: "public_info";
    readonly Unverified: "unverified";
    readonly Verified: "verified";
};
export type MetadataMetricCategoryEnum = typeof MetadataMetricCategoryEnum[keyof typeof MetadataMetricCategoryEnum];
export declare const MetadataMetricValueTypeEnum: {
    readonly String: "string";
    readonly Int: "int";
    readonly Float: "float";
    readonly Bool: "bool";
};
export type MetadataMetricValueTypeEnum = typeof MetadataMetricValueTypeEnum[keyof typeof MetadataMetricValueTypeEnum];
export declare function instanceOfMetadataMetric(value: object): value is MetadataMetric;
export declare function MetadataMetricFromJSON(json: any): MetadataMetric;
export declare function MetadataMetricFromJSONTyped(json: any, ignoreDiscriminator: boolean): MetadataMetric;
export declare function MetadataMetricToJSON(json: any): MetadataMetric;
export declare function MetadataMetricToJSONTyped(value?: MetadataMetric | null, ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=MetadataMetric.d.ts.map