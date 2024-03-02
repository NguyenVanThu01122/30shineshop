import { privateAxios } from './axios'

export const getDetailOrder = (id: string | undefined) => {
  return privateAxios.get(`/order/detail/${id}`)
}


