import styled from 'styled-components'

export const WrapperTitle = styled.div`
  background-color: rgba(232, 232, 232);
  position: sticky;
  top: 0;
  z-index: 1;
  .detailTitle {
    display: flex;
    & > input {
      margin-left: 10px;
      width: 20px;
    }
    .checkboxProduct {
      width: 100%;
      .titleProduct {
        display: flex;
        justify-content: space-between;
        padding: 10px;
        & > div {
          font-size: 1.325rem;
          font-family: 'Oswald';
        }
        & > div:first-child {
          width: 35%;
          text-align: center;
        }
      }
      .cartProduct {
        padding: 10px 0px;
        justify-content: flex-end;
        display: flex;
        align-items: center;
        & > div:first-child {
          font-size: 1.125rem;
          & span {
            margin-left: 5px;
            color: gray;
            font-size: 15px;
          }
        }

        .deleteProduct {
          height: 35px;
          display: flex;
          align-items: center;
          padding: 10px !important;
          cursor: pointer;
          border-radius: 6px;
          margin-left: 45%;
          margin-right: 1%;
          background-color: #1677ff;
          color: white !important;

          &:hover {
            background-color: red;
          }
          .iconDelete {
            font-size: 20px;
          }
        }
      }
    }
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 10px;
    padding: 0px 10px;
    .checkboxProduct {
      width: 20%;
      & span {
        margin: 0px;
        font-size: 12px;
      }
    }
    .titleProduct {
      width: 80%;
      & div {
        font-size: 12px;
        margin-left: 35px;
      }
    }
  }
`
