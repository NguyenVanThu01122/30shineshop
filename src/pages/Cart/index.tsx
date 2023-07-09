import { message } from 'antd'
import { useEffect, useState } from 'react'
import { AiOutlineDelete } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { saveTotalCart } from '../../redux/actions/detailProduct'
import { privateAxios } from '../../service/axios'
import { CartWrapper } from './style'
export default function Cart() {
  const navigate = useNavigate()
  let [listCart, setListCart] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)
  const [totalAmount, setTotalAmount] = useState(0)
  const [listCartId, setListCartId] = useState<any>([])
  const disPatch = useDispatch()
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

  const getLengthOfCart = () => {
    privateAxios.get('/cart').then((res) => {
      const length = res.data.listCart.length
      disPatch(saveTotalCart(length))
    })
  }

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
        getLengthOfCart()
      })
      .catch((error) => {
        message.error(error.response?.data?.message)
      })
  }
  const handleClickItem = (id: string) => {
    if (listCartId.includes(id) === false) {
      listCartId.push(id)
      setListCartId([...listCartId])
    } else {
      const newArr = listCartId.filter((item: any) => {
        if (item !== id) {
          return true
        }
      })
      setListCartId(newArr)
    }
  }
  const handleClickOrder = () => {
    if (listCartId.length > 0) {
      privateAxios
        .post('/payment/order', {
          listCartId
        })
        .then((res) => {
          // const paymentId = res.data?.paymentId
          navigate(`/payment/${res.data?.paymentId}`)
        })
        .catch((error) => {
          message.error(error)
        })
    }
  }
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
                          // value={checkbox}
                          onClick={() => handleClickItem(item.id)}
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
                          <div>{item.amount}</div>
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
        <div className={`order ${listCartId.length > 0 ? 'colorYelow' : ''}`} onClick={handleClickOrder}>
          <div>TIẾN HÀNH ĐẶT HÀNG</div>
          <div>Không Ưng Đổi Ngay Trong 30 Ngày</div>
        </div>
      </div>
    </CartWrapper>
  )
}
