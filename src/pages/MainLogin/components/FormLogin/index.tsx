import { Form, Input } from 'antd'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { CheckboxGeneral } from '../../../../components/Ui/checkbox'
import { FormGeneral } from '../../../../components/Ui/form'
import { InputGeneral } from '../../../../components/Ui/input'
import { SUCCESS_MESSAGE } from '../../../../helpers/contanst'
import { validateEmail, validatePassword } from '../../../../helpers/validationRules'
import { isLogin } from '../../../../redux/Slices/appSlices'
import { ROUTES } from '../../../../routes/routes'
import { login } from '../../../../services/auth'
import {
  BrandName,
  ForgotPassword,
  ItemSubmit,
  Register,
  Remember,
  SelectItem,
  StyledFormLogin,
  SubmitForm
} from './styles'
interface FormLoginProps {
  setIsOpenModal: (value: boolean) => void
}

export const FormLogin = ({ setIsOpenModal }: FormLoginProps) => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const [focusInput, setFocusInput] = useState('')
  const pathName = window.location.pathname
  const dispatch = useDispatch()
  const [form] = Form.useForm()

  const onFinish = (values: { email: string; password: string }) => {
    const data = { email: values.email, password: values.password }
    login(data)
      .then((res) => {
        const result = res.data
        localStorage.setItem('token', result?.token) // accessToken
        localStorage.setItem('refreshToken', result?.refreshToken)
        navigate('/')
        toast.success(SUCCESS_MESSAGE.SUCCESS_LOGIN)
        dispatch(isLogin(true)) // lưu trạng thái login vào store
      })
      .catch((error) => {
        const objError = error.response?.data
        toast.error(objError?.message)
      })
  }
  return (
    <StyledFormLogin>
      <FormGeneral className='formGeneral' size='large' form={form} layout='vertical' onFinish={onFinish}>
        <SelectItem>
          <div className={`login ${pathName === ROUTES.MAIN_LOGIN && 'login-animation-border'}`}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            {t('login')}
          </div>
          <Register onClick={() => navigate(ROUTES.MAIN_REGISTER)}>{t('register')}</Register>
        </SelectItem>
        <Form.Item label={t('email')} name='email' rules={validateEmail()}>
          <InputGeneral
            className={`custom-input ${focusInput === 'email' && 'border-violet'}`}
            placeholder={t('email')}
            onClick={() => setFocusInput('email')}
            onBlur={() => setFocusInput('')}
          />
        </Form.Item>
        <Form.Item label={t('password')} name='password' rules={validatePassword()}>
          <Input.Password
            className={`custom-input  ${focusInput === 'password' && 'border-violet'}`}
            onClick={() => setFocusInput('password')}
            onBlur={() => setFocusInput('')}
            placeholder={t('password')}
          />
        </Form.Item>
        <Remember>
          <Form.Item name='remember' valuePropName='checked'>
            <CheckboxGeneral className='checkbox'>{t('rememberMe')}</CheckboxGeneral>
          </Form.Item>
          <ForgotPassword onClick={() => setIsOpenModal(true)}>{t('forgotPassword')}</ForgotPassword>
        </Remember>
        <ItemSubmit>
          <SubmitForm onClick={() => form.submit()}>{t('login')}</SubmitForm>
        </ItemSubmit>
        <BrandName>
          <span>30Shine</span>
          <span>Shop</span>
        </BrandName>
      </FormGeneral>
    </StyledFormLogin>
  )
}
