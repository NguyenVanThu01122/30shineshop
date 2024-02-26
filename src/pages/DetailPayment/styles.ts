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
      
      }
     
    }
  }
`
