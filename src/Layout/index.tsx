import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
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
  const { i18n } = useTranslation()
  useEffect(() => {
    if (login) {
      getUserInfo() // lấy thông tin user
      getLengthOfCart() // lấy số lượng sản phẩm trong giỏ hàng
    }
  }, [])
  useEffect(() => {
    i18n.changeLanguage(localStorage.getItem('LANG_STORAGE_KEY') || 'en')
  }, [i18n])

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
