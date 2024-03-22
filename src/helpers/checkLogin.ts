import { getLocalStorageValue } from './localStorageUtils'

const checkLogin = (): boolean => {
  if (getLocalStorageValue('token')) {
    return true
  } else {
    return false
  }
}

export default checkLogin
