// FormComponent.tsx
import { Form, FormInstance } from 'antd'
import { validateAddress, validateEmail, validateName, validatePhone } from '../../helpers/validationRules'
import { InputGeneral } from './input'

interface FormComponentProps {
  onFinish?: (values: any) => void
  form?: FormInstance<any> | undefined // Định kiểu là FormInstance<any> | undefined
  groupButtonContent?: JSX.Element
  groupElementContent?: JSX.Element
  className?: any
}

export const FormComponent = ({
  onFinish,
  form,
  groupButtonContent,
  groupElementContent,
  className
}: FormComponentProps) => {
  return (
    <Form onFinish={onFinish} layout='vertical' form={form}>
      <Form.Item label='Họ tên' name='name' rules={validateName}>
        <InputGeneral size='large' placeholder='Vui lòng nhập họ tên' />
      </Form.Item>
      <Form.Item label='Số điện thoại' name='telephone' rules={validatePhone}>
        <InputGeneral size='large' type='number' placeholder='Vui lòng nhập số điện thoại' />
      </Form.Item>
      <Form.Item label='Email' name='email' rules={validateEmail}>
        <InputGeneral size='large' placeholder='Vui lòng nhập email' />
      </Form.Item>
      <Form.Item label='Địa chỉ' name='address' rules={validateAddress}>
        <InputGeneral size='large' placeholder='Vui lòng nhập địa chỉ' />
      </Form.Item>
      {groupButtonContent}
      {groupElementContent}
    </Form>
  )
}
