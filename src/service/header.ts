import { privateAxios } from './axios'

export const getUser = () => {
  return privateAxios.get('/user')
}
export const searchProduct = (keyword: string) => {
  return privateAxios.get('/product', {
    params: {
      keyword
    }
  })
}
