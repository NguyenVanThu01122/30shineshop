import { faBars, faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { BsBoxArrowRight, BsLayoutTextSidebarReverse, BsPerson } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { checkLogin, handleDirection } from '../../helper'
import { addListProduct, saveTotalCart } from '../../redux/actions/detailProduct'
import { privateAxios } from '../../service/axios'
import styles from './styles.module.scss'

export default function Header() {
  const [keyword, setKeyword] = useState('')
  const [isRender, setIsRender] = useState(false)
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const [isAccount, setIsAccount] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const totalCart = useSelector((state: any) => state.app.totalCart)
  const handleOnMouseEter = () => {
    setIsRender(true)
  }
  const handleOnMouseLeave = () => {
    setIsRender(false)
  }
  const openMenu = () => {
    setIsOpenMenu(true)
  }
  const openAccount = () => {
    setIsAccount(!isAccount)
  }
  const handelLogOut = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('name')
    navigate('/login')
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
  const handleRedirect = (url: string) => {
    navigate(url)
    setIsOpenMenu(false)
  }

  const closeMenu = () => {
    setIsOpenMenu(false)
  }

  // const handleStop = (e: any) => {
  //   e.stopPropagation();
  // }
  const handleStop = (e: any) => {
    e.stopPropagation()
  }

  useEffect(() => {
    privateAxios.get('/cart').then((res) => {
      const length = res.data.listCart.length
      dispatch(saveTotalCart(length))
    })
  }, [])
  return (
    <div className={styles.pageHeader}>
      {isOpenMenu && (
        <div className={styles.menu} onClick={closeMenu}>
          <div className={styles.listMenu} onClick={handleStop}>
            <div className={styles.icon}>
              <div>30ShineShop</div>
              <FontAwesomeIcon className={styles.iconClose} onClick={closeMenu} icon={faXmark} />
            </div>
            <div className={styles.content}>
              <div onClick={() => handleRedirect('/list-product')}>DANH SÁCH SẢN PHẨM</div>
              <div onClick={() => handleRedirect('/brand')}>THƯƠNG HIỆU</div>
              <div onClick={() => handleRedirect('/introduce')}>GIỚI THIỆU</div>
              <div onClick={() => handleRedirect('/contact')}>LIÊN HỆ</div>
              <div onClick={() => handleRedirect('/blog')}>TIN TỨC LÀM ĐẸP</div>
              <div onClick={() => handleRedirect('/account')}>QUẢN LÝ TÀI KHOẢN</div>
            </div>
          </div>
        </div>
      )}
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
            {checkLogin() ? (
              <div>{localStorage.getItem('name')}</div>
            ) : (
              <div onClick={() => navigate('/login')}>ĐĂNG NHẬP</div>
            )}
          </div>
          <div className={styles.iconCart}>
            <AiOutlineShoppingCart className={styles.icon} onClick={() => navigate('/cart')} />
            {totalCart > 0 && <div className={styles.totalCart}>{totalCart}</div>}
          </div>
          {/* <div className={styles.informationAccount} onClick={()=>handleDirection('/account')}>Thông tin tài khoản</div> */}
        </div>
      </div>
      {isAccount && (
        <div className={styles.menuItem}>
          <div className={styles.selectItem}>
            <div onClick={() => navigate('/account')} className={styles.detailItem}>
              <BsPerson className={styles.iconMenu} />
              <div>Tài khoản của tôi</div>
            </div>
            <div className={styles.detailItem}>
              <BsLayoutTextSidebarReverse className={styles.iconMenu} />
              <div>Đơn hàng</div>
            </div>
            <div onClick={handelLogOut} className={styles.detailItem}>
              <BsBoxArrowRight className={styles.iconMenu} />
              <div>Đắng xuất</div>
            </div>
          </div>
        </div>
      )}
      <div className={styles.option}>
        {/* <div className={styles.optionChild} onMouseEnter={handleOnMouseEter} onMouseLeave={handleOnMouseLeave}>
          DANH MỤC
          <span onMouseEnter={handleOnMouseEter} onMouseLeave={handleOnMouseLeave}>
            <AiOutlineCaretDown />
          </span>
        </div>
        <div>SIÊU COMBO SIÊU HỜI</div>
        <div onClick={() => handleDirection('/selling-Products')}>SẢN PHẨM BÁN CHẠY</div>
        <div onClick={() => handleDirection('/New-Product')}>SẢN PHẨM MỚI</div> */}
        <div onClick={() => handleDirection('/')}>DANH SÁCH SẢN PHẨM</div>
        <div onClick={() => handleDirection('brand')}>THƯƠNG HIỆU</div>
        <div onClick={() => handleDirection('/introduce')}>GIỚI THIỆU</div>
        <div onClick={() => handleDirection('/contact')}>LIÊN HỆ</div>
        <div onClick={() => handleDirection('/blog')}>TIN TỨC LÀM ĐẸP</div>
        <div onClick={() => handleDirection('/account')}>QUẢN LÝ TÀI KHOẢN</div>
      </div>
      {isRender && (
        <div className={styles.productItem} onMouseEnter={handleOnMouseEter} onMouseLeave={handleOnMouseLeave}>
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
      )}
    </div>
  )
}
