import { GetAllGitHubCommitsOutput } from "services/github/github.service";

export interface MainViewController {
    commits: GetAllGitHubCommitsOutput[] | undefined
    loading: boolean;
    inputOnChange: (input: any) => void;
}

export interface MainFragmentProps {
    useController?: () => MainViewController;
}
