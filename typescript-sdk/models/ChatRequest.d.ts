export interface ChatRequest {
    message?: string;
    projectId: string;
    userAddress: string;
}
export declare function instanceOfChatRequest(value: object): value is ChatRequest;
export declare function ChatRequestFromJSON(json: any): ChatRequest;
export declare function ChatRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChatRequest;
export declare function ChatRequestToJSON(json: any): ChatRequest;
export declare function ChatRequestToJSONTyped(value?: ChatRequest | null, ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=ChatRequest.d.ts.map