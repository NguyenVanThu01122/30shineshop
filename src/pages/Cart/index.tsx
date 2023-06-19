import { message } from 'antd'
import { useEffect, useState } from 'react'
import { AiOutlineDelete } from 'react-icons/ai'
import { useNavigate } from 'react-router'
import { privateAxios } from '../../service/axios'
import { CartWrapper } from './style'
export default function Cart() {
  const navigate = useNavigate()
  let [listCart, setListCart] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)
  const [totalAmount, setTotalAmount] = useState(0)
  const [listCartId, setListCardId] = useState<any>([])
  const [checkbox, setCheckbox] = useState('')

  const getListCart = () => {
    privateAxios
      .get('/cart')
      .then((res) => {
        let total = 0
        let totalAmount = 0
        res.data?.listCart?.forEach((item: any) => {
          total += item.totalPrice
          totalAmount += item.amount
        })
        setListCart(res.data?.listCart)
        setTotalPrice(total)
        setTotalAmount(totalAmount)
      })
      .catch((error) => {
        message.error(error.response?.data?.message)
      })
  }

  useEffect(() => {
    getListCart()
  }, [])

  const upDateCart = (cart: string, amount: number) => {
    if (amount > 0) {
      privateAxios
        .put(`/cart/${cart}`, {
          amount
        })
        .then((res) => {
          message.success(res.data?.message)
          getListCart()
        })
        .catch((error) => {
          message.error(error.response?.data?.message)
        })
    }
  }
  const handleDelete = (id: number) => {
    privateAxios
      .delete(`/cart/${id}`)
      .then((res) => {
        message.success(res.data?.message)
        getListCart()
      })
      .catch((error) => {
        message.error(error.response?.data?.message)
      })
  }

  const handleSelectCart = (cardId: string) => {
    // if (listCartId.includes(cardId)) {
    //   const index = listCartId.findIndex((item: any) => item === cardId)
    //   if (index !== -1) {
    //     listCartId.splice(index, 1)
    //     setListCardId([...listCartId])
    //   }
    // } else {

    listCartId.push(cardId)
    setListCardId([...listCartId])
    let elementCheck = (document.getElementById('checkbox') as any).checked
    setCheckbox(elementCheck)

    // }
  }

  const handleOrder = () => {
    if (listCartId.length === 0) {
      message.error('Vui lòng chọn ít nhất một sản phẩm')
    } else {
      privateAxios
        .post('/payment/order', {
          listCartId
        })
        .then((res) => {
          const paymentId = res.data?.paymentId
          navigate(`/payment/${paymentId}`)
        })
    }
  }

  console.log(listCartId)
  return (
    <CartWrapper>
      <div className='itemCart'>
        <div>GIỎ HÀNG</div>
        <div className='itemProduct'>
          <div className='product'>
            <div className='itemTitle'>
              <div className='checkboxProduct'>
                {/* <input type='checkbox' /> */}
                <span>Sản phẩm</span>
              </div>
              <div className='titleProduct'>
                <div>Đơn giá</div>
                <div>Số lượng</div>
                <div>Tạm tính</div>
              </div>
            </div>
            {listCart.length > 0
              ? listCart.map((item: any) => {
                  return (
                    <div className='detailProduct' key={item.id}>
                      <div className='informationProduct'>
                        <input
                          type='checkbox'
                          id='checkbox'
                          value={checkbox}
                          onClick={() => handleSelectCart(item.id)}
                        />
                        <img className='imgProduct' src={item.image} alt='image' />
                        <div>{item.productName}</div>
                        <div className='priceProduct'>
                          <div>
                            {item.originPrice}
                            <span>₫</span>
                          </div>
                          {/* <div className='priceSale'>
                        <div>299.000 đ</div>
                        <div>14%</div>
                      </div> */}
                        </div>
                      </div>
                      <div className='upDown'>
                        <div className='buttonUpDown'>
                          <div onClick={() => upDateCart(item.id, item.amount - 1)}>-</div>
                          <div>{item?.amount}</div>
                          <div onClick={() => upDateCart(item.id, item.amount + 1)}>+</div>
                        </div>
                        <div>{item?.amount * item?.originPrice}</div>
                        <AiOutlineDelete onClick={() => handleDelete(item.id)} className='iconDelete'></AiOutlineDelete>
                      </div>
                    </div>
                  )
                })
              : ''}
          </div>
        </div>
      </div>
      <div className='informationLine'>
        <div className='itemPay'>
          <div>THÔNG TIN ĐƠN HÀNG</div>
          <div className='itemProvisional'>
            <div className='provisional'>
              <div>
                Tạm tính <span>({totalAmount} sản phẩm)</span>
              </div>
            </div>
            <div className='number'>
              {totalPrice} <span>đ</span>
            </div>
          </div>

          <div className='totalMoney'>
            <div className='money'>
              <div>Tổng tiền</div>
              <div className='numberTotal'>
                {totalPrice} <span>đ</span>
              </div>
            </div>
            <div>Đã bao gồm VAT (nếu có)</div>
          </div>
        </div>
        <div className='order' onClick={handleOrder}>
          <div>TIẾN HÀNH ĐẶT HÀNG</div>
          <div>Không Ưng Đổi Ngay Trong 30 Ngày</div>
        </div>
      </div>
    </CartWrapper>
  )
}
