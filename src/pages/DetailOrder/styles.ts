import styled from 'styled-components'

export const WrapperDetailOrder = styled.div`
  max-width: 1600px;
  display: flex;
  justify-content: center;
  margin: 35px 0px;
  @media screen and (max-width: 768px) {
    width: 100vw;
    margin: 0px;
  }
`
export const ItemDetailOrder = styled.div`
  background-color: rgb(238, 238, 238);
  flex: 0.7;
  padding: 20px 0px;
  height: 80vh;
  overflow-y: auto;
  position: relative;
  ::-webkit-scrollbar {
    width: 5px; /* Độ rộng của thanh cuộn */
    margin-right: 10px !important; /* Khoảng cách margin bên phải */
  }
  ::-webkit-scrollbar-thumb {
    background-color: orange; /* Màu nền của nút cuộn (thumb) */
    border-radius: 10px; /* Bo góc của nút cuộn */
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: #555; /* Màu nền khi hover lên nút cuộn */
  }
  ::-webkit-scrollbar-track {
    background-color: rgb(0, 0, 0, 0.1); /* Màu nền của thanh cuộn */
  }
  ::-webkit-scrollbar-track:hover {
    background-color: #d4d4d4; /* Màu nền khi hover lên thanh cuộn */
  }
  .order {
    font-size: 25px;
    font-family: 'Oswald';
    font-weight: 600;
    position: sticky;
    top: -25px;
    z-index: 100;
    padding: 6px 0px;
    color: red;
    background-color: rgb(238, 238, 238);
  }
  .order-detail {
    padding: 20px;
    background-color: white;
    .delivery-address {
      display: flex;
      justify-content: space-between;
      & > div:first-child {
        font-size: 18px;
        font-weight: 600;
      }
      & > div:last-child {
        color: orange;
      }
    }
    .item-information {
      margin: 20px 0px;
      display: flex;
      .order-information {
        flex: 1;
        border-right: 1px solid rgb(200, 200, 200);
        & > div {
          margin-bottom: 6px;
        }
      }
      .custom-timeLine {
        flex: 2;
      }
    }
    .product-information {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px 0px;
      border-top: 1px solid rgb(200, 200, 200);
      border-bottom: 1px solid rgb(200, 200, 200);
      .product {
        display: flex;
        align-items: center;
        gap: 10px;
        .img-product {
          width: 12%;
        }
        .name-product {
          width: 70%;
          & > div {
            margin-bottom: 6px;
            font-size: 15px;
          }
        }
      }
      .price {
        font-family: 'Oswald';
        font-weight: 600;
        & span {
          margin-left: 6px;
          text-decoration: underline;
          font-family: 'Oswald';
        }
      }
    }
    .total-price {
      display: flex;
      justify-content: flex-end;
      padding: 15px 0px;
      gap: 100px;
      .title-price {
        display: flex;
        flex-direction: column;
        align-items: end;
        gap: 15px;
        & > div:last-child {
          font-weight: 600;
          font-size: 18px;
        }
      }
      .money-price {
        display: flex;
        flex-direction: column;
        align-items: end;
        gap: 15px;
        & div {
          font-weight: 600;
          font-size: 18px;
          font-family: 'Oswald';
          & span {
            font-family: 'Oswald';
            margin-left: 6px;
            text-decoration: underline;
          }
        }
        & > div:last-child {
          font-weight: 600;
          color: rgb(229, 77, 62);
          font-size: 18px;
          font-family: 'Oswald';
          & span {
            font-family: 'Oswald';
            margin-left: 6px;
            text-decoration: underline;
          }
        }
      }
    }
    .itemInfo-order {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-top: 1px solid rgb(200, 200, 200);
      border-bottom: 1px solid rgb(200, 200, 200);
      .payment-method {
        display: flex;
        justify-content: flex-end;
        gap: 30px;
        padding: 15px 0px;
      }
      .status-order {
      }
    }

    .item-buy {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 20px;
      & > div:first-child {
        color: orange;
      }
      .btnHome {
        width: 20%;
        height: 40px;
        background-color: orange;
        font-weight: 600;
        border: none;
        font-size: 15px;

        &:hover {
          color: red;
          filter: brightness(0.8);
        }
      }
      .btnListOrder {
        width: 20%;
        height: 40px;
        background-color: #1677ff;
        font-weight: 600;
        border: none;
        color: wheat;
        font-size: 15px;
        &:hover {
          color: red;
          filter: brightness(0.8);
        }
      }
    }
  }
  @media screen and (max-width: 768px) {
    width: 100vw;
    height: 100vh;
    position: absolute;
    .ant-timeline-item {
      padding-bottom: 0px;
    }
    .order {
      font-size: 20px;
      position: fixed;
      top: 60px;
      width: 100%;
      padding-left: 20px;
    }
    .order-detail {
      .delivery-address {
        flex-direction: column;
        & > div:first-child {
          font-size: 15px;
        }
        & > div:last-child {
          font-size: 15px;
        }
      }
      .item-information {
        flex-direction: column;
        .order-information {
          border-right: none;
        }
        .custom-timeLine {
          margin-top: 20px;
        }
      }
      .product-information {
        flex-direction: column;
        .product {
          .img-product {
            width: 20%;
          }
          .name-product {
            width: 80%;
          }
        }
        .price {
          margin-top: 10px;
        }
      }
      .total-price {
        justify-content: center;
        gap: 20px;
        .title-price {
          align-items: start;
          gap: 10px;
          & > div:last-child {
            font-size: 15px;
          }
        }
        .money-price {
          align-items: start;
          gap: 10px;
          & div {
            font-size: 15px;
          }
          & > div:last-child {
            font-size: 15px;
          }
        }
      }
      .itemInfo-order {
        flex-direction: column;
        .payment-method {
          gap: 10px;
        }
      }
      .item-buy {
        gap: 10px;
        .btnHome {
          width: 50%;
          height: 50px;
          font-size: 13px;
        }
        .btnListOrder {
          width: 50%;
          height: 50px;
          font-size: 13px;
        }
      }
    }
  }
`
export const ItemNotAvailable = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 140px;
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
