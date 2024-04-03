import axios from 'axios'

export const gitHubApi = axios.create({
    baseURL: 'https://api.github.com/repos/facebook/react',
    headers: {
        Authorization: 'Bearer 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'
    }
})