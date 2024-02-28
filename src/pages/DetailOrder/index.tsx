import { Timeline } from 'antd'
import moment from 'moment'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { CurrencyFormat } from '../../components/CurrencyFormat'
import NoDataMessage from '../../components/NodataMessage'
import SidebarAccount from '../../components/SidebarAccount'
import { ButtonGeneral } from '../../components/Ui/button'
import { Loading } from '../../components/Ui/loading'
import { NO_DATA_MESSAGE } from '../../helpers/contanst'
import { OrderStatusUtils } from '../../helpers/orderUtils'
import { scrollToTop } from '../../helpers/scrollToTop'
import { useIsLoading } from '../../helpers/useIsLoading'
import { getDetailOrder } from '../../service/detailOrder'
import { ItemDetailOrder, WrapperDetailOrder } from './styles'
import { OrderDetailType, ProductType, TimelineDetailItemType } from './type'

function DetailOrder() {
  const [orderDetail, setOrderDetail] = useState<OrderDetailType>()
  const navigate = useNavigate()
  const params = useParams()
  const [isLoading, setIsLoading] = useIsLoading()
  const { orderStatusCommon, colorStatus } = OrderStatusUtils()
  const isOrderDetailValid = orderDetail && orderDetail.products && orderDetail.products.length > 0

  // hàm lấy chi tiết đơn hàng
  const handleGetDetailOrder = () => {
    setIsLoading(true)
    getDetailOrder(params?.id)
      .then((res) => {
        setOrderDetail(res.data?.data)
        setIsLoading(false)
      })
      .catch((error) => {
        setIsLoading(false)
        toast.error(error.response?.data?.message)
      })
  }

  useEffect(() => {
    scrollToTop()
    handleGetDetailOrder()
  }, [])

  return (
    <WrapperDetailOrder>
      <SidebarAccount />
      <ItemDetailOrder>
        <div className='order'>Chi Tiết Đơn Hàng</div>
        <div className='order-detail'>
          {isOrderDetailValid && (
            <div>
              <div className='delivery-address'>
                <div>Địa chỉ nhận hàng</div>
                <div>
                  {orderDetail?.timelineDetail.map((item: TimelineDetailItemType) => {
                    return <span style={{ color: colorStatus(item.status) }}>{orderStatusCommon(item?.status)}</span>
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
                  items={orderDetail?.timelineDetail?.map((item: TimelineDetailItemType) => {
                    const isoString = item.timeUpdate // lấy chuỗi time ISO
                    const formattedDate = moment(isoString).format('HH:mm DD/MM/YYYY') //dùng moment để tạo một đối tượng Moment từ chuỗi thời gian isoString, và dùng method format('HH:mm DD/MM/YYYY') để biến đổi đối tượng Moment này thành một chuỗi mới theo định dạng mà chúng ta mong muốn
                    return {
                      label: formattedDate,
                      children: (
                        <span style={{ color: colorStatus(item?.status) }}>{orderStatusCommon(item.status)}</span>
                      ),
                      color: colorStatus(item.status)
                    }
                  })}
                />
              </div>

              {/* item detailOrder */}
              {orderDetail?.products?.map((item: ProductType) => (
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
                    <CurrencyFormat amount={item?.amount * item?.price} />
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
                    <CurrencyFormat amount={orderDetail?.totalOriginPrice} />
                    <span>đ</span>
                  </div>
                  <div>
                    <CurrencyFormat amount={orderDetail?.deliveryPrice} />
                    <span>đ</span>
                  </div>
                  <div>
                    -0<span>đ</span>
                  </div>
                  <div>
                    <CurrencyFormat amount={orderDetail?.totalPrice} />
                    <span>đ</span>
                  </div>
                </div>
              </div>
              <div className='itemInfo-order'>
                <div style={{ color: colorStatus(orderDetail?.status) }}>
                  {orderDetail?.timelineDetail?.map((item: TimelineDetailItemType) => orderStatusCommon(item?.status))}
                </div>
                <div className='payment-method'>
                  <div>Phương thức thanh toán</div>
                  <div>{orderDetail?.methodPayment}</div>
                </div>
              </div>
              <div className='item-buy'>
                <ButtonGeneral onClick={() => navigate('/list-order')} className='btnListOrder' size='large'>
                  Danh sách đơn hàng
                </ButtonGeneral>
                <ButtonGeneral onClick={() => navigate('/')} size='large' className='btnHome'>
                  Tiếp tục mua sắm
                </ButtonGeneral>
              </div>
            </div>
          )}

          {/* item Loading */}
          {isLoading && <Loading />}
          {!isLoading && (!orderDetail || !orderDetail.products || orderDetail.products.length === 0) && (
            <NoDataMessage message={NO_DATA_MESSAGE.NO_ORDER} />
          )}
        </div>
      </ItemDetailOrder>
    </WrapperDetailOrder>
  )
}
export default DetailOrder
