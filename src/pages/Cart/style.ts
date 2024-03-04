import styled from 'styled-components'
export const WrapperCart = styled.div`
  width: 100%;
  height: 800px;
  margin: auto;
`

export const ContainerCart = styled.div`
  max-width: 1280px;
  padding: 0px 20px;
  margin: auto;
  margin-top: 20px;
  margin-bottom: 40px;
  display: flex;
  gap: 20px;
  @media screen and (max-width: 768px) {
    padding: 0px;
    display: block;
  }
`
export const ContentCart = styled.div`
  width: 75%;
  @media screen and (max-width: 768px) {
    width: 100%;
    & > div:first-child {
      font-size: large;
    }
  }
`

export const TitlePage = styled.div`
  font-family: 'Oswald';
  font-size: 1.75rem;
  font-weight: 600;
  margin-bottom: 15px;
  @media screen and (max-width: 768px) {
    font-size: large;
  }
`
export const ItemProduct = styled.div`
  position: relative;
  margin-bottom: 20px;
  border: 1px solid rgb(220, 217, 217);
  height: 600px;
  overflow-y: auto;
  &::-webkit-scrollbar-thumb {
    border-radius: 5px !important;
  }
  &::-webkit-scrollbar {
    width: 4px !important;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent !important; //Màu của vùng cuộn
  }
  &:hover {
    &::-webkit-scrollbar-thumb {
      background: linear-gradient(217deg, #e250e5, #4b50e6) !important;
    }
  }
`
