import { Navigate, Outlet } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { checkLogin } from '../../helpers/checkLogin'
import { ItemHeader, MainItem, Wrapper } from './styles'
import SocialMediaIcons from '../../components/SocialMediaIcons'

function Layout() {
  if (!checkLogin()) {
    return <Navigate to='new-login' />
  }
  return (
    <Wrapper>
      <ItemHeader>
        <Header />
      </ItemHeader>
      <MainItem>
        <Outlet />
        <Footer />
      </MainItem>
      <SocialMediaIcons />
    </Wrapper>
  )
}
export default Layout
