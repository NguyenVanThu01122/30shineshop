import styled from 'styled-components'

export const WrapperTitle = styled.div`
  padding: 22px 0px 5px 0px;
  display: flex;
  justify-content: space-between;
  position: sticky;
  padding-right: 10px;
  top: -16px;
  z-index: 100;
  background-color: rgb(238, 238, 238);
  .button {
    background-color: yellow;
    height: 40px;
    .icon-plus {
      font-size: 20px;
    }
  }
`
export const ContentTitle = styled.div`
  font-weight: 600;
  font-size: 25px;
  font-family: 'Oswald';
`

