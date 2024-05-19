import styled from 'styled-components'

export const GroupButton = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;

  .update-button {
    width: 50%;
    background-color: blue;
    color: white !important;
    &:hover {
      filter: brightness(0.7);
    }
  }
  .cancel-button {
    width: 50%;
    background-color: yellow;
  }
  .cancel-button:hover {
    background-color: red;
    color: white;
  }
  @media screen and (max-width: 768px) {
  }
`
