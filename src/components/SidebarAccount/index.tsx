import { BsBoxArrowRight, BsPerson, BsPersonCircle, BsPinMap } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { checkLogin } from '../../helper'
import styles from './styles.module.scss'
import { useSelector } from 'react-redux'

function SidebarAccount() {
  const navigate = useNavigate()
  const handleLogOut = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('name')
    navigate('/login')
  }

  const user = useSelector((state:any)=>state.app.user)
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
        <div className={styles.list}>
          <BsPerson />
          <div>Thông tin tài khoản</div>
        </div>
        <div className={styles.list} onClick={()=>navigate('/list-address')}>
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
            <div className={styles.logOut} onClick={handleLogOut}>
              Đăng xuất
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
export default SidebarAccount;
