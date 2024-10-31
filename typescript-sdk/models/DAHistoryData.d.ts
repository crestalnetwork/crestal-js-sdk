import type { HistoryData } from './HistoryData';
export interface DAHistoryData {
    daName?: string;
    historyData?: Array<HistoryData>;
}
export declare function instanceOfDAHistoryData(value: object): value is DAHistoryData;
export declare function DAHistoryDataFromJSON(json: any): DAHistoryData;
export declare function DAHistoryDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): DAHistoryData;
export declare function DAHistoryDataToJSON(json: any): DAHistoryData;
export declare function DAHistoryDataToJSONTyped(value?: DAHistoryData | null, ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=DAHistoryData.d.ts.map