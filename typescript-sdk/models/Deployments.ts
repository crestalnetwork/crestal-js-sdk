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
import type { Deployment } from './Deployment';
import {
    DeploymentFromJSON,
    DeploymentFromJSONTyped,
    DeploymentToJSON,
    DeploymentToJSONTyped,
} from './Deployment';

/**
 * 
 * @export
 * @interface Deployments
 */
export interface Deployments {
    /**
     * 
     * @type {Array<Deployment>}
     * @memberof Deployments
     */
    deployments?: Array<Deployment>;
    /**
     * user address  in hex
     * @type {string}
     * @memberof Deployments
     */
    userAddress?: string;
}

/**
 * Check if a given object implements the Deployments interface.
 */
export function instanceOfDeployments(value: object): value is Deployments {
    return true;
}

export function DeploymentsFromJSON(json: any): Deployments {
    return DeploymentsFromJSONTyped(json, false);
}

export function DeploymentsFromJSONTyped(json: any, ignoreDiscriminator: boolean): Deployments {
    if (json == null) {
        return json;
    }
    return {
        
        'deployments': json['deployments'] == null ? undefined : ((json['deployments'] as Array<any>).map(DeploymentFromJSON)),
        'userAddress': json['user_address'] == null ? undefined : json['user_address'],
    };
}

  export function DeploymentsToJSON(json: any): Deployments {
      return DeploymentsToJSONTyped(json, false);
  }

  export function DeploymentsToJSONTyped(value?: Deployments | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'deployments': value['deployments'] == null ? undefined : ((value['deployments'] as Array<any>).map(DeploymentToJSON)),
        'user_address': value['userAddress'],
    };
}

