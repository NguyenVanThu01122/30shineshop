// FormComponent.tsx
import { Form, FormInstance } from 'antd'
import { InputGeneral } from '../../../../components/Ui/input'
import { LABEL, PLACEHOLDER } from '../../../../helpers/contanst'
import { validateAddress, validateEmail, validateName, validatePhone } from '../../../../helpers/validationRules'

interface FormComponentProps {
  onFinish?: (values: any) => void
  form?: FormInstance<any> | undefined // Định kiểu là FormInstance<any> | undefined
  groupButtonContent?: JSX.Element
  groupElementContent?: JSX.Element
  className?: any
}

export default function FormComponent({
  onFinish,
  form,
  groupButtonContent,
  groupElementContent,
  className
}: FormComponentProps) {
  return (
    <Form onFinish={onFinish} layout='vertical' form={form}>
      <Form.Item label={LABEL.NICK_NAME} name='name' rules={validateName}>
        <InputGeneral size='large' placeholder={PLACEHOLDER.PLEASE_ENTER_NAME} />
      </Form.Item>
      <Form.Item label={LABEL.PHONE} name='telephone' rules={validatePhone}>
        <InputGeneral size='large' type='number' placeholder={PLACEHOLDER.PLEASE_ENTER_PHONE} />
      </Form.Item>
      <Form.Item label={LABEL.EMAIL} name='email' rules={validateEmail}>
        <InputGeneral size='large' placeholder={PLACEHOLDER.PLEASE_ENTER_EMAIL} />
      </Form.Item>
      <Form.Item label={LABEL.ADDRESS} name='address' rules={validateAddress}>
        <InputGeneral size='large' placeholder={PLACEHOLDER.PLEASE_ENTER_ADDRESS} />
      </Form.Item>
      {groupButtonContent}
      {groupElementContent}
    </Form>
  )
}
