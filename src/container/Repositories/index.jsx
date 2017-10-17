import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { actions } from 'state/Repositories/actions'
import Text from '../../components/Text'
import Icon from '../../components/Icon'
import ImageProfile from '../../components/ImageProfile'
import StyledRepositories from './styled'

class Repositories extends Component {

  componentWillMount() {
    this.props.createRepositories()
  }

  renderRepositories(repositories) {
    const { id, name, description, forks, stargazers_count, owner } = repositories
    return (
      <StyledRepositories key={id}>
        <div className="row">
          <div className="col-md-8">
            <Text bold>{name}</Text>
            <p>{description}</p>
            <div className="icons">
              <span className="icons-detail"><Icon icon="fa-code-fork" />{forks}</span>
              <span className="icons-detail"><Icon icon="fa-star" />{stargazers_count}</span>
            </div>
          </div>
          <div className="col-md-4">
            <div className="text-center">
              <ImageProfile url={owner.avatar_url} />
              <div className="username"><Text bold>{owner.login}</Text></div>
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
  repositories: PropTypes.array.isRequired,
  createRepositories: PropTypes.func.isRequired
}

const mapProps = ({ repositories }) => repositories.repositoriesReducer

const mapActions = actions

export default connect(mapProps, mapActions)(Repositories)