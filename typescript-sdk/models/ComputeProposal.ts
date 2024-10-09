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
/**
 * 
 * @export
 * @interface ComputeProposal
 */
export interface ComputeProposal {
    /**
     * Rank of the compute proposal.
     * @type {number}
     * @memberof ComputeProposal
     */
    rank?: number;
    /**
     * Fit score of the compute proposal.
     * @type {number}
     * @memberof ComputeProposal
     */
    fit?: number;
}

/**
 * Check if a given object implements the ComputeProposal interface.
 */
export function instanceOfComputeProposal(value: object): value is ComputeProposal {
    return true;
}

export function ComputeProposalFromJSON(json: any): ComputeProposal {
    return ComputeProposalFromJSONTyped(json, false);
}

export function ComputeProposalFromJSONTyped(json: any, ignoreDiscriminator: boolean): ComputeProposal {
    if (json == null) {
        return json;
    }
    return {
        
        'rank': json['rank'] == null ? undefined : json['rank'],
        'fit': json['fit'] == null ? undefined : json['fit'],
    };
}

  export function ComputeProposalToJSON(json: any): ComputeProposal {
      return ComputeProposalToJSONTyped(json, false);
  }

  export function ComputeProposalToJSONTyped(value?: ComputeProposal | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'rank': value['rank'],
        'fit': value['fit'],
    };
}
