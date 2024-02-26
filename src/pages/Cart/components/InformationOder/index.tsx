import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { CurrencyFormat } from '../../../../components/CurrencyFormat'
import { ERROR_MESSAGES } from '../../../../helpers/contanst'
import { orderCart } from '../../../../service/cart'
import { WrapperInformation } from './styles'

export const InformationLine = ({ listCartId, listCart }: { listCart: any; listCartId: any }) => {
  const [totalPrice, setTotalPrice] = useState(0)
  const [amountProducts, setAmountProducts] = useState(0)
  const navigate = useNavigate()

  // hàm click vào item đặt hàng
  const handleClickOrder = () => {
    if (listCartId.length) {
      orderCart(listCartId)
        .then((res) => {
          // res.data trả vể cho paymentId
          navigate(`/payment/${res.data?.paymentId}`)
        })
        .catch((error) => {
          toast.error(ERROR_MESSAGES.SERVER_ERROR)
        })
    }
  }
  // useEffect này xử lý tính tổng tiền sản phẩm, và t tổng số lượng của từng sản phẩm
  useEffect(() => {
    let totalPrice = 0
    let amountProducts = 0
    listCartId.forEach((cartId: any) => {
      listCart?.forEach((cartItem: any) => {
        if (cartItem?.id === cartId) {
          // Cập nhật tổng giá trị và số lượng sản phẩm
          totalPrice += cartItem?.totalPrice
          amountProducts += cartItem?.amount
        }
      })
    })
    setTotalPrice(totalPrice)
    setAmountProducts(amountProducts)
  }, [listCartId, listCart]) // nó sẽ chỉ thay đổi giá trị của totalPrice và amountProdut khi biến phụ thuộc bị thay đổi.

  useEffect(() => {
    handleClickOrder()
  }, [])
  return (
    <WrapperInformation>
      <div className='itemPay'>
        <div>THÔNG TIN ĐƠN HÀNG</div>
        <div className='itemProvisional'>
          <div className='provisional'>
            <div className='amountOrder'>
              <div>
                Tạm tính <span>({listCartId?.length} sản phẩm)</span>
              </div>
            </div>
            <div>
              <span>X</span>
              {amountProducts}
            </div>
          </div>
          <div className='number'>
            <CurrencyFormat amount={totalPrice} /> <span>đ</span>
          </div>
        </div>
        <div className='totalMoney'>
          <div className='money'>
            <div>Tổng tiền</div>
            <div className='numberTotal'>
              <CurrencyFormat amount={totalPrice} /> <span>đ</span>
            </div>
          </div>
          <div>Đã bao gồm VAT (nếu có)</div>
        </div>
      </div>
      <div className={`order ${listCartId.length ? 'colorYelow' : ''}`} onClick={handleClickOrder}>
        <div>TIẾN HÀNH ĐẶT HÀNG</div>
        <div>Không Ưng Đổi Ngay Trong 30 Ngày</div>
      </div>
    </WrapperInformation>
  )
}
