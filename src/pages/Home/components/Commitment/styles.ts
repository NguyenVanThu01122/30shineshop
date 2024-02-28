import styled from 'styled-components'
export const Wrapper = styled.div``
export const ItemCommitment = styled.div`
  padding: 35px 0px;
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  border-bottom: 2px solid #e8e8e8;
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
  .icon_Commitment {
    display: flex;
    align-items: center;
    padding-left: 30px;
    width: 20%;
    & img {
      margin-right: 15px;
    }
  }
`

export const ItemService = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 0px 140px;
  .detail_Service {
    text-align: center;
    width: 10%;
    & > div:last-child {
      font-size: 17px;
    }
  }
`
