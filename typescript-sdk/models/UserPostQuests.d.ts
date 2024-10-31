import type { UserPostQuest } from './UserPostQuest';
export interface UserPostQuests {
    userQuests?: Array<UserPostQuest>;
}
export declare function instanceOfUserPostQuests(value: object): value is UserPostQuests;
export declare function UserPostQuestsFromJSON(json: any): UserPostQuests;
export declare function UserPostQuestsFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserPostQuests;
export declare function UserPostQuestsToJSON(json: any): UserPostQuests;
export declare function UserPostQuestsToJSONTyped(value?: UserPostQuests | null, ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=UserPostQuests.d.ts.map