export interface UserPostQuest {
    userAddress: string;
    questActivityAction: UserPostQuestQuestActivityActionEnum;
    questTitle?: string;
    site?: string;
    chainId?: number;
    totalComplete: number;
}
export declare const UserPostQuestQuestActivityActionEnum: {
    readonly Login: "login";
    readonly Interact: "interact";
    readonly ChatComplete: "chat.complete";
    readonly ChatHalf: "chat.half";
    readonly RequestProposal: "request.proposal";
    readonly DeployProposal: "deploy.proposal";
    readonly DeploymentUse: "deployment.use";
    readonly Feedback: "feedback";
};
export type UserPostQuestQuestActivityActionEnum = typeof UserPostQuestQuestActivityActionEnum[keyof typeof UserPostQuestQuestActivityActionEnum];
export declare function instanceOfUserPostQuest(value: object): value is UserPostQuest;
export declare function UserPostQuestFromJSON(json: any): UserPostQuest;
export declare function UserPostQuestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserPostQuest;
export declare function UserPostQuestToJSON(json: any): UserPostQuest;
export declare function UserPostQuestToJSONTyped(value?: UserPostQuest | null, ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=UserPostQuest.d.ts.map