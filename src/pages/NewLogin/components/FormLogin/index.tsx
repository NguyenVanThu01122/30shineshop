import { Form, FormInstance, Input } from 'antd'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { CheckboxGeneral } from '../../../../components/Ui/checkbox'
import { FormGeneral } from '../../../../components/Ui/form'
import { InputGeneral } from '../../../../components/Ui/input'
import { LABEL, PLACEHOLDER, SUCCESS_MESSAGE } from '../../../../helpers/contanst'
import { validateEmail, validatePassword } from '../../../../helpers/validationRules'
import { login } from '../../../../service/auth.servie'
import { StyledFormLogin } from './styles'

interface FormLoginProps {
  form: FormInstance<any>
  setIsOpenModal: (value: boolean) => void
}

export const FormLogin = ({ form, setIsOpenModal }: FormLoginProps) => {
  const navigate = useNavigate()
  const [focusInput, setFocusInput] = useState('')
  const pathName = window.location.pathname

  const onFinish = (values: any) => {
    const data = { email: values.email, password: values.password }
    login(data)
      .then((res) => {
        const result = res.data
        localStorage.setItem('token', result?.token) // accessToken
        localStorage.setItem('refreshToken', result?.refreshToken)
        navigate('/')
        toast.success(SUCCESS_MESSAGE.SUCCESS_LOGIN)
      })
      .catch((error) => {
        const objError = error.response?.data
        toast.error(objError?.message)
      })
  }
  return (
    <StyledFormLogin>
      <FormGeneral className='formGeneral' size='large' form={form} layout='vertical' onFinish={onFinish}>
        <div className='select-item'>
          <div className={`login ${pathName === '/new-login' && 'login-animation-border'}`}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            ĐĂNG NHẬP
          </div>
          <div onClick={() => navigate('/new-register')} className='register'>
            ĐĂNG KÝ
          </div>
        </div>
        <Form.Item label={LABEL.EMAIL} name='email' rules={validateEmail}>
          <InputGeneral
            className={`custom-input ${focusInput === 'email' && 'border-violet'}`}
            placeholder={PLACEHOLDER.PLEASE_ENTER_EMAIL}
            onClick={() => setFocusInput('email')}
            onBlur={() => setFocusInput('')}
          />
        </Form.Item>
        <Form.Item label={LABEL.PASSWORD} name='password' rules={validatePassword}>
          <Input.Password
            className={`custom-input  ${focusInput === 'password' && 'border-violet'}`}
            onClick={() => setFocusInput('password')}
            onBlur={() => setFocusInput('')}
            placeholder={PLACEHOLDER.PLEASE_ENTER_PASSWORD}
          />
        </Form.Item>
        <div className='select-box'>
          <Form.Item name='remember' valuePropName='checked'>
            <CheckboxGeneral className='checkbox'>Remember me !</CheckboxGeneral>
          </Form.Item>
          <div className='forgotPassword' onClick={() => setIsOpenModal(true)}>
            Quên mật khẩu?
          </div>
        </div>
        <div className='new-login'>
          <div className='submit' onClick={() => form.submit()}>
            ĐĂNG NHẬP
          </div>
        </div>
        <div className='brand-name'>
          <span>30Shine</span>
          <span>Shop</span>
        </div>
      </FormGeneral>
    </StyledFormLogin>
  )
}
