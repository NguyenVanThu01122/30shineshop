import axios from 'axios'

const privateAxios = axios.create({
  baseURL: 'http://localhost:3030', // cổng 3030 là cổng chạy local của backend
  timeout: 4000
})

// Buoc 1: Duoc chay truoc khi gui api len backend
privateAxios.interceptors.request.use(
  (config) => {
    // lam cai gi do truoc khi gui api len backend
    // eslint-disable-next-line no-param-reassign
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`

    // {
    //   baseURL: 'http://localhost:3030', // cổng 3030 là cổng chạy local của backend
    //   timeout: 4000,
    //   headers: {
    //     Authorization: 'Bearer abc'
    //   }
    // }

    return config // cú pháp cố định
  },
  (error) => Promise.reject(error)
)

// Buoc 2: Gui api len backend

// Buoc 3: Duoc chay sau khi nhan du lieu thanh cong tu backend
privateAxios.interceptors.response.use(
  (response) => {
    // lam cai gi do voi du lieu nhan duoc
    return response
  },
  (error) => {
    if (error.response.status === 401) {
      axios
        .post('http://localhost:3030/generate-token', {
          refreshToken: localStorage.getItem('refreshToken')
        })
        .then((res) => {
          // luu token moi va resfreshToken moi
          localStorage.setItem('token', res.data?.token)
          localStorage.setItem('refreshToken', res.data?.refreshToken)
          window.location.reload();
        })
        .catch((error) => {
          if (error.response.status === 401) {
            localStorage.removeItem('token')
            localStorage.removeItem('refreshToken')
            window.location.assign('/login')
          }
          // console.log(error.response)
        })
    }

    Promise.reject(error)
  }
)

export { privateAxios }
