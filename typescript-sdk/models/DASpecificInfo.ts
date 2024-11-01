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
import type { State } from './State';
import {
    StateFromJSON,
    StateFromJSONTyped,
    StateToJSON,
    StateToJSONTyped,
} from './State';

/**
 * 
 * @export
 * @interface DASpecificInfo
 */
export interface DASpecificInfo {
    /**
     * 
     * @type {State}
     * @memberof DASpecificInfo
     */
    state?: State;
    /**
     * 
     * @type {number}
     * @memberof DASpecificInfo
     */
    geoCoverage?: number;
    /**
     * 
     * @type {boolean}
     * @memberof DASpecificInfo
     */
    grantsAvailable?: boolean;
    /**
     * 
     * @type {number}
     * @memberof DASpecificInfo
     */
    numberOfProjects?: number;
    /**
     * sender node info
     * @type {object}
     * @memberof DASpecificInfo
     */
    nodeInfo?: object;
}

/**
 * Check if a given object implements the DASpecificInfo interface.
 */
export function instanceOfDASpecificInfo(value: object): value is DASpecificInfo {
    return true;
}

export function DASpecificInfoFromJSON(json: any): DASpecificInfo {
    return DASpecificInfoFromJSONTyped(json, false);
}

export function DASpecificInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): DASpecificInfo {
    if (json == null) {
        return json;
    }
    return {
        
        'state': json['state'] == null ? undefined : StateFromJSON(json['state']),
        'geoCoverage': json['geo_coverage'] == null ? undefined : json['geo_coverage'],
        'grantsAvailable': json['grants_available'] == null ? undefined : json['grants_available'],
        'numberOfProjects': json['number_of_projects'] == null ? undefined : json['number_of_projects'],
        'nodeInfo': json['node_info'] == null ? undefined : json['node_info'],
    };
}

  export function DASpecificInfoToJSON(json: any): DASpecificInfo {
      return DASpecificInfoToJSONTyped(json, false);
  }

  export function DASpecificInfoToJSONTyped(value?: DASpecificInfo | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'state': StateToJSON(value['state']),
        'geo_coverage': value['geoCoverage'],
        'grants_available': value['grantsAvailable'],
        'number_of_projects': value['numberOfProjects'],
        'node_info': value['nodeInfo'],
    };
}

