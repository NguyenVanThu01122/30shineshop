import { faAngleRight, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './styles.module.scss'
interface NavbarMobileProps {
  showMenu: number
  handleRedirect: (path: string) => void
  setShowMenu: (value: number) => void
}

const NavbarMobile = ({ showMenu, handleRedirect, setShowMenu }: NavbarMobileProps) => {
  const handleStop = (e: any) => e.stopPropagation() // ngăn chặn sự kiện click (closeMenu) cho thằng con

  const closeMenu = () => {
    setShowMenu(0)
  }
  return (
    <div
      className={`${styles.menu} ${
        showMenu === 1 ? styles.hoatHinhXuatHien : showMenu === 0 ? styles.hoatHinhBienMat : ''
      } `}
      onClick={closeMenu}
    >
      <div className={styles.listMenu} onClick={handleStop}>
        <div className={styles.icon}>
          <div>30ShineShop</div>
          <FontAwesomeIcon className={`${styles.iconClose}`} onClick={closeMenu} icon={faXmark} />
        </div>
        <div className={styles.content}>
          <div className={styles.iconFaAngleRight}>
            <div onClick={() => handleRedirect('/list-product')}>DANH SÁCH SẢN PHẨM</div>
            <FontAwesomeIcon icon={faAngleRight} />
          </div>
          <div className={styles.iconFaAngleRight}>
            <div onClick={() => handleRedirect('/brand')}>THƯƠNG HIỆU</div>
            <FontAwesomeIcon icon={faAngleRight} />
          </div>
          <div className={styles.iconFaAngleRight}>
            <div onClick={() => handleRedirect('/introduce')}>GIỚI THIỆU</div>
            <FontAwesomeIcon icon={faAngleRight} />
          </div>
          <div className={styles.iconFaAngleRight}>
            <div onClick={() => handleRedirect('/contact')}>LIÊN HỆ</div>
            <FontAwesomeIcon icon={faAngleRight} />
          </div>
          <div className={styles.iconFaAngleRight}>
            <div onClick={() => handleRedirect('/blog')}>TIN TỨC LÀM ĐẸP</div>
            <FontAwesomeIcon icon={faAngleRight} />
          </div>
          <div className={styles.iconFaAngleRight}>
            <div onClick={() => handleRedirect('/account')}>QUẢN LÝ TÀI KHOẢN</div>
            <FontAwesomeIcon icon={faAngleRight} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavbarMobile
