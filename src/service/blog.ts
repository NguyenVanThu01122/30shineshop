import { privateAxios } from "./axios"

export const getBlog = () => {
  return privateAxios.get('/blog')
}
