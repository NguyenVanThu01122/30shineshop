import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SidebarAccount from '../../components/SidebarAccount'
import { privateAxios } from '../../service/axios'
import styles from './styles.module.css'
import { message } from 'antd'

export default function Account() {
  let navigate = useNavigate()
  let [name, setName] = useState('')
  let [email, setEmail] = useState('')
  let [birthday, setBirthday] = useState<any>('')
  let [phone, setPhone] = useState('')
  let [errorName, setErrorName] = useState('')
  let [errorEmail, setErrorEmail] = useState('')
  let [errorBirthday, setErrorBirthday] = useState('')
  let [errorPhone, setErrorPhone] = useState('')
  let handleOnChangeName = (e: any) => {
    let name = e.target.value
    setName(name)
    if (!name) {
      setErrorName('Vui lòng nhập tên')
    } else if (name.length < 6 || name.length > 15) {
      setErrorName('Vui lòng nhập độ dài từ 6 đến 15 kí tự')
    } else {
      setErrorName('')
    }
  }
  let handleOnchangePhone = (e: any) => {
    let phone = e.target.value
    setPhone(phone)
    if (!phone) {
      setErrorPhone('Vui lòng nhập số điện thoại')
    } else {
      setErrorPhone('')
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
    console.log(birthday)
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
    if (!phone) {
      setErrorPhone('Vui lòng nhập số điện thoại')
    }
    if (!name) {
      setErrorBirthday('Vui lòng nhập ngày sinh')
    }
    if (name && phone && birthday && !errorName && !errorPhone && !errorBirthday) {
      privateAxios
        .put('/user', {
          name,
          date: birthday,
          telephone: phone
        })
        .then((res) => {
          message.success(res.data.message)
        })
    }
  }
  let handleLogOut = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('name')
    navigate('/login')
  }

  useEffect(() => {
    privateAxios.get('/user').then((res) => {
      const user = res.data?.user
      setName(user.name)
      setPhone(user.telephone)
      setEmail(user.email)
      setBirthday(user.date.substring(0, 10))
    })
  }, [])

  return (
    <div className={styles.pageAccount}>
      <SidebarAccount />
      <div className={styles.accountInformation}>
        <div>Thông tin tài khoản</div>
        <div className={styles.login}>
          <div className={styles.loginInput}>
            <div>Họ tên</div>
            <div className={styles.input}>
              <input
                id='name'
                className={`${errorName ? styles.borderRed : ''}`}
                type='text'
                placeholder='Họ tên'
                value={name}
                onChange={handleOnChangeName}
              />
            </div>
          </div>
          <div className={styles.errorText}>{errorName}</div>
          <div className={styles.loginInput}>
            <div>Số điện thoại</div>
            <div className={styles.input}>
              <input
                type='text'
                value={phone}
                placeholder='Nhập số điện thoại'
                className={`${errorPhone ? styles.borderRed : ''}`}
                onChange={handleOnchangePhone}
              />
            </div>
          </div>
          <div className={styles.errorText}>{errorPhone}</div>
          <div className={styles.loginInput}>
            <div>Email</div>
            <div className={styles.input}>
              <input
                className={`${errorEmail ? styles.borderRed : ''}`}
                id='email'
                type='email'
                name='email'
                placeholder='Email'
                value={email}
                onChange={handleOnchageEmail}
                disabled={true}
              />
            </div>
          </div>
          <div className={styles.errorText}>{errorEmail}</div>
          <div className={styles.loginInput}>
            <div>Ngày sinh</div>
            <div className={styles.input}>
              <input
                className={`${errorBirthday ? styles.borderRed : ''}`}
                id='birthday'
                type='date'
                name='birthday'
                value={birthday}
                onChange={handleOnchageBirthday}
              />
            </div>
          </div>
          <div className={styles.errorText}>{errorBirthday}</div>
          <div onClick={handleSubmit}>Cập nhật</div>
        </div>
      </div>
    </div>
  )
}
