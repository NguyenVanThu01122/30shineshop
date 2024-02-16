import { privateAxios } from './axios'

export type TypeListProduct = {
  keyword?: string
  category?: string
  maxPrice?: string
  minPrice?: string
  sort: string
  page: number
  limit: number
}

export const listProduct = (params: TypeListProduct) => {
  return privateAxios.get('/product', {
    params
  })
}
