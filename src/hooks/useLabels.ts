import { useQuery } from "@tanstack/react-query"
import { gitHubApi } from "../../api/githubApi"
import { Label } from "../interfaces"

 const getLabels = async (): Promise<Label[]> => {
 const { data } = await gitHubApi.get<Label[]>('/labels')
  
 return data
 }

export const useLabels = () => {
  const labelsQuery = useQuery({
    queryKey: ['labels'],
    queryFn: getLabels,
  })

  return {
    labelsQuery
  }
}

