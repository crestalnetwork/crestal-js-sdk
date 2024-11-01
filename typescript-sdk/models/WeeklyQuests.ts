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
import type { Quests } from './Quests';
import {
    QuestsFromJSON,
    QuestsFromJSONTyped,
    QuestsToJSON,
    QuestsToJSONTyped,
} from './Quests';

/**
 * 
 * @export
 * @interface WeeklyQuests
 */
export interface WeeklyQuests {
    /**
     * Start time of the weekly quests in UTC.
     * @type {string}
     * @memberof WeeklyQuests
     */
    startTime?: string;
    /**
     * End time of the weekly quests in UTC.
     * @type {string}
     * @memberof WeeklyQuests
     */
    endTime?: string;
    /**
     * A list of quests available during the week.
     * @type {Array<Quests>}
     * @memberof WeeklyQuests
     */
    quests?: Array<Quests>;
}

/**
 * Check if a given object implements the WeeklyQuests interface.
 */
export function instanceOfWeeklyQuests(value: object): value is WeeklyQuests {
    return true;
}

export function WeeklyQuestsFromJSON(json: any): WeeklyQuests {
    return WeeklyQuestsFromJSONTyped(json, false);
}

export function WeeklyQuestsFromJSONTyped(json: any, ignoreDiscriminator: boolean): WeeklyQuests {
    if (json == null) {
        return json;
    }
    return {
        
        'startTime': json['start_time'] == null ? undefined : json['start_time'],
        'endTime': json['end_time'] == null ? undefined : json['end_time'],
        'quests': json['quests'] == null ? undefined : ((json['quests'] as Array<any>).map(QuestsFromJSON)),
    };
}

  export function WeeklyQuestsToJSON(json: any): WeeklyQuests {
      return WeeklyQuestsToJSONTyped(json, false);
  }

  export function WeeklyQuestsToJSONTyped(value?: WeeklyQuests | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'start_time': value['startTime'],
        'end_time': value['endTime'],
        'quests': value['quests'] == null ? undefined : ((value['quests'] as Array<any>).map(QuestsToJSON)),
    };
}

