import { Button, Checkbox, DatePicker, Form, Input, Select } from 'antd'
import { useNavigate } from 'react-router-dom'
import { StyledRegisterForm, Wrapper } from './styles'
function NewRegister() {
  const { Option } = Select
  const [form] = Form.useForm()
  const navigate = useNavigate()
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values)
  }
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 }
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 }
    }
  }

  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0
      },
      sm: {
        span: 16,
        offset: 8
      }
    }
  }

  const prefixSelector = (
    <Form.Item name='prefix' noStyle>
      <Select style={{ width: 70 }}>
        <Option value='86'>+86</Option>
        <Option value='87'>+87</Option>
      </Select>
    </Form.Item>
  ) // xử lý số điện thoại
  // const residences = [
  //   {
  //     value: 'zhejiang',
  //     label: 'Zhejiang',
  //     children: [
  //       {
  //         value: 'hangzhou',
  //         label: 'Hangzhou',
  //         children: [
  //           {
  //             value: 'xihu',
  //             label: 'West Lake'
  //           }
  //         ]
  //       }
  //     ]
  //   }
  // ]
  // const ItemLayout = {
  //   labelCol: {
  //     span: 6
  //   },
  //   wrapperCol: {
  //     span: 12,
  //     offset: 6 // Dịch chuyển wrapperCol để căn giữa
  //   }
  // }
  return (
    <Wrapper>
      {/* <div className='wrapper'>dkfdkd</div> */}
      <StyledRegisterForm
        form={form}
        name='register'
        onFinish={onFinish}
        layout='horizontal'
        initialValues={{ residence: ['zhejiang', 'hangzhou', 'xihu'], prefix: '86' }}
        // style={{ maxWidth: 600}}
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
          name='nickname'
          label='Họ tên'
          tooltip='Bạn muốn người khác gọi mình là gì?'
          rules={[{ required: true, message: 'Vui lòng nhập tên !', whitespace: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          style={{ marginTop: 20 }}
          name='email'
          label='E-mail'
          rules={[
            {
              type: 'email',
              message: 'Vui lòng nhập đúng định dạng'
            },
            {
              required: true,
              message: 'Vui lòng nhập Email !'
            }
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          style={{ marginTop: 20 }}
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
          style={{ marginTop: 20 }}
          name='confirm'
          label='Xác thực lại mật khẩu'
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Vui lòng xác nhận mật khẩu của bạn !'
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve()
                }
                return Promise.reject(new Error('Mật khẩu mới mà bạn đã nhập không khớp !'))
              }
            })
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          style={{ marginTop: 20 }}
          name='phone'
          label='Số điện thoại'
          rules={[{ required: true, message: 'Vui lòng nhập sôs điện thoại !' }]}
        >
          <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
        </Form.Item>

        <Form.Item
          style={{ marginTop: 20 }}
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
          style={{ marginTop: 20 }}
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
          style={{ marginTop: 20, width: 400 }}
          name='agreement'
          valuePropName='checked'
          rules={[
            {
              validator: (_, value) => (value ? Promise.resolve() : Promise.reject(new Error('Vui lòng xác nhận !')))
            }
          ]}
          // {...tailFormItemLayout}
        >
          <Checkbox className='checkbox'>Tôi cam kết tuân theo Chính sách bảo mật và Điều khoản sử dụng của 30shineshop.</Checkbox>
        </Form.Item>
        <Form.Item className='newRegisters' {...tailFormItemLayout} style={{ marginTop: 20 }}>
          <Button type='primary' size='large' htmlType='submit'>
            ĐĂNG KÝ
          </Button>
        </Form.Item>
      </StyledRegisterForm>
    </Wrapper>
  )
}

export default NewRegister
