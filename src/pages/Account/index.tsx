import { useState } from 'react'
import { BsBoxArrowRight, BsLayoutTextSidebarReverse, BsPerson, BsPersonCircle, BsPinMap } from 'react-icons/bs'
import { checkLogin } from '../../helper'
import styles from './styles.module.css'
export default function Account() {
  let [name, setName] = useState('')
  let [email, setEmail] = useState('')
  let [birthday, setBirthday] = useState('')

  let [errorName, setErrorName] = useState('')
  let [errorEmail, setErrorEmail] = useState('')
  let [errorBirthday, setErrorBirthday] = useState('')

  let handleOnChangeName = (e: any) => {
    let name = e.target.value
    setName(name)
    if (!name) {
      setErrorName('Vui lòng nhập tên')
    } else if (name.length < 2 || name.length > 15) {
      setErrorName('Vui lòng nhập độ dài từ 2 đến 10 kí tự')
    } else {
      setErrorName('')
    }
  }

  let handleOnchageEmail = (e: any) => {
    let email = e.target.value
    setEmail(email)
    if (!email) {
      setErrorEmail('Vui lòng nhập email')
    } else {
      setErrorEmail('')
    }
  }
  let handleOnchageBirthday = (e: any) => {
    let birthday = e.target.value
    setBirthday(birthday)
    if (!birthday) {
      setErrorBirthday('Vui lòng nhập ngày sinh')
    } else {
      setErrorBirthday('')
    }
  }

  let handleSubmit = () => {
    if (!name) {
      setErrorName('Vui lòng nhập tên')
    }
    if (!email) {
      setErrorEmail('Vui lòng nhập email')
    }
    if (!name) {
      setErrorBirthday('Vui lòng nhập ngày sinh')
    }
    if (name && email && birthday && !errorName && !errorEmail && !errorBirthday) {
      alert('Bạn đã gửi thông tin thành công')
      setName('')
      setEmail('')
      setBirthday('')
    }
  }
  let handleLogOut =()=>{
     let token:any = localStorage.removeItem('token')
    if(!token){
      window.location.assign('/login')
    }
  }
  return (
    <div className={styles.pageAccount}>
      <div className={styles.title}>
        <div>Trang chủ</div>
        <div>/ Tài khoản /</div>
        <div>Thông tin tài khoản</div>
      </div>
      <div className={styles.account}>
        <div className={styles.information}>
          <div className={styles.informationSelection}>
            <div>
              <BsPersonCircle />
            </div>
            <div className={styles.phone}>
              <div>0967559846</div>
              <div>Chưa có hạng thành viên</div>
            </div>
          </div>
          <div className={styles.list}>
            <BsPerson />
            <div>Thông tin tài khoản</div>
          </div>
          <div className={styles.list}>
            <BsPinMap />
            <div>Địa chỉ nhận hàng</div>
          </div>
          <div className={styles.list}>
            <BsLayoutTextSidebarReverse />
            <div>Đơn hàng</div>
          </div>
          <div className={styles.list}>
            <BsBoxArrowRight />
            {
              checkLogin() && <div className={styles.logOut} onClick={handleLogOut}>Đăng xuất</div>
         
            }
          </div>
        </div>
        <div className={styles.accountInformation}>
          <div>Thông tin tài khoản</div>
          <div className={styles.login}>
            <div className={styles.loginInput}>
              <div>Họ tên</div>
              <input type='text' placeholder='Họ tên' value={name} onChange={handleOnChangeName} />
            </div>
            <div className={styles.errorText}>{errorName}</div>
            <div className={styles.loginInput}>
              <div>Số điện thoại</div>
              <div>0987559846</div>
            </div>
            <div className={styles.loginInput}>
              <div>Email</div>
              <input type='email' name='email' id='' placeholder='Email' value={email} onChange={handleOnchageEmail} />
            </div>
            <div className={styles.errorText}>{errorEmail}</div>
            <div className={styles.loginInput}>
              <div>Ngày sinh</div>
              <input type='date' name='birthday' value={birthday} onChange={handleOnchageBirthday} />
            </div>
            <div className={styles.errorText}>{errorBirthday}</div>
            <div onClick={handleSubmit}>Cập nhật</div>
          </div>
        </div>
      </div>
    </div>
  )
}
