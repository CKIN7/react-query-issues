import { Label } from "../interfaces";
import { gitHubApi } from "../../api/gitHubApi";
import { useQuery } from "@tanstack/react-query";
import { sleep } from "../helpers/sleep";


const getLabels = async (): Promise<Label[]> => {
  await sleep(2)
  const { data } = await gitHubApi.get<Label[]>('labels')

  return data
}

 export const useLabels = () => {

  const labelsQuery = useQuery({
    queryKey: ['labels'],
    queryFn: getLabels,
    staleTime: 1000 * 60 * 60,
  })

  return {
    labelsQuery
  }
}

