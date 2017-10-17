import React from 'react'
import PropTypes from 'prop-types'
import TextStyled from './styled'

const Text = ({ children, bold }) => (
  <TextStyled bold={bold}>
    {children}
  </TextStyled>
)

Text.proptypes = {
  children: PropTypes.node.isRequired
}

export default Text