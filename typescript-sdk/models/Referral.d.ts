export interface Referral {
    id?: number;
    referrerAddress?: string;
    referredAddress?: string;
    code?: string;
    activityAction?: string;
    claimed?: boolean;
    claimedAt?: string;
    active?: boolean;
    createdAt?: string;
}
export declare function instanceOfReferral(value: object): value is Referral;
export declare function ReferralFromJSON(json: any): Referral;
export declare function ReferralFromJSONTyped(json: any, ignoreDiscriminator: boolean): Referral;
export declare function ReferralToJSON(json: any): Referral;
export declare function ReferralToJSONTyped(value?: Referral | null, ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=Referral.d.ts.map