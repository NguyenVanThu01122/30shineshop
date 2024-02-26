import styled from 'styled-components'

export const WrapperProduct = styled.div`
  margin: 20px 0px;
  border-radius: 5px;
  border: 1px solid rgba(209, 209, 209);
  padding: 20px;
  & > div:first-child {
    font-size: 20px;
    font-family: 'Oswald';
    font-weight: 600;
    margin-bottom: 16px;
    padding-left: 10px;
  }
  .product {
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-top: 1px solid rgba(209, 209, 209);
    padding: 20px 0px;
    & > img {
      width: 10%;
    }
    .detailProdut {
      & > div:first-child {
        font-size: 0.875rem;
        font-family: 500;
        margin-bottom: 5px;
      }
      & > div:last-child {
        color: rgba(61, 61, 61);
        font-size: 0.875rem;
      }
    }
    .priceNumber {
      font-weight: 600;
      font-family: 'Oswald';
      font-size: 1.125rem;
      & span {
        font-weight: 600;
        font-family: 'Oswald';
        margin-left: 4px;
      }
    }
    & > div:nth-child(4) {
      font-weight: 500;
      font-size: 20px;
    }
    .priceQuantity {
      color: rgba(229, 77, 62);
      font-size: 1.25rem;
      font-family: 'Oswald';
      font-weight: 600;
      & span {
        color: rgba(229, 77, 62);
        font-weight: 600;
        font-family: 'Oswald';
        margin-left: 4px;
      }
    }
  }
  @media screen and (max-width: 768px) {
    padding: 10px;
    .product {
      display: flex;
      .detailProdut > div:first-child {
        font-size: 13px;
      }
      .priceNumber {
        font-size: 13px;
      }
      & > div:nth-child(4) {
        margin: 0px 12px;
      }
    }
  }
`
