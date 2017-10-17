import React from 'react'
import HeaderStyled from './styled'
import Icon from '../Icon'

const Hero = () => (
  <HeaderStyled>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="icon"><Icon icon="fa-github" /></div>
          <h1>Github</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <p>Lorem Ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p> 
        </div>
      </div>
    </div>
  </HeaderStyled>
)

export default Hero