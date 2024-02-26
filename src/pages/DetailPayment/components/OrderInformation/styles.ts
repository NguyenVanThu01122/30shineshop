import styled from 'styled-components'

export const WrapperInformation = styled.div`
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
        font-size: 22px;

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
      height: 70px;
      border-radius: 5px;
      background-color: rgba(255, 204, 51);
      cursor: pointer;
      &:hover {
        filter: brightness(0.8);
      }
      & > div:first-child {
        font-weight: 600;
        font-family: 'Oswald';
        font-size: 1.25rem;
        margin-bottom: 4px;
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

  @media screen and (max-width: 768px) {
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
`
