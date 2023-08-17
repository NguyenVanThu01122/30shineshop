import styled from 'styled-components'
export const PaymentWrapper = styled.div`
  padding: 0px 135px;
  & > div:first-child {
    margin: 20px 0px;
    font-family: 'Oswald';
    font-size: 1.75rem;
    font-weight: 600;
  }
  .pagePayment {
    margin-bottom: 30px;
    display: flex;
    gap: 15px;
    .payment {
      width: 75%;
      .deliveryInformation {
        padding: 0px 20px;
        border-radius: 5px;
        border: 1px solid rgba(209, 209, 209);
        & > div:first-child {
          margin: 20px 0px;
          font-size: 20px;
          font-family: 'Oswald';
          font-weight: 600;
        }
        .itemInput {
          margin-bottom: 25px;
          .ant-input {
            height: 55px;
          }
        }
        .groupInput {
          display: flex;
          gap: 15px;
          & > div {
            width: 50%;
          }
          .ant-input {
            height: 55px;
          }
        }
      }
      .deliveryTime {
        margin: 20px 0px;
        .time {
          padding: 20px;
          border-radius: 5px;
          border: 1px solid rgba(209, 209, 209);
          & > div:first-child {
            font-size: 20px;
            font-family: 'Oswald';
            font-weight: 600;
          }
          .inputDelivery {
            display: flex;
            margin: 15px 0px;
            .ant-input {
              width: 19px;
              margin-right: 5px;
              font-size: 30px;
            }

            & span {
              color: rgba(95, 95, 95);
              margin-left: 3px;
            }
          }
        }
      }
      .orderNotes {
        padding: 20px 20px 30px 20px;
        border-radius: 5px;
        border: 1px solid rgba(209, 209, 209);
        & > div:first-child {
          font-size: 20px;
          font-family: 'Oswald';
          font-weight: 600;
        }
        .texArea {
          margin-top: 25px;
          height: 100px;
        }
        .errorText {
          color: red;
          margin-top: 15px;
        }
        .borderRed {
          border: 1px solid red;
        }
      }
      .itemProduct {
        margin: 20px 0px;
        border-radius: 5px;
        border: 1px solid rgba(209, 209, 209);
        padding: 20px;
        & > div:first-child {
          font-size: 20px;
          font-family: 'Oswald';
          font-weight: 600;
          margin-bottom: 16px;
          padding-left: 10px;
        }
        .product {
          display: flex;
          align-items: center;
          justify-content: space-around;
          border-top: 1px solid rgba(209, 209, 209);
          padding: 20px 0px;
          & > img {
            width: 10%;
          }
          .detailProdut {
            & > div:first-child {
              font-size: 0.875rem;
              font-family: 500;
              margin-bottom: 5px;
            }
            & > div:last-child {
              color: rgba(61, 61, 61);
              font-size: 0.875rem;
            }
          }
          .priceNumber {
            font-weight: 600;
            font-family: 'Oswald';
            font-size: 1.125rem;
            & span {
              font-weight: 600;
              font-family: 'Oswald';
              margin-left: 4px;
            }
          }
          & > div:nth-child(4) {
            font-weight: 500;
            font-size: 20px;
          }
          .priceQuantity {
            color: rgba(229, 77, 62);
            font-size: 1.25rem;
            font-family: 'Oswald';
            font-weight: 600;
            & span {
              color: rgba(229, 77, 62);
              font-weight: 600;
              font-family: 'Oswald';
              margin-left: 4px;
            }
          }
        }
      }
    }
    .informationLine {
      width: 25%;
      .information {
        border: 1px solid rgba(209, 209, 209);
        padding: 15px 10px;
        border-radius: 5px;
        & > div:first-child {
          font-family: 'Oswald';
          font-size: 1.25rem;
          font-weight: 600;
          text-align: center;
        }
        .itemProvisional {
          margin-top: 15px;
          display: flex;
          justify-content: space-between;
          & > div:first-child span {
            font-size: 0.875rem;
            font-weight: 400;
            color: gray;
            margin-left: 3px;
          }
          & > div:last-child {
            font-size: 1rem;
            font-weight: 600;
            font-family: 'Oswald';
            & span {
              margin-left: 5px;
              font-weight: 500;
              font-family: 'Oswald';
              text-decoration: underline;
            }
          }
        }
        & > div:nth-child(5) {
          text-decoration: underline;
          font-style: italic;
          font-size: 14px;
          margin-top: 15px;
        }
        .totalMoney {
          display: flex;
          justify-content: space-between;
          margin-top: 15px;
          border-top: 1px solid rgba(209, 209, 209);
          padding: 20px 0px 10px 0px;
          & > div:first-child {
            font-weight: 600;
            font-size: 18px;
          }
          & > div:last-child {
            font-weight: 600;
            font-family: 'Oswald';
            color: rgba(229, 77, 62);

            & span {
              margin-left: 5px;
              font-weight: 500;
              font-family: 'Oswald';
              color: rgba(229, 77, 62);
            }
          }
        }
        & > div:last-child {
          text-align: right;
          color: gray;
          font-size: 13px;
        }
      }
      .paymentMethods {
        margin: 20px 0px;
        border: 1px solid rgba(209, 209, 209);
        padding: 15px;
        border-radius: 5px;
        & > div:first-child {
          font-size: 1.25rem;
          font-weight: 600;
          font-family: 'Oswald';
          border-bottom: 1px solid rgba(209, 209, 209);
          padding-bottom: 18px;
        }
        .paymentCheckbox {
          display: flex;
          margin-top: 15px;
          .ant-input {
            width: 19px;
            margin-right: 5px;
            font-size: 30px;
          }
        }
      }
      .itemOrder {
        .order {
          width: 100%;
          height: 100%;
          padding: 8px 0px;
          border-radius: 5px;
          text-align: center;
          background-color: rgba(255, 204, 51);
          cursor: pointer;
          & > div:first-child {
            font-weight: 600;
            font-family: 'Oswald';
            font-size: 1.25rem;
            margin-bottom: 8px;
          }
          & > div:last-child {
            color: rgba(61, 61, 61);
            font-size: 0.75rem;
            font-family: 500;
          }
        }
        & > div:last-child {
          margin-top: 20px;
          color: rgba(95, 95, 95);
          font-size: 14px;
          & span {
            font-weight: 600;
          }
        }
      }
    }
  }
  @media screen and (max-width: 768px) {
    & {
      padding: 0px;
    }
    & > div:first-child {
      font-size: 25px;
    }
    .pagePayment {
      display: block;
      .payment {
        width: 100%;
        .itemProduct {
          padding: 10px;

          .product{
            display: flex;
            .detailProdut >div:first-child{
              font-size: 13px;
            }
            .priceNumber{
              font-size: 13px;
             }
             &>div:nth-child(4){
              margin: 0px 12px;
             }
          }
        }
      }
      .informationLine {
        width: 100%;
        .order {
          width: 60%;
          margin: auto;
        }
        .itemOrder > div:last-child {
          padding: 0px 10px;
        }
      }
    }
    
  }
`
