import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { checkLogin, handleDirection } from '../../helper'
import { addListProduct } from '../../redux/actions/detailProduct'
import { privateAxios } from '../../service/axios'
import styles from './styles.module.css'

export default function Header() {
  const [keyword, setKeyword] = useState('')
  const [isRender, setIsRender] = useState(false)
  const handleOnMouseEter = () => {
    setIsRender(true)
  }
  const handleOnMouseLeave = () => {
    setIsRender(false)
  }
  const navigate = useNavigate()
  const dispatch = useDispatch()
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
  return (
    <div className={styles.pageHeader}>
      <div className={styles.header}>
        <div className={styles.img}>
          <img src='https://30shine.com/static/media/log-30shine-white.9945e644.jpg' alt='img' />
        </div>
        <div className={styles.search}>
          <div>Tìm Kiếm</div>
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
          <div className={styles.login}>
            <img src='https://shop.30shine.com/icons/login-30shine.svg' alt='img' />

            {checkLogin() ? (
              <div onClick={() => navigate('/account')}>{localStorage.getItem('name')}</div>
            ) : (
              <div onClick={() => navigate('/login')}>ĐĂNG NHẬP</div>
            )}
          </div>
          <AiOutlineShoppingCart className={styles.icon} onClick={() => navigate('/cart')} />
          {/* <div className={styles.informationAccount} onClick={()=>handleDirection('/account')}>Thông tin tài khoản</div> */}
        </div>
      </div>

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
function dispatch(arg0: { type: string; payload: any }) {
  throw new Error('Function not implemented.')
}
