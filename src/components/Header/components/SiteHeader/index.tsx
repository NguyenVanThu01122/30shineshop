import { faBars, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { BsBoxArrowRight, BsLayoutTextSidebarReverse, BsPerson } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { checkLogin } from '../../../../helpers/checkLogin'
import { ERROR_MESSAGES, PLACEHOLDER } from '../../../../helpers/contanst'
import logo30shine from '../../../../images/Logo_30shine.svg'
import { saveIsLoading, saveKeywordSearch, saveProductSearch } from '../../../../redux/actions/app'
import { searchProduct } from '../../../../services/header'
import { InputGeneral } from '../../../Ui/input'
import styles from './styles.module.scss'

interface SiteHeaderProps {
  handleRedirect: (path: string) => void
  setShowMenu: (value: number) => void
  setIsModal: (value: boolean) => void
  setIsAccount: (value: boolean) => void
  isAccount: boolean
}

const SiteHeader = ({ handleRedirect, setShowMenu, setIsModal, setIsAccount, isAccount }: SiteHeaderProps) => {
  const [keyword, setKeyword] = useState('')
  const user = useSelector((state: any) => state.app.user)
  const totalCart = useSelector((state: any) => state.app.totalCart)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // hàm xử lý tìm kiếm sản phẩm
  const handleSearchProduct = () => {
    if (!keyword) {
      return
    } else if (keyword) {
      dispatch(saveIsLoading(true))
      searchProduct(keyword)
        .then((res) => {
          dispatch(saveProductSearch(res.data?.data))
          dispatch(saveKeywordSearch(keyword)) // save keyword vào store
          navigate('/product-search-result')
          setKeyword('') // search success set về rỗng
          dispatch(saveIsLoading(false))
        })
        .catch((error) => toast.error(ERROR_MESSAGES.SERVER_ERROR))
    } else {
      dispatch(saveProductSearch([]))
      dispatch(saveKeywordSearch('')) // save keyword vào store
      dispatch(saveIsLoading(false))
    }
  }
  const handleShowModalLogOut = () => {
    setIsModal(true)
  }
  const openMenu = () => {
    setShowMenu(1)
  }

  const openAccount = () => {
    setIsAccount(!isAccount)
  }

  const location = useLocation() //useLocation từ React Router để lấy thông tin về đường dẫn URL hiện tại
  useEffect(() => {
    setKeyword('')
  }, [location.pathname]) //setkeyword('') nếu thay đổi đường dẫn

  return (
    <div className={styles.itemHeader}>
      <div onClick={openMenu} className={styles.iconHome}>
        <FontAwesomeIcon className={styles.iconFabars} icon={faBars} />
      </div>
      <div className={styles.img}>
        <img src={logo30shine} alt='img' />
      </div>
      <div className={styles.selectItem}>
        <div onClick={handleSearchProduct} className={styles.searchBar}>
          Tìm Kiếm
        </div>
        <div className={styles.inputSearch}>
          <InputGeneral
            value={keyword}
            onChange={(value) => setKeyword(value)}
            type='text'
            name='keyword'
            className={styles.input}
            placeholder={PLACEHOLDER.ENTER_PRODUCT}
          />
          <FontAwesomeIcon onClick={handleSearchProduct} className={styles.iconSearch} icon={faMagnifyingGlass} />
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
  )
}

export default SiteHeader
