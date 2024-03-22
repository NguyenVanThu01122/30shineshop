import { faBars, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { BsBoxArrowRight, BsLayoutTextSidebarReverse, BsPerson } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import checkLogin from '../../../../helpers/checkLogin'
import { ERROR_MESSAGES, PLACEHOLDER, PRODUCT_RESULT_PATH } from '../../../../helpers/contanst'
import { getLocalStorageValue, setLocalStorageValue } from '../../../../helpers/localStorageUtils'
import logo30shine from '../../../../images/Logo_30shine.svg'
import { saveIsLoading, saveKeywordSearch, saveProductSearch } from '../../../../redux/Slices/appSlices'
import { RootState } from '../../../../redux/Slices/rootReducer'
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
  const user = useSelector((state: RootState) => state.app.user)
  const totalCart = useSelector((state: RootState) => state.app.totalCart)
  const productSearch = useSelector((state: RootState) => state.app.productSearch)
  const keywordSearch = useSelector((state: RootState) => state.app.keywordSearch)
  const savedSearchKeyword = getLocalStorageValue('searchKeyword')
  const savedSearchResults = getLocalStorageValue('searchResults')
  const login = checkLogin()

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = window.location // Lấy thông tin về URL hiện tại
  const isSearchResultPage = location.pathname === PRODUCT_RESULT_PATH // Kiểm tra xem đang ở trang kết quả tìm kiếm hay không

  // Hàm xử lý tìm kiếm sản phẩm
  const handleSearchProduct = () => {
    if (!keyword) {
      return
    } else if (keyword && keyword !== keywordSearch) {
      dispatch(saveIsLoading(true))
      searchProduct(keyword)
        .then((res) => {
          dispatch(saveProductSearch(res.data?.data)) // Lưu kết quả tìm kiếm vào store
          dispatch(saveKeywordSearch(keyword)) // Lưu keyword vào store
          setLocalStorageValue('searchKeyword', keyword) // Lưu keyword vào local
          dispatch(saveIsLoading(false))
          navigate('/product-search-result')
        })
        .catch((error) => toast.error(ERROR_MESSAGES.SERVER_ERROR))
    }
  }

  const openMenu = () => setShowMenu(1)
  const handleShowModalLogOut = () => setIsModal(true)

  // Mở tài khoản
  const openAccount = () => {
    if (login) {
      setIsAccount(!isAccount)
    } else {
      navigate('/main-login')
    }
  }

  const savedProductSearchResults = () => {
    if (savedSearchResults) {
      dispatch(saveProductSearch(JSON.parse(savedSearchResults))) // dispatch productSearch từ localStorage vào store
    }
  }

  // update keyword từ localStorage vào state và store
  const updateSavedSearchKeyword = () => {
    if (savedSearchKeyword && isSearchResultPage) {
      setKeyword(JSON.parse(savedSearchKeyword)) // set keyword từ localStorage vào state
      dispatch(saveKeywordSearch(JSON.parse(savedSearchKeyword))) // dispatch keyword từ localStorage vào store
    }
  }

  // check có đang ở trang kết quả tìm kiếm hay không
  useEffect(() => {
    if (isSearchResultPage) {
      updateSavedSearchKeyword()
    } else {
      setKeyword('')
      dispatch(saveKeywordSearch(''))
    }
  }, [location.pathname])

  // Lưu dữ liệu vào localStorage khi thay đổi
  useEffect(() => {
    setLocalStorageValue('searchResults', [...productSearch])
  }, [productSearch])

  useEffect(() => {
    savedProductSearchResults()
  }, [])

  return (
    <div className={styles.itemHeader}>
      <div onClick={openMenu} className={styles.iconHome}>
        <FontAwesomeIcon className={styles.iconFabars} icon={faBars} />
      </div>
      <div className={styles.img}>
        <img src={logo30shine} alt='img' />
      </div>
      <div className={styles.selectItem}>
        <div
          onClick={handleSearchProduct}
          className={`${styles.searchBar} ${keyword && keyword !== keywordSearch && styles.active}`}
        >
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
          {login ? (
            <div className={styles.nameAccount}>{user?.name}</div>
          ) : (
            <div onClick={() => navigate('/main-login')}>ĐĂNG NHẬP</div>
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
