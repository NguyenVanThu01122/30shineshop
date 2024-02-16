import { privateAxios } from './axios'
export type TypeEvaluate = {
  comment: string
  product: any
  numberStar: number
}
export const getDetailProduct = (params: any) => {
  return privateAxios.get(`/product/${params}`)
}

export const getlistEvaluete = (id: string | undefined) => {
  return privateAxios.get(`/evaluate/${id}`)
}

export const sendEvaluate = (body: TypeEvaluate) => {
  return privateAxios.post('/evaluate', body)
}

export const addProductCart = (id: string, amount: number) => {
  return privateAxios.post('/cart', {
    id,
    amount
  })
}

export const getProductRelate = (id: any) => {
  return privateAxios.get(`/product/relate/${id}`)
}

