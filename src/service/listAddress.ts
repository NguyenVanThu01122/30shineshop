import { privateAxios } from './axios'

export interface TypeAddress {
  name: string
  telephone: number
  email: string | number
  address: string
}

export const getListAddress = () => {
  return privateAxios.get('/address')
}

export const updateAddress = (id: any, body: TypeAddress) => {
  return privateAxios.put(`/address/${id}`, body)
}

export const addAddress = (body: TypeAddress) => {
  return privateAxios.post('/address', body)
}

export const deleteAddress = (id: any) => {
  return privateAxios.delete(`/address/${id}`)
}
