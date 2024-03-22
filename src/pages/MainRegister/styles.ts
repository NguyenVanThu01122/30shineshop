import { Form } from 'antd'
import styled from 'styled-components'

export const WrapperRegister = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;

  /* background-image: url(https://thuthuatnhanh.com/wp-content/uploads/2020/09/hinh-anh-gif-iron-man-lam-hinh-nen.gif); */
  /* background-repeat: no-repeat;
  background-size: cover;  */

  .register-Form {
    height: 600px;
    overflow-y: auto;
    width: 35%;
    border-radius: 5px;
    border-radius: 10px;
    box-shadow: 0px 0px 500px 50px gray;
    padding: 40px 40px 25px 40px;

    border: 2px solid transparent; /* Đặt đường viền ban đầu là trong suốt */
    /* animation: borderAnimation 2s infinite;
    @keyframes borderAnimation {
      0% {
        border-top: 2px solid orangered;
      }
      25% {
        border-right: 2px solid yellow;
      }
      50% {
        border-bottom: 2px solid violet;
      }
      75% {
        border-left: 2px solid orange;
      }
    } */
    // css thanh scroll
    &::-webkit-scrollbar-thumb {
      background-color: violet; /* Màu của nút kéo */
      border-radius: 5px; /* Bo góc của nút kéo */
    }
    &::-webkit-scrollbar {
      width: 1px; /* Độ rộng của thanh cuộn */
    }
    &::-webkit-scrollbar-track {
      /* background-color: #cccccc; Màu của vùng cuộn */
    }
    // class label của ant
    .ant-form-item-label > label {
      color: wheat;
      height: 0px !important;
    }
    // class error text
    .ant-form-item .ant-form-item-explain-error {
      color: #ff4d4f;
      font-style: italic;
    }

    // class input.password
    .ant-input-affix-wrapper-lg {
      background: rgb(28, 28, 44);
      border: none;
      &:hover {
        box-shadow: 0 0 0 1px violet;
      }
    }
    // class input.password (phần content)
    .ant-input-affix-wrapper > input.ant-input {
      color: white;
      background: rgb(28, 28, 44) !important;
      color: wheat !important;
      &::placeholder {
        color: gray;
      }
    }
    // icon password
    .anticon svg {
      color: gray;
    }
    // class select gender ant
    .ant-select-selector {
      display: flex;
      align-items: center;
      font-style: italic;
      height: 50px !important;
      background: rgb(28, 28, 44) !important;
      border: none !important;
      color: wheat !important;
      .ant-select-selection-placeholder {
        color: gray;
      }
    }

    // class select birtday ant
    .ant-picker-large {
      background: rgb(28, 28, 44) !important;
      width: 60%;
      .ant-picker-input > input {
        color: wheat;
      }
    }

    .form input {
      &::placeholder {
        color: gray;
        font-style: italic;
      }
    }
    .select-gender {
      border-radius: 8px;
      &:hover {
        box-shadow: 0 0 0 1px violet;
      }
    }

    .custom-input {
      height: 50px;
      background: rgb(28, 28, 44);
      border: none;
      color: wheat;
      &:hover {
        box-shadow: 0 0 0 1px violet;
      }
      &::placeholder {
        color: gray !important;
      }
    }
    .border-violet {
      box-shadow: 0 0 0 1px violet;
    }
    .select-item {
      display: flex;
      justify-content: space-between;
      margin-bottom: 25px;
      .register {
        width: 48%;
        box-shadow: 0px 0px 10px 2px gray;
        padding: 10px;
        text-align: center;
        cursor: pointer;
        /* border-radius: 10px; */
        font-weight: bold;
        color: red;
        font-size: large;
        transition: transform 0.4s ease; // Hiệu ứng chuyển đổi kích thước, ease hiệu ứng làm mượt//
        &:hover {
          transform: scale(1.1);
        }
      }
      .login {
        width: 48%;
        box-shadow: 0px 0px 10px 2px gray;
        padding: 10px;
        text-align: center;
        cursor: pointer;
        /* border-radius: 10px; */
        color: blue;
        transition: 0.5s;
        letter-spacing: 4px; //xác định khoảng cách giữa các ký tự trong văn bản
        font-size: 1.2rem;
        font-weight: bold;
        transition: transform 0.4s ease; // Hiệu ứng chuyển đổi kích thước, ease hiệu ứng làm mượt//
        &:hover {
          transform: scale(1.1);
          background-color: #03e9f4;
          color: #050801;
          box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4, 0 0 200px #03e9f4;
          -webkit-box-reflect: below 1px linear-gradient(transparent, #0005); // tạo độ dài phản chiếu của ptu
        }
      }
      .register-animation-border {
        position: relative;
        overflow: hidden;
        transition: 0.5s;
        letter-spacing: 4px; //xác định khoảng cách giữa các ký tự trong văn bản
        color: blue;
        font-size: 1.2rem;
        font-weight: bold;
        &:hover {
          background-color: #03e9f4;
          color: #050801;
          box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4, 0 0 200px #03e9f4;
          -webkit-box-reflect: below 1px linear-gradient(transparent, #0005);
        }

        &:first-child {
          filter: hue-rotate(225deg);
        }
        &:last-child {
          filter: hue-rotate(90deg);
        }
        & span {
          position: absolute;
          display: block;
        }
        & span:nth-child(1) {
          top: 0;
          left: 0;
          width: 100%;
          height: 1.5px;
          background: linear-gradient(90deg, transparent, #03e9f4);
          animation: animate1 1s infinite;
          @keyframes animate1 {
            0% {
              left: -100%;
            }
            100% {
              left: 100%;
            }
          }
        }

        & span:nth-child(2) {
          top: -100%;
          right: 0;
          height: 100%;
          width: 1.5px;
          background: linear-gradient(180deg, transparent, #03e9f4);
          animation: animate2 1s infinite;
          animation-delay: 0.25s;
          @keyframes animate2 {
            0% {
              left: -100%;
            }
            100% {
              left: 100%;
            }
          }
        }

        & span:nth-child(3) {
          bottom: 0;
          right: 0;
          height: 1.5px;
          width: 100%;
          background: linear-gradient(270deg, transparent, #03e9f4);
          animation: animate3 1s infinite;
          animation-delay: 0.5s;
          @keyframes animate3 {
            0% {
              right: -100%;
            }
            100% {
              right: 100%;
            }
          }
        }

        & span:nth-child(4) {
          bottom: -100%;
          left: 0;
          height: 100%;
          width: 1.5px;
          background: linear-gradient(369deg, transparent, #03e9f4);
          animation: animate4 1s infinite;
          animation-delay: 0.75s;
          @keyframes animate4 {
            0% {
              bottom: -100%;
            }
            100% {
              bottom: 100%;
            }
          }
        }
      }
    }
    .checkbox {
      color: gray;
    }
    .submit-register {
      width: 50%;
      margin: auto;
      margin-bottom: 40px;
      font-size: large;
      text-align: center;
      padding: 10px 30px;
      font-weight: bold;
      box-shadow: 0px 0px 15px 5px violet;
      color: orange;
      cursor: pointer;
      transition: transform 0.4s ease; // Hiệu ứng chuyển đổi kích thước, ease hiệu ứng làm mượt//
      &:hover {
        transform: scale(1.2);
        background-color: orange;
        color: #050801;
        box-shadow: 0 0 5px orange, 0 0 25px orange, 0 0 50px orange, 0 0 200px orange;
        -webkit-box-reflect: below 1px linear-gradient(transparent, #0005);
      }
    }
    .brand-name {
      width: 80%;
      margin: auto;
      font-size: 20px;
      font-weight: bold;
      font-style: italic;
      text-align: center;
      color: gray;
      border-bottom: 1px solid gray;
      letter-spacing: 2px; //xác định khoảng cách giữa các ký tự trong văn bản
      &:hover {
        color: #03e9f4;
      }
    }
    @media screen and (max-width: 768px) {
      width: 100%;
      height: 100%;
      overflow-y: auto;
      .checkbox {
        width: 70%;
      }
    }
  }
`
export const StyledRegisterForm = styled(Form)``
