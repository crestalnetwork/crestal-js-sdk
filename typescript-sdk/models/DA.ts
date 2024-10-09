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

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface DA
 */
export interface DA {
    /**
     * DA name
     * @type {string}
     * @memberof DA
     */
    daName?: string;
    /**
     * network type
     * @type {string}
     * @memberof DA
     */
    networkType?: DANetworkTypeEnum;
    /**
     * network name
     * @type {string}
     * @memberof DA
     */
    network?: string;
    /**
     * gas token symbol
     * @type {string}
     * @memberof DA
     */
    gasToken?: string;
    /**
     * explorer url
     * @type {string}
     * @memberof DA
     */
    explorer?: string;
    /**
     * launch date in format xxxx-xx-xx
     * @type {string}
     * @memberof DA
     */
    launchDate?: string;
    /**
     * consensus algorithm
     * @type {string}
     * @memberof DA
     */
    consensusAlgorithm?: string;
    /**
     * 
     * @type {boolean}
     * @memberof DA
     */
    dataAvailabilitySampling?: boolean;
}


/**
 * @export
 */
export const DANetworkTypeEnum = {
    Mainnet: 'Mainnet',
    Testnet: 'Testnet'
} as const;
export type DANetworkTypeEnum = typeof DANetworkTypeEnum[keyof typeof DANetworkTypeEnum];


/**
 * Check if a given object implements the DA interface.
 */
export function instanceOfDA(value: object): value is DA {
    return true;
}

export function DAFromJSON(json: any): DA {
    return DAFromJSONTyped(json, false);
}

export function DAFromJSONTyped(json: any, ignoreDiscriminator: boolean): DA {
    if (json == null) {
        return json;
    }
    return {
        
        'daName': json['da_name'] == null ? undefined : json['da_name'],
        'networkType': json['network_type'] == null ? undefined : json['network_type'],
        'network': json['network'] == null ? undefined : json['network'],
        'gasToken': json['gas_token'] == null ? undefined : json['gas_token'],
        'explorer': json['explorer'] == null ? undefined : json['explorer'],
        'launchDate': json['launch_date'] == null ? undefined : json['launch_date'],
        'consensusAlgorithm': json['consensus_algorithm'] == null ? undefined : json['consensus_algorithm'],
        'dataAvailabilitySampling': json['data_availability_sampling'] == null ? undefined : json['data_availability_sampling'],
    };
}

  export function DAToJSON(json: any): DA {
      return DAToJSONTyped(json, false);
  }

  export function DAToJSONTyped(value?: DA | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'da_name': value['daName'],
        'network_type': value['networkType'],
        'network': value['network'],
        'gas_token': value['gasToken'],
        'explorer': value['explorer'],
        'launch_date': value['launchDate'],
        'consensus_algorithm': value['consensusAlgorithm'],
        'data_availability_sampling': value['dataAvailabilitySampling'],
    };
}

