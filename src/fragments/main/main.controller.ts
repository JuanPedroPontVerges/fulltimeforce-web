/* eslint-disable react-hooks/rules-of-hooks */
import { useAPIGitHub } from "services/github/api-github.service";
import { MainViewController } from "./interfaces";
import { useEffect, useState } from 'react';
import { GetAllGitHubCommitsOutput } from "services/github/github.service";


export const useMainController = (githubService = useAPIGitHub()): MainViewController => {
    const [commits, setCommits] = useState<GetAllGitHubCommitsOutput[]>([]);

    useEffect(() => {
        fetchComits()
    },[])

    const fetchComits = async () => {
        const frontEndRepoCommits = await githubService.getAllCommits({repo:'fulltimeforce-web'})
        const backendCommits = await githubService.getAllCommits({repo:'fulltimeforce-be'})
        console.log('frontend',frontEndRepoCommits);
        setCommits([...frontEndRepoCommits])
        console.log('');
    }

    return {commits};
};
