import { privateAxios } from './axios'
export type TypeEvaluate = {
  comment: string
  product: any
  numberStar: number
}
export const getDetailProduct = (idDetail: string) => {
  return privateAxios.get(`/product/${idDetail}`)
}

export const getListEvaluate = (id: string | undefined) => {
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

export const getProductRelate = (id: string) => {
  return privateAxios.get(`/product/relate/${id}`)
}

export const buyNowProduct = (id: string, amount: number) => {
  return privateAxios.post('/payment/buy-now', {
    id,
    amount
  })
}
