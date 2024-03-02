import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { saveTotalCart } from '../redux/actions/app'
import { getListCartProduct } from '../services/cart'
import { ERROR_MESSAGES } from './contanst'

export const useGetLengthOfCart = () => {
  const disPatch = useDispatch()

  // hàm lấy số lượng sản phẩm trong giỏ hàng
  const getLengthOfCart = () => {
    getListCartProduct()
      .then((res) => {
        const length = res.data?.listCart?.length
        disPatch(saveTotalCart(length))
      })
      .catch((error) => toast.error(ERROR_MESSAGES.SERVER_ERROR))
  }
  return [getLengthOfCart]
}
