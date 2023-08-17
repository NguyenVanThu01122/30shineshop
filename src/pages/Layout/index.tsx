import { Navigate, Outlet } from 'react-router-dom'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { checkLogin } from '../../helper'

export default function Layout() {
  // const navigate = useNavigate()
  if (!checkLogin()) {
    return <Navigate to='new-login' />
    // Navigate('/new-login')
    // window.location.assign('/new-login')
  }
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
