import { Form, Modal } from 'antd'
import styled from 'styled-components'

export const WrapperLogin = styled.div`
  display: flex;
  align-items: center !important;
  justify-content: center !important;
  background-image: url(https://thuthuatnhanh.com/wp-content/uploads/2020/09/hinh-anh-gif-iron-man-lam-hinh-nen.gif);
  /* background-repeat: no-repeat;
  background-size: cover; */
  height: 100vh;
`
// css FormLogin
export const StyledFormLogin = styled(Form)`
  width: 35%;
  border-radius: 5px;
  box-shadow: 0px 0px 500px 50px gray;
  padding: 40px 40px 25px 40px;

  animation-duration: 5s;
  animation-timing-function: linear;
  animation-delay: 2s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-name: borderAnimationLogin;
  border: 2px solid transparent; /* Đặt đường viền ban đầu là trong suốt */

  /* animation: borderAnimationLogin 2s infinite; Áp dụng animation và infinite là lặp lại vô hạn */
  @keyframes borderAnimationLogin {
    0% {
      border-top: 2px solid orangered;
    }
    25% {
      border-right: 2px solid violet;
    }
    50% {
      border-bottom: 2px solid orangered;
    }
    75% {
      border-left: 2px solid yellow;
    }
    100% {
      border-bottom: 2px solid green;
    }
  }
  // class label của ant
  .ant-form-item-label > label {
    color: wheat;
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
    height: 50px;
    &:hover {
      box-shadow: 0 0 0 1px violet;
    }
  }
  // class input.password (phần content)
  .ant-input-affix-wrapper > input.ant-input {
    color: white;
    background: rgb(28, 28, 44) !important;
    color: wheat;
    &::placeholder {
      color: gray;
      font-style: italic;
    }
  }
  // icon password
  .anticon svg {
    color: gray;
  }

  .custom-input {
    background: rgb(28, 28, 44);
    border: none;
    height: 50px;
    color: wheat;
    &:hover {
      box-shadow: 0 0 0 1px violet;
    }
    &::placeholder {
      color: gray;
      font-style: italic;
    }
  }
  .border-violet {
    box-shadow: 0 0 0 2px violet;
  }
  .select-item {
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
    .login {
      width: 48%;
      box-shadow: 0px 0px 10px 2px gray;
      padding: 10px;
      text-align: center;
      cursor: pointer;
      /* border-radius: 10px; */
      font-weight: bold;
      font-size: large;
      transition: transform 0.4s ease; // Hiệu ứng chuyển đổi kích thước, ease hiệu ứng làm mượt//
      &:hover {
        transform: scale(1.1);
      }
    }
    .register {
      width: 48%;
      box-shadow: 0px 0px 10px 2px gray;
      padding: 10px;
      text-align: center;
      cursor: pointer;
      /* border-radius: 10px; */
      color: red;
      transition: 0.5s;
      letter-spacing: 4px; //xác định khoảng cách giữa các ký tự trong văn bản
      font-size: 1.2rem;
      font-weight: bold;
      transition: transform 0.4s ease; // Hiệu ứng chuyển đổi kích thước, ease hiệu ứng làm mượt/
      &:hover {
        transform: scale(1.1);

        background-color: #03e9f4;
        color: #050801;
        box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4, 0 0 200px #03e9f4;
        -webkit-box-reflect: below 5px linear-gradient(transparent, #0005);
        //-webkit-box-reflect: dùng để định nghĩa hiệu ứng phản chiếu
        //.below: Đây là hướng của phản chiếu. Trong trường hợp này, "below" nghĩa là phản chiếu sẽ nằm phía dưới phần tử gốc.
        //1px: Đây là độ dài của phản chiếu. Trong trường hợp này, phản chiếu chỉ cao 1 pixel.
        //linear-gradient(transparent, #0005): Đây là một hình dạng phản chiếu mà bạn đang sử dụng. Nó là một dãy màu gradient bắt đầu từ trong suốt (transparent) và kết thúc ở một màu đen có độ trong suốt 0.05 (#0005).
      }
    }
    .login-animatio-border {
      position: relative;
      overflow: hidden;
      transition: 0.5s;
      letter-spacing: 4px; //xác định khoảng cách giữa các ký tự trong văn bản
      color: blue;
      font-size: 1.2rem;
      font-weight: bold;
      &:hover {
        background-color: orange;
        color: #050801;
        box-shadow: 0 0 5px orange, 0 0 25px orange, 0 0 50px orange, 0 0 200px orange;
        -webkit-box-reflect: below 1px linear-gradient(transparent, #0005);
      }
      /* &:first-child {
        filter: hue-rotate(225deg);
      }
      &:last-child {
        filter: hue-rotate(90deg);
      } */

      & span {
        position: absolute;
        display: block;
      }

      & span:nth-child(1) {
        top: 0;
        left: 0;
        width: 100%;
        height: 1.5px;
        background: linear-gradient(90deg, transparent, orange);
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
        background: linear-gradient(180deg, transparent, orange);
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
        background: linear-gradient(270deg, transparent, orange);
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
        background: linear-gradient(369deg, transparent, orange);
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
  .item-input {
    padding: 10px;
  }
  .select-box {
    display: flex;
    justify-content: space-between;
    .forgotPassword {
      cursor: pointer;
      color: blue;
      text-decoration: underline;
    }
    .checkbox {
      color: gray;
      margin-bottom: 15px;
    }
  }

  .new-login {
    display: flex;
    flex-direction: column;
    align-items: center;
    .submit {
      width: 50%;
      font-size: large;
      padding: 10px 0px;
      color: orange;
      margin-bottom: 35px;
      font-weight: bold;
      /* border-radius: 10px; */
      text-align: center;
      box-shadow: 0px 0px 15px 5px violet;
      letter-spacing: 2px; //xác định khoảng cách giữa các ký tự trong văn bản
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
    animation: buttomUpAnimation 3s;

    &:hover {
      color: #03e9f4;
    }
    @keyframes buttomUpAnimation {
      from {
        transform: translatey(200%);
        opacity: 0;
      }
      to {
        transform: translatey(0);
        opacity: 1;
      }
    }
  }

  @media screen and (max-width: 768px) {
    width: 85%;
    .button {
      .login {
        font-size: 14px;
      }
      .register {
        font-size: 14px;
      }
    }
  }
`

export const StyledModalForgetPassword = styled(Modal)`
  .group-button {
    display: flex;
    justify-content: space-between;
    .cancel-button {
      background-color: yellow;
    }
    .cancel-button:hover {
      background-color: red;
      color: white;
    }
  }
`
