import styled from 'styled-components'

export const Wrapper = styled.div`
  max-width: 1200px;
  margin: auto;
  display: grid;
  grid-template-columns: 400px 400px 400px;
  cursor: pointer;
  gap: 20px;
  .image_Products {
    width: 100%;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    grid-template-columns: 1fr 1fr;
  }
`
