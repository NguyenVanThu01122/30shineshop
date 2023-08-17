import { Form } from 'antd'
import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(81, 81, 99, 0.2);
  height: 100vh;
  @media screen and (max-width: 768px) {
  }
`
export const StyledRegisterForm = styled(Form)`
  height: 600px;
  overflow-y: auto;
  width: 35%;
  border-radius: 5px;
  background: white;
  border-radius: 10px;
  box-shadow: 0px 0px 3px 1px gray;
  padding: 40px;
  ::-webkit-scrollbar-thumb {
    background: #888 !important;
  }
  .ant-col-xl-24-ant-form-item-label {
    margin: 0px !important;
  }
  .ant-form-item-label > label {
    height: 0px !important;
  }

  .button {
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
    .register {
      width: 48% !important;
      background-color: rgba(255, 204, 51, 0.913);
    }
    .login {
      width: 48%;
    }
  }
  .newRegister {
    display: flex;
    justify-content: center;
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
