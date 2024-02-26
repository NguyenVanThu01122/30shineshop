import { Modal } from 'antd'
import { useState } from 'react'
import { BsBoxArrowRight, BsLayoutTextSidebarReverse, BsPerson, BsPersonCircle, BsPinMap } from 'react-icons/bs'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { checkLogin } from '../../helpers/checkLogin'
import { useLogOut } from '../../helpers/useLogOut'
import styles from './styles.module.scss'

function SidebarAccount() {
  const [isModal, setIsModel] = useState(false)
  const navigate = useNavigate()
  const user = useSelector((state: any) => state.app.user)
  const pathname = window.location.pathname // lấy param
  const logOut = useLogOut()

  const handleShowModel = () => {
    setIsModel(true)
  }
  const handleOk = () => {
    logOut()
    setIsModel(false)
  }
  const handleCancel = () => {
    setIsModel(false)
  }

  return (
    <div className={styles.account}>
      <div className={styles.information}>
        <div className={styles.informationSelection}>
          <div>
            <BsPersonCircle />
          </div>
          <div className={styles.phone}>
            <div>{user?.name}</div>
            <div>{user?.telephone}</div>
          </div>
        </div>
        <div
          className={`${styles.list} ${pathname === '/account' && styles.border}`}
          onClick={() => navigate('/account')}
        >
          <BsPerson />
          <div>Thông tin tài khoản</div>
        </div>
        <div
          className={`${styles.list} ${pathname === '/list-address' && styles.border}`}
          onClick={() => navigate('/list-address')}
        >
          <BsPinMap />
          <div>Địa chỉ nhận hàng</div>
        </div>
        <div
          className={`${styles.list} ${pathname === '/list-order' && styles.border}`}
          onClick={() => navigate('/list-order')}
        >
          <BsLayoutTextSidebarReverse />
          <div>Đơn hàng</div>
        </div>
        <div className={styles.list}>
          <BsBoxArrowRight />
          {checkLogin() && (
            <div className={styles.logOut} onClick={handleShowModel}>
              Đăng xuất
            </div>
          )}
          <Modal
            title='Bạn có chắc chắn muốn đăng xuất không ?'
            open={isModal}
            onOk={handleOk}
            onCancel={handleCancel}
            width={400}
            centered
          ></Modal>
        </div>
      </div>
    </div>
  )
}
export default SidebarAccount
