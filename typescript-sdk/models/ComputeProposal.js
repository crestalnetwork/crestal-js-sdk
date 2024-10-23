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
 * Check if a given object implements the ComputeProposal interface.
 */
export function instanceOfComputeProposal(value) {
    return true;
}
export function ComputeProposalFromJSON(json) {
    return ComputeProposalFromJSONTyped(json, false);
}
export function ComputeProposalFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'rank': json['rank'] == null ? undefined : json['rank'],
        'fit': json['fit'] == null ? undefined : json['fit'],
    };
}
export function ComputeProposalToJSON(json) {
    return ComputeProposalToJSONTyped(json, false);
}
export function ComputeProposalToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'rank': value['rank'],
        'fit': value['fit'],
    };
}