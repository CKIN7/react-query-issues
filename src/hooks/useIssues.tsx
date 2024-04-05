import { useQuery } from "@tanstack/react-query"
import { gitHubApi } from "../../api/gitHubApi"
import { Issue, State } from "../interfaces"
import { sleep } from "../helpers/sleep"

interface Props {
    state?: State;
    labels: string[];
}



const getIssues = async():Promise<Issue[]> => {
    
    await sleep(2)

    const { data } = await gitHubApi.get<Issue[]>('/issues')
    return data
}

export const useIssues = () => {
    const issuesQuery = useQuery({
        queryKey: ['issues'],
        queryFn: getIssues,
    })

    return {
        issuesQuery    // Lo retornamos como objeto porque posiblemente vamos a añadir mas funcionalidades a este hook y voy a querer aparte del issue, extraer otras cosas
    }
}