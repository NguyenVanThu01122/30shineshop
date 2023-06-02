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
    border: 1px solid rgba(209, 209, 209);
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
        width: 40%;
        font-weight: 550;
      }
      & > div:last-child {
        width: 60%;
        font-weight: 550;
        font-family: 'Oswald';
        font-size: 18px;
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

    }
    & > div:last-child {
      width: 50%;
      padding: 15px;
      font-size: 1.125rem;
      background-color: red;
      border-radius: 5px;
      text-align: center;
      background-color: rgba(255,204,51);
      cursor: pointer;
      & span{
        margin-left: 5px;
      }
    }
  }
`
