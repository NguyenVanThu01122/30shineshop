import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { scrollToTop } from '../../helpers/scrollToTop'
import Navbar from './components/Navbar'
import SiteHeader from './components/SiteHeader'
import { WrapperHeader } from './styles'

export default function Header() {
  const [isAccount, setIsAccount] = useState(false)
  const [isModal, setIsModal] = useState(false)
  const navigate = useNavigate()
  const [openMenuMobile, setOpenMenuMobile] = useState(false)

  // hàm xử lý chuyển trang
  const handleRedirect = (url: string) => {
    setIsAccount(false)
    scrollToTop()
    navigate(url)
    setOpenMenuMobile(false)
  }

  return (
    <WrapperHeader>
      <SiteHeader
        handleRedirect={handleRedirect}
        setIsModal={setIsModal}
        setIsAccount={setIsAccount}
        isAccount={isAccount}
        openMenuMobile={openMenuMobile}
        setOpenMenuMobile={setOpenMenuMobile}
      />
      <Navbar handleRedirect={handleRedirect} isModal={isModal} setIsModal={setIsModal} />
    </WrapperHeader>
  )
}
