import axios from 'axios'

const githubProvider = {

  mostPopularRepositories: (page = 1) => {
    return axios.get(`https://api.github.com/search/repositories?q=language:Javascript&sort=stars&page=${page}`)
  }

}

export default githubProvider