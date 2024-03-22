import { privateAxios } from './axios'

export interface TypeAddress {
  name: string
  telephone: number
  email: string
  address: string
}

export const getListAddress = () => {
  return privateAxios.get('/address')
}

export const updateAddress = (body: TypeAddress, id: any) => {
  return privateAxios.put(`/address/${id}`, body)
}

export const addAddress = (body: TypeAddress) => {
  return privateAxios.post('/address', body)
}

export const deleteAddress = (id: string) => {
  return privateAxios.delete(`/address/${id}`)
}
