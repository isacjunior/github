import styled from 'styled-components'

const StyledRepositories = styled.div`
  padding: 10px 10px;
  margin-top: 40px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);

  p {
    color: #556271;
  }

  .username {
    padding: 20px;
  }

  .icons {
    padding-top: 15px;

    .fa {
      font-size: 20px;
      color: #FF6A67;
      margin-right: 5px;
    }

    &-detail {
      padding-right: 15px;
      font-size: 18px;
      color: #c2c2c2;
    }
  }
`
export default StyledRepositories
