import { Timeline } from 'antd'
import moment from 'moment'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { CurrencyFormat } from '../../components/CurrencyFormat'
import NoDataMessage from '../../components/NodataMessage'
import SidebarAccount from '../../components/SidebarAccount'
import { ButtonGeneral } from '../../components/Ui/button'
import { Loading } from '../../components/Ui/loading'
import { scrollToTop } from '../../helpers/scrollToTop'
import { useIsLoading } from '../../helpers/useIsLoading'
import { useOrderStatusUtils } from '../../helpers/useOrderStatusUtils'
import { getDetailOrder } from '../../services/detailOrder'
import { ItemDetailOrder, WrapperDetailOrder } from './styles'
import { OrderDetailType, ProductType, TimelineDetailItemType } from './type'

function DetailOrder() {
  const { t } = useTranslation()
  const [orderDetail, setOrderDetail] = useState<OrderDetailType>()
  const navigate = useNavigate()
  const params = useParams()
  const [isLoading, setIsLoading] = useIsLoading()
  const { orderStatusCommon, colorStatus } = useOrderStatusUtils()
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
        <div className='order'>{t('ORDER_DETAILS')}</div>
        <div className='order-detail'>
          {isOrderDetailValid && (
            <div>
              <div className='delivery-address'>
                <div>{t('DELIVERY_ADDRESS')}</div>
                {/* <div>
                  {orderDetail?.timelineDetail.map((item: TimelineDetailItemType) => {
                    return <span style={{ color: colorStatus(item.status) }}>{orderStatusCommon(item?.status)}</span>
                  })}
                </div> */}
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
                  <div>{t('TOTAL_PRODUCT_PRICE')}:</div>
                  <div>{t('DELIVERY_FEE')}:</div>
                  <div>{t('DISCOUNT')}:</div>
                  <div>{t('TOTAL')}:</div>
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
                {/* <div style={{ color: colorStatus(orderDetail?.status) }}>
                  {orderDetail?.timelineDetail?.map((item: TimelineDetailItemType) => orderStatusCommon(item?.status))}
                </div> */}
                <div className='payment-method'>
                  <div>{t('PAYMENT_METHOD')}</div>
                  <div>{orderDetail?.methodPayment}</div>
                </div>
              </div>
              <div className='item-buy'>
                <ButtonGeneral onClick={() => navigate('/list-order')} className='btnListOrder' size='large'>
                  {t('ORDER_LIST')}
                </ButtonGeneral>
                <ButtonGeneral onClick={() => navigate('/')} size='large' className='btnHome'>
                  {t('CONTINUE_SHOPPING')}
                </ButtonGeneral>
              </div>
            </div>
          )}

          {/* item Loading */}
          {isLoading && <Loading />}
          {!isLoading && (!orderDetail || !orderDetail.products || orderDetail.products.length === 0) && (
            <NoDataMessage message={t('NO_ORDER')} />
          )}
        </div>
      </ItemDetailOrder>
    </WrapperDetailOrder>
  )
}
export default DetailOrder
