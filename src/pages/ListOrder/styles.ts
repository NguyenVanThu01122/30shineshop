import styled from 'styled-components'

export const WrapperOrder = styled.div`
  display: flex;
  justify-content: center;
  margin: 40px 0px;
`
export const ItemOrder = styled.div`
  flex: 0.7;
  background-color: rgb(238, 238, 238);
  padding: 20px;
  height: 80vh;
  overflow-y: auto;
  .my-order {
    font-size: 20px;
    font-family: 'Oswald';
    font-weight: 600;
    margin-bottom: 20px;
  }
  .select-item {
    display: flex;
    justify-content: space-around;
    background-color: white;
    border-radius: 5px;
    .active-status {
      color: orange;
      font-weight: 600;
      border-bottom: 2px solid orange;
    }
    & div {
      padding: 15px 0px;
      cursor: pointer;
    }
  }
  .custom-input {
    margin: 15px 0px;
    height: 45px;
  }
  .no-order{
    color: red;
    text-align: center;
    font-style: italic;
    margin-top: 50px;
  }
`

export const ItemDetailOrder = styled.div`
  background-color: white;
  border-radius: 5px;
  padding: 15px;
  margin-bottom: 15px;

  .status {
    font-size: 18px;
    color: orange;
    margin-bottom: 10px;
  }
  .information-product {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid rgb(209, 209, 209);
    border-bottom: 1px solid rgb(209, 209, 209);
    padding: 10px 0px;
    margin: 15px 0px;
    .detail-order {
      display: flex;
      gap: 15px;
      .img-product {
        width: 80px;
      }
      .name-product {
        & div {
          margin-bottom: 5px;
        }
        & > div:nth-child(2) {
          color: gray;
        }
      }
    }
    .price {
      display: flex;
      gap: 6px;
      font-weight: 600;
      font-family: 'Oswald';
      & span {
        text-decoration: underline;
        font-family: 'Oswald';
      }
    }
  }
  .total-price {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin: 20px 0px;
    & > div:first-child {
      font-size: 18px;
      font-weight: 600;
      margin-right: 8px;
    }
    & > div:last-child {
      font-size: 22px;
      color: rgb(229, 77, 62);
      font-family: 'Oswald';

      & span {
        text-decoration: underline;
        margin-left: 6px;
        font-family: 'Oswald';
      }
    }
  }
  .select {
    display: flex;
    justify-content: space-between;
    align-items: center;
    & > div:first-child {
      color: gray;
    }
    .group-button {
      display: flex;
      gap: 8px;
      .button-add {
        background-color: orange;
      }
    }
  }
  
`
