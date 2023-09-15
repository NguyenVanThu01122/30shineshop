import { Form } from 'antd'
import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(https://thuthuatnhanh.com/wp-content/uploads/2020/09/hinh-anh-gif-iron-man-lam-hinh-nen.gif);
  /* background-repeat: no-repeat;
  background-size: cover;  */
  height: 100vh;
  @media screen and (max-width: 768px) {
  }
`
export const StyledRegisterForm = styled(Form)`
  height: 600px;
  overflow-y: auto;
  width: 35%;
  border-radius: 5px;
  border-radius: 10px;
  box-shadow: 0px 0px 150px 10px gray;
  padding: 40px;

  // css thanh scroll
  &::-webkit-scrollbar-thumb {
    background-color: orange; /* Màu của nút kéo */
    border-radius: 5px; /* Bo góc của nút kéo */
  }
  &::-webkit-scrollbar {
    width: 1px; /* Độ rộng của thanh cuộn */
  }
  &::-webkit-scrollbar-track {
    /* background-color: #cccccc; Màu của vùng cuộn */
  }

  /* .ant-col-xl-24-ant-form-item-label {
    margin: 0px !important;
  } */

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
      box-shadow: 0px 0px 10px 1px gray;
      color: white;
      padding: 10px;
      text-align: center;
      cursor: pointer;
      border-radius: 10px;
      font-weight: bold;
      color: red;
      font-size: large;
    }
    .login {
      width: 48%;
      box-shadow: 0px 0px 10px 1px gray;
      color: white;
      padding: 10px;
      text-align: center;
      cursor: pointer;
      border-radius: 10px;
      font-weight: bold;
      color: blue;
      font-size: large;
    }
    .border-bottom {
      border: 2px solid red;
    }
  }
  .checkbox {
    color: gray;
  }
  .item-submit {
    width: 50%;
    margin: auto;
    font-size: large;
    text-align: center;
    padding: 10px 30px;
    font-weight: bold;
    border-radius: 10px;
    color: white;
    box-shadow: 0px 0px 15px 5px violet;
    color: orange;
    cursor: pointer;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
    overflow-y: auto;
    .checkbox {
      width: 70%;
    }
  }
`
