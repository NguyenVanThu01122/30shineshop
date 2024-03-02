import axios from "axios"

export const generateToken = () => {
  return axios.post(`${process.env.REACT_APP_BASE_URL}/generate-token`, {
    refreshToken: localStorage.getItem('refreshToken') //gửi kèm body, giá trị refreshToken dc lưu trên ứng dụng, để lấy token va refreshToken mới từ backend
  })
}
