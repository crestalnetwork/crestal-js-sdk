export interface Activity {
    action?: string;
    address?: string;
    createdAt?: string;
}
export declare function instanceOfActivity(value: object): value is Activity;
export declare function ActivityFromJSON(json: any): Activity;
export declare function ActivityFromJSONTyped(json: any, ignoreDiscriminator: boolean): Activity;
export declare function ActivityToJSON(json: any): Activity;
export declare function ActivityToJSONTyped(value?: Activity | null, ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=Activity.d.ts.map