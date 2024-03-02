import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { buyNowProduct } from '../services/detailProduct'
import { ERROR_MESSAGES } from './contanst'

export const useBuyNow = () => {
  const navigate = useNavigate()
  const handleBuyNow = (id: string, amount: number) => {
    buyNowProduct(id, amount)
      .then((res) => {
        const paymentId = res.data?.paymentId
        // api sẽ trả về cho mình paymentId
        navigate(`/payment/${paymentId}`) // Điều hướng đến trang chi tiết payment có paymentId nhận được từ backend
      })
      .catch((error) => toast.error(ERROR_MESSAGES.SERVER_ERROR))
  }
  return [handleBuyNow]
}
