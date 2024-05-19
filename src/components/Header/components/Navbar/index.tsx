import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useLogOut } from '../../../../helpers/useLogOut'
import { RootState } from '../../../../redux/Slices/rootReducer'
import { ROUTES } from '../../../../routes/routes'
import { CommonModal } from '../../../Ui/modal'
import styles from './styles.module.scss'
interface NavbarProps {
  isModal: boolean
  setIsModal: (value: boolean) => void
  handleRedirect: (path: string) => void
}

function Navbar({ isModal, setIsModal, handleRedirect }: NavbarProps) {
  const isLoggedIn = useSelector((state: RootState) => state.app.isLogin)
  const logOut = useLogOut()
  const { t } = useTranslation()

  const handleOk = () => {
    setIsModal(false)
    logOut()
  }

  const menuItems = [
    { title: t('HOME'), path: ROUTES.HOME, onClick: () => handleRedirect(ROUTES.HOME) },
    { title: t('PRODUCT_LIST'), path: ROUTES.LIST_PRODUCT, onClick: () => handleRedirect(ROUTES.LIST_PRODUCT) },
    { title: t('BRAND'), path: ROUTES.BRAND, onClick: () => handleRedirect(ROUTES.BRAND) },
    { title: t('INTRODUCE'), path: ROUTES.INTRODUCE, onClick: () => handleRedirect(ROUTES.INTRODUCE) },
    { title: t('CONTACT'), path: ROUTES.CONTACT, onClick: () => handleRedirect(ROUTES.CONTACT) }
  ]
  if (isLoggedIn) {
    menuItems.push({
      title: t('ACCOUNT_MANAGEMENT'),
      path: ROUTES.ACCOUNT,
      onClick: () => handleRedirect(ROUTES.ACCOUNT)
    })
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
        modalTitle={t('LOGOUT_AUTHENTICATION_MESSAGE')}
        onOk={handleOk}
        onCancel={() => setIsModal(false)}
        isModalOpen={isModal}
      />
    </div>
  )
}

export default Navbar
