import { Button, Timeline, message } from 'antd'
import moment from 'moment'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import SidebarAccount from '../../components/SidebarAccount'
import { privateAxios } from '../../service/axios'
import { ItemDetaiOrder, WrapperDetailOrder } from './styles'

// hàm xử lý trạng thái đơn hàng
const orderStatus = (status: any) => {
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

// hàm xủ lý màu trạng thái đơn hàng
const colorStatus = (status: string) => {
  let color = ''
  switch (status) {
    case 'processing':
      color = 'blue'
      break
    case 'confirmed':
      color = 'yellow'
      break
    case 'in_transit':
      color = 'orange'
      break
    case 'delivered':
      color = 'green'
      break
    default:
      color = 'red'
      break
  }
  return color
}

function DetailOrder() {
  const [orderDetail, setOrderDetail] = useState<any>({})
  const navigate = useNavigate()
  const params = useParams()

  // hàm lấy chi tiết đơn hàng
  const handleGetDetailOrder = () => {
    privateAxios
      .get(`/order/detail/${params.id}`)
      .then((res) => {
        setOrderDetail(res.data?.data)
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
    handleGetDetailOrder()
  }, [])

  return (
    <WrapperDetailOrder>
      <SidebarAccount />
      <ItemDetaiOrder>
        <div className='order'>Đơn Hàng</div>
        <div className='order-detail'>
          <div className='delivery-address'>
            <div>Địa chỉ nhận hàng</div>
            <div>
              {orderDetail?.timelineDetail?.map((item: any) => {
                return orderStatus(item?.status)
              })}
            </div>
          </div>
          <div className='item-information'>
            <div className='order-information'>
              <div>{orderDetail?.address?.name}</div>
              <div>{orderDetail?.address?.phone}</div>
              <div>{orderDetail?.address?.email}</div>
              <div>{orderDetail?.address?.detailAddress}</div>
            </div>
            <Timeline
              className='custom-timeLine'
              mode='left' // mode kiểu hiện thị của timeline
              items={orderDetail?.timelineDetail?.map((item: any) => {
                const isoString = item.timeUpdate // lấy chuỗi time ISO
                const formattedDate = moment(isoString).format('HH:mm DD/MM/YYYY') //dùng moment để tạo một đối tượng Moment từ chuỗi thời gian isoString, và dùng method format('HH:mm DD/MM/YYYY') để biến đổi đối tượng Moment này thành một chuỗi mới theo định dạng mà chúng ta mong muốn
                return {
                  label: formattedDate,
                  children: orderStatus(item.status),
                  color: colorStatus(item.status)
                }
              })}
            ></Timeline>
          </div>

          {orderDetail?.products?.map((item: any) => (
            <div className='product-information'>
              <div className='product'>
                <img className='img-product' src={item?.image} alt='' />
                <div className='name-product'>
                  <div>{item?.name}</div>
                  <div>Phiên bản: default</div>
                  <div>X {item?.amount}</div>
                </div>
              </div>
              <div className='price'>
                {item?.amount * item?.price}
                <span>đ</span>
              </div>
            </div>
          ))}

          <div className='total-price'>
            <div className='title-price'>
              <div>Tổng tiền hàng:</div>
              <div>Phí giao hàng:</div>
              <div>Khuyến mãi:</div>
              <div>Tổng tiền:</div>
            </div>
            <div className='money-price'>
              <div>
                {orderDetail?.totalOriginPrice}
                <span>đ</span>
              </div>
              <div>
                {orderDetail?.deliveryPrice}
                <span>đ</span>
              </div>
              <div>
                -0<span>đ</span>
              </div>
              <div>
                {orderDetail?.totalPrice}
                <span>đ</span>
              </div>
            </div>
          </div>
          <div className='payment-method'>
            <div>Phương thức thanh toán</div>
            <div>{orderDetail?.methodPayment}</div>
          </div>
          <div className='item-buy'>
            <div>{orderDetail?.timelineDetail?.map((item: any) => orderStatus(item?.status))}</div>
            <Button onClick={() => navigate('/')} size='large'>
              Tiếp tục mua sắm
            </Button>
          </div>
        </div>
      </ItemDetaiOrder>
    </WrapperDetailOrder>
  )
}
export default DetailOrder
