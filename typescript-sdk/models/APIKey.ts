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
 * @interface APIKey
 */
export interface APIKey {
    /**
     * User's blockchain address in hexadecimal format.
     * @type {string}
     * @memberof APIKey
     */
    userAddress?: string;
    /**
     * Generated API key.
     * @type {string}
     * @memberof APIKey
     */
    apiKey?: string;
}

/**
 * Check if a given object implements the APIKey interface.
 */
export function instanceOfAPIKey(value: object): value is APIKey {
    return true;
}

export function APIKeyFromJSON(json: any): APIKey {
    return APIKeyFromJSONTyped(json, false);
}

export function APIKeyFromJSONTyped(json: any, ignoreDiscriminator: boolean): APIKey {
    if (json == null) {
        return json;
    }
    return {
        
        'userAddress': json['user_address'] == null ? undefined : json['user_address'],
        'apiKey': json['api_key'] == null ? undefined : json['api_key'],
    };
}

  export function APIKeyToJSON(json: any): APIKey {
      return APIKeyToJSONTyped(json, false);
  }

  export function APIKeyToJSONTyped(value?: APIKey | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'user_address': value['userAddress'],
        'api_key': value['apiKey'],
    };
}
