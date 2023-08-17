import { Modal } from 'antd'
import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  padding: 50px 200px;
  .pageAddress {
    width: 70%;
    .titleAddress {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 10px;
      & > div:first-child {
        font-weight: 600;
        font-size: 20px;
        padding: 10px;
      }
      .button {
        background-color: yellow;
        height: 40px;
        .icon-plus {
          font-size: 20px;
        }
      }
    }
    .parent-address {
      /* border-bottom: 1px solid rgb(209, 209, 209); */
    }
    .address {
      display: flex;
      margin-top: 5px;
      border-bottom: 1px solid rgb(209, 209, 209);
      padding: 10px;
      div {
        width: 50%;
      }
    }
    .action {
      display: flex;
      justify-content: flex-end;
      padding: 10px;
      gap: 15px;
      .buttonDelete {
        background-color: yellow;
      }
      .buttonDelete:hover{
        color: white;
        background-color: red;
      }
    }
  }
`

export const MyModal = styled(Modal)`
  .title {
    margin-bottom: 10px;
    text-align: center;
  }
  .group-button {
    display: flex;
    justify-content: center;
    gap: 10px;
    .buttonSubmit {
      background-color: yellow;
      height: 40px;
      border-radius: 5px;
    }
  }
`
