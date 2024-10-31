export interface Worker {
    address?: string;
    uuid?: string;
    name?: string;
    totalEarned?: number;
    logoUrl?: string;
    totalStaked?: number;
}
export declare function instanceOfWorker(value: object): value is Worker;
export declare function WorkerFromJSON(json: any): Worker;
export declare function WorkerFromJSONTyped(json: any, ignoreDiscriminator: boolean): Worker;
export declare function WorkerToJSON(json: any): Worker;
export declare function WorkerToJSONTyped(value?: Worker | null, ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=Worker.d.ts.map