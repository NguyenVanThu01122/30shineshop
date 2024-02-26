import styled from 'styled-components'

export const WrapperDeliveryTime = styled.div`
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
`
