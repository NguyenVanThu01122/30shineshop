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
  width: 35%;
  border-radius: 5px;
  background: white;
  border-radius: 10px;
  box-shadow: 0px 0px 3px 1px gray;
  padding: 20px 40px;
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

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
    overflow-y: auto;
    .checkbox {
      width: 70%;
    }
    .newRegisters {
      display: flex;
      justify-content: center;
    }
  }
`
