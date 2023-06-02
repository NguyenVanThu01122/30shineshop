import { faEye, faLock, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {RxEyeOpen  } from "react-icons/ri";
import { useState } from 'react'

import { message } from 'antd'
import { useNavigate } from 'react-router-dom'
import { handleDirection } from '../../helper'
import { publicAxios } from '../../service/axios'
import styles from './styles.module.css'
export default function Login() {
  let navigate = useNavigate()
  let [email, setEmail] = useState('')
  let [password, setPassword] = useState('')
  let [errorEmail, setErrorEmail] = useState('')
  let [errorPassword, setErrorPassword] = useState('')
  let [isShowPassword, setIsPassword] = useState(false)
  let handleOnChangeEmail = (e: any) => {
    let valueEmail = e.target.value
    setEmail(valueEmail)
    if (!valueEmail) {
      setErrorEmail('x Vui lòng nhập email')
    } else if (valueEmail.indexOf('@') === -1) {
      setErrorEmail('x Vui lòng nhập đúng định dạng Email')
    } else {
      setErrorEmail('')
    }
  }

  let handleOnChangePassword = (e: any) => {
    let valuePassword = e.target.value
    setPassword(valuePassword)
    if (!valuePassword) {
      setErrorPassword('x Vui lòng nhập mật khẩu')
    } else {
      setErrorPassword('')
    }
  }

  let handleOnSubmit = (e: any) => {
    e.preventDefault()
    if (!email) {
      setErrorEmail('x Vui lòng nhập email')
    }
    if (!password) {
      setErrorPassword('x Vui lòng nhập mật khẩu')
    }
    if (email && password && !errorEmail && !errorPassword) {
      let data = {
        password: password,
        email: email
      }
      publicAxios
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
    // if (isShowPassword === true) {
    //   setIsPassword(false)
    // } else {
    //   setIsPassword(true)
    // }
    setIsPassword(!isShowPassword)
    // let elementPassword = document.getElementById('password')
    // let valueTypeElement = elementPassword?.getAttribute('type')
    // if (valueTypeElement === 'password') {
    //   elementPassword?.setAttribute('type', 'text')
    // } else if (valueTypeElement === 'text') {
    //   elementPassword?.setAttribute('type', 'password')
    // }
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
