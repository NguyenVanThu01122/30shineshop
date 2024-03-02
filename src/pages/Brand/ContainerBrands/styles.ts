import styled from 'styled-components'

export const WrapperBrands = styled.div`
  /* flex-wrap: wrap; các thằng con sẽ xuống dòng khi nó vượt quá chiều dài thằng mẹ */
  /* display: flex; */
  /* flex-wrap: wrap; */
  padding: 10px 140px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 15px;
  .brandItem {
    margin-bottom: 15px;
    cursor: pointer;
    box-shadow: 0px 0px 5px gray;
  }
  .brandItem:hover {
    transform: scale(1.1);
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
`
