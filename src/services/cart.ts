import { privateAxios } from './axios'

export const getListCartProduct = () => {
  return privateAxios.get('/cart')
}

export const updateCart = (idCart: string, amount: number) => {
  return privateAxios.put(`/cart/${idCart}`, {
    amount
  })
}

export const deleteCartOne = (idDeleteOne: string) => {
  return privateAxios.delete(`/cart/${idDeleteOne}`)
}

export const deleteCartAll = (listCartId: string | string[]) => {
  return privateAxios.post('/cart/delete-many', {
    listCartId
  })
}

export const orderCart = (listCartId: { id: string }) => {
  return privateAxios.post('/payment/order', {
    listCartId // danh sách các id trong giỏ hàng đc gửi lên
  })
}
