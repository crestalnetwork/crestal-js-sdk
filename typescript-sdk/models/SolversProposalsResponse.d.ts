import type { SolversProposal } from './SolversProposal';
export interface SolversProposalsResponse {
    proposals?: Array<SolversProposal>;
    requestId?: string;
}
export declare function instanceOfSolversProposalsResponse(value: object): value is SolversProposalsResponse;
export declare function SolversProposalsResponseFromJSON(json: any): SolversProposalsResponse;
export declare function SolversProposalsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SolversProposalsResponse;
export declare function SolversProposalsResponseToJSON(json: any): SolversProposalsResponse;
export declare function SolversProposalsResponseToJSONTyped(value?: SolversProposalsResponse | null, ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=SolversProposalsResponse.d.ts.map