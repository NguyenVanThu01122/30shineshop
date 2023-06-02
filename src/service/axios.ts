import axios from 'axios'

const privateAxios = axios.create({
  baseURL: 'http://shop30shine.herokuapp.com',
  timeout: 4000,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`
  }
})
// // Add a response interceptor privateAxios
// axios.interceptors.response.use(
//   function (response) {
//     // Any status code that lie within the range of 2xx cause this function to trigger
//     // Do something with response data
//     return response.data // bước response.data này giúp chúng ta tối ưu code khi set res.data vào state,chỉ cần setState(res.data) và console.log ra thì server sẽ trả về đúng 1 mảng data duy nhất.
//   },
//   function (error) {
//     // Any status codes that falls outside the range of 2xx cause this function to trigger
//     // Do something with response error
//     return Promise.reject(error)
//   }
// )

const publicAxios = axios.create({
  baseURL: 'http://shop30shine.herokuapp.com',
  timeout: 4000
})

// export default publicAxios

export { privateAxios, publicAxios }
