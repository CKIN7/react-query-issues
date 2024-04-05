import { useQuery } from "@tanstack/react-query"
import { gitHubApi } from "../../api/gitHubApi"
import { Issue, State } from "../interfaces"
import { sleep } from "../helpers/sleep"

interface Props {
    state?: State;
    labels: string[];
}



const getIssues = async(labels: string[], state?: State):Promise<Issue[]> => {
    
    await sleep(2)

    const params = new URLSearchParams();

    if(state) params.append('state', state)

    const { data } = await gitHubApi.get<Issue[]>('/issues', {params})
    return data
}

export const useIssues = ({ state, labels }: Props) => {
    const issuesQuery = useQuery({
        queryKey: ['issues', { state, labels }],
        queryFn: () => getIssues(labels, state),
    })

    return {
        issuesQuery    // Lo retornamos como objeto porque posiblemente vamos a añadir mas funcionalidades a este hook y voy a querer aparte del issue, extraer otras cosas
    }
}