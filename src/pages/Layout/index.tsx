import { useEffect, useState } from 'react'
import { BsArrowUp } from 'react-icons/bs'
import { Navigate, Outlet } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { ItemHeader, MainItem, Wrapper } from './styles'
import { checkLogin } from '../../helper/checkLogin'

function Layout() {
  const [showIcon, setShowIcon] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // const top = document.documentElement.scrollHeight
      if (window.scrollY > 350) {
        setShowIcon(true)
      } else {
        setShowIcon(false)
      }
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [showIcon])

  const handleClickIcon = () => {
    toast.success('Tính năng này đang phát triển')
    // Scroll to top when icon is clicked
  }

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Cuộn mượt
    })
  }
  useEffect(() => handleScrollToTop(), [])

  if (!checkLogin()) {
    return <Navigate to='new-login' />
  }
  return (
    <Wrapper>
      <ToastContainer />
      <ItemHeader>
        <Header />
      </ItemHeader>
      <MainItem>
        <Outlet />
        <Footer />
      </MainItem>
      <div className={` listIcon ${showIcon ? 'hoatHinhXuatHien' : 'hoatHinhBienMat'}`}>
        <img
          src='https://shop.30shine.com/images/Phone.png'
          alt='img'
          onClick={handleClickIcon}
          className='iconPhone'
        />
        <img
          src='https://shop.30shine.com/images/Message.png'
          alt='img'
          onClick={handleClickIcon}
          className='iconMessenger'
        />
        <img src='https://shop.30shine.com/images/Zalo.png' alt='img' onClick={handleClickIcon} className='iconZalo' />
        <BsArrowUp onClick={handleScrollToTop} className='iconUp' />
      </div>
    </Wrapper>
  )
}
export default Layout
