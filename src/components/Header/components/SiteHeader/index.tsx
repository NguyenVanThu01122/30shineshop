import { faBars, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Select } from 'antd'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { BsBoxArrowRight, BsLayoutTextSidebarReverse, BsPerson } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import checkLogin from '../../../../helpers/checkLogin'
import { ERROR_MESSAGES, PRODUCT_RESULT_PATH } from '../../../../helpers/contanst'
import { getLocalStorageValue, setLocalStorageValue } from '../../../../helpers/localStorageUtils'
import logo30shine from '../../../../images/Logo_30shine.svg'
import { saveIsLoading, saveKeywordSearch, saveProductSearch } from '../../../../redux/Slices/appSlices'
import { RootState } from '../../../../redux/Slices/rootReducer'
import { ROUTES } from '../../../../routes/routes'
import { searchProduct } from '../../../../services/header'
import { InputGeneral } from '../../../Ui/input'
import NavbarMobile from '../NavbarMobile'
import styles from './styles.module.scss'
interface SiteHeaderProps {
  handleRedirect: (path: string) => void
  setIsModal: (value: boolean) => void
  setIsAccount: (value: boolean) => void
  isAccount: boolean
  setOpenMenuMobile: (value: boolean) => void
  openMenuMobile: boolean
}

const SiteHeader = (props: SiteHeaderProps) => {
  const { handleRedirect, setIsModal, setIsAccount, isAccount, setOpenMenuMobile, openMenuMobile } = props
  const [keyword, setKeyword] = useState('')
  const user = useSelector((state: RootState) => state.app.user)
  const totalCart = useSelector((state: RootState) => state.app.totalCart)
  const productSearch = useSelector((state: RootState) => state.app.productSearch)
  const keywordSearch = useSelector((state: RootState) => state.app.keywordSearch)
  const savedSearchKeyword = getLocalStorageValue('searchKeyword')
  const savedSearchResults = getLocalStorageValue('searchResults')
  const { i18n, t } = useTranslation()
  const [selectedLanguage, setSelectedLanguage] = useState(() => localStorage.getItem('LANG_STORAGE_KEY') || 'vi')
  const handleChangeLanguage = (value: string) => {
    console.log(value)
    setSelectedLanguage(value)
    i18n.changeLanguage(value) // Thay đổi ngôn ngữ
    setLocalStorageValue('LANG_STORAGE_KEY', value) // Lưu ngôn ngữ vào localStorage
  }

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
          navigate(ROUTES.PRODUCT_SEARCH_RESULT)
        })
        .catch((error) => toast.error(ERROR_MESSAGES.SERVER_ERROR))
    }
  }

  const handleShowModalLogOut = () => setIsModal(true)

  // show user account
  const openAccount = () => {
    if (login) {
      setIsAccount(!isAccount)
    } else {
      navigate(ROUTES.MAIN_LOGIN)
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
      <NavbarMobile
        openMenuMobile={openMenuMobile}
        setOpenMenuMobile={setOpenMenuMobile}
        handleRedirect={handleRedirect}
      />
      <div onClick={() => setOpenMenuMobile(true)} className={styles.iconHome}>
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
          {t('SEARCH')}
        </div>
        <div className={styles.inputSearch}>
          <InputGeneral
            value={keyword}
            onChange={(value) => setKeyword(value)}
            type='text'
            name='keyword'
            className={styles.input}
            placeholder={t('ENTER_PRODUCT')}
          />
          <FontAwesomeIcon onClick={handleSearchProduct} className={styles.iconSearch} icon={faMagnifyingGlass} />
        </div>
        <div onClick={openAccount} className={styles.itemAccount}>
          <img src='https://shop.30shine.com/icons/login-30shine.svg' alt='img' />
          {login ? (
            <div className={styles.nameAccount}>{user?.name}</div>
          ) : (
            <div onClick={() => navigate(ROUTES.MAIN_LOGIN)}>{t('LOGIN')}</div>
          )}
          {isAccount && (
            <div className={styles.boxMenu}>
              <div onClick={() => handleRedirect(ROUTES.ACCOUNT)} className={styles.detailItem}>
                <BsPerson className={styles.iconMenu} />
                <div>{t('MY_ACCOUNT')}</div>
              </div>
              <div onClick={() => handleRedirect(ROUTES.LIST_ORDER)} className={styles.detailItem}>
                <BsLayoutTextSidebarReverse className={styles.iconMenu} />
                <div>{t('ORDERS')}</div>
              </div>
              <div onClick={handleShowModalLogOut} className={styles.detailItem}>
                <BsBoxArrowRight className={styles.iconMenu} />
                <div>{t('LOGOUT')}</div>
              </div>
            </div>
          )}
        </div>
        <Select
          className={styles.selectLanguage}
          size='large'
          value={selectedLanguage}
          style={{ width: 140, marginLeft: 10 }}
          onChange={handleChangeLanguage}
        >
          <Select.Option value='vi'>Vietnamese</Select.Option>
          <Select.Option value='en'>English</Select.Option>
        </Select>

        <div className={styles.iconCart}>
          <AiOutlineShoppingCart className={styles.icon} onClick={() => handleRedirect(ROUTES.CART)} />
          {totalCart > 0 && <div className={styles.totalCart}>{totalCart}</div>}
        </div>
      </div>
    </div>
  )
}

export default SiteHeader
