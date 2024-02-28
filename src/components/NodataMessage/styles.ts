import styled from 'styled-components'

export const WrapperMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 150px;
  gap: 10px;
  & > div {
    font-size: 18px;
    color: red;
    font-style: italic;
  }
  .iconGifDuck {
    width: 200px;
    height: 200px;
    border-radius: 50%;
  }
`
