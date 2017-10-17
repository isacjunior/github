import React from 'react'
import PropTypes from 'prop-types'
import StyledImageProfile from './styled'

const ImageProfile = ({ url }) => (
  <StyledImageProfile>
    <img src={url} className="user-profile" />
  </StyledImageProfile>
)

ImageProfile.propTypes = {
  url: PropTypes.string.isRequired
}

export default ImageProfile