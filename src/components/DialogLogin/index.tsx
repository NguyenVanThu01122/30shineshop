import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { PLEASE_LOGIN_TO_CONTINUE } from '../../helpers/contanst'
import { isDialogLogin } from '../../redux/Slices/appSlices'
import { Content, StyledCommonModal } from './styles'

export default function DialogLogin({ dialogLogin }: { dialogLogin: boolean }) {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const onCancel = () => dispatch(isDialogLogin(false))
  const onOk = () => {
    navigate('/main-login')
    onCancel()
  }
  return (
    <StyledCommonModal width={450} onOk={onOk} onCancel={onCancel} isModalOpen={dialogLogin}>
      <Content>{PLEASE_LOGIN_TO_CONTINUE}</Content>
    </StyledCommonModal>
  )
}
