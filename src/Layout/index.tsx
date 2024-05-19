import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import DialogLogin from '../components/DialogLogin'
import Footer from '../components/Footer'
import Header from '../components/Header'
import SocialMediaIcons from '../components/SocialMediaIcons'
import checkLogin from '../helpers/checkLogin'
import { useGetLengthOfCart } from '../helpers/useGetLengthOfCart'
import { useGetUserInfo } from '../helpers/useGetUserInfo'
import { RootState } from '../redux/Slices/rootReducer'
import { ItemHeader, ItemOutlet, MainItem, Wrapper } from './styles'

function Layout() {
  const [getLengthOfCart] = useGetLengthOfCart()
  const [getUserInfo] = useGetUserInfo()
  const login = checkLogin()
  const dialogLogin = useSelector((state: RootState) => state.app.isDialogLogin)

  useEffect(() => {
    if (login) {
      getUserInfo() // lấy thông tin user
      getLengthOfCart() // lấy số lượng sản phẩm trong giỏ hàng
    }
  }, [])

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
      {dialogLogin && <DialogLogin dialogLogin={dialogLogin} />}
    </Wrapper>
  )
}
export default Layout
