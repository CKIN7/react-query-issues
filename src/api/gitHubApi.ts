import axios from 'axios'

export const gitHubApi = axios.create({
    baseURL: 'https://api.github.com/repos/facebook/react',
    headers: {
      Authorization:  'Bearer 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'
    }
})