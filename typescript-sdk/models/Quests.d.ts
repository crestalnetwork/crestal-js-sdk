export interface Quests {
    id?: number;
    category?: string;
    level?: number;
    title?: string;
    description?: string;
    rocks?: number;
    activityAction?: QuestsActivityActionEnum;
}
export declare const QuestsActivityActionEnum: {
    readonly Login: "login";
    readonly Interact: "interact";
    readonly ChatComplete: "chat.complete";
    readonly ChatHalf: "chat.half";
    readonly RequestProposal: "request.proposal";
    readonly DeployProposal: "deploy.proposal";
    readonly DeploymentUse: "deployment.use";
    readonly Feedback: "feedback";
};
export type QuestsActivityActionEnum = typeof QuestsActivityActionEnum[keyof typeof QuestsActivityActionEnum];
export declare function instanceOfQuests(value: object): value is Quests;
export declare function QuestsFromJSON(json: any): Quests;
export declare function QuestsFromJSONTyped(json: any, ignoreDiscriminator: boolean): Quests;
export declare function QuestsToJSON(json: any): Quests;
export declare function QuestsToJSONTyped(value?: Quests | null, ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=Quests.d.ts.map