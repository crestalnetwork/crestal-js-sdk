export interface User {
    userAddress?: string;
    totalPoint?: number;
    quests?: number;
    rank?: number;
    github?: string;
    totalInvited?: number;
    subscribe?: boolean;
}
export declare function instanceOfUser(value: object): value is User;
export declare function UserFromJSON(json: any): User;
export declare function UserFromJSONTyped(json: any, ignoreDiscriminator: boolean): User;
export declare function UserToJSON(json: any): User;
export declare function UserToJSONTyped(value?: User | null, ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=User.d.ts.map