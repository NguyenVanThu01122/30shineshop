import axios from 'axios'

const privateAxios = axios.create({
  baseURL: 'https://shop30shine.herokuapp.com',
  timeout: 4000,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`
  }
})

const publicAxios = axios.create({
  baseURL: 'https://shop30shine.herokuapp.com',
  timeout: 4000
})

// export default myAxios

export { privateAxios, publicAxios }
