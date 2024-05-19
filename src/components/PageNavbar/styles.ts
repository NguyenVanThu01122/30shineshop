import styled from 'styled-components'

export const WrapperNavbar = styled.div`
  display: flex;
  background-color: rgba(246, 246, 246);
  margin-bottom: 20px;
  padding: 10px 140px;
  & div {
    color: rgba(28, 28, 28, 0.731);
    cursor: pointer;
  }
  & > div:last-child {
    margin-left: 10px;
  }
  @media screen and (max-width: 768px) {
    padding: 10px 20px;
  }
`
