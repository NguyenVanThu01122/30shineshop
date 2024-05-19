/* eslint-disable jsx-a11y/img-redundant-alt */
import { ArrowRightOutlined } from '@ant-design/icons'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate, useParams } from 'react-router-dom'
import { scrollToTop } from '../../helpers/scrollToTop'
import { useOrderStatusUtils } from '../../helpers/useOrderStatusUtils'
import { getOrderSuccess } from '../../services/orderSuccess'
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
  const { t } = useTranslation()
  const navigate = useNavigate()
  const params = useParams()
  const [orderDetail, setOrderDetail] = useState<OrderDetilType>()
  const { orderStatusCommon } = useOrderStatusUtils()
  const methodPayment = {
    offline: 'offline',
    online: 'online'
  }
  useEffect(() => {
    getOrderSuccess(params?.id ?? '').then((res) => {
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
        <div>{t('ORDER_SUCCESS')}</div>
        <div>{t('THANK_YOU_FOR_SHOPPING')}</div>
      </div>
      <div className='informationOrder'>
        <div>{t('ORDER_INFORMATION')}</div>
        <div className='informationPayment'>
          <div>{t('ORDER_ID')}</div>
          <div>{orderDetail?.orderId}</div>
        </div>
        <div className='informationPayment'>
          <div>{t('PAYMENT_STATUS')}</div>
          <div>{orderStatusCommon(orderDetail?.orderStatus || '')}</div>
        </div>
        <div className='informationPayment'>
          <div>{t('PAYMENT_METHOD')}</div>
          <div>{orderDetail?.methodPayment === methodPayment.offline ? t('PAY_ON_DELIVERY') : t('ONLINE_PAYMENT')}</div>
        </div>
        <div className='informationPayment'>
          <div>{t('TOTAL_PAYMENT')}</div>
          <div>{orderDetail?.totalPrice} ₫</div>
        </div>
        <div className='informationPayment'>
          <div>{t('RECEIVING_INFORMATION')}</div>
          <div className='personalInformation'>
            <div>{orderDetail?.address?.name}</div>
            <div>{orderDetail?.address?.phone}</div>
            <div>{orderDetail?.address?.detailAddress}</div>
          </div>
        </div>
      </div>
      <div className='orderDetail'>
        <div onClick={() => navigate(`/detail-order/${orderDetail?.orderId}`)}>{t('ORDER_DETAILS')}</div>
        <div onClick={() => navigate('/')}>
          {t('CONTINUE_SHOPPING')}{' '}
          <span>
            <ArrowRightOutlined />
          </span>
        </div>
      </div>
    </OderSuccessWrapper>
  )
}
