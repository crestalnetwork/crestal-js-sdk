export interface Chat {
    projectId?: string;
    message?: string;
    status?: string;
    targetPerformance?: object;
    sender?: string;
    createdAt?: string;
}
export declare function instanceOfChat(value: object): value is Chat;
export declare function ChatFromJSON(json: any): Chat;
export declare function ChatFromJSONTyped(json: any, ignoreDiscriminator: boolean): Chat;
export declare function ChatToJSON(json: any): Chat;
export declare function ChatToJSONTyped(value?: Chat | null, ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=Chat.d.ts.map