export interface GetAllCommitsInput {
    repo: string;
}

export interface GetAllGitHubCommitsOutput {
    id: string;
    name: string;
    message: string;
    avatarUrl: string;
    profileUrl: string;
    date: Date;
  }
  

export interface Github {
    getAllCommits(input: GetAllCommitsInput): Promise<GetAllGitHubCommitsOutput[]>;
}
