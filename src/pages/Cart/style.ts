import styled from 'styled-components'
export const CartWrapper = styled.div`
  padding: 0px 135px;
  margin-top: 40px;
  margin-bottom: 40px;
  display: flex;
  gap: 20px;
  .itemCart {
    width: 75%;
    & > div:first-child {
      font-family: 'Oswald';
      font-size: 1.75rem;
      font-weight: 600;
      margin-bottom: 15px;
    }
    .itemProduct {
      .product {
        padding-top: 15px;
        margin-bottom: 20px;
        border-top: 1px solid rgb(220, 217, 217);
        border-left: 1px solid rgb(222, 218, 218);
        border-right: 1px solid rgb(222, 218, 218);
        .itemTitle {
          display: flex;
          margin-bottom: 20px;
        }
        .checkboxProduct {
          width: 38%;
          & input[type='checkbox'] {
            margin-left: 8px;
            width: 18px;
            height: 18px;
          }
          & span {
            margin-left: 130px;
            font-size: 1.125rem;
            font-weight: 500;
            font-family: 'Be Vietnam Pro';
          }
        }
        .titleProduct {
          width: 60%;
          display: flex;
          justify-content: space-around;
          & div {
            font-size: 1.125rem;
            font-weight: 500;
            font-family: 'Be Vietnam Pro';
          }
        }
        .detailProduct {
          display: flex;
          border-bottom: 1px solid rgb(222, 218, 218);
          padding: 20px 0px;
          .informationProduct {
            display: flex;
            align-items: center;
            width: 57%;
            .imgProduct {
              width: 13%;
            }

            & input[type='checkbox'] {
              margin-left: 8px;
              width: 27px;
              height: 18px;
            }
            & > div:nth-child(3) {
              width: 54%;
              font-size: 0.875rem;
              font-weight: 500;
              font-family: 'Be Vietnam Pro';
            }
            .priceProduct {
              & > div:first-child {
                font-size: 1.125rem;
                font-family: 'Oswald';
                font-weight: 500;
                margin-left: 15px;
              }
              .priceSale {
                display: flex;
                align-items: center;
                margin-top: 8px;
                margin-left: 10px;
                & > div:first-child {
                  font-size: 11px;
                  margin-right: 8px;
                  color: gray;
                  text-decoration: line-through;
                }
                & > div:last-child {
                  border-radius: 3px;
                  background-color: rgba(255, 204, 51);
                  font-weight: 400;
                  padding: 5px 15px;
                  color: gray;
                  font-size: 14px;
                  text-align: center;
                }
              }
            }
            & span {
              font-size: 1.125rem;
              font-family: 'Oswald';
              font-weight: 600;
              margin-left: 6px;
            }
          }
          .upDown {
            width: 45%;
            display: flex;
            align-items: center;
            justify-content: center;
            .buttonUpDown {
              display: flex;
              margin-left: 25px;
              border: 1px solid rgb(202, 202, 202);
              border-radius: 8px;
              & > div:nth-child(2) {
                display: flex;
                align-items: center;
                font-size: 17px;
                padding: 0px 15px;
                border-left: 1px solid rgb(202, 202, 202);
                border-right: 1px solid rgb(202, 202, 202);
              }
              & > div:first-child {
                padding: 0px 15px;
                font-size: 30px;
                cursor: pointer;
              }
              & > div:last-child {
                padding: 0px 15px;
                font-size: 30px;
                cursor: pointer;
              }
            }
            & > div:nth-child(2) {
              color: rgba(229, 77, 62);
              font-size: 1.25rem;
              font-weight: 600;
              font-family: 'Oswald';
              margin-left: 70px;
            }
            .iconDelete {
              font-size: 25px;
              margin-left: 30px;
              cursor: pointer;
            }
          }
        }
      }
    }
  }
  .informationLine {
    width: 25%;
    margin-top: 56px;
    .itemPay {
      border: 1px solid rgb(222, 218, 218);
      padding: 10px;
      margin-bottom: 20px;
      & > div:first-child {
        text-align: center;
        margin-bottom: 15px;
        font-weight: 600;
        font-family: 'Oswald';
        font-size: 1.2rem;
      }
      .itemProvisional {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid rgb(222, 218, 218);
        .provisional {
          display: flex;
          margin-bottom: 10px;
          & > div:first-child {
            font-weight: 500;
          }
          & span {
            margin-left: 8px;
            font-weight: 400;
            font-size: 0.875rem;
          }
        }
        .number {
          font-family: 'Oswald';
          & span {
            font-family: 'Oswald';
            text-decoration: underline;
          }
        }
      }
      .totalMoney {
        margin-top: 15px;
        .money {
          display: flex;
          justify-content: space-between;
          & > div:first-child {
            font-size: 1.125rem;
            font-weight: 550;
          }
          .numberTotal {
            color: rgba(229, 77, 62);
            font-family: 'Oswald';
          }
          .numberTotal span {
            font-family: 'Oswald';
            text-decoration: underline;
          }
        }
        & > div:last-child {
          font-family: 'Be Vietnam Pro';
          text-align: right;
          color: rgba(95, 95, 95);
          font-size: 12px;
        }
      }
    }
    .order {
      cursor: pointer;
      text-align: center;
      padding: 10px;
      background:yellow;
      & > div:first-child {
        font-family: 'Oswald';
        font-weight: 600;
        font-size: 20px;
        margin-bottom: 8px;
      }
      & > div:last-child {
        font-size: 12px;
      }
    }
    /* .border {
      background-color: yellow;
    } */
    .borderRed {
      border: 1px solid red;
      background-color: rgba(255, 204, 51, 0.913);
    }
  }
`