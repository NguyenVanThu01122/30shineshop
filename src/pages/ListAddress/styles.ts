import styled from 'styled-components'

export const WrapperListAddress = styled.div`
  max-width: 1600px;
  height: 600px;
  display: flex;
  justify-content: center;
  margin: 35px 0px;
`
export const ContainerAddress = styled.div`
  flex: 0.7;
  height: 80vh;
  overflow-y: auto;
  position: relative;
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
