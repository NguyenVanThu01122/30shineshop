import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { ProductType } from '../..'
import { CurrencyFormat } from '../../../../components/CurrencyFormat'
import { AMOUNT_PRODUCTS, ERROR_MESSAGES, TOTAL_PRICE } from '../../../../helpers/contanst'
import { orderCart } from '../../../../services/cart'
import { WrapperInformation } from './styles'

export default function InformationOrder({ listCartId, listCart }: { listCart: ProductType[]; listCartId: any }) {
  const [totalPrice, setTotalPrice] = useState(TOTAL_PRICE)
  const [amountProducts, setAmountProducts] = useState(AMOUNT_PRODUCTS)
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
    listCartId.forEach((cartId: string) => {
      listCart?.forEach((cartItem: ProductType) => {
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
