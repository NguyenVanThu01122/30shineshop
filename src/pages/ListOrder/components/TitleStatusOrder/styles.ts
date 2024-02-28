import styled from 'styled-components'

export const WrapperTitleStatus = styled.div`
    display: flex;
    justify-content: space-around;
    background-color: white;
    border-radius: 5px;
    position: sticky;
    top: -25px;
    z-index: 100;
    .active-status {
      color: orange;
      font-weight: 600;
      border-bottom: 2px solid orange;
    }
    & div {
      font-size: 18px;
      font-weight: 600;
      padding: 15px 0px;
      cursor: pointer;
    }
`
