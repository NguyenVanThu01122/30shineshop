import { Modal } from 'antd'
import { useState } from 'react'
import { BsBoxArrowRight, BsPerson, BsPersonCircle, BsPinMap } from 'react-icons/bs'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { checkLogin } from '../../helper'
import styles from './styles.module.scss'

function SidebarAccount() {
  const navigate = useNavigate()

  const handleLogOut = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('name')
    navigate('/new-login')
  }
  const [isModal, setIsModel] = useState(false)
  const handleShowModel = () => {
    setIsModel(true)
  }
  const handleOk = () => {
    setIsModel(false)
    handleLogOut()
  }
  const handleCancel = () => {
    setIsModel(false)
  }
  const user = useSelector((state: any) => state.app.user)
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
        <div className={styles.list} onClick={() => navigate('/account')}>
          <BsPerson />
          <div>Thông tin tài khoản</div>
        </div>
        <div className={styles.list} onClick={() => navigate('/list-address')}>
          <BsPinMap />
          <div>Địa chỉ nhận hàng</div>
        </div>
        {/* <div className={styles.list}>
          <BsLayoutTextSidebarReverse />
          <div>Đơn hàng</div>
        </div> */}
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
            width={300}
          ></Modal>
        </div>
      </div>
    </div>
  )
}
export default SidebarAccount
