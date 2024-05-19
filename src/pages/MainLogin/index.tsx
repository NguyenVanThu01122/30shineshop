import { useState } from 'react'
import { FormLogin } from './components/FormLogin'
import { ModalForgetPassword } from './components/ModalForgetPassword'
import { WrapperLogin } from './styles'

function MainLogin() {
  const [isOpenModal, setIsOpenModal] = useState(false)

  return (
    <WrapperLogin>
      <FormLogin setIsOpenModal={setIsOpenModal} />
      <ModalForgetPassword isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} />
    </WrapperLogin>
  )
}
export default MainLogin
