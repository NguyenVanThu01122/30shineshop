import styled from 'styled-components'

export const WrapperTitle = styled.div`
  padding-top: 22px;
  padding-left: 5px;
  display: flex;
  justify-content: space-between;
  position: sticky;
  padding-right: 0px;
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
  @media screen and (max-width: 768px) {
    /* padding: 10px; */
  }
`
export const ContentTitle = styled.div`
  font-weight: 600;
  font-size: 25px;
  font-family: 'Oswald';
`
