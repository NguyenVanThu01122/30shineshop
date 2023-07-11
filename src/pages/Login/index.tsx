import { faEye, faLock, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {RxEyeOpen  } from "react-icons/ri";
import { useState } from 'react'

import { message } from 'antd'
import { useNavigate } from 'react-router-dom'
import { privateAxios } from '../../service/axios'
import styles from './styles.module.css'
export default function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorEmail, setErrorEmail] = useState('')
  const [errorPassword, setErrorPassword] = useState('')
  const [isShowPassword, setIsPassword] = useState(false)
  const handleOnChangeEmail = (e: any) => {
    const valueEmail = e.target.value
    setEmail(valueEmail)
    if (!valueEmail) {
      setErrorEmail('x Vui lòng nhập email')
    } else if (valueEmail.indexOf('@') === -1) {
      setErrorEmail('x Vui lòng nhập đúng định dạng Email')
    } else {
      setErrorEmail('')
    }
  }

  const handleOnChangePassword = (e: any) => {
    const valuePassword = e.target.value
    setPassword(valuePassword)
    if (!valuePassword) {
      setErrorPassword('x Vui lòng nhập mật khẩu')
    } else {
      setErrorPassword('')
    }
  }

  const handleOnSubmit = (e: any) => {
    e.preventDefault()
    if (!email) {
      setErrorEmail('x Vui lòng nhập email')
    }
    if (!password) {
      setErrorPassword('x Vui lòng nhập mật khẩu')
    }
    if (email && password && !errorEmail && !errorPassword) {
      const data = {
        password: password,
        email: email
      }
      privateAxios
        .post('/login', data)
        .then((response) => {
          const result = response.data
          localStorage.setItem('token', result?.token)
          localStorage.setItem('name', result?.user?.name)
          navigate('/')
        })
        .catch((error: any) => {
          const objError = error?.response?.data
          message.error(objError?.message)
        })
    }
  }

  const handleBlurEmail = () => {
    if (!email) {
      setErrorEmail('x Vui lòng nhập email')
    }
  }
  const handleBlurPassword = () => {
    if (!password) {
      setErrorPassword('x Vui lòng nhập mật khẩu')
    }
  }
  const handleClickPassword = () => {
    setIsPassword(!isShowPassword)
  }
  return (
    <div className={styles.page}>
      <div className={styles.login}>
        <div className={styles.section}>
          <div>ĐĂNG NHẬP</div>
          <div onClick={() => navigate('/register')} className={styles.register}>
            ĐĂNG KÝ
          </div>
        </div>
        <div className={styles.parent}>
          <div className={styles.email}>
            <span>*</span>Email
          </div>
          <div className={`${styles.input} ${errorEmail ? styles.borderRed : ''}`}>
            <FontAwesomeIcon icon={faUser} className={styles.icon} />
            <input
              onBlur={handleBlurEmail}
              type='text'
              value={email}
              name='Email'
              placeholder='Email'
              onChange={handleOnChangeEmail}
            />
          </div>
          <div className={styles.errorText} id='error-email'>
            {errorEmail}
          </div>
          <div className={styles.password}>
            <span>*</span>Mật khẩu
          </div>
          <div className={`${styles.input} ${errorPassword ? styles.borderRed : ''}`}>
            <FontAwesomeIcon icon={faLock} className={styles.icon} />
            <input
              onBlur={handleBlurPassword}
              value={password}
              id='password'
              type={isShowPassword ? 'text' : 'password'}
              name='password'
              placeholder='Mật khẩu'
              onChange={handleOnChangePassword}
            />
            <FontAwesomeIcon id='iconFont' onClick={handleClickPassword} className={styles.iconEye} icon={faEye} />
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
