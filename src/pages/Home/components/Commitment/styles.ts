import styled from 'styled-components'
export const Wrapper = styled.div``
export const ItemCommitment = styled.div`
  max-width: 1200px;
  padding: 35px 0px;
  margin-bottom: 30px !important;
  display: flex;
  justify-content: center;
  border-bottom: 2px solid #e8e8e8;
  margin: auto;
  .detail_Commitment {
    display: flex;
    align-items: center;
    width: 20%;
    border-right: 2px solid #e8e8e8;
    padding-left: 30px;

    & img {
      margin-right: 15px;
    }
  }
  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    .detail_Commitment {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      width: 100%;
      border: 2px solid #e8e8e8;
      padding: 6px 6px;
      & > div {
        width: 80%;
        font-size: 15px;
      }
      & img {
        width: 20%;
        margin-right: 0px;
      }
    }
  }
`

export const ItemService = styled.div`
  display: flex;
  justify-content: space-around;
  max-width: 1200px;
  margin: auto;
  .detail_Service {
    text-align: center;
    width: 10%;
    & > div:last-child {
      font-size: 17px;
    }
  }
  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 20px;

    .detail_Service {
      & > div:last-child {
        font-size: 12px;
        width: 70px;
      }
      img {
        width: 70px;
        height: 70px;
      }
    }
  }
`
