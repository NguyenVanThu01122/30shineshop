import styled from 'styled-components'

export const WrapperInformation = styled.div`
  width: 25%;
  margin-top: 56px;
  .itemPay {
    border: 1px solid rgb(222, 218, 218);
    padding: 10px 0px;
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
      padding: 10px;
      .provisional {
        display: flex;
        margin-bottom: 10px;
        & > div:first-child {
          font-weight: 500;
        }
        & span {
          margin-left: 6px;
          font-weight: 400;
          font-size: 0.875rem;
        }
        .amountOrder {
          display: flex;
          & > div:last-child {
            margin-left: 0px;
            & span {
              font-size: 13px;
            }
          }
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
      padding: 0px 10px;
      .money {
        display: flex;
        justify-content: space-between;
        & > div:first-child {
          font-size: 18px;
        }
        .numberTotal {
          color: rgba(229, 77, 62);
          font-size: 20px;
          font-weight: 600;
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
    background: gray;
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
  .colorYelow {
    background-color: rgba(255, 204, 51, 0.913);
  }

  @media screen and (max-width: 768px) {
    .informationLine {
      width: 100%;
      .itemPay {
        & > div:first-child {
          font-size: large;
        }
      }
      .order {
        width: 50%;
        margin: auto;
        padding: 5px;
        border-radius: 6px;
        & > div:first-child {
          margin-bottom: 5px;
          font-size: 16px;
        }
        & > div:last-child {
          font-size: 10px;
        }
      }
    }
  }
`
