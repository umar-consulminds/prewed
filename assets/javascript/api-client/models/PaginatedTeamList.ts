/* tslint:disable */
/* eslint-disable */
/**
 * AIction ReAIction
 * B2B SaaS web application to allow customers to sell and design custom Tshirts.
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { Team } from './Team';
import {
    TeamFromJSON,
    TeamFromJSONTyped,
    TeamToJSON,
} from './Team';

/**
 * 
 * @export
 * @interface PaginatedTeamList
 */
export interface PaginatedTeamList {
    /**
     * 
     * @type {number}
     * @memberof PaginatedTeamList
     */
    count?: number;
    /**
     * 
     * @type {string}
     * @memberof PaginatedTeamList
     */
    next?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PaginatedTeamList
     */
    previous?: string | null;
    /**
     * 
     * @type {Array<Team>}
     * @memberof PaginatedTeamList
     */
    results?: Array<Team>;
}

/**
 * Check if a given object implements the PaginatedTeamList interface.
 */
export function instanceOfPaginatedTeamList(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PaginatedTeamListFromJSON(json: any): PaginatedTeamList {
    return PaginatedTeamListFromJSONTyped(json, false);
}

export function PaginatedTeamListFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaginatedTeamList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'count': !exists(json, 'count') ? undefined : json['count'],
        'next': !exists(json, 'next') ? undefined : json['next'],
        'previous': !exists(json, 'previous') ? undefined : json['previous'],
        'results': !exists(json, 'results') ? undefined : ((json['results'] as Array<any>).map(TeamFromJSON)),
    };
}

export function PaginatedTeamListToJSON(value?: PaginatedTeamList | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'count': value.count,
        'next': value.next,
        'previous': value.previous,
        'results': value.results === undefined ? undefined : ((value.results as Array<any>).map(TeamToJSON)),
    };
}

