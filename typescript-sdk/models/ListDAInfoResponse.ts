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
import type { DAInfo } from './DAInfo';
import {
    DAInfoFromJSON,
    DAInfoFromJSONTyped,
    DAInfoToJSON,
    DAInfoToJSONTyped,
} from './DAInfo';

/**
 * 
 * @export
 * @interface ListDAInfoResponse
 */
export interface ListDAInfoResponse {
    /**
     * an array of DAInfo object
     * @type {Array<DAInfo>}
     * @memberof ListDAInfoResponse
     */
    daInfos?: Array<DAInfo>;
    /**
     * network type ex: Mainnet, Testnet
     * @type {string}
     * @memberof ListDAInfoResponse
     */
    networkType?: string;
}

/**
 * Check if a given object implements the ListDAInfoResponse interface.
 */
export function instanceOfListDAInfoResponse(value: object): value is ListDAInfoResponse {
    return true;
}

export function ListDAInfoResponseFromJSON(json: any): ListDAInfoResponse {
    return ListDAInfoResponseFromJSONTyped(json, false);
}

export function ListDAInfoResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListDAInfoResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'daInfos': json['da_infos'] == null ? undefined : ((json['da_infos'] as Array<any>).map(DAInfoFromJSON)),
        'networkType': json['network_type'] == null ? undefined : json['network_type'],
    };
}

  export function ListDAInfoResponseToJSON(json: any): ListDAInfoResponse {
      return ListDAInfoResponseToJSONTyped(json, false);
  }

  export function ListDAInfoResponseToJSONTyped(value?: ListDAInfoResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'da_infos': value['daInfos'] == null ? undefined : ((value['daInfos'] as Array<any>).map(DAInfoToJSON)),
        'network_type': value['networkType'],
    };
}

