import { Button, Checkbox, DatePicker, Form, Input, Select, message } from 'antd'
import { useNavigate } from 'react-router-dom'
import { privateAxios } from '../../service/axios'
import { StyledRegisterForm, Wrapper } from './styles'
function NewRegister() {
  const { Option } = Select
  const [form] = Form.useForm()
  const navigate = useNavigate()

  const onFinish = (values: any) => {
    const data = {
      name: values.nickname,
      telephone: values.phone,
      email: values.email,
      password: values.password,
      gender: values.gender,
      date: values.date
    }
    privateAxios
      .post('/register', data)
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

  return (
    <Wrapper>
      <StyledRegisterForm
        form={form}
        name='register'
        onFinish={onFinish}
        layout='vertical'
        // initialValues={{ residence: ['zhejiang', 'hangzhou', 'xihu'], prefix: '86' }}
        size='large'
        scrollToFirstError
      >
        <div className='button'>
          <Button onClick={() => navigate('/new-login')} type='primary' className='login'>
            ĐĂNG NHẬP
          </Button>
          <Button className='register'>ĐĂNG KÝ</Button>
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
          <Input />
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
                if (value.includes('@') === false && value !== '') {
                  return Promise.reject(new Error('Vui lòng nhập đúng định dạng !'))
                } else {
                  return Promise.resolve()
                }
              }
            })
          ]}
        >
          <Input type='email' />
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
          hasFeedback // icon thành công
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          className='form'
          name='confirm'
          label='Xác thực lại mật khẩu'
          dependencies={['password']}
          hasFeedback // icon thành công
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
          <Input.Password />
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
                if (value[0] !== '0' && value !== '') {
                  return Promise.reject(new Error('Vui lòng nhập đúng định dạng !'))
                } else if ((value.length > 10 || value.length < 10) && value !== '') {
                  return Promise.reject(new Error('Vui lòng nhập đầy đủ 10 chữ số !'))
                } else {
                  return Promise.resolve()
                }
              }
            })
          ]}
        >
          <Input type='number' />
        </Form.Item>

        <Form.Item
          className='form'
          name='gender'
          label='Giới tính'
          rules={[{ required: true, message: 'Vui lòng chọn giới tính !' }]}
        >
          <Select placeholder='Vui lòng chọn giới tính'>
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
          <DatePicker />
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
        <div className='newRegister'>
          <Button type='primary' size='large' htmlType='submit'>
            ĐĂNG KÝ
          </Button>
        </div>
      </StyledRegisterForm>
    </Wrapper>
  )
}

export default NewRegister
