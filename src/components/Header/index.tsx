import { faAngleRight, faBars, faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Modal } from 'antd'
import { useEffect, useState } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { BsBoxArrowRight, BsLayoutTextSidebarReverse, BsPerson } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { checkLogin } from '../../helper'
import { addListProduct, saveTotalCart, updateAccount } from '../../redux/actions/detailProduct'
import { privateAxios } from '../../service/axios'
import styles from './styles.module.scss'

export default function Header() {
  const [keyword, setKeyword] = useState('')
  const [showMenu, setShowMenu] = useState(-1)
  const [isAccount, setIsAccount] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const totalCart = useSelector((state: any) => state.app.totalCart)
  const user = useSelector((state: any) => state.app.user)
  const [isModal, setIsModal] = useState(false)

  // hàm xử lý chức năng đăng xuất
  const handelLogOut = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('refreshToken')
    navigate('/new-login')
  }

  const handleOk = () => {
    setIsModal(false)
    handelLogOut()
  }
  const handleShowModalLogOut = () => {
    setIsModal(true)
  }
  const handleCencelModalLogOut = () => {
    setIsModal(false)
  }

  // const handleOnMouseEter = () => {
  //   setIsRender(true)
  // }
  // const handleOnMouseLeave = () => {
  //   setIsRender(false)
  // }
  const openMenu = () => {
    setShowMenu(1)
  }
  const closeMenu = () => {
    setShowMenu(0)
  }
  const openAccount = () => {
    setIsAccount(!isAccount)
  }

  // hàm tìm kiếm sp
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
    navigate(url)
    setShowMenu(0)
    setIsAccount(false)
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
    <div className={styles.pageHeader}>
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
      <div className={styles.header}>
        <div onClick={openMenu} className={styles.iconHome}>
          <FontAwesomeIcon className={styles.iconFabars} icon={faBars} />
        </div>
        <div className={styles.img}>
          <img src='https://30shine.com/static/media/log-30shine-white.9945e644.jpg' alt='img' />
        </div>
        <div className={styles.search}>
          <div onClick={handleSearch}>Tìm Kiếm</div>
          <div className={styles.loginInput}>
            <input
              value={keyword}
              onChange={(e: any) => setKeyword(e.target.value)}
              type='text'
              name='keyword'
              placeholder='Nhập tên sản phẩm, thương hiệu ...'
            />
            <FontAwesomeIcon onClick={handleSearch} className={styles.iconSeach} icon={faMagnifyingGlass} />
          </div>
          <div onClick={openAccount} className={styles.login}>
            <img src='https://shop.30shine.com/icons/login-30shine.svg' alt='img' />
            {checkLogin() ? <div>{user?.name}</div> : <div onClick={() => navigate('/login')}>ĐĂNG NHẬP</div>}
          </div>
          <div className={styles.iconCart}>
            <AiOutlineShoppingCart className={styles.icon} onClick={() => handleRedirect('/cart')} />
            {totalCart > 0 && <div className={styles.totalCart}>{totalCart}</div>}
          </div>
        </div>
      </div>

      {isAccount && (
        <div className={styles.menuItem}>
          <div className={styles.selectItem}>
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
            <Modal
              title='Bạn có chắc chắn muốn đăng xuất không ?'
              onOk={handleOk}
              onCancel={handleCencelModalLogOut}
              open={isModal}
            ></Modal>
          </div>
        </div>
      )}
      <div className={styles.option}>
        <div onClick={() => handleRedirect('/')}>TRANG CHỦ</div>
        {/* <div onMouseEnter={handleOnMouseEter} onMouseLeave={handleOnMouseLeave}>
          DANH MỤC
        </div> */}
        <div onClick={() => handleRedirect('/list-Product')}>DANH SÁCH SẢN PHẨM</div>
        <div onClick={() => handleRedirect('/brand')}>THƯƠNG HIỆU</div>
        <div onClick={() => handleRedirect('/introduce')}>GIỚI THIỆU</div>
        <div onClick={() => handleRedirect('/contact')}>LIÊN HỆ</div>
        <div onClick={() => handleRedirect('/blog')}>TIN TỨC LÀM ĐẸP</div>
        <div onClick={() => handleRedirect('/account')}>QUẢN LÝ TÀI KHOẢN</div>
      </div>
      {/* {isRender && (
        <div className={styles.productItem}>
          <div className={styles.selectionItem}>
            <div>TẠO KIỂU TÓC</div>
            <div className={styles.item}>
              <div>Sắp vuốt tóc</div>
              <div>Gôm giữ nếp</div>
              <div>Tạo màu tóc</div>
              <div>Pre Styling</div>
              <div>Sấy tóc</div>
            </div>
          </div>
          <div className={styles.selectionItem}>
            <div>CHĂM SÓC DA MẶT</div>
            <div className={styles.item}>
              <div>Sữa rửa mặt</div>
              <div>Dưỡng da</div>
              <div>Tẩy da chết</div>
              <div>Toner</div>
              <div>Kem chống nắng</div>
              <div>Mặt nạ</div>
            </div>
          </div>
          <div className={styles.selectionItem}>
            <div>CHĂM SÓC TÓC</div>
            <div className={styles.item}>
              <div>Gầu gội</div>
              <div>Dầu xả</div>
              <div>Dưỡng tóc</div>
            </div>
          </div>
          <div className={styles.selectionItem}>
            <div>CHĂM SÓC CƠ THỂ</div>
            <div className={styles.item}>
              <div>Sữa tắm</div>
              <div>Khử mùi cơ thể</div>
              <div>Tẩy da chết</div>
              <div>Nước hoa</div>
            </div>
          </div>
          <div className={styles.selectionItem}>
            <div>CHĂM SÓC CÁ NHÂN</div>
            <div className={styles.item}>
              <div>Chăm sóc răng miệng</div>
              <div>Cạo râu</div>
              <div>Dung dịch vệ sinh</div>
              <div>Bao cao su</div>
            </div>
          </div>
          <div className={styles.selectionItem}>
            <div>THỰC PHẨM CHỨC NĂNG</div>
            <div className={styles.item}>
              <div>Làm đẹp</div>
              <div>Sức khỏe</div>
            </div>
          </div>
          <div className={styles.selectionItem}>
            <div>THỜI TRANG</div>
            <div className={styles.item}>
              <div>Quần lót nam</div>
              <div>Tất nam</div>
            </div>
          </div>
        </div>
      )} */}
    </div>
  )
}
