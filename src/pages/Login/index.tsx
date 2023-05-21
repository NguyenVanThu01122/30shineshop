import { faLock, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'

import { useNavigate } from 'react-router-dom'
import { handleDirection } from '../../helper'
import { myAxios } from '../../service/axios'
import styles from './styles.module.css'

import { message } from 'antd'

export default function Login() {
  let navigate = useNavigate()
  let [email, setEmail] = useState('')
  let [password, setPassword] = useState('')

  let [errorEmail, setErrorEmail] = useState('')
  let [errorPassword, setErrorPassword] = useState('')

  let handleEmail = (e: any) => {
    let valueEmail = e.target.value
    setEmail(valueEmail)
    let emailElement = document.getElementById('email')
    if (!valueEmail) {
      setErrorEmail('Vui lòng nhập email')
      emailElement?.classList.add('border-red')
    } else {
      setErrorEmail('')
      emailElement?.classList.remove('border-red')
    }
  }

  let handlePassword = (e: any) => {
    let valuePassword = e.target.value
    setPassword(valuePassword)
    let passwordElement = document.getElementById('password')
    if (!valuePassword) {
      setErrorPassword('Vui lòng nhập mật khẩu')
      passwordElement?.classList.add('border-red')
    } else {
      setErrorPassword('')
      passwordElement?.classList.remove('border-red')
    }
  }

  let handleOnSubmit = (e: any) => {
    e.preventDefault()
    if (!email) {
      document.getElementById('email')?.classList.add('border-red')
      setErrorEmail('Vui lòng nhập email')
    }
    if (!password) {
      document.getElementById('password')?.classList.add('border-red')
      setErrorPassword('Vui lòng nhập mật khẩu')
    }
    if (email && password && !errorEmail && !errorPassword) {
      let data = {
        password: password,
        email: email
      }
      myAxios
        .post('/login', data)
        .then((response) => {
          let result = response.data
          localStorage.setItem('token', result?.token)
          localStorage.setItem('name', result?.user?.name)
          navigate('/')
        })
        .catch((error) => {
          let objError = error?.response?.data
          message.error(objError?.message)
        })
    }
  }

  const handleBlurEmail = () => {
    let emailElement = document.getElementById('email')
    if (!email) {
      emailElement?.classList.add('border-red')
      setErrorEmail('Vui lòng nhập email')
    }
  }
  const handleBlurPassword = () => {
    let passwordElement = document.getElementById('password')
    if (!password) {
      passwordElement?.classList.add('border-red')
      setErrorPassword('Vui lòng nhập mật khẩu')
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
          <div className={styles.email}>
            <span>*</span>Email
          </div>
          <div className={styles.input} id='email'>
            <FontAwesomeIcon icon={faUser} className={styles.icon} />
            <input
              onBlur={handleBlurEmail}
              type='text'
              value={email}
              name='Email'
              placeholder='Email'
              onChange={handleEmail}
            />
          </div>
          <div className={styles.errorText} id='error-email'>
            {errorEmail}
          </div>
          <div className={styles.password}>
            <span>*</span>Mật khẩu
          </div>
          <div className={styles.input} id='password'>
            <FontAwesomeIcon icon={faLock} className={styles.icon} />
            <input
              onBlur={handleBlurPassword}
              value={password}
              type='password'
              name='password'
              placeholder='Mật khẩu'
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
          {/* {email && password && !errorEmail && !errorPassword ? (
            <div className={styles.loginButton} onClick={handleOnSubmit}>
              ĐĂNG NHẬP
            </div>
          ) : null} */}
        </div>
      </div>
    </div>
  )
}
