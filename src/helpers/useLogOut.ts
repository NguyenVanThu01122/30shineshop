import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { saveTotalCart, saveUser } from '../redux/Slices/appSlices'
import { ROUTES } from '../routes/routes'
import { removeLocalStorageValue } from './localStorageUtils'

export const useLogOut = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const HandleLogOut = () => {
    removeLocalStorageValue('token')
    removeLocalStorageValue('name')
    navigate(ROUTES.LOGIN)
    dispatch(saveTotalCart(0)) // reset lại giỏ hàng
    dispatch(saveUser({})) // reset lại thông tin user
  }
  return HandleLogOut
}
