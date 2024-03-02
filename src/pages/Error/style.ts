import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 50%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 500px;
    height: 500px;
  }
  .btn {
    height: 40px;
    width: 150px;
    color: white !important;
    background-color: orange;
    border: none;
    &:hover {
      filter: brightness(0.7);
    }
  }
`
