import { LOGOUT_MESSAGE } from '../../../../helpers/contanst'
import { useLogOut } from '../../../../helpers/useLogOut'
import { CommonModal } from '../../../Ui/commonModal'
import styles from './styles.module.scss'

interface NavbarProps {
  isModal: boolean
  setIsModal: (value: boolean) => void
  handleRedirect: (path: string) => void
}

function Navbar({ isModal, setIsModal, handleRedirect }: NavbarProps) {
  const logOut = useLogOut()

  const handleOk = () => {
    setIsModal(false)
    logOut()
  }

  return (
    <div className={styles.containerItem}>
      <div onClick={() => handleRedirect('/')}>TRANG CHỦ</div>
      <div onClick={() => handleRedirect('/list-Product')}>DANH SÁCH SẢN PHẨM</div>
      <div onClick={() => handleRedirect('/brand')}>THƯƠNG HIỆU</div>
      <div onClick={() => handleRedirect('/introduce')}>GIỚI THIỆU</div>
      <div onClick={() => handleRedirect('/contact')}>LIÊN HỆ</div>
      <div onClick={() => handleRedirect('/blog')}>TIN TỨC LÀM ĐẸP</div>
      <div onClick={() => handleRedirect('/account')}>QUẢN LÝ TÀI KHOẢN</div>
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
