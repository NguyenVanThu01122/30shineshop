import styled from 'styled-components'

export const WrapperListProducts = styled.div`
  margin-bottom: 50px;
  /* Responsive */
  @media screen and (max-width: 768px) {
    .pageProduct {
      padding: 0px 20px;
    }
  }
`
export const ListProducts = styled.div`
  max-width: 1300px;
  margin: auto;
  padding: 0px 20px;
  @media screen and (max-width: 768px) {
    padding: 0px 0px;
  }
`

export const FindProduct = styled.div`
  margin: 20px 0px;
  & > div:first-child {
    font-family: Oswald;
    font-size: 1.7rem;
    font-weight: 600;
    margin: 10px 0px;
  }
  span {
    margin-right: 10px;
  }
`
export const WrapperPagination = styled.div`
  @media screen and (max-width: 768px) {
    width: 140%;
    position: fixed;
    bottom: 0;
    right: 0;
    background-color: #fff;
    padding: 8px;
  }
`
