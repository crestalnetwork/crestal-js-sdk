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
import { HistoryDataFromJSON, HistoryDataToJSON, } from './HistoryData';
/**
 * Check if a given object implements the DAHistoryData interface.
 */
export function instanceOfDAHistoryData(value) {
    return true;
}
export function DAHistoryDataFromJSON(json) {
    return DAHistoryDataFromJSONTyped(json, false);
}
export function DAHistoryDataFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'daName': json['da_name'] == null ? undefined : json['da_name'],
        'historyData': json['history_data'] == null ? undefined : (json['history_data'].map(HistoryDataFromJSON)),
    };
}
export function DAHistoryDataToJSON(json) {
    return DAHistoryDataToJSONTyped(json, false);
}
export function DAHistoryDataToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'da_name': value['daName'],
        'history_data': value['historyData'] == null ? undefined : (value['historyData'].map(HistoryDataToJSON)),
    };
}
