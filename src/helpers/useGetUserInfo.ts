import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { saveUser } from '../redux/Slices/appSlices'
import { getUser } from '../services/account'
import { ERROR_MESSAGES } from './contanst'

export const useGetUserInfo = () => {
  const dispatch = useDispatch()
  const getUserInfo = () => {
    getUser()
      .then((res) => {
        dispatch(saveUser(res.data?.user)) // update user info
      })
      .catch((error) => {
        toast.error(ERROR_MESSAGES.SERVER_ERROR) // display error message
      })
  }

  return [getUserInfo]
}
