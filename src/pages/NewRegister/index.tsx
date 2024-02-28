import { DatePicker, Form, Input } from 'antd'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { CheckboxGeneral } from '../../components/Ui/checkbox'
import { FormGeneral } from '../../components/Ui/form'
import { InputGeneral } from '../../components/Ui/input'
import { SelectGeneral } from '../../components/Ui/select'
import { LABEL, PLACEHOLDER, TOOLTIP, optionSelectGender } from '../../helpers/contanst'
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
import { register } from '../../service/auth.servie'
import { WrapperRegister } from './styles'

function NewRegister() {
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
        navigate('/new-login')
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
        <div className='select-item'>
          <div onClick={() => navigate('/new-login')} className='login'>
            ĐĂNG NHẬP
          </div>
          <div className={`register ${pathName === '/new-register' && 'register-animation-border'}`}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            ĐĂNG KÝ
          </div>
        </div>
        <Form.Item className='form' name='nickname' label={LABEL.NICK_NAME} tooltip={TOOLTIP} rules={validateName}>
          <InputGeneral
            className={`custom-input ${focusInput === 'name' && 'border-violet'}`}
            onClick={() => handleFocusInput('name')}
            onBlur={handleBlurInput}
            placeholder={PLACEHOLDER.PLEASE_ENTER_NAME}
          />
        </Form.Item>
        <Form.Item className='form' name='email' label={LABEL.EMAIL} rules={validateEmail}>
          <InputGeneral
            className={`custom-input ${focusInput === 'email' && 'border-violet'}`}
            placeholder={PLACEHOLDER.PLEASE_ENTER_EMAIL}
            onClick={() => handleFocusInput('email')}
            onBlur={handleBlurInput}
          />
        </Form.Item>
        <Form.Item
          className='form'
          name='password'
          label={LABEL.PASSWORD}
          rules={validatePassword}
          hasFeedback // icon thành công
        >
          <Input.Password
            className={`custom-input ${focusInput === 'password' && 'border-violet'}`}
            onClick={() => handleFocusInput('password')}
            onBlur={handleBlurInput}
            placeholder={PLACEHOLDER.PLEASE_ENTER_PASSWORD}
          />
        </Form.Item>
        <Form.Item
          className='form'
          name='confirm'
          label={LABEL.CONFIRM_PASSWORD}
          dependencies={['password']} // Xác định phụ thuộc vào trường "password"
          hasFeedback // icon thành công
          rules={validateConfirmPassword}
        >
          <Input.Password
            className={`custom-input ${focusInput === 'repeatPassword' && 'border-violet'}`}
            placeholder={PLACEHOLDER.PLEASE_CONFIRM_PASSWORD}
            onClick={() => handleFocusInput('repeatPassword')}
            onBlur={handleBlurInput}
          />
        </Form.Item>
        <Form.Item className='form' name='phone' label={LABEL.PHONE} rules={validatePhone}>
          <InputGeneral
            className={`custom-input ${focusInput === 'phone' && 'border-violet'}`}
            onClick={() => handleFocusInput('phone')}
            onBlur={handleBlurInput}
            placeholder={PLACEHOLDER.PLEASE_ENTER_PHONE}
            type='number'
          />
        </Form.Item>
        <Form.Item className='form' name='gender' label={LABEL.GENDER} rules={validateGender}>
          <SelectGeneral
            className={`select-gender ${focusInput === 'gender' && 'border-violet'}`}
            onClick={() => handleFocusInput('gender')}
            onBlur={handleBlurInput}
            placeholder={PLACEHOLDER.PLEASE_ENTER_GENDER}
            options={optionSelectGender}
          />
        </Form.Item>
        <Form.Item className='form' label={LABEL.BIRTHDAY} name='date' rules={validateBirthday}>
          <DatePicker
            className={`custom-input ${focusInput === 'birthday' && 'border-violet'}`}
            onClick={() => handleFocusInput('birthday')}
            onBlur={handleBlurInput}
            placeholder={PLACEHOLDER.PLEASE_ENTER_BIRTHDAY}
          />
        </Form.Item>
        <Form.Item className='form' name='agreement' valuePropName='checked' rules={validateCheckBox}>
          <CheckboxGeneral className='checkbox'>
            Tôi cam kết tuân theo Chính sách bảo mật và Điều khoản sử dụng của 30shineshop.
          </CheckboxGeneral>
        </Form.Item>
        <div className='submit-register' onClick={() => form.submit()}>
          ĐĂNG KÝ
        </div>
        <div className='brand-name'>
          <span>30Shine</span>
          <span>Shop</span>
        </div>
      </FormGeneral>
    </WrapperRegister>
  )
}

export default NewRegister
