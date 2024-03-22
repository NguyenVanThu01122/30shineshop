import { faCakeCandles, faEnvelope, faEye, faLock, faPhone, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { message } from 'antd'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { TypeGenderEnum, register } from '../../services/auth'
import styles from './styles.module.css'
export type TypeRegister = {
  name?: string
  telephone?: number
  email?: string
  password?: string | number
  gender?: TypeGenderEnum | undefined
  date?: string
}

export default function Register() {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [birthday, setBirthday] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [gender, setGender] = useState('')
  const [repeat, setRepeat] = useState('')

  const [errorName, setErrorName] = useState('')
  const [errorPassword, setErrorPassword] = useState('')
  const [errorBirthday, setErrorBirthday] = useState('')
  const [errorPhone, setErrorPhone] = useState('')
  const [errorEmail, setErrorEmail] = useState('')
  const [errorGender, setErrorGender] = useState('')
  const [errorRepeat, setErrorRepeat] = useState('')
  const [errorCheck, setErrorCheck] = useState('')

  const [isPassword, setIsPassword] = useState(false)
  const [isRepeatPassword, setIsRepeatPassword] = useState(false)
  const handleOnchangeName = (e: any) => {
    const name = e.target.value
    setName(name)
    if (!name) {
      setErrorName('x Vui lòng nhập tên')
    } else if (name.length <= 5 || name.length >= 16) {
      setErrorName('x Vui lòng nhập tên từ 6-15 kí tự trở lên')
    } else {
      setErrorName('')
    }
  }
  const handleOnchangePassword = (e: any) => {
    const password = e.target.value
    // const arr = ['!', '@', '$', '%', '&', '*']
    setPassword(password)
    if (!password) {
      setErrorPassword('x Vui lòng nhập mật khẩu')
    }
    //  else if (arr.indexOf(password[0]) === -1) {
    //   setErrorPassword('ký tự đầu tiên phải là ký tự đặt biệt')
    // }
    else if (password.length <= 5) {
      setErrorPassword('x Vui lòng nhập từ 6 kí tự trở lên')
    } else {
      setErrorPassword('')
    }
  }
  const handleOnchangeBirthday = (e: any) => {
    const birthday = e.target.value
    setBirthday(birthday)
    if (!birthday) {
      setErrorBirthday('x Vui lòng nhập ngày sinh')
    } else {
      setErrorBirthday('')
    }
  }
  const handleOnchangeEmail = (e: any) => {
    const email: string = e.target.value
    setEmail(email)
    if (!email) {
      setErrorEmail('x Vui lòng nhập email')
    } else if (email.includes('@') === false) {
      setErrorEmail('Vui lòng nhập đúng định dạng')
    } else {
      setErrorEmail('')
    }
  }
  const handleOnchangePhone = (e: any) => {
    const phone = String(e.target.value)
    setPhone(phone)
    if (!phone) {
      setErrorPhone('x Vui lòng nhập số điện thoại')
    } else if (phone[0] !== '0') {
      setErrorPhone('x Số điện thoại phải bắt đầu bằng số 0')
    } else if (phone.length !== 10) {
      setErrorPhone('x Vui lòng nhập đầy đủ số điện thoại')
    } else {
      setErrorPhone('')
    }
  }
  const handleOnchangeRepeat = (e: any) => {
    const repeat = e.target.value
    setRepeat(repeat)
    if (!repeat) {
      setErrorRepeat('x Vui lòng nhập lại mật khẩu')
    } else if (password !== repeat) {
      setErrorRepeat('x Vui lòng nhập đúng mật khẩu')
    } else {
      setErrorRepeat('')
    }
  }
  const handleOnchangeGender = (e: any) => {
    const gender = e.target.value
    setGender(gender)
    if (!gender) {
      setErrorGender('x Vui lòng chọn giới tính')
    } else {
      setErrorGender('')
    }
  }
  const handleCheckbox = (e: any) => {
    const checkbox = (document.getElementById('checkbox') as any).checked
    if (checkbox) {
      setErrorCheck('')
    }
  }
  const handleSubmit = () => {
    const checkbox = (document.getElementById('checkbox') as any).checked
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
    if (!email) {
      setErrorEmail('x Vui lòng nhập email')
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
      const data: any = {
        name: name,
        email: email,
        password: password,
        gender: gender,
        telephone: phone,
        date: birthday
      }
      register(data)
        .then((response) => {
          message.success(response.data?.message)
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
    if (!name) {
      setErrorName('x Vui lòng nhập tên')
    }
  }
  let handleBlurEmail = () => {
    if (!email) {
      setErrorEmail('x Vui lòng nhập email')
    }
  }
  let handleBlurPassword = () => {
    if (!password) {
      setErrorPassword('x Vui lòng nhập mật khẩu')
    }
  }
  let handleBlurBirthday = () => {
    if (!birthday) {
      setErrorBirthday('x Vui lòng chọn ngày sinh')
    }
  }
  let handleBlurGender = () => {
    if (!gender) {
      setErrorGender('x Vui lòng chọn giới tính')
    }
  }
  let handleBlurPhone = () => {
    if (!phone) {
      setErrorPhone('x Vui lòng nhập số điện thoại')
    }
  }
  let handleBlurRepeat = () => {
    if (!repeat) {
      setErrorRepeat('x Vui lòng nhập lại mật khẩu')
    }
  }
  let handleClickPassword = () => {
    setIsPassword(!isPassword)
  }
  let handleClickRepeat = () => {
    setIsRepeatPassword(!isRepeatPassword)
  }
  return (
    <div className={styles.registerWrapper}>
      <div className={styles.pageRegister}>
        <div className={styles.register}>
          <div onClick={() => navigate('/login')}>ĐĂNG NHẬP</div>
          <div>ĐĂNG KÝ</div>
        </div>
        <div className={styles.information}>
          <div className={styles.informationPartOne}>
            <div className={styles.informationChild}>
              <div>
                <span>*</span>Họ tên
              </div>
              <div className={`${styles.iconInput} ${errorName ? styles.borderRed : ''}`}>
                <input
                  onBlur={handleBlurName}
                  className={styles.input}
                  value={name}
                  type='text'
                  name='name'
                  placeholder='Họ tên'
                  onChange={handleOnchangeName}
                />
              </div>
              <div className={styles.errorText}>{errorName}</div>
            </div>
            <div className={styles.informationChild}>
              <div>
                <span>*</span>Mật khẩu
              </div>
              <div className={`${styles.iconInput} ${errorPassword ? styles.borderRed : ''}`}>
                <FontAwesomeIcon icon={faLock} />
                <input
                  id='password'
                  onBlur={handleBlurPassword}
                  value={password}
                  type={isPassword ? 'text' : 'password'}
                  name='password'
                  placeholder='Mật khẩu'
                  onChange={handleOnchangePassword}
                />
                <FontAwesomeIcon icon={faEye} onClick={handleClickPassword} />
              </div>
              <div className={styles.errorText}>{errorPassword}</div>
            </div>
            <div className={styles.informationChild}>
              <div>
                <span>*</span>Ngày sinh
              </div>
              <div className={`${styles.iconInput} ${errorBirthday ? styles.borderRed : ''}`}>
                {' '}
                <FontAwesomeIcon icon={faCakeCandles} />
                <input
                  onBlur={handleBlurBirthday}
                  value={birthday}
                  type='date'
                  name='birthday'
                  id='birthday'
                  onChange={handleOnchangeBirthday}
                />
              </div>
              <div className={styles.errorText}>{errorBirthday}</div>
            </div>
            <div className={styles.informationChild}>
              <div>
                <span>*</span>Số điện thoại
              </div>
              <div className={`${styles.iconInput} ${errorPhone ? styles.borderRed : ''}`}>
                {' '}
                <FontAwesomeIcon icon={faPhone} />
                <input
                  onBlur={handleBlurPhone}
                  value={phone}
                  type='number'
                  name='number'
                  placeholder='Số điện thoại'
                  onChange={handleOnchangePhone}
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
              <div className={`${styles.iconInput} ${errorEmail ? styles.borderRed : ''}`}>
                {' '}
                <FontAwesomeIcon icon={faEnvelope} />
                <input
                  onBlur={handleBlurEmail}
                  value={email}
                  type='email'
                  name='email'
                  placeholder='Email'
                  onChange={handleOnchangeEmail}
                />
              </div>
              <div className={styles.errorText}>{errorEmail}</div>
            </div>
            <div className={styles.informationChild}>
              <div>
                <span>*</span>Xác thực lại mật khẩu
              </div>
              <div className={`${styles.iconInput} ${errorRepeat ? styles.borderRed : ''}`}>
                {' '}
                <FontAwesomeIcon icon={faLock} />
                <input
                  id='repeat'
                  onBlur={handleBlurRepeat}
                  value={repeat}
                  type={isRepeatPassword ? 'text' : 'password'}
                  name='password'
                  placeholder='Xác thực lại mật khẩu'
                  onChange={handleOnchangeRepeat}
                />
                <FontAwesomeIcon icon={faEye} onClick={handleClickRepeat} />
              </div>
              <div className={styles.errorText}>{errorRepeat}</div>
            </div>
            <div className={styles.informationChild}>
              <div>
                <span>*</span>Giới tính
              </div>
              <div className={`${styles.iconInput} ${errorGender ? styles.borderRed : ''}`}>
                {' '}
                <FontAwesomeIcon icon={faUser} />
                <select
                  onBlur={handleBlurGender}
                  value={gender}
                  className={styles.option}
                  id='gender'
                  onChange={handleOnchangeGender}
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
        </div>
      </div>
    </div>
  )
}
