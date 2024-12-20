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
 * @interface UserPostQuest
 */
export interface UserPostQuest {
    /**
     * User's blockchain address in hexadecimal format.
     * @type {string}
     * @memberof UserPostQuest
     */
    userAddress: string;
    /**
     * Activity type associated with the quest.
     * @type {string}
     * @memberof UserPostQuest
     */
    questActivityAction: UserPostQuestQuestActivityActionEnum;
    /**
     * Title of the quest.
     * @type {string}
     * @memberof UserPostQuest
     */
    questTitle?: string;
    /**
     * Site where the activity occurred.
     * @type {string}
     * @memberof UserPostQuest
     */
    site?: string;
    /**
     * Blockchain network ID.
     * @type {number}
     * @memberof UserPostQuest
     */
    chainId?: number;
    /**
     * Number of times the quest activity was completed.
     * @type {number}
     * @memberof UserPostQuest
     */
    totalComplete: number;
}


/**
 * @export
 */
export const UserPostQuestQuestActivityActionEnum = {
    Login: 'login',
    Interact: 'interact',
    ChatComplete: 'chat.complete',
    ChatHalf: 'chat.half',
    RequestProposal: 'request.proposal',
    DeployProposal: 'deploy.proposal',
    DeploymentUse: 'deployment.use',
    Feedback: 'feedback'
} as const;
export type UserPostQuestQuestActivityActionEnum = typeof UserPostQuestQuestActivityActionEnum[keyof typeof UserPostQuestQuestActivityActionEnum];


/**
 * Check if a given object implements the UserPostQuest interface.
 */
export function instanceOfUserPostQuest(value: object): value is UserPostQuest {
    if (!('userAddress' in value) || value['userAddress'] === undefined) return false;
    if (!('questActivityAction' in value) || value['questActivityAction'] === undefined) return false;
    if (!('totalComplete' in value) || value['totalComplete'] === undefined) return false;
    return true;
}

export function UserPostQuestFromJSON(json: any): UserPostQuest {
    return UserPostQuestFromJSONTyped(json, false);
}

export function UserPostQuestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserPostQuest {
    if (json == null) {
        return json;
    }
    return {
        
        'userAddress': json['user_address'],
        'questActivityAction': json['quest_activity_action'],
        'questTitle': json['quest_title'] == null ? undefined : json['quest_title'],
        'site': json['site'] == null ? undefined : json['site'],
        'chainId': json['chain_id'] == null ? undefined : json['chain_id'],
        'totalComplete': json['total_complete'],
    };
}

  export function UserPostQuestToJSON(json: any): UserPostQuest {
      return UserPostQuestToJSONTyped(json, false);
  }

  export function UserPostQuestToJSONTyped(value?: UserPostQuest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'user_address': value['userAddress'],
        'quest_activity_action': value['questActivityAction'],
        'quest_title': value['questTitle'],
        'site': value['site'],
        'chain_id': value['chainId'],
        'total_complete': value['totalComplete'],
    };
}

