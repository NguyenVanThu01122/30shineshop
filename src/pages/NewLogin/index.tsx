import { Button, Checkbox, Form, Input } from 'antd'
import { useNavigate } from 'react-router-dom'
import { StyledFormLogin, WrapperLogin } from './styles'
function NewLogin() {
  const navigate = useNavigate()
  const onFinish = (values: any) => {
    console.log('Success:', values)
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <WrapperLogin>
      <StyledFormLogin
        name='basic'
        // labelCol={{ span: 8 }}
        // wrapperCol={{ span: 16 }}
        // initialValues={{ remember: true }}
        layout='vertical'
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        size='large'
      >
        <div className='button'>
          <Button type='primary' size='large' className='login'>
            ĐĂNG NHẬP
          </Button>
          <Button onClick={() => navigate('/new-register')} size='large' className='register'>
            ĐĂNG KÝ
          </Button>
        </div>
        {/* Can be set to primary ghost dashed link text default */}
        <Form.Item label='Email' name='email' rules={[{ required: true, message: 'Vui lòng nhập Email !' }]}>
          <Input />
        </Form.Item>
        <Form.Item label='Password' name='password' rules={[{ required: true, message: 'Vui lòng nhập mật khẩu !' }]}>
          <Input.Password />
        </Form.Item>
        <a href='' className='forgotPassword' target='_blank'>
          Quên mật khẩu?
        </a>
        <div className='newLogin'>
          <Form.Item name='remember' valuePropName='checked'>
            <Checkbox className='checkbox'>Remember me</Checkbox>
          </Form.Item>
          <Button type='primary' htmlType='submit'>
            ĐĂNG NHẬP
          </Button>
        </div>
      </StyledFormLogin>
    </WrapperLogin>
  )
}
export default NewLogin
