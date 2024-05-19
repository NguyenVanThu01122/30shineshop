import { useState } from 'react'
import { useTranslation } from 'react-i18next'

export const useOrderStatusUtils = () => {
  const [messageStatusOrder, setMessageStatusOrder] = useState('')
  const { t } = useTranslation()
  // Hàm xử lý trạng thái đơn hàng
  const orderStatusCommon = (status: string) => {
    switch (status) {
      case 'processing':
        return t('PROCESSING')
      case 'confirmed':
        return t('CONFIRMED')
      case 'in_transit':
        return t('IN_TRANSIT')
      case 'delivered':
        return t('DELIVERED')
      default:
        return t('CANCELLED')
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
  // Xử lý title trạng thái đơn hàng
  const arrStatusOrder = [
    {
      id: 1,
      status: '',
      title: t('ALL')
    },
    {
      id: 2,
      status: 'processing',
      title: t('PROCESSING')
    },
    {
      id: 3,
      status: 'confirmed',
      title: t('CONFIRMED')
    },
    {
      id: 4,
      status: 'in_transit',
      title: t('IN_TRANSIT')
    },
    {
      id: 5,
      status: 'delivered',
      title: t('DELIVERED')
    },
    {
      id: 6,
      status: 'canceled',
      title: t('CANCELLED')
    }
  ]

  // hàm xử lý cập nhật message cho trạng từng đơn hàng
  const updateOrderStatusMessage = (status: any) => {
    switch (status) {
      case '':
        return setMessageStatusOrder(t('NO_ORDER'))
      case 'processing':
        return setMessageStatusOrder(t('NO_PROCESSING_ORDER'))
      case 'confirmed':
        return setMessageStatusOrder(t('NO_CONFIRMED_ORDER'))
      case 'in_transit':
        return setMessageStatusOrder(t('NO_IN_TRANSIT_ORDER'))
      case 'delivered':
        return setMessageStatusOrder(t('NO_DELIVERED_ORDER'))
      default:
        return setMessageStatusOrder(t('NO_CANCELLED_ORDER'))
    }
  }

  return { orderStatusCommon, arrStatusOrder, colorStatus, updateOrderStatusMessage, messageStatusOrder }
}
