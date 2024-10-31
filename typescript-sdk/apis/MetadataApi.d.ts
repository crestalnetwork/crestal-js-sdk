import * as runtime from '../runtime';
import type { MetadataMetric } from '../models/index';
export interface GetAllMetadataMetricsRequest {
    type?: GetAllMetadataMetricsTypeEnum;
}
export declare class MetadataApi extends runtime.BaseAPI {
    getAllMetadataMetricsRaw(requestParameters: GetAllMetadataMetricsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<MetadataMetric>>>;
    getAllMetadataMetrics(requestParameters?: GetAllMetadataMetricsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<MetadataMetric>>;
}
export declare const GetAllMetadataMetricsTypeEnum: {
    readonly Da: "da";
    readonly Compute: "compute";
    readonly Storage: "storage";
    readonly Indexing: "indexing";
};
export type GetAllMetadataMetricsTypeEnum = typeof GetAllMetadataMetricsTypeEnum[keyof typeof GetAllMetadataMetricsTypeEnum];
//# sourceMappingURL=MetadataApi.d.ts.map