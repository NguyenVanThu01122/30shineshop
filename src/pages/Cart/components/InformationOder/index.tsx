import { useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
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
  const { t } = useTranslation()

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

  // Sử dụng useMemo để lưu kết quả tính toán
  const calculateTotals = useMemo(() => {
    // xử lý tính tổng tiền sản phẩm, và tính tổng số lượng của từng sản phẩm
    return (listCartId: any, listCart: any) => {
      let totalPrice = 0
      let amountProducts = 0
      listCartId.forEach((cartId: string) => {
        listCart?.forEach((cartItem: ProductType) => {
          if (cartItem?.id === cartId) {
            totalPrice += cartItem?.totalPrice || 0
            amountProducts += cartItem?.amount || 0
          }
        })
      })
      return { totalPrice, amountProducts }
    }
  }, [])

  useEffect(() => {
    const { totalPrice, amountProducts } = calculateTotals(listCartId, listCart)
    setTotalPrice(totalPrice)
    setAmountProducts(amountProducts)
  }, [listCartId, listCart, calculateTotals]) // nó sẽ chỉ thay đổi giá trị của totalPrice và amountProdut khi biến phụ thuộc bị thay đổi.

  useEffect(() => {
    handleClickOrder()
  }, [])
  return (
    <WrapperInformation>
      <div className='itemPay'>
        <div>{t('ORDER_INFORMATION')}</div>
        <div className='itemProvisional'>
          <div className='provisional'>
            <div className='amountOrder'>
              <div>
                {t('TEMPORARY')}{' '}
                <span>
                  ({listCartId?.length} {t('PRODUCTS')})
                </span>
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
            <div>{t('TOTAL_MONEY')}</div>
            <div className='numberTotal'>
              <CurrencyFormat amount={totalPrice} /> <span>đ</span>
            </div>
          </div>
          <div>{t('INCLUDED_VAT')}</div>
        </div>
      </div>
      <div className={`order ${listCartId.length ? 'colorYellow' : ''}`} onClick={handleClickOrder}>
        <div>{t('PROCEED_TO_ORDER')}</div>
        <div>{t('EXCHANGE_IF_NOT_SATISFIED')}</div>
      </div>
    </WrapperInformation>
  )
}
