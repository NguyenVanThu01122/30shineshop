import { faCakeCandles, faEnvelope, faLock, faPhone, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { handleDirection } from '../../helper'
import { publicAxios } from '../../service/axios'
import styles from './styles.module.css'

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
    if (!name) {
      setErrorName('x Vui lòng nhập tên')
    } else if (name.length <= 5) {
      setErrorName('x Vui lòng nhập tên từ 6-15 kí tự trở lên')
    } else if (name.length >= 16) {
      setErrorName('x Vui lòng nhập tên từ 6-15 kí tự ')
    } else {
      setErrorName('')
    }
  }
  let handleOnchagePassword = (e: any) => {
    let password = e.target.value
    setPassword(password)
    if (!password) {
      setErrorPassword('x Vui lòng nhập Password')
    } else if (password.length <= 4) {
      setErrorPassword('x Vui lòng nhập từ 5 kí tự trở lên')
    } else {
      setErrorPassword('')
    }
  }
  let handleOnchageBirthday = (e: any) => {
    let birthday = e.target.value
    setBirthday(birthday)
    if (!birthday) {
      setErrorBirthday('x Vui lòng nhập ngày sinh')
    } else {
      setErrorBirthday('')
    }
  }
  let handleOnchageEmail = (e: any) => {
    let email = e.target.value
    setEmail(email)
    if (!email) {
      setErrorEmail('x Vui lòng nhập Email')
    } else {
      setErrorEmail('')
    }
  }
  let handleOnchagePhone = (e: any) => {
    let phone = e.target.value
    setPhone(phone)
    if (!phone) {
      setErrorPhone('x Vui lòng nhập số điện thoại')
    } else if (phone.length !== 10) {
      setErrorPhone('x Vui lòng nhập đầy đủ số điện thoại')
    } else {
      setErrorPhone('')
    }
  }
  let handleOnchageRepeat = (e: any) => {
    let repeat = e.target.value
    setRepeat(repeat)
    if (!repeat) {
      setErrorRepeat('x Vui lòng nhập mật khẩu')
    } else if (password !== repeat) {
      setErrorRepeat('x Vui lòng nhập đúng mật khẩu')
    } else {
      setErrorRepeat('')
    }
  }
  let handleOnchageGender = (e: any) => {
    let gender = e.target.value
    setGender(gender)
    if (!gender) {
      setErrorGender('x Vui lòng chọn giới tính')
    } else {
      setErrorGender('')
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
      setErrorName('x Vui lòng nhập tên')
    }
    if (!password) {
      setErrorPassword('x Vui lòng nhập mật khẩu')
    }
    if (!phone) {
      setErrorPhone('x Vui lòng nhập số điện thoại')
    }
    if (!gender) {
      setErrorGender('x Vui lòng chọn giới tính')
    }
    if (!checkbox) {
      setErrorCheck('x Vui lòng xác nhận')
    }
    if (!email) {
      setErrorEmail('x Vui lòng nhập Email')
    }
    if (!repeat) {
      setErrorRepeat('x Vui lòng nhập lại mật khẩu')
    }
    if (!birthday) {
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
          let stringError = 'lỗi'
          let emailError = objError.email
          let phoneError = objError.phone
          if (emailError) {
            emailError += stringError
          }
          if (phoneError) {
            phoneError += stringError
          }
          {
            alert(stringError)
          }
        })
    }
  }
 
  return (
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
            <div className={styles.iconInput}>
              <input
                className={styles.input}
                value={name}
                type='text'
                name='name'
                id='name'
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
            <div className={styles.iconInput}>
              <FontAwesomeIcon icon={faLock} />
              <input
                value={password}
                type='password'
                name='password'
                placeholder='Mật khẩu'
                id='password'
                onChange={handleOnchagePassword}
              />
            </div>
            <div className={styles.errorText}>{errorPassword}</div>
          </div>
          <div className={styles.informationChild}>
            <div>
              <span>*</span>Ngày sinh
            </div>
            <div className={styles.iconInput}>
              <FontAwesomeIcon icon={faCakeCandles} />
              <input value={birthday} type='date' name='birthday' id='birthday' onChange={handleOnchageBirthday} />
            </div>
            <div className={styles.errorText}>{errorBirthday}</div>
          </div>
          <div className={styles.informationChild}>
            <div>
              <span>*</span>Số điện thoại
            </div>
            <div className={styles.iconInput}>
              <FontAwesomeIcon icon={faPhone} />
              <input
                value={phone}
                type='number'
                name='number'
                id='phone'
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
            <div className={styles.iconInput}>
              <FontAwesomeIcon icon={faEnvelope} />
              <input
                value={email}
                type='email'
                name='email'
                id='email'
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
            <div className={styles.iconInput}>
              <FontAwesomeIcon icon={faLock} />
              <input
                value={repeat}
                type='password'
                name='password'
                id='repeatPassword'
                placeholder='Xác thực lại mật khẩu'
                onChange={handleOnchageRepeat}
              />
            </div>
            <div className={styles.errorText}>{errorRepeat}</div>
          </div>
          <div className={styles.informationChild}>
            <div>Giới tính</div>
            <div className={styles.iconInput}>
              <FontAwesomeIcon icon={faUser} />
              <select value={gender} className={styles.option} id='gender' onChange={handleOnchageGender}>
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
          <input type='checkbox' name='checkbox' id='checkbox' onClick={handleCheckbox} />
          <span> Tôi cam kết tuân theo</span>
          <a href=''> Chính sách bảo mật</a>
          <span> và </span>
          <a href=''>Điều khoản sử dụng</a>
          <span> của 30shineshop.</span>
        </div>
        <div className={styles.errorText}>{errorCheck}</div>
      </div>
      <div className={styles.registerLogin}>
        <div onClick={handleSubmit}>ĐĂNG KÝ</div>
      </div>
    </div>
  )
}
