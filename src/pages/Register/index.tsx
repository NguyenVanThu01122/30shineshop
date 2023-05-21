import { faCakeCandles, faEnvelope, faLock, faPhone, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { handleDirection } from '../../helper'
import { publicAxios } from '../../service/axios'
import styles from './styles.module.css'
import { message } from 'antd'

export default function Register() {
  let navigate = useNavigate()
  let [name, setName] = useState('')
  let [password, setPassword] = useState('')
  let [birthday, setBirthday] = useState('')
  let [phone, setPhone] = useState('')
  let [email, setEmail] = useState('')
  let [gender, setGender] = useState('')
  let [repeat, setRepeat] = useState('')

  let [errorName, setErrorName] = useState('')
  let [errorPassword, setErrorPassword] = useState('')
  let [errorBirthday, setErrorBirthday] = useState('')
  let [errorPhone, setErrorPhone] = useState('')
  let [errorEmail, setErrorEmail] = useState('')
  let [errorGender, setErrorGender] = useState('')
  let [errorRepeat, setErrorRepeat] = useState('')
  let [errorCheck, setErrorCheck] = useState('')

  let handleOnchageName = (e: any) => {
    let name = e.target.value
    setName(name)
    let nameElement = document.getElementById('name')
    if (!name) {
      setErrorName('x Vui lòng nhập tên')
      nameElement?.classList.add('border-red')
    } else if (name.length <= 5 || name.length >= 16) {
      setErrorName('x Vui lòng nhập tên từ 6-15 kí tự trở lên')
    } else {
      setErrorName('')
      nameElement?.classList.remove('border-red')
    }
  }
  let handleOnchagePassword = (e: any) => {
    let password = e.target.value
    setPassword(password)
    let passwordElement = document.getElementById('password')
    if (!password) {
      passwordElement?.classList.add('border-red')
      setErrorPassword('x Vui lòng nhập mật khẩu')
    } else if (password.length <= 5) {
      passwordElement?.classList.add('border-red')
      setErrorPassword('x Vui lòng nhập từ 6 kí tự trở lên')
    } else {
      setErrorPassword('')
      passwordElement?.classList.remove('border-red')
    }
  }
  let handleOnchageBirthday = (e: any) => {
    let birthday = e.target.value
    setBirthday(birthday)
    let birthdayElement = document.getElementById('birthday')
    if (!birthday) {
      birthdayElement?.classList.add('border-red')
      setErrorBirthday('x Vui lòng nhập ngày sinh')
    } else {
      setErrorBirthday('')
      birthdayElement?.classList.remove('border-red')
    }
  }
  let handleOnchageEmail = (e: any) => {
    let email = e.target.value
    setEmail(email)
    let emailElement = document.getElementById('email')
    if (!email) {
      emailElement?.classList.add('border-red')
      setErrorEmail('x Vui lòng nhập email')
    } else {
      setErrorEmail('')
      emailElement?.classList.remove('border-red')
    }
  }
  let handleOnchagePhone = (e: any) => {
    let phone = e.target.value
    setPhone(phone)
    let phoneElement = document.getElementById('phone')
    if (!phone) {
      phoneElement?.classList.add('border-red')
      setErrorPhone('x Vui lòng nhập số điện thoại')
    } else if (phone.length !== 10) {
      phoneElement?.classList.add('border-red')
      setErrorPhone('x Vui lòng nhập đầy đủ số điện thoại')
    } else {
      setErrorPhone('')
      phoneElement?.classList.remove('border-red')
    }
  }
  let handleOnchageRepeat = (e: any) => {
    let repeat = e.target.value
    setRepeat(repeat)
    let repeatElement = document.getElementById('repeatPassword')
    if (!repeat) {
      repeatElement?.classList.add('border-red')
      setErrorRepeat('x Vui lòng nhập lại mật khẩu')
    } else if (password !== repeat) {
      repeatElement?.classList.add('border-red')
      setErrorRepeat('x Vui lòng nhập đúng mật khẩu')
    } else {
      setErrorRepeat('')
      repeatElement?.classList.remove('border-red')
    }
  }
  let handleOnchageGender = (e: any) => {
    let gender = e.target.value
    setGender(gender)
    let genderElement = document.getElementById('gender')
    if (!gender) {
      genderElement?.classList.add('border-red')
      setErrorGender('x Vui lòng chọn giới tính')
    } else {
      setErrorGender('')
      genderElement?.classList.remove('border-red')
    }
  }
  let handleCheckbox = (e: any) => {
    let checkbox = (document.getElementById('checkbox') as any).checked
    if (checkbox) {
      setErrorCheck('')
    }
  }
  let handleSubmit = () => {
    let checkbox = (document.getElementById('checkbox') as any).checked
    if (!checkbox) {
      setErrorCheck('x Vui lòng xác nhận')
    } else {
      setErrorCheck('')
    }
    if (!name) {
      document.getElementById('name')?.classList.add('border-red')
      setErrorName('x Vui lòng nhập tên')
    }
    if (!password) {
      document.getElementById('password')?.classList.add('border-red')
      setErrorPassword('x Vui lòng nhập mật khẩu')
    }
    if (!phone) {
      document.getElementById('phone')?.classList.add('border-red')
      setErrorPhone('x Vui lòng nhập số điện thoại')
    }
    if (!gender) {
      document.getElementById('gender')?.classList.add('border-red')
      setErrorGender('x Vui lòng chọn giới tính')
    }
    if (!checkbox) {
      document.getElementById('checkbox')?.classList.add('border-red')
      setErrorCheck('x Vui lòng xác nhận')
    }
    if (!email) {
      document.getElementById('email')?.classList.add('border-red')
      setErrorEmail('x Vui lòng nhập email')
    }
    if (!repeat) {
      document.getElementById('repeatPassword')?.classList.add('border-red')
      setErrorRepeat('x Vui lòng nhập lại mật khẩu')
    }
    if (!birthday) {
      document.getElementById('birthday')?.classList.add('border-red')
      setErrorBirthday('x Vui lòng nhập ngày sinh')
    }
    if (
      name &&
      password &&
      gender &&
      email &&
      checkbox &&
      repeat &&
      phone &&
      !errorName &&
      !errorPassword &&
      !errorEmail &&
      !errorGender &&
      !errorPhone &&
      !errorRepeat
    ) {
      let data = {
        name: name,
        email: email,
        password: password,
        gender: gender,
        telephone: phone,
        date: birthday
      }
      publicAxios
        .post('/register', data)
        .then((response) => {
          alert(response.data?.message)
          setName('')
          setEmail('')
          setPassword('')
          setPhone('')
          setRepeat('')
          setBirthday('')
          setGender('')
          ;(document.getElementById('checkbox') as any).checked = false
          navigate('/login')
        })
        .catch((error) => {
          let objError = error.response?.data
          let stringError = ''
          let emailError = objError.email
          let telephoneError = objError.telephone
          if (emailError) {
            stringError += emailError + ' '
          }
          if (telephoneError) {
            stringError += telephoneError
          }
          {
            message.error(stringError)
          }
        })
    }
  }
  let handleBlurName = () => {
    let nameElement = document.getElementById('name')
    if (!name) {
      nameElement?.classList.add('border-red')
      setErrorName('x Vui lòng nhập tên')
    }
  }
  let handleBlurEmail = () => {
    let emailElement = document.getElementById('email')
    if (!email) {
      emailElement?.classList.add('border-red')
      setErrorEmail('x Vui lòng nhập email')
    }
  }
  let handleBlurPassword = () => {
    let passwordElement = document.getElementById('password')
    if (!password) {
      passwordElement?.classList.add('border-red')
      setErrorPassword('x Vui lòng nhập mật khẩu')
    }
  }
  let handleBlurBirthday = () => {
    let birthdayElement = document.getElementById('birthday')
    if (!birthday) {
      birthdayElement?.classList.add('border-red')
      setErrorBirthday('x Vui lòng chọn ngày sinh')
    }
  }
  let handleBlurGender = () => {
    let genderElement = document.getElementById('gender')
    if (!gender) {
      genderElement?.classList.add('border-red')
      setErrorGender('x Vui lòng chọn giới tính')
    }
  }
  let handleBlurPhone = () => {
    let phoneElement = document.getElementById('phone')
    if (!phone) {
      phoneElement?.classList.add('border-red')
      setErrorPhone('x Vui lòng nhập số điện thoại')
    }
  }
  let handleBlurRepeat = () => {
    let repeatElement = document.getElementById('repeatPassword')
    if (!repeat) {
      repeatElement?.classList.add('border-red')
      setErrorRepeat('x Vui lòng nhập lại mật khẩu')
    }
  }
  return (
    <div className={styles.registerWrapper}>
      <div className={styles.pageRegister}>
        <div className={styles.register}>
          <div onClick={() => handleDirection('/login')}>ĐĂNG NHẬP</div>
          <div>ĐĂNG KÝ</div>
        </div>
        <div className={styles.information}>
          <div className={styles.informationPartOne}>
            <div className={styles.informationChild}>
              <div>
                <span>*</span>Họ tên
              </div>
              <div className={styles.iconInput} id='name'>
                <input
                  onBlur={handleBlurName}
                  className={styles.input}
                  value={name}
                  type='text'
                  name='name'
                  placeholder='Họ tên'
                  onChange={handleOnchageName}
                />
              </div>
              <div className={styles.errorText}>{errorName}</div>
            </div>
            <div className={styles.informationChild}>
              <div>
                <span>*</span>Mật khẩu
              </div>
              <div className={styles.iconInput} id='password'>
                <FontAwesomeIcon icon={faLock} />
                <input
                  onBlur={handleBlurPassword}
                  value={password}
                  type='password'
                  name='password'
                  placeholder='Mật khẩu'
                  onChange={handleOnchagePassword}
                />
              </div>
              <div className={styles.errorText}>{errorPassword}</div>
            </div>
            <div className={styles.informationChild}>
              <div>
                <span>*</span>Ngày sinh
              </div>
              <div className={styles.iconInput} id='birthday'>
                <FontAwesomeIcon icon={faCakeCandles} />
                <input
                  onBlur={handleBlurBirthday}
                  value={birthday}
                  type='date'
                  name='birthday'
                  id='birthday'
                  onChange={handleOnchageBirthday}
                />
              </div>
              <div className={styles.errorText}>{errorBirthday}</div>
            </div>
            <div className={styles.informationChild}>
              <div>
                <span>*</span>Số điện thoại
              </div>
              <div className={styles.iconInput} id='phone'>
                <FontAwesomeIcon icon={faPhone} />
                <input
                  onBlur={handleBlurPhone}
                  value={phone}
                  type='number'
                  name='number'
                  placeholder='Số điện thoại'
                  onChange={handleOnchagePhone}
                />
              </div>
              <div className={styles.errorText}>{errorPhone}</div>
            </div>
          </div>
          <div className={styles.informationend}>
            <div className={styles.informationChild}>
              <div>
                <span>*</span>Email
              </div>
              <div className={styles.iconInput} id='email'>
                <FontAwesomeIcon icon={faEnvelope} />
                <input
                  onBlur={handleBlurEmail}
                  value={email}
                  type='email'
                  name='email'
                  placeholder='Email'
                  onChange={handleOnchageEmail}
                />
              </div>
              <div className={styles.errorText}>{errorEmail}</div>
            </div>
            <div className={styles.informationChild}>
              <div>
                <span>*</span>Xác thực lại mật khẩu
              </div>
              <div className={styles.iconInput} id='repeatPassword'>
                <FontAwesomeIcon icon={faLock} />
                <input
                  onBlur={handleBlurRepeat}
                  value={repeat}
                  type='password'
                  name='password'
                  placeholder='Xác thực lại mật khẩu'
                  onChange={handleOnchageRepeat}
                />
              </div>
              <div className={styles.errorText}>{errorRepeat}</div>
            </div>
            <div className={styles.informationChild}>
              <div>
                <span>*</span>Giới tính
              </div>
              <div className={styles.iconInput} id='gender'>
                <FontAwesomeIcon icon={faUser} />
                <select
                  onBlur={handleBlurGender}
                  value={gender}
                  className={styles.option}
                  id='gender'
                  onChange={handleOnchageGender}
                >
                  <option value=''>Vui lòng chọn giới tính</option>
                  <option value='male'>Nam</option>
                  <option value='female'>Nữ</option>
                  <option value='other'>Khác</option>
                </select>
              </div>
              <div className={styles.errorText}>{errorGender}</div>
            </div>
          </div>
        </div>
        <div className={styles.checkbox}>
          <div className={styles.checkboxChild}>
            <input id='checkbox' type='checkbox' name='checkbox' onClick={handleCheckbox} />
            <span> Tôi cam kết tuân theo</span>
            <a href=''> Chính sách bảo mật</a>
            <span> và </span>
            <a href=''>Điều khoản sử dụng</a>
            <span> của 30shineshop.</span>
          </div>
          <div className={styles.errorText}>{errorCheck}</div>
        </div>
        <div className={styles.registerLogin}>
          <div onClick={handleSubmit}>{}ĐĂNG KÝ</div>
          {/* {name &&
        phone &&
        repeat &&
        password &&
        birthday &&
        gender &&
        !errorBirthday &&
        !errorEmail &&
        !errorCheck &&
        !errorGender &&
        !errorPhone &&
        !errorName &&
        !errorRepeat ? (
          <div onClick={handleSubmit}>ĐĂNG KÝ</div>
        ) : null} */}
        </div>
      </div>
    </div>
  )
}
