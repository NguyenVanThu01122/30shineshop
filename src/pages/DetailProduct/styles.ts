import styled from 'styled-components'

export const Wrapper = styled.div`
  max-width: 1300px;
  margin: auto;

  @media screen and (max-width: 768px) {
  }
`
export const ContentDetail = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 50px 20px;

  @media screen and (max-width: 768px) {
    display: block;
    padding: 12px;
    .pageDetailProduct {
      padding: 0px 10px;
      .detailProduct {
        display: block;
        .endProduct {
          display: none;
        }
      }
    }
    .endProduct {
      display: none;
    }
  }
`
