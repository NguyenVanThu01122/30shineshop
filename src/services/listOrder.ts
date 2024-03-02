import { privateAxios } from "./axios"

export const getListOrder = () => {
  return privateAxios.get('/order/list-order')
}

