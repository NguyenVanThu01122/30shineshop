import { useState } from 'react'

export const useOrderStatusUtils = () => {
  const [messageStatusOrder, setMessageStatusOrder] = useState('')

  // Hàm xử lý trạng thái đơn hàng
  const orderStatusCommon = (status: string) => {
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
  // Xử lý title trạng thái đơn hàng
  const arrStatusOrder = [
    {
      id: 1,
      status: '',
      title: 'Tất cả'
    },
    {
      id: 2,
      status: 'processing',
      title: 'Đang xử lý'
    },
    {
      id: 3,
      status: 'confirmed',
      title: 'Đã xác nhận'
    },
    {
      id: 4,
      status: 'in_transit',
      title: 'Đang giao hàng'
    },
    {
      id: 5,
      status: 'delivered',
      title: 'Đã giao hàng'
    },
    {
      id: 6,
      status: 'canceled',
      title: 'Đã hủy'
    }
  ]

  // hàm xử lý cập nhật message cho trạng từng đơn hàng
  const updateOrderStatusMessage = (status: any) => {
    switch (status) {
      case '':
        return setMessageStatusOrder('Bạn không có đơn hàng nào !')
      case 'processing':
        return setMessageStatusOrder('Bạn không có đơn hàng nào đang xử lý !')
      case 'confirmed':
        return setMessageStatusOrder('Bạn không có đơn hàng nào đã xác nhận !')
      case 'in_transit':
        return setMessageStatusOrder('Bạn không có đơn hàng nào đang giao hàng !')
      case 'delivered':
        return setMessageStatusOrder('Bạn không có đơn hàng nào đã giao hàng !')
      default:
        return setMessageStatusOrder('Bạn không có đơn hàng nào đã hủy')
    }
  }

  return { orderStatusCommon, arrStatusOrder, colorStatus, updateOrderStatusMessage, messageStatusOrder }
}
