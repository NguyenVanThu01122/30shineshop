import { Form, FormInstance, Input } from 'antd'
import { toast } from 'react-toastify'
import { ButtonGeneral } from '../../../../components/Ui/button'
import { FormGeneral } from '../../../../components/Ui/form'
import { InputGeneral } from '../../../../components/Ui/input'
import { CommonModal } from '../../../../components/Ui/modal'
import { LABEL, PLACEHOLDER } from '../../../../helpers/contanst'
import { validateConfirmPassword, validateEmail, validatePassword } from '../../../../helpers/validationRules'
import { forgetPassword } from '../../../../services/auth'
import { GroupButton } from './styles'

export const ModalForgetPassword = ({
  form,
  isOpenModal,
  setIsOpenModal
}: {
  form: FormInstance<any>
  isOpenModal: boolean
  setIsOpenModal: any
}) => {
  // hàm xử lý chức năng quên mật khẩu
  const handleForgetPassword = (values: { password: number; email: string }) => {
    const body = {
      password: values.password,
      email: values.email
    }
    forgetPassword(body)
      .then((res) => {
        toast.success(res.data?.message)
        handleCancel()
      })
      .catch((error) => {
        const messageError = error.response?.data
        toast.error(messageError?.message)
        handleCancel()
      })
  }
  const handleCancel = () => {
    setIsOpenModal(false)
    form.resetFields()
  }

  return (
    <CommonModal isModalOpen={isOpenModal} onCancel={handleCancel} width={500} footer={false}>
      <FormGeneral form={form} onFinish={handleForgetPassword} size='large' layout='vertical'>
        <Form.Item label={LABEL.EMAIL} name='email' rules={validateEmail}>
          <InputGeneral className='custom-input' placeholder={PLACEHOLDER.PLEASE_ENTER_EMAIL}></InputGeneral>
        </Form.Item>
        <Form.Item hasFeedback label={LABEL.PASSWORD_NEW} name='password' rules={validatePassword}>
          <Input.Password placeholder={PLACEHOLDER.PLEASE_ENTER_PASSWORD} />
        </Form.Item>
        <Form.Item
          label={LABEL.CONFIRM_NEW_PASSWORD}
          name='confirm'
          hasFeedback
          dependencies={['password']} // Xác định phụ thuộc vào trường "password"
          rules={validateConfirmPassword}
        >
          <Input.Password placeholder={PLACEHOLDER.PLEASE_CONFIRM_NEW_PASSWORD} />
        </Form.Item>
        <GroupButton>
          <ButtonGeneral htmlType='submit' className='update-button' type='primary'>
            Cập nhật
          </ButtonGeneral>
          <ButtonGeneral onClick={handleCancel} className='cancel-button'>
            Hủy
          </ButtonGeneral>
        </GroupButton>
      </FormGeneral>
    </CommonModal>
  )
}
