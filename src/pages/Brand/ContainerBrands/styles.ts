import styled from 'styled-components'

export const WrapperBrands = styled.div`
  max-width: 1200px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 15px;
  margin: auto;
  padding: 16px;
  .brandItem {
    margin-bottom: 15px;
    cursor: pointer;
    box-shadow: 0px 0px 5px gray;
  }
  .brandItem:hover {
    transform: scale(1.1);
    transition: 0.5s;
  }
  .brandItem img {
    width: 100%;
    height: 200px;
    /* object-fit: cover; */
  }
  .brandItem > div {
    text-align: center;
    font-size: 18px;
  }
  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
    .brandItem img {
      width: 100%;
      height: 80px;
      object-fit: cover;
    }
  }
`
