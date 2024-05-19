import { Form, Input } from 'antd'
import { useTranslation } from 'react-i18next'
import { toast } from 'react-toastify'
import { ButtonGeneral } from '../../../../components/Ui/button'
import { FormGeneral } from '../../../../components/Ui/form'
import { InputGeneral } from '../../../../components/Ui/input'
import { CommonModal } from '../../../../components/Ui/modal'
import { useIsLoading } from '../../../../helpers/useIsLoading'
import { validateConfirmPassword, validateEmail, validatePassword } from '../../../../helpers/validationRules'
import { forgetPassword } from '../../../../services/auth'
import { GroupButton } from './styles'

export const ModalForgetPassword = ({
  isOpenModal,
  setIsOpenModal
}: {
  isOpenModal: boolean
  setIsOpenModal: (value: boolean) => void
}) => {
  const { t } = useTranslation()
  const [form] = Form.useForm()
  const [loading, setLoading] = useIsLoading()
  // hàm xử lý chức năng quên mật khẩu
  const handleForgetPassword = (values: { password: number; email: string }) => {
    const body = {
      password: values.password,
      email: values.email
    }
    setLoading(true)
    forgetPassword(body)
      .then((res) => {
        toast.success(res.data?.message)
        handleCancel()
        setLoading(false)
      })
      .catch((error) => {
        const messageError = error.response?.data
        toast.error(messageError?.message)
        handleCancel()
        setLoading(false)
      })
  }
  const handleCancel = () => {
    setIsOpenModal(false)
    form.resetFields()
  }

  return (
    <CommonModal isModalOpen={isOpenModal} onCancel={handleCancel} width={500} footer={false}>
      <FormGeneral
        form={form}
        onFinish={handleForgetPassword}
        size='large'
        layout='vertical'
        scrollToFirstError // tự động cuộn đến lỗi đầu tiên trong quá trình xử lý lỗi form
      >
        <Form.Item label={t('EMAIL')} name='email' rules={validateEmail()}>
          <InputGeneral className='custom-input' placeholder={t('PLEASE_ENTER_EMAIL')} />
        </Form.Item>
        <Form.Item hasFeedback label={t('PASSWORD_NEW')} name='password' rules={validatePassword()}>
          <Input.Password placeholder={t('PLEASE_ENTER_PASSWORD')} />
        </Form.Item>
        <Form.Item
          label={t('CONFIRM_NEW_PASSWORD')}
          name='confirm'
          hasFeedback
          dependencies={['password']} // Xác định phụ thuộc vào trường "password"
          rules={validateConfirmPassword()} // Pass the value of 'password' as an argument
        >
          <Input.Password placeholder={t('PLEASE_CONFIRM_NEW_PASSWORD')} />
        </Form.Item>
        <GroupButton>
          <ButtonGeneral htmlType='submit' className='update-button' type='primary' loading={loading}>
            {t('UPDATE')}
          </ButtonGeneral>
          <ButtonGeneral onClick={handleCancel} className='cancel-button'>
            {t('CANCEL')}
          </ButtonGeneral>
        </GroupButton>
      </FormGeneral>
    </CommonModal>
  )
}
