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
import { SolversProposalFromJSON, SolversProposalToJSON, } from './SolversProposal';
/**
 * Check if a given object implements the SolversProposals interface.
 */
export function instanceOfSolversProposals(value) {
    return true;
}
export function SolversProposalsFromJSON(json) {
    return SolversProposalsFromJSONTyped(json, false);
}
export function SolversProposalsFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'proposals': json['proposals'] == null ? undefined : (json['proposals'].map(SolversProposalFromJSON)),
        'solverAddress': json['solver_address'] == null ? undefined : json['solver_address'],
        'solverReputation': json['solver_reputation'] == null ? undefined : json['solver_reputation'],
        'requestId': json['request_id'] == null ? undefined : json['request_id'],
    };
}
export function SolversProposalsToJSON(json) {
    return SolversProposalsToJSONTyped(json, false);
}
export function SolversProposalsToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'proposals': value['proposals'] == null ? undefined : (value['proposals'].map(SolversProposalToJSON)),
        'solver_address': value['solverAddress'],
        'solver_reputation': value['solverReputation'],
        'request_id': value['requestId'],
    };
}