declare type UserConfigT = {
    branchPrefix?: string;
    authToken?: string;
};
declare type RepoConfigT = {
    trunkBranches?: string[];
    owner?: string;
    repoName?: string;
};
export declare const CURRENT_REPO_CONFIG_PATH: string;
export declare function makeId(length: number): string;
export declare let userConfig: UserConfigT;
export declare function setUserAuthToken(authToken: string): void;
export declare let repoConfig: RepoConfigT;
export declare const trunkBranches: string[] | undefined;
export {};
