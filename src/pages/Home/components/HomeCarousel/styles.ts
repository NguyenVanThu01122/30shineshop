import styled from 'styled-components'

export const WrapperCarousel = styled.div`
  position: relative;
  .prev,
  .next {
    width: 40px;
    height: 40px;
    color: black;
    font-size: 20px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    padding: 10px;
    cursor: pointer;
  }
  .prev {
    left: 10px;
    &:hover {
      background-color: #ffcc33;
      color: white;
    }
  }

  .next {
    right: 10px;
    &:hover {
      background-color: #ffcc33;
      color: white;
    }
  }
  @media screen and (max-width: 768px) {
    position: relative;
    .prev,
    .next {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background-color: rgba(0, 0, 0, 0.5);
      color: white;
      padding: 10px;
      cursor: pointer;
    }

    .prev {
      left: 10px;
    }

    .next {
      right: 10px;
    }
    img {
      height: 160px;
      width: 100%;
      /* object-fit: contain; */
    }
  }
`
