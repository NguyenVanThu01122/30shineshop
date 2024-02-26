import { useNavigate } from 'react-router-dom'

export const useLogOut = () => {
  const navigate = useNavigate()

  const HandleLogOut = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('name')
    navigate('/new-login')
  }
  return HandleLogOut
}
