import axios from 'axios'

const githubProvider = {

  mostPopularRepositories: (language = 'Javascript', page = 1) => {
    return axios.get(`https://api.github.com/search/repositories?q=language:${language}&sort=stars&page=${page}`)
  }

}

export default githubProvider