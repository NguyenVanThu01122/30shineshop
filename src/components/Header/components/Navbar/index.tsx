import { useSelector } from 'react-redux'
import { LOGOUT_MESSAGE } from '../../../../helpers/contanst'
import { useLogOut } from '../../../../helpers/useLogOut'
import { CommonModal } from '../../../Ui/modal'
import styles from './styles.module.scss'
interface NavbarProps {
  isModal: boolean
  setIsModal: (value: boolean) => void
  handleRedirect: (path: string) => void
}

function Navbar({ isModal, setIsModal, handleRedirect }: NavbarProps) {
  const isLoggedIn = useSelector((state: any) => state.app.isLogin)
  const logOut = useLogOut()

  const handleOk = () => {
    setIsModal(false)
    logOut()
  }

  const menuItems = [
    { title: 'TRANG CHỦ', path: '/', onClick: () => handleRedirect('/') },
    { title: 'DANH SÁCH SẢN PHẨM', path: '/list-Product', onClick: () => handleRedirect('/list-Product') },
    { title: 'THƯƠNG HIỆU', path: '/brand', onClick: () => handleRedirect('/brand') },
    { title: 'GIỚI THIỆU', path: '/introduce', onClick: () => handleRedirect('/introduce') },
    { title: 'LIÊN HỆ', path: '/contact', onClick: () => handleRedirect('/contact') }
  ]
  if (isLoggedIn) {
    menuItems.push({ title: 'QUẢN LÝ TÀI KHOẢN', path: '/account', onClick: () => handleRedirect('/account') })
  }

  return (
    <div className={styles.containerItem}>
      <div className={styles.menuItem}>
        {menuItems.map((item, index) => (
          <div key={index} onClick={item.onClick} className={styles.item}>
            {item.title}
          </div>
        ))}
      </div>
      <CommonModal
        modalTitle={LOGOUT_MESSAGE.LOGOUT_AUTHENTICATION_MESSAGE}
        onOk={handleOk}
        onCancel={() => setIsModal(false)}
        isModalOpen={isModal}
      />
    </div>
  )
}

export default Navbar
