import React, { Component } from 'react'
import Text from '../../components/Text'
import Icon from '../../components/Icon'
import ImageProfile from '../../components/ImageProfile'
import StyledRepositories from './styled'
import githubProvider from 'core/providers/github'

class Repositories extends Component {

  componentWillMount() {
    githubProvider.mostPopularRepositories()
      .then(response => {
        console.log(response.data)
      })
  }

  render() {
    return (
      <div>
        <StyledRepositories>
          <div className="row">
            <div className="col-md-8">
              <Text bold>Repositorio Name</Text>
              <p>Lorem Ipsum is placeholder text commonly used in the graphicLorem Ipsum is placeholder text commonly used in the graphic</p>
              <div className="icons">
                <span className="icons-detail"><Icon icon="fa-code-fork" /> 650</span>
                <span className="icons-detail"><Icon icon="fa-star" /> 45</span>
              </div>
            </div>
            <div className="col-md-4">
              <div className="text-center">
                <ImageProfile url="http://placehold.it/400x200" />
                <div className="username"><Text bold>Username</Text></div>
              </div>
            </div>
          </div>
        </StyledRepositories>
      </div>
    )
  }
}

export default Repositories