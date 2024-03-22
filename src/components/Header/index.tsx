import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { scrollToTop } from '../../helpers/scrollToTop'
import Navbar from './components/Navbar'
import NavbarMobile from './components/NavbarMobile'
import SiteHeader from './components/SiteHeader'
import { WrapperHeader } from './styles'

export default function Header() {
  const [showMenu, setShowMenu] = useState(-1)
  const [isAccount, setIsAccount] = useState(false)
  const [isModal, setIsModal] = useState(false)
  const navigate = useNavigate()

  // hàm xử lý chuyển trang
  const handleRedirect = (url: string) => {
    setShowMenu(0)
    setIsAccount(false)
    scrollToTop()
    navigate(url)
  }

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
