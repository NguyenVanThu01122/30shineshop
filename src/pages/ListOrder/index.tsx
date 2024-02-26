import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { CurrencyFormat } from '../../components/CurrencyFormat'
import SidebarAccount from '../../components/SidebarAccount'
import { ButtonGeneral } from '../../components/Ui/button'
import { Loading } from '../../components/Ui/loading'
import { OrderStatusUtils } from '../../helpers/orderUtils'
import { scrollToTop } from '../../helpers/scrollToTop'
import iconGifDuck from '../../images/img-duck.jpg'
import { addListOrder } from '../../redux/actions/detailProduct'
import { getListOrder } from '../../service/listOrder'
import { ItemNotAvailable } from '../DetailOrder/styles'
import { ItemDetailOrder, ItemOrder, WrapperOrder } from './styles'

function ListOrder() {
  const [orderStatus, setOrderStatus] = useState('')
  const [listOrder, setListOrder] = useState([])
  const orders = useSelector((state: any) => state.app?.listOrder)
  const { orderStatusCommon, arrStatusOrder, colorStatus, messageStatusOrder, updateOrderStatusMessage } =
    OrderStatusUtils()

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)

  // hàm lấy danh sách đơn hàng
  const handleGetlistOrder = () => {
    setIsLoading(true)
    getListOrder()
      .then((res) => {
        dispatch(addListOrder(res.data?.data))
        setIsLoading(false)
      })
      .catch((error) => {
        toast.error(error.response?.data?.message)
        setIsLoading(false)
      })
  }

  useEffect(() => {
    // dùng filter lọc trạng thái đơn hàng theo trạng thái đã chọn
    const arrStatus = orders.filter((item: any) => {
      if (orderStatus === '') {
        return true
        // Nếu orderStatus là rỗng (không có trạng thái nào được chọn),
        //trả về true cho mọi phần tử trong danh sách đơn hàng, do đó danh sách đơn hàng không bị lọc và được hiển thị đầy đủ.
      } else {
        return item.status === orderStatus
        //Nếu orderStatus có giá trị, chỉ trả về các phần tử có trạng thái giống với orderStatus
      }
    })
    setListOrder(arrStatus) //  save mảng arr vào state listOrder
  }, [orderStatus, orders])

  useEffect(() => {
    scrollToTop()
    handleGetlistOrder()
    updateOrderStatusMessage(orderStatus) // gọi hàm cập nhật lời nhắn trạng thái order
  }, [orderStatus])

  return (
    <WrapperOrder>
      <SidebarAccount />
      <ItemOrder>
        <div className='my-order'>Đơn hàng của tôi</div>
        <div className='select-item'>
          {arrStatusOrder.map((item: any) => (
            <div
              key={item.id}
              className={`${orderStatus === item.status && 'active-status'}`}
              onClick={() => setOrderStatus(item.status)}
            >
              {item.title}
            </div>
          ))}
        </div>
        {/* <Input className='custom-input' size='large' placeholder='Tìm id đơn hàng hoặc tên sản phẩm '></Input> */}
        {listOrder?.map((item: any) => (
          <ItemDetailOrder>
            <div style={{ color: colorStatus(item.status) }}>{orderStatusCommon(item.status)}</div>
            <div className='list-product'>
              {item?.products.map((product: any) => (
                <div className='information-product'>
                  <div className='detail-order'>
                    <img className='img-product' src={product?.image} alt='' />
                    <div className='name-product'>
                      <div>{product?.name}</div>
                      <div>Phiên bản: default</div>
                      <div>X{product?.amount}</div>
                    </div>
                  </div>
                  <div className='price'>
                    <CurrencyFormat amount={product.amount * product.price} />
                    <span>đ</span>
                  </div>
                </div>
              ))}
            </div>
            <div className='total-price'>
              <div>Tổng tiền:</div>
              <div>
                <CurrencyFormat amount={item?.totalPrice} />
                <span>đ</span>
              </div>
            </div>
            <div className='select'>
              <div style={{ color: colorStatus(item.status) }}>{orderStatusCommon(item.status)}</div>
              <div className='group-button'>
                <ButtonGeneral
                  onClick={() => navigate(`/detail-order/${item?._id}`)}
                  size='large'
                  className='btn-detail-order'
                >
                  Chi tiết đơn hàng
                </ButtonGeneral>
              </div>
            </div>
          </ItemDetailOrder>
        ))}

        {/* item Loading */}
        {isLoading && <Loading />}

        {!isLoading && !listOrder.length && (
          <ItemNotAvailable>
            <div>{messageStatusOrder}</div>
            <img className='iconGifDuck' src={iconGifDuck} alt='' />
          </ItemNotAvailable>
        )}
      </ItemOrder>
    </WrapperOrder>
  )
}
export default ListOrder
