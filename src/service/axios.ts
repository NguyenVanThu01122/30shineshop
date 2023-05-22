import axios from 'axios'

const privateAxios = axios.create({
  baseURL: 'http://shop30shine.herokuapp.com',
  timeout: 4000,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`
  }
})

const publicAxios = axios.create({
  baseURL: 'http://shop30shine.herokuapp.com',
  timeout: 4000
})

// export default publicAxios

export { privateAxios, publicAxios }
