import styled from 'styled-components'
export const Wrapper = styled.div`
  .item_Carousel {
    position: relative;
    & img {
      width: 100%;
    }
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
  }
  .item_Commitment {
    padding: 35px 0px;
    margin-bottom: 30px;
    display: flex;
    justify-content: center;
    border-bottom: 2px solid #e8e8e8;
    .detail_Commitment {
      display: flex;
      align-items: center;
      width: 20%;
      border-right: 2px solid #e8e8e8;
      padding-left: 30px;

      & img {
        margin-right: 15px;
      }
    }
    .icon_Commitment {
      display: flex;
      align-items: center;
      padding-left: 30px;
      width: 20%;
      & img {
        margin-right: 15px;
      }
    }
  }
  .item_Service {
    display: flex;
    justify-content: space-around;
    padding: 0px 140px;
    .detail_Service {
      text-align: center;
      width: 10%;
      & > div:last-child {
        font-size: 17px;
      }
    }
  }
  .seach_Products {
    position: relative;
    padding: 0px 140px;
    margin-top: 40px;
    margin-bottom: 30px;
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
      &:hover {
        background-color: #ffcc33;
        color: white;
      }
    }
    .prev {
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
  }
  .products {
    padding: 0px 140px;
    display: grid;
    grid-template-columns: 400px 400px 400px;
    cursor: pointer;
    gap: 20px;
    .image_Products {
      width: 100%;
    }
  }
  .list_Products {
    text-align: center;
    padding: 30px 0px 70px 0px;
    margin-top: 20px;
    background-image: url(https://shop.30shine.com/images/banner-group.png);
    & > div:first-child {
      font-weight: 600;
      font-family: 'Oswald';
      font-size: 30px;
      margin-bottom: 5px;
    }
    & > div:last-child {
      font-size: 20px;
      color: rgba(95, 95, 95);
      font-weight: 600;
    }
  }
  .custom-tabs {
    /* border: 1px solid rgba(10,10,10); */
    background: white;
    border-radius: 5px;
    margin-bottom: 50px;
    padding: 0px 10px;
    width: 80%;
    margin: auto;
    position: relative;
    top: -30px;
    font-weight: 600;
    font-size: 30px;
    .ant-tabs-ink-bar {
      background-color: yellow; /* Đổi màu gạch chân thành màu đỏ (#f00) */
    }
    .ant-tabs-tab-active .ant-tabs-tab-btn {
      color: yellow;
    }
  }
  .ant-tabs-tab {
    font-size: 20px;
    padding: 10px;
  }
  .item_Brand {
    padding: 0px 140px;
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
  }
  .item_Blogs {
    padding: 40px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    /* padding-left: 70px; */
    /* padding-top: 40px; */
    /* height: 70vh; */
    background-image: url('	https://shop.30shine.com/images/Rectangle505.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    .blogs {
      padding: 15px;
      border-radius: 20px;
      background: linear-gradient(180deg, rgba(0, 0, 0, 0.48) 0, rgba(0, 0, 0, 0.65));
      width: 60%;
      .title_Blogs {
        display: flex;
        justify-content: space-between;
        & > div:first-child {
          font-size: 30px;
          font-family: 600;
          font-family: 'Oswald';
          color: white;
        }
        .icon_blogs {
          display: flex;
          .blogs_Next {
            width: 40px;
            height: 40px;
            background-color: gray;
            color: white;
            font-size: 20px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            margin-left: 16px;
            border: 1px solid white;
            &:hover {
              background-color: #ffcc33;
              color: white;
            }
          }
          .blogs_Prev {
            width: 40px;
            height: 40px;
            background-color: gray;
            color: white;
            font-size: large;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            border: 1px solid white;
            &:hover {
              background-color: #ffcc33;
              color: white;
            }
          }
        }
      }
      .detail_blogs {
        height: 450px;
        padding: 10px;
        img {
          width: 100%;
          height: 250px;
          object-fit: cover;
          border-radius: 5px;
        }
        & > div:nth-child(2) {
          color: white;
          font-size: 25px;
          font-weight: 600;
          font-family: 'Oswald';
          padding: 0px 6px;
          margin: 8px 0px;
        }
        & > div:last-child {
          color: white;
          padding: 0px 6px;
          height: 80px;
          /* border: 1px solid red; */
          overflow-y: auto;
        }
      }
      .see_all {
        display: flex !important;
        flex-direction: column;
        justify-content: center !important;
        align-items: center !important;
        margin-top: 10px !important;
        border-radius: 5px;
        width: 96% !important;
        margin: auto;
        height: 450px;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0.48) 0, rgba(0, 0, 0, 0.65));
        cursor: pointer;
        .icon_arrow {
          color: white;
          background-color: rgba(255, 204, 51, 0.913);
          width: 30px;
          height: 30px;
          padding: 10px;
          border-radius: 50%;
          border: 1px solid white;
          margin-bottom: 6px;
        }
        & > div {
          color: rgba(255, 204, 51, 0.913);
          font-style: italic;
          text-decoration: underline;
          font-size: 20px;
        }
      }
    }
    .ant-carousel .slick-dots li button {
      position: relative;
      top: -40px;
    }
  }
`
