import { ArrowRightOutlined } from '@ant-design/icons'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { scrollToTop } from '../../helpers/scrollToTop'
import { useOrderStatusUtils } from '../../helpers/useOrderStatusUtils'
import { getOrderSuccess } from '../../service/orderSuccess'
import { OderSuccessWrapper } from './styled'

interface OrderDetilType {
  address: {
    detailAddress: string
    email: string
    name: string
    phone: number
  }
  methodPayment: string
  orderId: string
  orderStatus: string
  totalPrice: number
}

export default function OrderSuccess() {
  const navigate = useNavigate()
  const params = useParams()
  const [orderDetail, setOrderDetail] = useState<OrderDetilType>()
  const { orderStatusCommon } = useOrderStatusUtils()
  const methodPayment = {
    offline: 'offline',
    online: 'online'
  }
  useEffect(() => {
    getOrderSuccess(params?.id).then((res) => {
      setOrderDetail(res.data?.data)
    })
    scrollToTop()
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
          <div>{orderStatusCommon(orderDetail?.orderStatus || '')}</div>
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
        <div onClick={() => navigate(`/detail-order/${orderDetail?.orderId}`)}>Chi tiết đơn hàng</div>
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
