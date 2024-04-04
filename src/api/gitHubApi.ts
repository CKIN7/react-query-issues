import axios from 'axios'

export const gitHubApi = axios.create({
    baseURL: 'https://api.github.com/repos/facebook/react',
    headers: {
      Authorization:  'Bearer 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'
    }
})