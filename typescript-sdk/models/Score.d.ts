export interface Score {
    userAddress?: string;
    totalPoint?: number;
    rank?: number;
}
export declare function instanceOfScore(value: object): value is Score;
export declare function ScoreFromJSON(json: any): Score;
export declare function ScoreFromJSONTyped(json: any, ignoreDiscriminator: boolean): Score;
export declare function ScoreToJSON(json: any): Score;
export declare function ScoreToJSONTyped(value?: Score | null, ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=Score.d.ts.map