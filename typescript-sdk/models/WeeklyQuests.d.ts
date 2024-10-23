import type { Quests } from './Quests';
export interface WeeklyQuests {
    startTime?: string;
    endTime?: string;
    quests?: Array<Quests>;
}
export declare function instanceOfWeeklyQuests(value: object): value is WeeklyQuests;
export declare function WeeklyQuestsFromJSON(json: any): WeeklyQuests;
export declare function WeeklyQuestsFromJSONTyped(json: any, ignoreDiscriminator: boolean): WeeklyQuests;
export declare function WeeklyQuestsToJSON(json: any): WeeklyQuests;
export declare function WeeklyQuestsToJSONTyped(value?: WeeklyQuests | null, ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=WeeklyQuests.d.ts.map