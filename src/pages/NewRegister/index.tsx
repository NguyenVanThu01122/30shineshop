import { Checkbox, DatePicker, Form, Input, Select, message } from 'antd'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { register } from '../../service/auth.servie'
import { StyledRegisterForm, WrapperRegister } from './styles'

function NewRegister() {
  const [focusInput, setFocusInput] = useState('')

  const { Option } = Select
  const [form] = Form.useForm()
  const navigate = useNavigate()
  const pathName = window.location.pathname

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
        message.success(res.data?.message)
        navigate('/new-login')
      })
      .catch((error) => {
        const objError = error.response?.data
        let stringError = ''
        const errorEmail = objError.email
        const errorPhone = objError.telephone
        if (errorEmail) {
          stringError += errorEmail
        }
        if (errorPhone) {
          stringError += errorPhone
        }

        message.error(stringError)
      })
  }

  const handleSubmit = () => {
    form.submit()
  }

  return (
    <WrapperRegister>
      <StyledRegisterForm
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
        <Form.Item
          className='form'
          name='nickname'
          label='Họ tên'
          tooltip='Bạn muốn người khác gọi mình là gì?'
          rules={[
            {
              required: true,
              message: 'Vui lòng nhập tên !'
            }
          ]}
        >
          <Input
            className={`custom-input ${focusInput === 'name' && 'border-violet'}`}
            onClick={() => setFocusInput('name')}
            onBlur={() => setFocusInput('')}
            placeholder='Vui lòng nhập tên !'
          />
        </Form.Item>
        <Form.Item
          className='form'
          name='email'
          label='E-mail'
          rules={[
            {
              required: true,
              message: 'Vui lòng nhập email !'
            },
            () => ({
              validator(_, value: string) {
                if (value?.includes('@') === false && value !== '') {
                  return Promise.reject(new Error('Vui lòng nhập đúng định dạng !'))
                } else {
                  return Promise.resolve()
                }
              }
            })
          ]}
        >
          <Input
            className={`custom-input ${focusInput === 'email' && 'border-violet'}`}
            placeholder='Vui lòng nhập Email !'
            onClick={() => setFocusInput('email')}
            onBlur={() => setFocusInput('')}
          />
        </Form.Item>

        <Form.Item
          className='form'
          name='password'
          label='Password'
          rules={[
            {
              required: true,
              message: 'Vui lòng nhập mật khẩu!'
            }
          ]}
          // hasFeedback // icon thành công
        >
          <Input.Password
            className={`custom-input ${focusInput === 'password' && 'border-violet'}`}
            onClick={() => setFocusInput('password')}
            onBlur={() => setFocusInput('')}
            placeholder='vui lòng nhập mật khẩu !'
          />
        </Form.Item>

        <Form.Item
          className='form'
          name='confirm'
          label='Xác thực lại mật khẩu'
          // dependencies={['password']} // Xác định phụ thuộc vào trường "password"
          // hasFeedback // icon thành công
          rules={[
            {
              required: true,
              message: 'Vui lòng xác nhận mật khẩu của bạn !'
            },
            ({ getFieldValue }) => ({
              validator(_, value: any) {
                if (!value || getFieldValue('password') === value) {
                  // nếu value k tồn tại(chưa nhập) hoặc getFieldValue('password') === value)
                  return Promise.resolve()
                } else {
                  return Promise.reject(new Error('Mật khẩu không khớp !'))
                }
              }
            })
          ]}
        >
          <Input.Password
            className={`custom-input ${focusInput === 'repeatPassword' && 'border-violet'}`}
            placeholder='Vui lòng xác thực mật khẩu !'
            onClick={() => setFocusInput('repeatPassword')}
            onBlur={() => setFocusInput('')}
          />
        </Form.Item>
        <Form.Item
          className='form'
          name='phone'
          label='Số điện thoại'
          rules={[
            {
              required: true,
              message: 'Vui lòng nhập số điện thoại'
            },
            () => ({
              validator(_, value) {
                if (value) {
                  if (value[0] !== '0') {
                    return Promise.reject(new Error('Vui lòng nhập đúng định dạng !'))
                  } else if ((value.length > 10 || value.length < 10) && value !== '') {
                    return Promise.reject(new Error('Vui lòng nhập đầy đủ 10 chữ số !'))
                  } else {
                    return Promise.resolve()
                  }
                } else {
                  return Promise.resolve()
                }
              }
            })
          ]}
        >
          <Input
            className={`custom-input ${focusInput === 'phone' && 'border-violet'}`}
            onClick={() => setFocusInput('phone')}
            onBlur={() => setFocusInput('')}
            placeholder='Vui lòng nhập số điện thoại !'
            type='number'
          />
        </Form.Item>

        <Form.Item
          className='form'
          name='gender'
          label='Giới tính'
          rules={[{ required: true, message: 'Vui lòng chọn giới tính !' }]}
        >
          <Select
            className={`select-gender ${focusInput === 'gender' && 'border-violet'}`}
            onClick={() => setFocusInput('gender')}
            onBlur={() => setFocusInput('')}
            placeholder='Vui lòng chọn giới tính'
          >
            <Option value='male'>Nam giới</Option>
            <Option value='female'>Nữ giới</Option>
            <Option value='other'>Khác</Option>
          </Select>
        </Form.Item>
        <Form.Item
          className='form'
          label='Ngày sinh'
          name='date'
          rules={[
            {
              required: true,
              message: 'Vui lòng chọn ngày sinh !'
            }
          ]}
        >
          <DatePicker
            className={`custom-input ${focusInput === 'birthday' && 'border-violet'}`}
            onClick={() => setFocusInput('birthday')}
            onBlur={() => setFocusInput('')}
            placeholder='Vui lòng chọn ngày sinh !'
          />
        </Form.Item>
        <Form.Item
          className='form'
          name='agreement'
          valuePropName='checked'
          rules={[
            {
              validator: (_, value) => (value ? Promise.resolve() : Promise.reject(new Error('Vui lòng xác nhận !')))
            }
          ]}
        >
          <Checkbox className='checkbox'>
            Tôi cam kết tuân theo Chính sách bảo mật và Điều khoản sử dụng của 30shineshop.
          </Checkbox>
        </Form.Item>
        <div className='submit-register' onClick={handleSubmit}>
          ĐĂNG KÝ
        </div>
        <div className='brand-name'>
          <span>30Shine</span>
          <span>Shop</span>
        </div>
      </StyledRegisterForm>
    </WrapperRegister>
  )
}

export default NewRegister
