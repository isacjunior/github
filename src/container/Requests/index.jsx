import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Modal } from 'react-bootstrap'
import { connect } from 'react-redux'
import { actions } from 'state/Repositories/actions'
import truncate from 'lodash/truncate'
import Text from '../../components/Text'
import Preloader from '../../components/Preloader'
import ImageProfile from '../../components/ImageProfile'
import StyledRequests from '../Repositories/styled'


class Requests extends Component {

  renderPullRequests(request) {
    const { id, title, body, user } = request
    return (
      <StyledRequests key={id}>
        <div className="row">
          <div className="col-md-8">
            <Text bold>
              <a>{title}</a>
            </Text>
            <p>{truncate(body, { length: 70, })}</p>
          </div>
          <div className="col-md-4">
            <div className="text-center">
              <ImageProfile url={user.avatar_url} />
              <div className="username"><Text bold>{user.login}</Text></div>
            </div>
          </div>
        </div>
      </StyledRequests>
    )
  }

  renderModal() {
    const { requests, preloaderRequests } = this.props
    return (
      <Modal
        show={this.props.showModal}
        onHide={this.props.handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Pull Requests</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Preloader check={preloaderRequests} />
          {!preloaderRequests && requests.map(this.renderPullRequests)}
        </Modal.Body>
      </Modal>
    )
  }

  render() {
    return this.renderModal()
  }
}

Requests.propTypes = {
  requests: PropTypes.array.isRequired,
  showModal: PropTypes.bool.isRequired,
  handleCloseModal: PropTypes.func.isRequired,
  preloaderRequests: PropTypes.bool.isRequired
}

const mapProps = ({ repositories }) => repositories.repositoriesReducer

const mapActions = actions

export default connect(mapProps, mapActions)(Requests)
