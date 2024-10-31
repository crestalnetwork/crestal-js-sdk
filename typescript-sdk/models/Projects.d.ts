import type { ProjectResource } from './ProjectResource';
export interface Projects {
    projects?: Array<ProjectResource>;
    userAddress?: string;
}
export declare function instanceOfProjects(value: object): value is Projects;
export declare function ProjectsFromJSON(json: any): Projects;
export declare function ProjectsFromJSONTyped(json: any, ignoreDiscriminator: boolean): Projects;
export declare function ProjectsToJSON(json: any): Projects;
export declare function ProjectsToJSONTyped(value?: Projects | null, ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=Projects.d.ts.map