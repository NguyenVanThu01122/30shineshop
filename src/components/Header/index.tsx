import { faAngleRight, faBars, faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Modal } from 'antd'
import { useEffect, useState } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { BsBoxArrowRight, BsLayoutTextSidebarReverse, BsPerson } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { checkLogin } from '../../helper/checkLogin'
import { useLogOut } from '../../helper/useLogout'
import logo30shine from '../../images/Logo_30shine.svg'
import { addListProduct, saveTotalCart, updateAccount } from '../../redux/actions/detailProduct'
import { privateAxios } from '../../service/axios'
import styles from './styles.module.scss'

export default function Header() {
  const [keyword, setKeyword] = useState('')
  const [showMenu, setShowMenu] = useState(-1)
  const [isAccount, setIsAccount] = useState(false)

  const totalCart = useSelector((state: any) => state.app.totalCart)
  const user = useSelector((state: any) => state.app.user)
  const [isModal, setIsModal] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const logOut = useLogOut()

  const handleOk = () => {
    setIsModal(false)
    logOut()
  }
  const handleShowModalLogOut = () => {
    setIsModal(true)
  }
  const handleCancelModalLogOut = () => {
    setIsModal(false)
  }

  const openMenu = () => {
    setShowMenu(1)
  }
  const closeMenu = () => {
    setShowMenu(0)
  }
  const openAccount = () => {
    setIsAccount(!isAccount)
  }

  const handleSearch = () => {
    privateAxios
      .get('/product', {
        params: {
          keyword
        }
      })
      .then((res) => {
        dispatch(addListProduct(res.data?.data))
      })
  }

  // hàm xử lý chuyển trang
  const handleRedirect = (url: string) => {
    setShowMenu(0)
    setIsAccount(false)
    // Thực hiện cuộn lên đầu trang trước khi chuyển hướng trang
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Sử dụng 'smooth' để có hiệu ứng cuộn mượt
    })
    navigate(url) // chuyển hướng
  }

  const handleStop = (e: any) => {
    e.stopPropagation() // ngăn chặn sự kiện click (closeMenu) cho thằng con
  }

  useEffect(() => {
    privateAxios
      .get('/user')
      .then((res) => {
        dispatch(updateAccount(res.data?.user))
      })
      .catch((error) => {})
  }, [])

  useEffect(() => {
    privateAxios.get('/cart').then((res) => {
      const length = res.data.listCart.length
      dispatch(saveTotalCart(length))
    })
  }, [])

  return (
    <div className={styles.sectionHeader}>
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
      <div className={styles.itemHeader}>
        <div onClick={openMenu} className={styles.iconHome}>
          <FontAwesomeIcon className={styles.iconFabars} icon={faBars} />
        </div>
        <div className={styles.img}>
          <img src={logo30shine} alt='img' />
        </div>
        <div className={styles.selectItem}>
          <div onClick={handleSearch} className={styles.searchBar}>
            Tìm Kiếm
          </div>
          <div className={styles.inputSearch}>
            <input
              value={keyword}
              onChange={(e: any) => setKeyword(e.target.value)}
              type='text'
              name='keyword'
              placeholder='Nhập tên sản phẩm, thương hiệu ...'
            />
            <FontAwesomeIcon onClick={handleSearch} className={styles.iconSeach} icon={faMagnifyingGlass} />
          </div>
          <div onClick={openAccount} className={styles.itemAccount}>
            <img src='https://shop.30shine.com/icons/login-30shine.svg' alt='img' />
            {checkLogin() ? (
              <div className={styles.nameAccount}>{user?.name}</div>
            ) : (
              <div onClick={() => navigate('/login')}>ĐĂNG NHẬP</div>
            )}
            {isAccount && (
              <div className={styles.boxMenu}>
                <div onClick={() => handleRedirect('/account')} className={styles.detailItem}>
                  <BsPerson className={styles.iconMenu} />
                  <div>Tài khoản của tôi</div>
                </div>
                <div onClick={() => handleRedirect('/list-order')} className={styles.detailItem}>
                  <BsLayoutTextSidebarReverse className={styles.iconMenu} />
                  <div>Đơn hàng</div>
                </div>
                <div onClick={handleShowModalLogOut} className={styles.detailItem}>
                  <BsBoxArrowRight className={styles.iconMenu} />
                  <div>Đăng xuất</div>
                </div>
              </div>
            )}
          </div>
          <div className={styles.iconCart}>
            <AiOutlineShoppingCart className={styles.icon} onClick={() => handleRedirect('/cart')} />
            {totalCart > 0 && <div className={styles.totalCart}>{totalCart}</div>}
          </div>
        </div>
      </div>

      <div className={styles.containerItem}>
        <div onClick={() => handleRedirect('/')}>TRANG CHỦ</div>
        <div onClick={() => handleRedirect('/list-Product')}>DANH SÁCH SẢN PHẨM</div>
        <div onClick={() => handleRedirect('/brand')}>THƯƠNG HIỆU</div>
        <div onClick={() => handleRedirect('/introduce')}>GIỚI THIỆU</div>
        <div onClick={() => handleRedirect('/contact')}>LIÊN HỆ</div>
        <div onClick={() => handleRedirect('/blog')}>TIN TỨC LÀM ĐẸP</div>
        <div onClick={() => handleRedirect('/account')}>QUẢN LÝ TÀI KHOẢN</div>
      </div>
      <Modal
        title='Bạn có chắc chắn muốn đăng xuất không ?'
        onOk={handleOk}
        onCancel={handleCancelModalLogOut}
        open={isModal}
      ></Modal>
    </div>
  )
}
