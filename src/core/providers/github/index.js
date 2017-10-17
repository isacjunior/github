import axios from 'axios'

const githubProvider = {

  mostPopularRepositories: (page = 1, language = 'Javascript') => {
    return axios.get(`https://api.github.com/search/repositories?q=language:${language}&sort=stars&page=${page}`)
  }

}

export default githubProvider