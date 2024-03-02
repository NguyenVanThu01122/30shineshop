import { privateAxios } from './axios'

export const getDetailPayment = (paymentId: any) => {
  return privateAxios.get(`/payment/${paymentId}`)
}

export const orderPayment = (Values: any) => {
  return privateAxios.post('/order', Values)
}
