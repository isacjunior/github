import styled from 'styled-components'

const TextStyled = styled.span`
  color: #556271;
  font-size: 16px;
  font-weight: ${props => props.bold ? 'bold' : 'normal'};

  a {
    color: #556271;
    font-size: 16px;
    font-weight: ${props => props.bold ? 'bold' : 'normal'};
  }
`

export default TextStyled
