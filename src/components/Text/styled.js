import styled from 'styled-components'

const TextStyled = styled.span`
  color: #556271;
  font-size: 16px;
  font-weight: ${props => props.bold ? 'bold' : 'normal'};
  cursor: ${props => props.cursor};

  a {
    color: #556271;
    font-size: 16px;
    font-weight: ${props => props.bold ? 'bold' : 'normal'};
    cursor: ${props => props.cursor};
  }
`

export default TextStyled
