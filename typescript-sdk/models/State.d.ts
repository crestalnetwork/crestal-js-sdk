export interface State {
    dataAvailability?: number;
    exitWindows?: number;
    proposeFailure?: number;
    stateValidation?: number;
}
export declare function instanceOfState(value: object): value is State;
export declare function StateFromJSON(json: any): State;
export declare function StateFromJSONTyped(json: any, ignoreDiscriminator: boolean): State;
export declare function StateToJSON(json: any): State;
export declare function StateToJSONTyped(value?: State | null, ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=State.d.ts.map