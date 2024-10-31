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
 * Check if a given object implements the DAProposal interface.
 */
export function instanceOfDAProposal(value) {
    return true;
}
export function DAProposalFromJSON(json) {
    return DAProposalFromJSONTyped(json, false);
}
export function DAProposalFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'initCost': json['init_cost'] == null ? undefined : json['init_cost'],
        'maintenanceCost': json['maintenance_cost'] == null ? undefined : json['maintenance_cost'],
        'payPeriod': json['pay_period'] == null ? undefined : json['pay_period'],
        'acceptCurrency': json['accept_currency'] == null ? undefined : json['accept_currency'],
        'cost': json['cost'] == null ? undefined : json['cost'],
        'fit': json['fit'] == null ? undefined : json['fit'],
        'throughput': json['throughput'] == null ? undefined : json['throughput'],
        'sla': json['sla'] == null ? undefined : json['sla'],
        'errorRate': json['error_rate'] == null ? undefined : json['error_rate'],
        'rank': json['rank'] == null ? undefined : json['rank'],
        'extraAttribute': json['extra_attribute'] == null ? undefined : json['extra_attribute'],
    };
}
export function DAProposalToJSON(json) {
    return DAProposalToJSONTyped(json, false);
}
export function DAProposalToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'init_cost': value['initCost'],
        'maintenance_cost': value['maintenanceCost'],
        'pay_period': value['payPeriod'],
        'accept_currency': value['acceptCurrency'],
        'cost': value['cost'],
        'fit': value['fit'],
        'throughput': value['throughput'],
        'sla': value['sla'],
        'error_rate': value['errorRate'],
        'rank': value['rank'],
        'extra_attribute': value['extraAttribute'],
    };
}
