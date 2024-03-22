import styled from 'styled-components'

export const GroupButton = styled.div`
  display: flex;
  justify-content: space-between;

  .update-button {
    background-color: blue;
    color: white !important;
    &:hover {
      filter: brightness(0.7);
    }
  }
  .cancel-button {
    background-color: yellow;
  }
  .cancel-button:hover {
    background-color: red;
    color: white;
  }
`
