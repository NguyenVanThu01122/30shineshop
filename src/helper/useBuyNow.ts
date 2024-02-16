import { useNavigate } from 'react-router-dom'
import { privateAxios } from '../service/axios'

export const useBuyNow = () => {
  const navigate = useNavigate()
  const handleBuyNow = (id: string, amount: number) => {
    privateAxios
      .post('/payment/buy-now', {
        id,
        amount
      })
      .then((res) => {
        // api sẽ trả về cho mình paymentId
        const paymentId = res.data?.paymentId
        navigate(`/payment/${paymentId}`) // Điều hướng đến trang chi tiết payment có paymentId nhận được từ backend
      })
  }
  return [handleBuyNow]
}
