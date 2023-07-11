import { Form } from 'antd'
import styled from 'styled-components'

export const WrapperLogin = styled.div`
  display: flex;
  align-items: center !important;
  justify-content: center !important;
  background-color: rgba(81, 81, 99, 0.2);
  height: 100vh;
`
export const StyledFormLogin = styled(Form)`
  width: 35%;
  border-radius: 5px;
  background: white;
  box-shadow: 0px 0px 3px 1px gray;
  padding: 40px;
  .button {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
    border-radius: 10px;
    .login {
      width: 48%;
    }
    .register {
      width: 48%;
      background-color: rgba(255, 204, 51, 0.913);
    }
  }
  .newLogin {
    display: flex;
    flex-direction: column;
    align-items: center;
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
