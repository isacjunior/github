import React from 'react'
import PropTypes from 'prop-types'
import CardTitleStyled from './styled'

const CardTitle = ({ title }) => (
  <CardTitleStyled>
      <div>
        <h2>{title}</h2>
        <div className="line-under"></div>
      </div>
  </CardTitleStyled>
)

CardTitle.proptypes = {
  title: PropTypes.string.isRequired
}

export default CardTitle