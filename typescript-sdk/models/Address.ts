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
 * @interface Address
 */
export interface Address {
    /**
     * User's blockchain address in hexadecimal format.
     * @type {string}
     * @memberof Address
     */
    userAddress?: string;
}

/**
 * Check if a given object implements the Address interface.
 */
export function instanceOfAddress(value: object): value is Address {
    return true;
}

export function AddressFromJSON(json: any): Address {
    return AddressFromJSONTyped(json, false);
}

export function AddressFromJSONTyped(json: any, ignoreDiscriminator: boolean): Address {
    if (json == null) {
        return json;
    }
    return {
        
        'userAddress': json['user_address'] == null ? undefined : json['user_address'],
    };
}

  export function AddressToJSON(json: any): Address {
      return AddressToJSONTyped(json, false);
  }

  export function AddressToJSONTyped(value?: Address | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'user_address': value['userAddress'],
    };
}
