import { DetailPaymentType } from '../pages/DetailPayment/type'
import { privateAxios } from './axios'

export const getDetailPayment = (paymentId: string) => {
  return privateAxios.get(`/payment/${paymentId}`)
}

export const orderPayment = (body: DetailPaymentType | {}) => {
  return privateAxios.post('/order', body)
}
