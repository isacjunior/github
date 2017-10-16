import React from 'react'
import PropTypes from 'prop-types'
import CardTitleStyled from './styled'

const CardTitle = ({ title }) => (
  <CardTitleStyled>
    <h2>{title}</h2>
  </CardTitleStyled>
)

CardTitle.proptypes = {
  title: PropTypes.string.isRequired
}

export default CardTitle