import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { ERROR_MESSAGES } from '../../helpers/contanst'
import { scrollToTop } from '../../helpers/scrollToTop'
import { useGetLengthOfCart } from '../../helpers/useGetLengthOfCart'
import { updateAccount } from '../../redux/actions/app'
import { getUser } from '../../services/account'
import Navbar from './components/Navbar'
import NavbarMobile from './components/NavbarMobile'
import SiteHeader from './components/SiteHeader'
import { WrapperHeader } from './styles'

export default function Header() {
  const [showMenu, setShowMenu] = useState(-1)
  const [isAccount, setIsAccount] = useState(false)
  const [isModal, setIsModal] = useState(false)

  const [getLengthOfCart] = useGetLengthOfCart()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  // hàm xử lý chuyển trang
  const handleRedirect = (url: string) => {
    setShowMenu(0)
    setIsAccount(false)
    scrollToTop()
    navigate(url)
  }

  useEffect(() => {
    getUser()
      .then((res) => {
        dispatch(updateAccount(res.data?.user))
      })
      .catch((error) => toast.error(ERROR_MESSAGES.SERVER_ERROR))
    getLengthOfCart()
  }, [])

  return (
    <WrapperHeader>
      <NavbarMobile showMenu={showMenu} setShowMenu={setShowMenu} handleRedirect={handleRedirect} />
      <SiteHeader
        handleRedirect={handleRedirect}
        setShowMenu={setShowMenu}
        setIsModal={setIsModal}
        setIsAccount={setIsAccount}
        isAccount={isAccount}
      />
      <Navbar handleRedirect={handleRedirect} isModal={isModal} setIsModal={setIsModal} />
    </WrapperHeader>
  )
}
