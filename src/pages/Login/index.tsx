import { faLock, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'

import { handleDirection } from '../../helper'
import { publicAxios } from '../../service/axios'
import styles from './styles.module.css'

export default function Login() {
  let [email, setEmail] = useState('')
  let [password, setPassword] = useState('')

  let [errorEmail, setErrorEmail] = useState('')
  let [errorPassword, setErrorPassword] = useState('')

  let handleEmail = (e: any) => {
    let valueEmail = e.target.value
    setEmail(valueEmail)
    if (!email) {
      setErrorEmail('Vui Lòng Nhập Email')
    } else {
      setErrorEmail('')
    }
  }

  let handlePassword = (e: any) => {
    let valuePassword = e.target.value
    setPassword(valuePassword)
    if (!valuePassword) {
      setErrorPassword('Vui Lòng Nhập Password')
    } else {
      setErrorPassword('')
    }
  }

  let handleOnSubmit = (e: any) => {
    // e.preventDefault()
    if (!email) {
      setErrorEmail('Vui Lòng Nhập Email')
    }
    if (!password) {
      setErrorPassword('Vui Lòng Nhập Password')
    }
    if (email && password && !errorEmail && !errorPassword) {
      let data = {
        password: password,
        email: email
      }
      publicAxios
        .post('/login', data)
        .then((response) => {
          console.log(response.data)
          let result = response.data
          localStorage.setItem('token', result?.token)
          localStorage.setItem('name', result?.user?.name)
          window.location.assign('/')
        })
        .catch((error) => {
          let objError = error?.response?.data
          alert(objError?.message)
        })
    }
  }

  return (
    <div className={styles.page}>
      <div className={styles.login}>
        <div className={styles.section}>
          <div>ĐĂNG NHẬP</div>
          <div onClick={() => handleDirection('/register')} className={styles.register}>
            ĐĂNG KÝ
          </div>
        </div>
        <div className={styles.parent}>
          <div className={styles.email}>Email</div>

          <div className={styles.input}>
            <FontAwesomeIcon icon={faUser} className={styles.icon} />
            <input type='text' value={email} name='Email' placeholder='Email' id='email' onChange={handleEmail} />
          </div>
          <div className={styles.errorText}>{errorEmail}</div>

          <div className={styles.password}>Mật khẩu</div>
          <div className={styles.input}>
            <FontAwesomeIcon icon={faLock} className={styles.icon} />
            <input
              value={password}
              type='password'
              name='password'
              placeholder='Mật khẩu'
              id='password'
              onChange={handlePassword}
            />
          </div>
          <div className={styles.errorText}>{errorPassword}</div>

          <div className={styles.link}>
            <a href='#doimatkhau-pop-up' className='fancybox-fast-view'>
              Quên mật khẩu?
            </a>
          </div>
          <div className={styles.loginButton} onClick={handleOnSubmit}>
            ĐĂNG NHẬP
          </div>
        </div>
      </div>
    </div>
  )
}
