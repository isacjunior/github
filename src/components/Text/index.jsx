import React from 'react'
import PropTypes from 'prop-types'
import TextStyled from './styled'

const Text = ({ children, bold, cursor }) => (
  <TextStyled bold={bold} cursor={cursor}>
    {children}
  </TextStyled>
)

Text.defaultProps = {
  bold: false,
  cursor: 'normal'
}

Text.propTypes = {
  children: PropTypes.node.isRequired,
  bold: PropTypes.bool,
  cursor: PropTypes.string
}

export default Text
