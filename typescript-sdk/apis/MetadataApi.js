/* tslint:disable */
/* eslint-disable */
/**
 * Crestal dashboard API - /crestal - OpenAPI 3.0
 * This is a crestal-dashboard-backend server.
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import * as runtime from '../runtime';
import { MetadataMetricFromJSON, } from '../models/index';
/**
 *
 */
export class MetadataApi extends runtime.BaseAPI {
    /**
     * Retrieve an array of all metadata metrics
     * Get all metadata metrics
     */
    async getAllMetadataMetricsRaw(requestParameters, initOverrides) {
        const queryParameters = {};
        if (requestParameters['type'] != null) {
            queryParameters['type'] = requestParameters['type'];
        }
        const headerParameters = {};
        const response = await this.request({
            path: `/metadata/metrics`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(MetadataMetricFromJSON));
    }
    /**
     * Retrieve an array of all metadata metrics
     * Get all metadata metrics
     */
    async getAllMetadataMetrics(requestParameters = {}, initOverrides) {
        const response = await this.getAllMetadataMetricsRaw(requestParameters, initOverrides);
        return await response.value();
    }
}
/**
 * @export
 */
export const GetAllMetadataMetricsTypeEnum = {
    Da: 'da',
    Compute: 'compute',
    Storage: 'storage',
    Indexing: 'indexing'
};
