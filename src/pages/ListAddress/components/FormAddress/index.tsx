// FormComponent.tsx
import { Form, FormInstance } from 'antd'
import { useTranslation } from 'react-i18next'
import { InputGeneral } from '../../../../components/Ui/input'
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
  const { t } = useTranslation()
  return (
    <Form onFinish={onFinish} layout='vertical' form={form}>
      <Form.Item label={t('NAME')} name='name' rules={validateName()}>
        <InputGeneral size='large' placeholder={t('PLEASE_ENTER_NAME')} />
      </Form.Item>
      <Form.Item label={t('PHONE')} name='telephone' rules={validatePhone()}>
        <InputGeneral size='large' type='number' placeholder={t('PLEASE_ENTER_PHONE')} />
      </Form.Item>
      <Form.Item label={t('EMAIL')} name='email' rules={validateEmail()}>
        <InputGeneral size='large' placeholder={t('PLEASE_ENTER_EMAIL')} />
      </Form.Item>
      <Form.Item label={t('ADDRESS')} name='address' rules={validateAddress()}>
        <InputGeneral size='large' placeholder={t('PLEASE_ENTER_ADDRESS')} />
      </Form.Item>
      {groupButtonContent}
      {groupElementContent}
    </Form>
  )
}
