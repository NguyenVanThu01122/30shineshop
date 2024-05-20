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
    font-size: 20px;
    color: red;
    font-style: italic;
  }
  .iconGifDuck {
    width: 170px;
    height: 170px;
    border-radius: 50%;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    & > div {
      font-size: 25px;
    }
    .iconGifDuck {
      width: 120px;
      height: 120px;
    }
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
    margin-top: 30px;
    height: 40px;
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
