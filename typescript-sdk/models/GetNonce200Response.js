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
/**
 * Check if a given object implements the GetNonce200Response interface.
 */
export function instanceOfGetNonce200Response(value) {
    return true;
}
export function GetNonce200ResponseFromJSON(json) {
    return GetNonce200ResponseFromJSONTyped(json, false);
}
export function GetNonce200ResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'nonce': json['nonce'] == null ? undefined : json['nonce'],
        'userAddress': json['user_address'] == null ? undefined : json['user_address'],
    };
}
export function GetNonce200ResponseToJSON(json) {
    return GetNonce200ResponseToJSONTyped(json, false);
}
export function GetNonce200ResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'nonce': value['nonce'],
        'user_address': value['userAddress'],
    };
}
