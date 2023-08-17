import styled from 'styled-components'

export const Wrapper = styled.div`
  .image-slider {
    border: 1px solid black;
    position: relative;
    img {
      width: 100% !important;
      height: 300px !important;
      object-fit: cover;
    }
    .prev,
    .next {
      width: 30px;
      height: 30px;
      background-color: pink;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
    .prev {
      position: absolute;
      z-index: 1000;
      top: 50%;
      left: 20px;
      transform: translateY(-50%);
    }
    .next {
      position: absolute;
      z-index: 1000;
      right: 20px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
`
