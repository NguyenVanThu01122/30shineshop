import { Button, Checkbox, Form, Input, message } from 'antd'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { privateAxios } from '../../service/axios'
import { StyledFormLogin, StyledModalForgetPassword, WrapperLogin } from './styles'
function NewLogin() {
  const navigate = useNavigate()
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [focusInput, setFocusInput] = useState('')
  const pathName = window.location.pathname

  const [form] = Form.useForm()

  const showOpenModalForgetPassword = () => {
    setIsOpenModal(true)
  }
  const handleCancel = () => {
    setIsOpenModal(false)
    form.resetFields()
  }

  const onFinish = (values: any) => {
    const data = { email: values.email, password: values.password }
    privateAxios
      .post('/login', data)
      .then((res) => {
        const result = res.data
        localStorage.setItem('token', result?.token) // accessToken
        localStorage.setItem('refreshToken', result?.refreshToken)
        navigate('/')
      })
      .catch((error) => {
        const objError = error.response?.data
        message.error(objError?.message)
      })
  }
  // hàm xử lý chức năng quên mật khẩu
  const handleFofgetPassword = (valuesPassword: any) => {
    const body = {
      password: valuesPassword.password,
      email: valuesPassword.email
    }
    privateAxios
      .put('/forget-password', body)
      .then((res) => {
        message.success(res.data?.message)
        handleCancel()
      })
      .catch((error) => {
        const messageEror = error.response?.data
        message.error(messageEror?.message)
        handleCancel()
      })
  }
  const handleSubmit = () => {
    form.submit()
  }

  return (
    <WrapperLogin>
      <StyledFormLogin size='large' form={form} layout='vertical' onFinish={onFinish}>
        <div className='select-item'>
          <div className={`login ${pathName === '/new-login' && 'border-bottom'}`}>ĐĂNG NHẬP</div>
          <div onClick={() => navigate('/new-register')} className='register'>
            ĐĂNG KÝ
          </div>
        </div>
        <Form.Item
          label='Email'
          name='email'
          rules={[
            { required: true, message: 'Vui lòng nhập Email !' },
            () => ({
              validator(_, value: string) {
                if (value.includes('@') || value === '') {
                  return Promise.resolve()
                } else {
                  return Promise.reject(new Error('Vui lòng nhập đúng định dạng'))
                }
              }
            })
          ]}
        >
          <Input
            className={`itemInput ${focusInput === 'email' && 'border-violet'}`}
            placeholder='Vui lòng nhập Email !'
            onClick={() => setFocusInput('email')}
            onBlur={() => setFocusInput('')}
          />
        </Form.Item>
        <Form.Item label='Password' name='password' rules={[{ required: true, message: 'Vui lòng nhập mật khẩu !' }]}>
          <Input.Password
            className={`itemInput ${focusInput === 'password' && 'border-violet'}`}
            onClick={() => setFocusInput('password')}
            onBlur={() => setFocusInput('')}
            placeholder='Vui lòng nhập mật khẩu !'
          />
        </Form.Item>
        <div className='forgotPassword' onClick={showOpenModalForgetPassword}>
          Quên mật khẩu?
        </div>
        <div className='newLogin'>
          <Form.Item
            name='remember'
            valuePropName='checked'
            rules={[
              {
                validator: (_, value) => (value ? Promise.resolve() : Promise.reject(new Error('Vui lòng xác nhận !')))
              }
            ]}
          >
            <Checkbox className='checkbox'>Remember me !</Checkbox>
          </Form.Item>
          <div className='submit' onClick={handleSubmit}>
            ĐĂNG NHẬP
          </div>
        </div>
      </StyledFormLogin>

      <StyledModalForgetPassword open={isOpenModal} onCancel={handleCancel} width={500} footer={false}>
        <Form form={form} onFinish={handleFofgetPassword} size='large' layout='vertical'>
          <Form.Item
            label='Email'
            name='email'
            rules={[
              { required: true, message: 'Vui lòng nhập Email !' },
              () => ({
                validator(_, value: string) {
                  if (value.includes('@') || value === '') {
                    return Promise.resolve()
                  } else {
                    return Promise.reject(new Error('Vui lòng nhập đúng định dạn'))
                  }
                }
              })
              // {
              //   type: 'email',
              //   message: 'Vui lòng nhập đúng định dạng'
              // }
            ]}
          >
            <Input className='itemInput' placeholder='Vui lòng nhập Email !'></Input>
          </Form.Item>
          <Form.Item
            hasFeedback
            label='Mật khẩu mới'
            name='password'
            rules={[{ required: true, message: 'Vui lòng nhập mật khẩu !' }]}
          >
            <Input.Password placeholder='Vui lòng nhập mật khẩu' />
          </Form.Item>
          <Form.Item
            label='Xác nhận mật khẩu mới'
            name='confirm'
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Vui lòng xác nhận mật khẩu của bạn !'
              },
              (obj) => ({
                validator(_, value: string) {
                  if (obj.getFieldValue('password') === value) {
                    return Promise.resolve()
                  } else {
                    return Promise.reject(new Error('Vui lòng nhập đúng định dạng'))
                  }
                }
              })
              // () => ({
              //   validator(_, value) {
              //     if (value > 5) {
              //       return Promise.resolve()
              //     } else {
              //       return Promise.reject(new Error('Khoong dc nhap so nho hon 5'))
              //     }
              //   }
              // })
            ]}
          >
            <Input.Password placeholder='Vui lòng nhập mật khẩu' />
          </Form.Item>
          <div className='itemButton'>
            <Button htmlType='submit' className='updateButton' type='primary'>
              Cập nhật
            </Button>
            <Button onClick={handleCancel} className='cancelButton'>
              Hủy
            </Button>
          </div>
        </Form>
      </StyledModalForgetPassword>
    </WrapperLogin>
  )
}
export default NewLogin
