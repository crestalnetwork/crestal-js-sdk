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
 * @interface Activity
 */
export interface Activity {
    /**
     * Activity type performed by the user.
     * @type {string}
     * @memberof Activity
     */
    action?: string;
    /**
     * User's blockchain address.
     * @type {string}
     * @memberof Activity
     */
    address?: string;
    /**
     * Timestamp when the activity was performed.
     * @type {string}
     * @memberof Activity
     */
    createdAt?: string;
}

/**
 * Check if a given object implements the Activity interface.
 */
export function instanceOfActivity(value: object): value is Activity {
    return true;
}

export function ActivityFromJSON(json: any): Activity {
    return ActivityFromJSONTyped(json, false);
}

export function ActivityFromJSONTyped(json: any, ignoreDiscriminator: boolean): Activity {
    if (json == null) {
        return json;
    }
    return {
        
        'action': json['action'] == null ? undefined : json['action'],
        'address': json['address'] == null ? undefined : json['address'],
        'createdAt': json['created_at'] == null ? undefined : json['created_at'],
    };
}

  export function ActivityToJSON(json: any): Activity {
      return ActivityToJSONTyped(json, false);
  }

  export function ActivityToJSONTyped(value?: Activity | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'action': value['action'],
        'address': value['address'],
        'created_at': value['createdAt'],
    };
}

