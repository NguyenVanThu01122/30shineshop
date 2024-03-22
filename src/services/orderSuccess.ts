import { privateAxios } from './axios'

export const getOrderSuccess = (orderId: string) => {
  return privateAxios.get(`/order/${orderId}`)
}
