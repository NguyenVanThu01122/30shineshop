import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 50px 140px;

  @media screen and (max-width: 768px) {
    .pageDetailProduct {
      padding: 0px 10px;
      .detailProduct {
        display: block;
        .endProduct {
          display: none;
        }
      }
    }
  }
`
export const ContentDetail = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    display: block;
    .endProduct {
      display: none;
    }
  }
`
