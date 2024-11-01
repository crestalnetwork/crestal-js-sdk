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
 * Check if a given object implements the IndexingProposal interface.
 */
export function instanceOfIndexingProposal(value) {
    return true;
}
export function IndexingProposalFromJSON(json) {
    return IndexingProposalFromJSONTyped(json, false);
}
export function IndexingProposalFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'rank': json['rank'] == null ? undefined : json['rank'],
        'fit': json['fit'] == null ? undefined : json['fit'],
    };
}
export function IndexingProposalToJSON(json) {
    return IndexingProposalToJSONTyped(json, false);
}
export function IndexingProposalToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'rank': value['rank'],
        'fit': value['fit'],
    };
}
