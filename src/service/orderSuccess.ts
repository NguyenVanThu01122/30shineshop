import { privateAxios } from './axios'

export const getOrderSuccess = (orderId: any) => {
  return privateAxios.get(`/order/${orderId}`)
}
