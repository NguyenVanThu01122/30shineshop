import { privateAxios } from './axios'

export const getCartProduct = () => {
  return privateAxios.get('/cart')
}
