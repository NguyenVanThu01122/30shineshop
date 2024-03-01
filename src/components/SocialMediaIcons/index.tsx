import { useEffect, useState } from 'react'
import { BsArrowUp } from 'react-icons/bs'
import { toast } from 'react-toastify'
import { NOTIFICATION } from '../../helpers/contanst'
import { scrollToTop } from '../../helpers/scrollToTop'
import { WrapperImage } from './styles'

const SocialMediaIcons = () => {
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
    // xóa hàm callback handleScroll khi component bị xóa khỏi cây DOM
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [showIcon])

  const handleClickIcon = () => {
    toast.success(NOTIFICATION)
  }
  const handleScrollToTop = () => scrollToTop()
  useEffect(() => handleScrollToTop(), [])

  return (
    <WrapperImage>
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
    </WrapperImage>
  )
}

export default SocialMediaIcons
