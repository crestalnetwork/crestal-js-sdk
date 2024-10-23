export interface UserQuest {
    startTime?: string;
    endTime?: string;
    baseRocks?: number;
    referRocks?: number;
}
export declare function instanceOfUserQuest(value: object): value is UserQuest;
export declare function UserQuestFromJSON(json: any): UserQuest;
export declare function UserQuestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserQuest;
export declare function UserQuestToJSON(json: any): UserQuest;
export declare function UserQuestToJSONTyped(value?: UserQuest | null, ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=UserQuest.d.ts.map