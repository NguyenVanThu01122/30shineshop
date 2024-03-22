import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { isLogin, saveTotalCart, saveUser } from '../redux/Slices/appSlices'

export const useLogOut = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const HandleLogOut = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('name')
    navigate('/main-login')
    dispatch(saveTotalCart(0)) // reset lại giỏ hàng 
    dispatch(saveUser({})) // reset lại thông tin user
    dispatch(isLogin(false)) // lưu trạng thái login vào store
  }
  return HandleLogOut
}
