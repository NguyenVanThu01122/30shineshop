import { Navigate, Outlet } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import SocialMediaIcons from '../../components/SocialMediaIcons'
import { checkLogin } from '../../helpers/checkLogin'
import { ItemHeader, ItemOutlet, MainItem, Wrapper } from './styles'

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
        <ItemOutlet>
          <Outlet />
        </ItemOutlet>
        <Footer />
      </MainItem>
      <SocialMediaIcons />
    </Wrapper>
  )
}
export default Layout
