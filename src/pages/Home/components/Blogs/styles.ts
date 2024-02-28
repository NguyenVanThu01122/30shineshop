import styled from 'styled-components'

export const WrapperBlogs = styled.div`
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
`
