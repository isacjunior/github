import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../Icon'
import StyledPreloader from './styled'

const Preloader = ({ check }) => (
  check && (
    <StyledPreloader>
      <div className="text-center">
        <Icon icon="fa-spinner fa-pulse fa-3x fa-fw" />
      </div>
    </StyledPreloader>
  )
)

Preloader.propTypes = {
  check: PropTypes.bool.isRequired
}

export default Preloader
