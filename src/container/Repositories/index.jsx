import React, { Component, } from 'react'
import Text from '../../components/Text'
import Icon from '../../components/Icon'
import ImageProfile from '../../components/ImageProfile'
import StyledRepositories from './styled'
import githubProvider from 'core/providers/github'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { actions } from 'state/Repositories/actions'

class Repositories extends Component {

  componentWillMount() {
    this.props.createRepositories()
  }

  renderRepositories(repositorie) {
    return (
      <StyledRepositories key={repositorie.id}>
        <div className="row">
          <div className="col-md-8">
            <Text bold>{repositorie.name}</Text>
            <p>{repositorie.description}</p>
            <div className="icons">
              <span className="icons-detail"><Icon icon="fa-code-fork" />{repositorie.forks}</span>
              <span className="icons-detail"><Icon icon="fa-star" />{repositorie.stargazers_count}</span>
            </div>
          </div>
          <div className="col-md-4">
            <div className="text-center">
              <ImageProfile url={repositorie.owner.avatar_url} />
              <div className="username"><Text bold>{repositorie.owner.login}</Text></div>
            </div>
          </div>
        </div>
      </StyledRepositories>
    )
  }

  render() {
    const { repositories } = this.props
    return (
      <div>
        {repositories.map(this.renderRepositories)}
      </div>
    )
  }
}

Repositories.propTypes = {
  repositories: PropTypes.array
}

const mapProps = ({ repositories }) => repositories.repositoriesReducer

const mapActions = actions

export default connect(mapProps, mapActions)(Repositories)