import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { BsBoxArrowRight, BsLayoutTextSidebarReverse, BsPerson, BsPersonCircle, BsPinMap } from 'react-icons/bs'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import checkLogin from '../../helpers/checkLogin'
import { useLogOut } from '../../helpers/useLogOut'
import { ROUTES } from '../../routes/routes'
import { CommonModal } from '../Ui/modal'
import styles from './styles.module.scss'

function SidebarAccount() {
  const { t } = useTranslation()
  const [isModal, setIsModel] = useState(false)
  const navigate = useNavigate()
  const user = useSelector((state: any) => state.app.user)
  const pathname = window.location.pathname
  const logOut = useLogOut()
  const isLogin = checkLogin()

  const handleOk = () => {
    logOut()
    setIsModel(false)
  }
  const handleShowModel = () => setIsModel(true)
  const handleCancel = () => setIsModel(false)

  const arrMenu = [
    { path: ROUTES.ACCOUNT, icon: <BsPerson />, label: t('ACCOUNT_INFORMATION') },
    { path: ROUTES.lIST_ADDRESS, icon: <BsPinMap />, label: t('DELIVERY_ADDRESS') },
    { path: ROUTES.LIST_ORDER, icon: <BsLayoutTextSidebarReverse />, label: t('ORDERS') }
  ]

  return (
    <div className={styles.wrapperSidebar}>
      <div className={styles.informationSelection}>
        <div>
          <BsPersonCircle />
        </div>
        <div className={styles.phone}>
          <div>{user?.name}</div>
          <div>{user?.telephone}</div>
        </div>
      </div>
      {arrMenu.map((menu) => (
        <div
          key={menu.path}
          className={`${styles.listMenu} ${pathname === menu.path && styles.border}`}
          onClick={() => navigate(menu.path)}
        >
          {menu.icon}
          <div>{menu.label}</div>
        </div>
      ))}
      <div className={styles.listMenu}>
        <BsBoxArrowRight />
        {isLogin && (
          <div className={styles.logOut} onClick={handleShowModel}>
            {t('LOG_OUT')}
          </div>
        )}
        <CommonModal
          modalTitle={t('LOGOUT_AUTHENTICATION_MESSAGE')}
          isModalOpen={isModal}
          onOk={handleOk}
          onCancel={handleCancel}
          width={400}
        />
      </div>
    </div>
  )
}
export default SidebarAccount
