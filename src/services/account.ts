import { privateAxios } from './axios'

export interface TypeBodyUser {
  name: string
  date: number
  telephone: number
  email?: string | number
}
export const getUser = () => {
  return privateAxios.get('/user')
}

export const updateUser = (body: TypeBodyUser) => {
  return privateAxios.put('/user', body)
}
