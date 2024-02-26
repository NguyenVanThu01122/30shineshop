import styled from 'styled-components'

export const DetailProductCart = styled.div`
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
      width: 30%;
      & > div:first-child {
        font-size: 1.125rem;
        font-family: 'Oswald';
        font-weight: 500;
        margin-left: 35px;
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
    width: 43%;
    display: flex;
    align-items: center;
    justify-content: center;
    .buttonUpDown {
      width: 45%;
      height: 35px;
      display: flex;
      margin-left: 25px;
      border: 1px solid rgb(202, 202, 202);
      border-radius: 8px;

      .btn {
        height: 100%;
        display: flex;
        align-items: center;
        font-size: 17px;
        padding: 0px 15px;
      }
      .btnAmount {
        height: 100%;
        width: 40px;
        text-align: center;
        font-size: 18px;
        cursor: pointer;
        padding: 6px;
        border: 1px solid rgb(202, 202, 202);
      }

      & > div:last-child {
        margin: auto;
        font-size: 30px;
        cursor: pointer;
      }
    }
    & > div:nth-child(2) {
      width: 50%;
      color: rgba(229, 77, 62);
      font-size: 1.25rem;
      font-weight: 600;
      font-family: 'Oswald';
      margin-left: 70px;
      & span {
        margin-left: 5px;
        font-family: 'Oswald';
        text-decoration: underline;
      }
    }
    .iconDelete {
      width: 15%;
      font-size: 30px;
      margin-left: 30px;
      cursor: pointer;
    }
  }
`
