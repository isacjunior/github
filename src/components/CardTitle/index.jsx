import React from 'react'
import PropTypes from 'prop-types'
import CardTitleStyled from './styled'

const CardTitle = ({ title }) => (
  <CardTitleStyled>
    <div>
      <h2>{title}</h2>
      <div className="line-under" />
    </div>
  </CardTitleStyled>
)

CardTitle.propTypes = {
  title: PropTypes.string.isRequired
}

export default CardTitle
