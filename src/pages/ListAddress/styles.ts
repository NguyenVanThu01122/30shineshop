import styled from 'styled-components'

export const WrapperListAddress = styled.div`
  max-width: 1600px;
  display: flex;
  justify-content: center;
  margin: 35px 0px;
  margin-bottom: 0px;
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

export const ContentAddress = styled.div`
  .titleAddress {
    padding: 22px 0px 5px 0px;
    display: flex;
    justify-content: space-between;
    position: sticky;
    padding-right: 10px;
    top: -16px;
    z-index: 100;
    background-color: rgb(238, 238, 238);
    & > div:first-child {
      font-weight: 600;
      font-size: 25px;
      font-family: 'Oswald';
    }
    .button {
      background-color: yellow;
      height: 40px;
      .icon-plus {
        font-size: 20px;
      }
    }
  }
`
