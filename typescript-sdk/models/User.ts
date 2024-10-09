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
 * @interface User
 */
export interface User {
    /**
     * User's blockchain address in hexadecimal format.
     * @type {string}
     * @memberof User
     */
    userAddress?: string;
    /**
     * Total points awarded to the user.
     * @type {number}
     * @memberof User
     */
    totalPoint?: number;
    /**
     * Total number of completed quests.
     * @type {number}
     * @memberof User
     */
    quests?: number;
    /**
     * User's ranking based on their achievements.
     * @type {number}
     * @memberof User
     */
    rank?: number;
    /**
     * GitHub profile link of the user.
     * @type {string}
     * @memberof User
     */
    github?: string;
    /**
     * Total number of users invited by this user.
     * @type {number}
     * @memberof User
     */
    totalInvited?: number;
    /**
     * Indicates whether the user is subscribed.
     * @type {boolean}
     * @memberof User
     */
    subscribe?: boolean;
}

/**
 * Check if a given object implements the User interface.
 */
export function instanceOfUser(value: object): value is User {
    return true;
}

export function UserFromJSON(json: any): User {
    return UserFromJSONTyped(json, false);
}

export function UserFromJSONTyped(json: any, ignoreDiscriminator: boolean): User {
    if (json == null) {
        return json;
    }
    return {
        
        'userAddress': json['user_address'] == null ? undefined : json['user_address'],
        'totalPoint': json['total_point'] == null ? undefined : json['total_point'],
        'quests': json['quests'] == null ? undefined : json['quests'],
        'rank': json['rank'] == null ? undefined : json['rank'],
        'github': json['github'] == null ? undefined : json['github'],
        'totalInvited': json['total_invited'] == null ? undefined : json['total_invited'],
        'subscribe': json['subscribe'] == null ? undefined : json['subscribe'],
    };
}

  export function UserToJSON(json: any): User {
      return UserToJSONTyped(json, false);
  }

  export function UserToJSONTyped(value?: User | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'user_address': value['userAddress'],
        'total_point': value['totalPoint'],
        'quests': value['quests'],
        'rank': value['rank'],
        'github': value['github'],
        'total_invited': value['totalInvited'],
        'subscribe': value['subscribe'],
    };
}

