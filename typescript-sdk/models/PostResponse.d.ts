import type { DAInfoResource } from './DAInfoResource';
export interface PostResponse {
    daInfo?: DAInfoResource;
    message?: string;
    status?: string;
}
export declare function instanceOfPostResponse(value: object): value is PostResponse;
export declare function PostResponseFromJSON(json: any): PostResponse;
export declare function PostResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostResponse;
export declare function PostResponseToJSON(json: any): PostResponse;
export declare function PostResponseToJSONTyped(value?: PostResponse | null, ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=PostResponse.d.ts.map