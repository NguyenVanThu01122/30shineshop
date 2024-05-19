import styled from 'styled-components'
export const OderSuccessWrapper = styled.div`
  .orderSuccess {
    text-align: center;
    & > img {
      width: 10%;
      margin-top: 20px;
    }
    & > div:nth-child(2) {
      font-size: 1.75rem;
      font-family: 'Oswald';
      font-weight: 600;
      margin-bottom: 10px;
      color: rgba(17, 177, 75);
    }
    & > div:last-child {
      font-weight: 500;
      font-size: 17px;
      margin-bottom: 20px;
    }
  }
  .informationOrder {
    width: 46%;
    margin: auto;
    border: 1px solid rgba(209, 209, 709);
    border-radius: 5px;
    padding: 20px;
    & > div:first-child {
      font-family: 'Oswald';
      font-weight: 600;
      font-size: 20px;
    }
    .informationPayment {
      display: flex;
      margin-top: 15px;
      & > div:first-child {
        width: 60%;
        font-weight: 550;
        border-bottom: 1px solid rgba(225, 225, 225);
      }
      & > div:last-child {
        width: 50%;
        font-weight: 550;
        font-family: 'Oswald';
        font-size: 18px;
        border-bottom: 1px solid rgba(225, 225, 225);
      }
      .personalInformation > div {
        font-weight: 550;
        font-family: 'Oswald';
        font-size: 18px;
      }
    }
  }
  .orderDetail {
    width: 46%;
    display: flex;
    margin: auto;
    margin-top: 20px;
    margin-bottom: 60px;
    gap: 20px;
    & > div:first-child {
      width: 50%;
      padding: 15px;
      font-size: 1.125rem;
      border: 1px solid rgba(209, 209, 209);
      border-radius: 5px;
      text-align: center;
      cursor: pointer;
      &:hover {
        filter: brightness(0.7);
        outline: 1px solid red;
        color: red;
      }
    }
    & > div:last-child {
      width: 50%;
      padding: 15px;
      font-size: 1.125rem;
      background-color: red;
      border-radius: 5px;
      text-align: center;
      background-color: rgba(255, 204, 51);
      cursor: pointer;
      & span {
        margin-left: 5px;
      }
      &:hover {
        outline: 1px solid red;
        color: red;
      }
    }
  }
  @media screen and (max-width: 768px) {
    .informationOrder {
      width: 100%;
      .informationPayment {
        & > div:first-child {
        }
        & > div:last-child {
          font-size: 16px;
        }
      }
    }
    .orderDetail {
      width: 100%;
      & > div:first-child {
        font-size: 13px;
        font-weight: bold;
        border: 1px solid red;
      }
      & > div:last-child {
        font-size: 13px;
        font-weight: bold;
      }
      & > div:last-child span {
        font-size: 10px;
        margin-left: 0px;
      }
    }
  }
`
