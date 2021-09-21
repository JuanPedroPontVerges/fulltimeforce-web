/* eslint-disable react-hooks/rules-of-hooks */
import { useAPIGitHub } from "services/github/api-github.service";
import { MainViewController } from "./interfaces";
import { useEffect, useState } from 'react';
import { GetAllGitHubCommitsOutput } from "services/github/github.service";


export const useMainController = (githubService = useAPIGitHub()): MainViewController => {
    const [commits, setCommits] = useState<GetAllGitHubCommitsOutput[]>([]);
    const [loading, setIsLoading ] = useState(false);

    useEffect(() => {
        fetchComits()
    },[])

    const fetchComits = async () => {
        const frontEndRepoCommits = await githubService.getAllCommits({repo:'fulltimeforce-web'})
        const backendCommits = await githubService.getAllCommits({repo:'fulltimeforce-be'})
        setCommits([...frontEndRepoCommits, ...backendCommits])
    }

    const inputOnChange = async (input: any) => {
        console.log('input', input.target.value.toUpperCase());
        const filteredCommits = commits.filter((commit) => {
            commit.name.toUpperCase().includes(input.target.value.toUpperCase())
        })
        setCommits(filteredCommits)
    }

    return {commits, loading,inputOnChange};
};
