import { Form } from 'antd'
import { useState } from 'react'
import { FormLogin } from './components/FormLogin'
import { ModalForgetPassword } from './components/ModalForgetPassword'
import { WrapperLogin } from './styles'

function NewLogin() {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [form] = Form.useForm()

  return (
    <WrapperLogin>
      <FormLogin form={form} setIsOpenModal={setIsOpenModal} />
      <ModalForgetPassword form={form} isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} />
    </WrapperLogin>
  )
}
export default NewLogin
