import { Button, message } from 'antd'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import SidebarAccount from '../../components/SidebarAccount'
import { addListOrder } from '../../redux/actions/detailProduct'
import { privateAxios } from '../../service/axios'
import { ItemDetailOrder, ItemOrder, WrapperOrder } from './styles'

// xử lý title trạng thái đơn hàng
const arrStatus = [
  {
    id: 1,
    status: '',
    text: 'Tất cả'
  },
  {
    id: 2,
    status: 'processing',
    text: 'Đang xử lý'
  },
  {
    id: 3,
    status: 'confirmed',
    text: 'Đã xác nhận'
  },
  {
    id: 4,
    status: 'in_transit',
    text: 'Đang giao hàng'
  },
  {
    id: 5,
    status: 'delivered',
    text: 'Đã giao hàng'
  },
  {
    id: 6,
    status: 'canceled',
    text: 'Đã hủy'
  }
]

// hàm xử lý trạng thái đơn hàng
const mapOrderStatus = (status: any) => {
  switch (status) {
    case 'processing':
      return 'Đang xử lý'
    case 'confirmed':
      return 'Đã xác nhận'
    case 'in_transit':
      return 'Đang giao hàng'
    case 'delivered':
      return 'Đã giao hàng'
    default:
      return 'Đã hủy'
  }
}

function ListOrder() {
  const navigate = useNavigate()
  const [orderStatus, setOrderStatus] = useState('')
  const [listOrder, setListOrder] = useState([])
  const orders = useSelector((state: any) => state.app?.listOrder)
  const dispatch = useDispatch()

  // hàm lấy danh sách đơn hàng
  const handleGetlistOrder = () => {
    privateAxios
      .get('/order/list-order')
      .then((res) => {
        dispatch(addListOrder(res.data?.data))
      })
      .catch((error) => {
        message.error(error.response?.data?.message)
      })
  }

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Sử dụng 'smooth' để có hiệu ứng cuộn mượt
    })
    handleGetlistOrder()
  }, [])

  useEffect(() => {
    // dùng filter lọc trạng thái đơn hàng
    const arr = orders.filter((item: any) => {
      if (orderStatus === '') {
        return true
      } else {
        return item.status === orderStatus
      }
    })
    setListOrder(arr) //  save mảng arr vào state listOrder
  }, [orderStatus, orders]) // mỗi khi biến phụ thuộc thay đổi mảng arr sẽ được gọi lại

  return (
    <WrapperOrder>
      <SidebarAccount />
      <ItemOrder>
        <div className='my-order'>Đơn hàng của tôi</div>
        <div className='select-item'>
          {arrStatus.map((item: any) => (
            <div
              key={item.id}
              className={`${orderStatus === item.status && 'active-status'}`}
              onClick={() => setOrderStatus(item.status)}
            >
              {item.text}
            </div>
          ))}
        </div>
        {/* <Input className='custom-input' size='large' placeholder='Tìm id đơn hàng hoặc tên sản phẩm '></Input> */}
        {listOrder.length === 0 && <div className='no-order'>Không có đơn hàng !</div>}
        {listOrder?.map((item: any) => (
          <ItemDetailOrder>
            <div className='status'>{mapOrderStatus(item.status)}</div>
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
                    {product.amount * product.price}
                    <span>đ</span>
                  </div>
                </div>
              ))}
            </div>
            <div className='total-price'>
              <div>Tổng tiền:</div>
              <div>
                {item?.totalPrice}
                <span>đ</span>
              </div>
            </div>
            <div className='select'>
              <div>{mapOrderStatus(item.status)}</div>
              <div className='group-button'>
                <Button onClick={() => navigate(`/detail-order/${item?._id}`)} size='large'>
                  Chi tiết đơn hàng
                </Button>
              </div>
            </div>
          </ItemDetailOrder>
        ))}
      </ItemOrder>
    </WrapperOrder>
  )
}
export default ListOrder
