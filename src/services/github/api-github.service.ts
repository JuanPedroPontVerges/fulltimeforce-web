import axios from 'axios';
import { GetAllCommitsInput, GetAllGitHubCommitsOutput, Github } from 'services/github/github.service';

export const useAPIGitHub = (): Github => {

    const getAllCommits = async (input: GetAllCommitsInput): Promise<GetAllGitHubCommitsOutput[]> => {
        try {
            const response = await axios.get(process.env.REACT_APP_API_BASE_URL + `/github/${input.repo}/commits`);
            return response.data as GetAllGitHubCommitsOutput[];
        } catch (error: any) {
            console.log('error', error);
            throw error;
        }
    };
   
    return {
        getAllCommits
    };
};
