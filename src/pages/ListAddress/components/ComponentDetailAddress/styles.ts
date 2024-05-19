import styled from 'styled-components'

export const WrapperDetailAddress = styled.div`
  .address {
    display: flex;
    margin-top: 5px;
    border-bottom: 1px solid rgb(230, 230, 230);
    padding: 10px;
    div {
      width: 50%;
    }
  }
  .action {
    display: flex;
    justify-content: flex-end;
    padding: 10px;
    gap: 15px;
    .buttonEdit {
      height: 40px;
      color: white !important;
      background-color: #1677ff;
      &:hover {
        filter: brightness(0.7);
      }
    }
    .buttonDelete {
      background-color: yellow;
      height: 40px;
    }
    .buttonDelete:hover {
      color: white;
      background-color: red;
    }
  }
  @media screen and (max-width: 768px) {
    .address {
      & > div:nth-child(2) {
        word-break: break-all;
      }
    }
  }
`
