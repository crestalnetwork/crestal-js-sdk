/* tslint:disable */
/* eslint-disable */
/**
 * Crestal dashboard API - /crestal - OpenAPI 3.0
 * This is a crestal-dashboard-backend server.
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { DAProposal } from './DAProposal';
import {
    DAProposalFromJSON,
    DAProposalFromJSONTyped,
    DAProposalToJSON,
    DAProposalToJSONTyped,
} from './DAProposal';
import type { StorageProposal } from './StorageProposal';
import {
    StorageProposalFromJSON,
    StorageProposalFromJSONTyped,
    StorageProposalToJSON,
    StorageProposalToJSONTyped,
} from './StorageProposal';
import type { IndexingProposal } from './IndexingProposal';
import {
    IndexingProposalFromJSON,
    IndexingProposalFromJSONTyped,
    IndexingProposalToJSON,
    IndexingProposalToJSONTyped,
} from './IndexingProposal';
import type { ComputeProposal } from './ComputeProposal';
import {
    ComputeProposalFromJSON,
    ComputeProposalFromJSONTyped,
    ComputeProposalToJSON,
    ComputeProposalToJSONTyped,
} from './ComputeProposal';

/**
 * 
 * @export
 * @interface SolversProposal
 */
export interface SolversProposal {
    /**
     * Request ID from the solver smart contract.
     * @type {string}
     * @memberof SolversProposal
     */
    requestId?: string;
    /**
     * Solver's blockchain address in hexadecimal format.
     * @type {string}
     * @memberof SolversProposal
     */
    solverAddress?: string;
    /**
     * Reputation score of the solver.
     * @type {number}
     * @memberof SolversProposal
     */
    solverReputation?: number;
    /**
     * Fit score of the solver proposal.
     * @type {number}
     * @memberof SolversProposal
     */
    fit?: number;
    /**
     * Rank of the solver proposal.
     * @type {number}
     * @memberof SolversProposal
     */
    rank?: number;
    /**
     * 
     * @type {DAProposal}
     * @memberof SolversProposal
     */
    da?: DAProposal;
    /**
     * 
     * @type {IndexingProposal}
     * @memberof SolversProposal
     */
    indexing?: IndexingProposal;
    /**
     * 
     * @type {ComputeProposal}
     * @memberof SolversProposal
     */
    compute?: ComputeProposal;
    /**
     * 
     * @type {StorageProposal}
     * @memberof SolversProposal
     */
    storage?: StorageProposal;
}

/**
 * Check if a given object implements the SolversProposal interface.
 */
export function instanceOfSolversProposal(value: object): value is SolversProposal {
    return true;
}

export function SolversProposalFromJSON(json: any): SolversProposal {
    return SolversProposalFromJSONTyped(json, false);
}

export function SolversProposalFromJSONTyped(json: any, ignoreDiscriminator: boolean): SolversProposal {
    if (json == null) {
        return json;
    }
    return {
        
        'requestId': json['request_id'] == null ? undefined : json['request_id'],
        'solverAddress': json['solver_address'] == null ? undefined : json['solver_address'],
        'solverReputation': json['solver_reputation'] == null ? undefined : json['solver_reputation'],
        'fit': json['fit'] == null ? undefined : json['fit'],
        'rank': json['rank'] == null ? undefined : json['rank'],
        'da': json['da'] == null ? undefined : DAProposalFromJSON(json['da']),
        'indexing': json['indexing'] == null ? undefined : IndexingProposalFromJSON(json['indexing']),
        'compute': json['compute'] == null ? undefined : ComputeProposalFromJSON(json['compute']),
        'storage': json['storage'] == null ? undefined : StorageProposalFromJSON(json['storage']),
    };
}

  export function SolversProposalToJSON(json: any): SolversProposal {
      return SolversProposalToJSONTyped(json, false);
  }

  export function SolversProposalToJSONTyped(value?: SolversProposal | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'request_id': value['requestId'],
        'solver_address': value['solverAddress'],
        'solver_reputation': value['solverReputation'],
        'fit': value['fit'],
        'rank': value['rank'],
        'da': DAProposalToJSON(value['da']),
        'indexing': IndexingProposalToJSON(value['indexing']),
        'compute': ComputeProposalToJSON(value['compute']),
        'storage': StorageProposalToJSON(value['storage']),
    };
}

