import axios from 'axios'

const githubProvider = {

  mostPopularRepositories: (page = 1) => {
    return axios.get(`https://api.github.com/search/repositories?q=language:Javascript&sort=stars&page=${page}`)
  },
  pullRequests: (login, name) => {
    return axios.get(`https://api.github.com/repos/${login}/${name}/pulls`)
  }

}

export default githubProvider
