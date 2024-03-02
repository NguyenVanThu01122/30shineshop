import { privateAxios } from './axios'

export type TypeLogin = {
  email: string
  password: number | string
}

export type TypeRegister = {
  name: string
  telephone: number | string
  email: string
  password: string | number
  gender: 'male' | 'female' | 'other' |string
  date: string
}

export const login = (body: TypeLogin) => {
  return privateAxios.post('/login', body)
}

export const register = (body: TypeRegister) => {
  return privateAxios.post('/register', body)
}

export const forgetPassword = (body: { email: string; password: number }) => {
  return privateAxios.put('/forget-password', body)
}
