import styled from 'styled-components'

export const WrapperCarousel = styled.div`
  .next {
    width: 40px;
    height: 40px;
    background-color: rgb(239, 232, 232);
    color: black;
    font-size: 20px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position: absolute;
    z-index: 1000;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
    &:hover {
      background-color: #ffcc33;
      color: white;
    }
  }
  .prev {
    width: 40px;
    height: 40px;
    background-color: rgb(239, 232, 232);
    color: black;
    font-size: large;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position: absolute;
    z-index: 1000;
    top: 50%;
    left: 20px;
    transform: translateY(-50%);
    &:hover {
      background-color: #ffcc33;
      color: white;
    }
  }
`
