export interface HistoryData {
    senderName?: string;
    senderAddress?: string;
    avgCost?: number;
    blockTime?: number;
    createdAt?: string;
    finalityTime?: number;
    latency?: number;
    maxThroughput?: number;
    uptime?: number;
    totalTransactions?: number;
    totalBlocks?: number;
    totalFee?: number;
    totalFeeUsd?: number;
    totalStaked?: number;
    totalStakedUsd?: number;
    numberOfNodes?: number;
    throughput?: number;
    nodeReliability?: number;
    costPerTransaction?: number;
    gasPerTransaction?: number;
    costPerBlock?: number;
    gasPerBlock?: number;
    costPerMb?: number;
    gasPerMb?: number;
    totalValueLocked?: number;
    sendBlobLatency?: number;
    totalDataTransacted?: number;
}
export declare function instanceOfHistoryData(value: object): value is HistoryData;
export declare function HistoryDataFromJSON(json: any): HistoryData;
export declare function HistoryDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): HistoryData;
export declare function HistoryDataToJSON(json: any): HistoryData;
export declare function HistoryDataToJSONTyped(value?: HistoryData | null, ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=HistoryData.d.ts.map