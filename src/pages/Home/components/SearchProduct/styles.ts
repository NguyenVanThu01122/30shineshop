import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  max-width: 1200px;
  margin: auto;
  margin-top: 40px;
  margin-bottom: 40px;
  .ant-carousel .slick-dots li {
    background-color: pink;
    bottom: 25px;
  }
  & > div:first-child {
    font-size: 1.875rem;
    color: rgba(229, 77, 62);
    cursor: pointer;
    font-family: 'Oswald';
    font-weight: 600;
    margin-bottom: 20px;
  }
  .carousel_List_Products {
    border-radius: 5px;
    margin-top: 20px;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.2);
    & img {
      width: 100% !important;
      /* height: 100% !important; */
      /* border: 1px solid black; */
    }
    & img:hover {
      box-shadow: 2px 2px 5px rgba(105, 105, 105, 0.863);
    }
  }
  .next {
    width: 40px;
    height: 40px;
    background-color: rgb(239, 232, 232);
    color: blue;
    font-size: 20px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position: absolute;
    z-index: 1000;
    top: 55%;
    right: 120px;
    z-index: 1 !important;
    &:hover {
      background-color: #ffcc33;
      color: white;
    }
  }
  .prev {
    z-index: 1 !important;
    width: 40px;
    height: 40px;
    color: blue;
    background-color: rgb(239, 232, 232);
    font-size: large;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position: absolute;
    z-index: 10000;
    top: 55%;
    left: 120px;
    &:hover {
      background-color: #ffcc33;
      color: white;
    }
  }
  @media screen and (max-width: 768px) {
    padding: 0px 0px;
    .next {
      right: 0px;
      &:hover {
        background-color: #ffcc33;
        color: white;
      }
    }
    .prev {
      left: 0px;
    }
  }
`
