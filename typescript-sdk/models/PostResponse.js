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
import { DAInfoResourceFromJSON, DAInfoResourceToJSON, } from './DAInfoResource';
/**
 * Check if a given object implements the PostResponse interface.
 */
export function instanceOfPostResponse(value) {
    return true;
}
export function PostResponseFromJSON(json) {
    return PostResponseFromJSONTyped(json, false);
}
export function PostResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'daInfo': json['da_info'] == null ? undefined : DAInfoResourceFromJSON(json['da_info']),
        'message': json['message'] == null ? undefined : json['message'],
        'status': json['status'] == null ? undefined : json['status'],
    };
}
export function PostResponseToJSON(json) {
    return PostResponseToJSONTyped(json, false);
}
export function PostResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'da_info': DAInfoResourceToJSON(value['daInfo']),
        'message': value['message'],
        'status': value['status'],
    };
}
