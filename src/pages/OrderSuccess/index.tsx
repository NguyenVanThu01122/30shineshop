import { ArrowRightOutlined } from '@ant-design/icons'
import { OderSuccessWrapper } from './styled'
import { useNavigate } from 'react-router-dom'

export default function OrderSuccess() {
  const navigate = useNavigate()
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
          <div>#230602YS8BU7</div>
        </div>
        <div className='informationPayment'>
          <div>Trạng thái thanh toán</div>
          <div>Chờ thanh toán</div>
        </div>
        <div className='informationPayment'>
          <div>Phương thức thanh toán</div>
          <div>Thanh toán khi nhận hàng</div>
        </div>
        <div className='informationPayment'>
          <div>Tổng thanh toán</div>
          <div>1.036.000 ₫</div>
        </div>
        <div className='informationPayment'>
          <div>Thông tin nhận hàng</div>
          <div  className='personalInformation'>
            <div>Đàm Anh Tuấn</div>
            <div>0923975560</div>
            <div>Thái bình, Xã Việt Lâm, Huyện Vị Xuyên, Tỉnh Hà Giang</div>
          </div>
        </div>
      </div>
      <div className='orderDetail'>
        <div>Chi tiết đơn hàng</div>
        <div onClick={()=> navigate('/list-Product')}>Tiếp tục mua sắm <span><ArrowRightOutlined /></span></div>
      </div>
    </OderSuccessWrapper>
  )
}
