import styled from 'styled-components'

export const WrapperDetailOrder = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0px;
`
export const ItemDetaiOrder = styled.div`
  background-color: rgb(238, 238, 238);
  flex: 0.7;
  padding: 15px;
  .order {
    font-size: 22px;
    font-family: 'Oswald';
    font-weight: 600;
    padding: 0px 20px;
    margin: 20px 0px;
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
        .name-product{
          width:70%;
          &>div{
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
    .payment-method {
      display: flex;
      justify-content: flex-end;
      gap: 30px;
      padding: 15px 0px;
      border-top: 1px solid rgb(200, 200, 200);
      border-bottom: 1px solid rgb(200, 200, 200);
    }
    .item-buy {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 20px;
      & > div:first-child {
        color: orange;
      }
      & > button {
        background-color: orange;
        font-weight: 600;
      }
    }
  }
`
