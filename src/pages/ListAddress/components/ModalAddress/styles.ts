import styled from 'styled-components'

export const ItemTitle = styled.h2`
  margin-bottom: 10px;
  text-align: center;
`
export const GroupButton = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  .buttonSubmit {
    background-color: #1677ff;
    height: 40px;
    border-radius: 5px;
    color: white !important;
    font-weight: 600;
    border: none;
    &:hover {
      filter: brightness(0.7);
    }
  }
  .buttonCancel {
    background-color: orangered;
    height: 40px;
    border-radius: 5px;
    color: white !important;
    font-weight: 600;
    border: none;
    &:hover {
      filter: brightness(0.7);
    }
  }
  @media screen and (max-width: 768px) {
    justify-content: space-between;
    .buttonSubmit {
      width: 50%;
    }
    .buttonCancel {
      width: 50%;
    }
  }
`
