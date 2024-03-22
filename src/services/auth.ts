import { privateAxios } from './axios'

export enum TypeGenderEnum {
  MALE = 'male',
  FEMALE = 'female',
  OTHER = 'other'
}

export type TypeLogin = {
  email: string
  password: number | string
}

export type TypeRegister = {
  name: string
  telephone: number
  email: string
  password: string | number
  gender: TypeGenderEnum
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
