import styled from 'styled-components'

export const WrapperBrand = styled.div`
  max-width: 1200px;
  margin: auto;
  & > div:first-child {
    font-weight: 600;
    font-family: 'Oswald';
    font-size: 30px;
    margin: 30px 0px;
  }
  .list_Brand {
    position: relative;
    margin-bottom: 50px;
    .ant-carousel .slick-dots li {
      top: 20px;
      background: linear-gradient(180deg, rgba(0, 0, 0, 0.48) 0, rgba(0, 0, 0, 0.65));
      border-radius: 50%;
      width: 10px;
      height: 10px;
    }
    .images_Brand {
      .child-brand {
        padding: 10px;
        img {
          cursor: pointer;
          width: 100%;
          border: 1px solid rgba(105, 105, 105, 0.163);
          &:hover {
            box-shadow: 0px 0px 5px gray;
            transform: scale(1.1);
          }
        }
      }
    }
    .brand_Next {
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
      right: -15px;
      top: 50%;
      transform: translateY(-50%);
      &:hover {
        background-color: #ffcc33;
        color: #e8e8e8;
      }
    }
    .brand_Prev {
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
      left: -15px;
      transform: translateY(-50%);
      &:hover {
        background-color: #ffcc33;
        color: #e8e8e8;
      }
    }
  }
  @media screen and (max-width: 768px) {
    .list_Brand {
      position: relative;
      margin-bottom: 50px;
      .ant-carousel {
        & .slick-dots li {
          display: none;
        }
      }
      .ant-carousel .slick-dots {
      }
      .images_Brand {
        width: 700px;
        .child-brand {
          padding: 10px;
          img {
            cursor: pointer;
            width: 100%;
            border: 1px solid rgba(105, 105, 105, 0.163);
            &:hover {
              box-shadow: 0px 0px 5px gray;
              transform: scale(1.1);
            }
          }
        }
      }
      .brand_Next {
        right: 0;
      }
      .brand_Prev {
        left: 0;
      }
    }
  }
`
