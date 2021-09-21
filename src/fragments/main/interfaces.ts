import { GetAllGitHubCommitsOutput } from "services/github/github.service";

export interface MainViewController {
    commits: GetAllGitHubCommitsOutput[] | undefined
}

export interface MainFragmentProps {
    useController?: () => MainViewController;
}
