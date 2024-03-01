import styled from 'styled-components'

export const WrapperMessage = styled.div`
  width: 500px;
  height: 400px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 70px;
  gap: 10px;
  & > div {
    font-size: 18px;
    color: red;
    font-style: italic;
  }
  .iconGifDuck {
    width: 170px;
    height: 170px;
    border-radius: 50%;
  }
`

export const BoxNoDataCart = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    width: 300px;
    height: 180px;
    object-fit: contain;
  }
  .btn {
    font-weight: 600;
    font-size: 18px;
    margin-top: 25px;
    height: 45px;
    color: white !important;
    background-color: orange;
    display: flex;
    align-items: center;
    gap: 10px;
    border: none;
    &:hover {
      filter: brightness(0.7);
    }
  }
`
