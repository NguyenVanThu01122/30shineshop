import { ArrowRightOutlined } from '@ant-design/icons'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { privateAxios } from '../../service/axios'
import { OderSuccessWrapper } from './styled'

export default function OrderSuccess() {
  const orderStatus = {
    processing: 'processing',
    inTransit: 'in_transit',
    delivered: 'delivered',
    canceled: 'canceled'
  }

  const methodPayment = {
    offline: 'offline',
    online: 'online'
  }
  const navigate = useNavigate()
  const params = useParams()
  const orderId = params.id
  const [orderDetail, setOrderDetail] = useState<any>({})
  useEffect(() => {
    privateAxios.get(`/order/${orderId}`).then((res) => {
      setOrderDetail(res.data?.data)
    })
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Sử dụng 'smooth' để có hiệu ứng cuộn mượt
    })
  }, [])
  return (
    <OderSuccessWrapper>
      <div className='orderSuccess'>
        <img
          src='https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRD1_iLdSCXYqP0nMTvneuyTPs8YUbkhdfUSXUPU2miv0dlrkPd'
          alt='image'
        />
        <div>ĐẶT HÀNG THÀNH CÔNG</div>
        <div>Cảm ơn bạn đã mua hàng tại 30shine</div>
      </div>
      <div className='informationOrder'>
        <div>Thông Tin Đơn Hàng</div>
        <div className='informationPayment'>
          <div>Mã đơn hàng</div>
          <div>{orderDetail?.orderId}</div>
        </div>
        <div className='informationPayment'>
          <div>Trạng thái thanh toán</div>
          <div>
            {orderDetail?.orderStatus === orderStatus.processing
              ? 'Chờ thanh toán'
              : orderDetail?.orderStatus === orderStatus.inTransit
              ? 'Đang vận chuyển'
              : orderDetail?.orderStatus === orderStatus.delivered
              ? 'Đã giao hàng'
              : 'Đã bị hủy'}
          </div>
        </div>
        <div className='informationPayment'>
          <div>Phương thức thanh toán</div>
          <div>
            {orderDetail?.methodPayment === methodPayment.offline ? 'Thanh toán khi nhận hàng' : 'Thanh toán online'}
          </div>
        </div>
        <div className='informationPayment'>
          <div>Tổng thanh toán</div>
          <div>{orderDetail?.totalPrice} ₫</div>
        </div>
        <div className='informationPayment'>
          <div>Thông tin nhận hàng</div>
          <div className='personalInformation'>
            <div>{orderDetail?.address?.name}</div>
            <div>{orderDetail?.address?.phone}</div>
            <div>{orderDetail?.address?.detailAddress}</div>
          </div>
        </div>
      </div>
      <div className='orderDetail'>
        <div>Chi tiết đơn hàng</div>
        <div onClick={() => navigate('/')}>
          Tiếp tục mua sắm{' '}
          <span>
            <ArrowRightOutlined />
          </span>
        </div>
      </div>
    </OderSuccessWrapper>
  )
}
