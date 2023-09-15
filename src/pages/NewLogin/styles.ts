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
export const StyledFormLogin = styled(Form)`
  width: 35%;
  border-radius: 5px;
  box-shadow: 0px 0px 150px 10px gray;
  padding: 40px;
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

  .itemInput {
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
    margin-bottom: 15px;
    border-radius: 10px;
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
    .register {
      width: 48%;
      box-shadow: 0px 0px 10px 1px gray;
      padding: 10px;
      color: white;
      text-align: center;
      cursor: pointer;
      border-radius: 10px;
      font-weight: bold;
      color: red;
      font-size: large;
    }
    .border-bottom {
      border: 2px solid blue;
    }
  }
  .itemInput {
    padding: 10px;
  }
  .forgotPassword {
    cursor: pointer;
    color: blue;
    text-decoration: underline;
  }
  .newLogin {
    display: flex;
    flex-direction: column;
    align-items: center;
    .checkbox {
      color: gray;
    }
    .submit {
      font-size: large;
      padding: 10px 30px;
      font-weight: bold;
      border-radius: 10px;
      color: white;
      box-shadow: 0px 0px 15px 5px violet;
      color: orange;
      cursor: pointer;
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
  .itemButton {
    display: flex;
    justify-content: space-between;
    .cancelButton {
      background-color: yellow;
    }
    .cancelButton:hover {
      background-color: red;
      color: white;
    }
  }
`
