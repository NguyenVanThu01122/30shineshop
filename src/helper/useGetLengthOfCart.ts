import { useDispatch } from 'react-redux'
import { saveTotalCart } from '../redux/actions/detailProduct'
import { privateAxios } from '../service/axios'

export const GetLengthOfCart = () => {
  const disPatch = useDispatch()

  // hàm lấy số lượng sản phẩm
  const getLengthOfCart = () => {
    privateAxios.get('/cart').then((res) => {
      const length = res.data?.listCart?.length
      disPatch(saveTotalCart(length))
    })
  }
  return [getLengthOfCart]
}
