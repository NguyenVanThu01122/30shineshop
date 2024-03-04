import styled from 'styled-components'

export const WrapperLoading = styled.div`
  height: 480px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: black; */
  .multicolor-dots-loader {
    position: relative;
    width: 5em;
    height: 5em;
    .layer {
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      animation: rotation 1.5s linear infinite;
    }
    .layer.blue {
      animation-delay: 0s;
      & > .dots::before {
        height: 0.9em;
        width: 0.9em;
        background-color: blue;
      }
    }
    .layer.green {
      animation-delay: 0.1s;
      & > .dots::before {
        height: 0.8em;
        width: 0.8em;
        background-color: green;
      }
    }
    .layer.yellow {
      animation-delay: 0.2s;
      & > .dots::before {
        height: 0.7em;
        width: 0.7em;
        background-color: yellow;
      }
    }
    .layer.orange {
      animation-delay: 0.3s;
      & > .dots::before {
        height: 0.6em;
        width: 0.6em;
        background-color: orange;
      }
    }
    .layer.red {
      animation-delay: 0.4s;
      & > .dots::before {
        height: 0.5em;
        width: 0.5em;
        background-color: red;
      }
    }
    .dots {
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      &::before {
        content: '';
        border-radius: 50%;
        display: inline-block;
        transform: translateY(-50%);
      }
    }
    @keyframes rotation {
      0% {
        rotate: 0turn;
      }
      60% {
        rotate: 1turn;
      }
      100% {
        rotate: 1turn;
      }
    }
  }
`
