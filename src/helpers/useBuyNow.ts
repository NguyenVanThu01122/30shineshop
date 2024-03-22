import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { isDialogLogin } from '../redux/Slices/appSlices'
import { RootState } from '../redux/Slices/rootReducer'
import { buyNowProduct } from '../services/detailProduct'
import { ERROR_MESSAGES } from './contanst'

export const useBuyNow = () => {
  const login = useSelector((state: RootState) => state.app.isLogin)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleBuyNow = (id: string, amount: number) => {
    if (login) {
      buyNowProduct(id, amount)
        .then((res) => {
          const paymentId = res.data?.paymentId
          // api sẽ trả về cho mình paymentId
          navigate(`/payment/${paymentId}`) // Điều hướng đến trang chi tiết payment có paymentId nhận được từ backend
        })
        .catch((error) => toast.error(ERROR_MESSAGES.SERVER_ERROR))
    } else {
      dispatch(isDialogLogin(true)) // Nếu chưa đăng nhập thì hiển thị dialog login
    }
  }
  return [handleBuyNow]
}
