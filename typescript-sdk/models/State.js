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
 * Check if a given object implements the State interface.
 */
export function instanceOfState(value) {
    return true;
}
export function StateFromJSON(json) {
    return StateFromJSONTyped(json, false);
}
export function StateFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'dataAvailability': json['data_availability'] == null ? undefined : json['data_availability'],
        'exitWindows': json['exit_windows'] == null ? undefined : json['exit_windows'],
        'proposeFailure': json['propose_failure'] == null ? undefined : json['propose_failure'],
        'stateValidation': json['state_validation'] == null ? undefined : json['state_validation'],
    };
}
export function StateToJSON(json) {
    return StateToJSONTyped(json, false);
}
export function StateToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'data_availability': value['dataAvailability'],
        'exit_windows': value['exitWindows'],
        'propose_failure': value['proposeFailure'],
        'state_validation': value['stateValidation'],
    };
}
