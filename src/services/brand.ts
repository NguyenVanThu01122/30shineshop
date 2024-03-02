import { privateAxios } from "./axios"

export const getListBrand = () => {
  return privateAxios.get('/brand')
}
