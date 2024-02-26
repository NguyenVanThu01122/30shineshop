import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 35px 0px;
  margin-bottom: 0px;
`
export const ContainerAddress = styled.div`
  flex: 0.7;
  height: 80vh;
  overflow-y: auto;
  position: relative;
  &::-webkit-scrollbar-thumb {
    border-radius: 5px !important;
  }
  &::-webkit-scrollbar {
    width: 4px !important;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent !important; //Màu của vùng cuộn
  }
  &:hover {
    &::-webkit-scrollbar-thumb {
      background: linear-gradient(217deg, #e250e5, #4b50e6) !important;
    }
  }

  .pageAddress {
    .titleAddress {
      /* height: 60px; */
      padding: 22px 0px 5px 0px;
      display: flex;
      /* align-items: center; */
      justify-content: space-between;
      position: sticky;
      padding-right: 10px;
      top: -16px;
      z-index: 100;
      background-color: rgb(238, 238, 238);
      & > div:first-child {
        font-weight: 600;
        font-size: 25px;
        font-family: 'Oswald';
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

    .notificationSection {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      margin-top: 140px;
      gap: 10px;
      & > div {
        font-size: 18px;
        color: red;
        font-style: italic;
      }
      .iconGifDuck {
        width: 200px;
        height: 200px;
        border-radius: 50%;
      }
    }
    .address {
      display: flex;
      margin-top: 5px;
      border-bottom: 1px solid rgb(230, 230, 230);
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
      .buttonEdit {
        color: white !important;
        background-color: #1677ff;
        &:hover {
          filter: brightness(0.7);
        }
      }
      .buttonDelete {
        background-color: yellow;
      }
      .buttonDelete:hover {
        color: white;
        background-color: red;
      }
    }
    .notification {
      color: red;
    }
  }
`
export const ItemTitle = styled.h2`
  margin-bottom: 10px;
  text-align: center;
`
export const GroupButton = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  .buttonSubmit {
    background-color: #1677ff;
    height: 40px;
    border-radius: 5px;
    color: white !important;
    font-weight: 600;
    border: none;
    &:hover {
      filter: brightness(0.7);
    }
  }
  .buttonCancel {
    background-color: orangered;
    height: 40px;
    border-radius: 5px;
    color: white !important;
    font-weight: 600;
    border: none;
    &:hover {
      filter: brightness(0.7);
    }
  }
`
