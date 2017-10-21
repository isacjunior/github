import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { actions } from 'state/Repositories/actions'
import Text from '../../components/Text'
import Icon from '../../components/Icon'
import Preloader from '../../components/Preloader'
import ImageProfile from '../../components/ImageProfile'
import StyledRepositories from './styled'
import Requests from '../Requests'

class Repositories extends Component {

  componentWillMount() {
    this.props.createRepositories()
    this.renderRepositories = this.renderRepositories.bind(this)
    this.handleCloseModal = this.handleCloseModal.bind(this)
    this.handleOpenModal = this.handleOpenModal.bind(this)
    this.state = {
      showModal: false
    }
  }

  handleOpenModal() {
    this.setState({ showModal: true })
  }

  handleCloseModal() {
    this.setState({ showModal: false })
  }

  click(login, name) {
    this.props.createRequests(login, name)
    this.handleOpenModal()
  }

  renderRepositories(repositories) {
    const { id, name, description, forks, stargazers_count, owner } = repositories
    return (
      <StyledRepositories key={id}>
        <Requests
          showModal={this.state.showModal}
          handleCloseModal={this.handleCloseModal} 
        />
        <div className="row">
          <div className="col-md-8">
            <Text bold>
              <a onClick={() => this.click(owner.login, name)}>{name}</a>
            </Text>
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
    const { repositories, preloaderRepositories } = this.props
    return (
      <div>
        <Preloader check={preloaderRepositories} />
        {!preloaderRepositories && repositories.map(this.renderRepositories)}
      </div>
    )
  }
}

Repositories.propTypes = {
  repositories: PropTypes.array.isRequired,
  createRepositories: PropTypes.func.isRequired,
  createRequests: PropTypes.func.isRequired,
  preloaderRepositories: PropTypes.bool.isRequired
}

const mapProps = ({ repositories }) => repositories.repositoriesReducer

const mapActions = actions

export default connect(mapProps, mapActions)(Repositories)