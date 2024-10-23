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
 * Check if a given object implements the LoginResponse interface.
 */
export function instanceOfLoginResponse(value) {
    return true;
}
export function LoginResponseFromJSON(json) {
    return LoginResponseFromJSONTyped(json, false);
}
export function LoginResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'userAddress': json['user_address'] == null ? undefined : json['user_address'],
        'accessToken': json['access_token'] == null ? undefined : json['access_token'],
        'refreshToken': json['refresh_token'] == null ? undefined : json['refresh_token'],
    };
}
export function LoginResponseToJSON(json) {
    return LoginResponseToJSONTyped(json, false);
}
export function LoginResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'user_address': value['userAddress'],
        'access_token': value['accessToken'],
        'refresh_token': value['refreshToken'],
    };
}
