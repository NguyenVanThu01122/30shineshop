import { DatePicker, Form, Input } from 'antd'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { CheckboxGeneral } from '../../components/Ui/checkbox'
import { FormGeneral } from '../../components/Ui/form'
import { InputGeneral } from '../../components/Ui/input'
import { SelectGeneral } from '../../components/Ui/select'
import { TOOLTIP, optionSelectGender } from '../../helpers/contanst'
import {
  validateBirthday,
  validateCheckBox,
  validateConfirmPassword,
  validateEmail,
  validateGender,
  validateName,
  validatePassword,
  validatePhone
} from '../../helpers/validationRules'
import { ROUTES } from '../../routes/routes'
import { register } from '../../services/auth'
import { BrandName, SubmitForm } from '../MainLogin/components/FormLogin/styles'
import { SelectItem, WrapperRegister } from './styles'

function MainRegister() {
  const { t } = useTranslation()
  const [focusInput, setFocusInput] = useState('')
  const [form] = Form.useForm()
  const navigate = useNavigate()
  const pathName = window.location.pathname

  const handleFocusInput = (fieldName: string) => setFocusInput(fieldName)
  const handleBlurInput = () => setFocusInput('')

  const onFinish = (values: any) => {
    const data = {
      name: values.nickname,
      telephone: values.phone,
      email: values.email,
      password: values.password,
      gender: values.gender,
      date: values.date
    }
    register(data)
      .then((res) => {
        toast.success(res.data?.message)
        navigate(ROUTES.MAIN_LOGIN)
      })
      .catch((error) => {
        handleRegisterError(error)
      })
  }

  // hàm xử lý lỗi trả về
  const handleRegisterError = (error: any) => {
    const objError = error.response?.data
    let errorMessage = ''
    if (objError?.email) {
      errorMessage += objError.email
    }
    if (objError?.telephone) {
      errorMessage += objError.telephone
    }
    return toast.error(errorMessage)
  }

  return (
    <WrapperRegister>
      <FormGeneral
        className='register-Form'
        form={form}
        name='register'
        onFinish={onFinish}
        layout='vertical'
        size='large'
        scrollToFirstError // tự động cuộn đến lỗi đầu tiên trong quá trình xử lý lỗi form
      >
        <SelectItem>
          <div onClick={() => navigate(ROUTES.MAIN_LOGIN)} className='login'>
            {t('LOGIN')}
          </div>
          <div className={`register ${pathName === ROUTES.MAIN_REGISTER && 'register-animation-border'}`}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            {t('REGISTER')}
          </div>
        </SelectItem>
        <Form.Item className='form' name='nickname' label={t('NAME')} tooltip={TOOLTIP} rules={validateName()}>
          <InputGeneral
            className={`custom-input ${focusInput === 'name' && 'border-violet'}`}
            onClick={() => handleFocusInput('name')}
            onBlur={handleBlurInput}
            placeholder={t('PLEASE_ENTER_NAME')}
          />
        </Form.Item>
        <Form.Item className='form' name='email' label={t('EMAIL')} rules={validateEmail()}>
          <InputGeneral
            className={`custom-input ${focusInput === 'email' && 'border-violet'}`}
            placeholder={t('PLEASE_ENTER_EMAIL')}
            onClick={() => handleFocusInput('email')}
            onBlur={handleBlurInput}
          />
        </Form.Item>
        <Form.Item
          className='form'
          name='password'
          label={t('PASSWORD')}
          rules={validatePassword()}
          hasFeedback // icon thành công
        >
          <Input.Password
            className={`custom-input ${focusInput === 'password' && 'border-violet'}`}
            onClick={() => handleFocusInput('password')}
            onBlur={handleBlurInput}
            placeholder={t('PLEASE_ENTER_PASSWORD')}
          />
        </Form.Item>
        <Form.Item
          className='form'
          name='confirm'
          label={t('CONFIRM_PASSWORD')}
          dependencies={['password']} // Xác định phụ thuộc vào trường "password"
          hasFeedback // icon thành công
          rules={validateConfirmPassword()}
        >
          <Input.Password
            className={`custom-input ${focusInput === 'repeatPassword' && 'border-violet'}`}
            placeholder={t('PLEASE_CONFIRM_PASSWORD')}
            onClick={() => handleFocusInput('repeatPassword')}
            onBlur={handleBlurInput}
          />
        </Form.Item>
        <Form.Item className='form' name='phone' label={t('PHONE')} rules={validatePhone()}>
          <InputGeneral
            className={`custom-input ${focusInput === 'phone' && 'border-violet'}`}
            onClick={() => handleFocusInput('phone')}
            onBlur={handleBlurInput}
            placeholder={t('PLEASE_ENTER_PHONE')}
            type='number'
          />
        </Form.Item>
        <Form.Item className='form' name='gender' label={t('GENDER')} rules={validateGender()}>
          <SelectGeneral
            className={`select-gender ${focusInput === 'gender' && 'border-violet'}`}
            onClick={() => handleFocusInput('gender')}
            onBlur={handleBlurInput}
            placeholder={t('PLEASE_ENTER_GENDER')}
            options={optionSelectGender}
          />
        </Form.Item>
        <Form.Item className='form' label={t('BIRTHDAY')} name='date' rules={validateBirthday()}>
          <DatePicker
            className={`custom-input ${focusInput === 'birthday' && 'border-violet'}`}
            onClick={() => handleFocusInput('birthday')}
            onBlur={handleBlurInput}
            placeholder={t('PLEASE_ENTER_BIRTHDAY')}
          />
        </Form.Item>
        <Form.Item className='form' name='agreement' valuePropName='checked' rules={validateCheckBox()}>
          <CheckboxGeneral className='checkbox'>{t('AGREEMENT')}</CheckboxGeneral>
        </Form.Item>
        <SubmitForm onClick={() => form.submit()}>{t('REGISTER')}</SubmitForm>
        <BrandName>
          <span>30Shine</span>
          <span>Shop</span>
        </BrandName>
      </FormGeneral>
    </WrapperRegister>
  )
}

export default MainRegister
