import { faLeftLong } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './styles.module.css'
import { message } from 'antd'
export default function Contact() {
  let token = localStorage.getItem('token')
  const navigate = useNavigate()
  let [name, setName] = useState('')
  let [phone, setPhone] = useState('')
  let [email, setEmail] = useState('')
  let [content, setContent] = useState('')

  let [errorName, setErrorName] = useState('')
  let [errorPhone, setErrorPhone] = useState('')
  let [errorEmail, setErrorEmail] = useState('')
  let [errorContent, setErrorContent] = useState('')

  let handleOnchageName = (e: any) => {
    const name = e.target.value
    setName(name)
    if (!name) {
      setErrorName('Vui lòng nhập tên')
    } else {
      setErrorName('')
    }
  }

  let handleOnchagePhone = (e: any) => {
    const phone = e.target.value
    setPhone(phone)
    if (!phone) {
      setErrorPhone('Vui lòng nhập số điện thoại')
    } else if (phone.length !== 10) {
      setErrorPhone('Số điện thoại không đúng định dạng')
    } else if (phone === name) {
      setErrorPhone('vui lòng không nhập trùng với tên')
    } else {
      setErrorPhone('')
    }
  }
  
  let handleOnchagEmail = (e: any) => {
    const email = e.target.value
    setEmail(email)
    if (!email) {
      setErrorEmail('Vui lòng nhập Email')
    } else {
      setErrorEmail('')
    }
  }
  
  let handleOnchageContent = (e: any) => {
    const content = e.target.value
    setContent(content)
    if (!content) {
      setErrorContent('Vui lòng nhập liên hệ')
    } else {
      setErrorContent('')
    }
  }

  let handleOnSubmit = () => {
    if (!name) {
      setErrorName('vui lòng nhập tên')
    }
    if (!email) {
      setErrorEmail('Vui lòng nhập Email')
    }
    if (!phone) {
      setErrorPhone('vui lòng nhập số điện thoại')
    }

    if (!content) {
      setErrorContent('vui lòng nhập liên hệ')
    }

    if (name && !errorName && phone && !errorPhone && content && !errorContent) {
      message.success('bạn đã cập nhật thông tin thành công')
      setName('')
      setPhone('')
      setContent('')
    }
  }
  
  return (
    <div className={styles.pageContact}>
      <div className={styles.homeContact}>
        <div onClick={() => navigate('/')}>Trang chủ /</div>
        <div>Liên hệ</div>
      </div>
      <div className={styles.contact}>
        <div>
          <FontAwesomeIcon onClick={() => navigate('/list-product')} className={styles.iconBack} icon={faLeftLong} />
          Liên hệ
        </div>
        <div>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7449.628785119932!2d105.845141!3d21.000076!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac71132ea2b5%3A0xab941ece69bef2a7!2zODIgUC4gVHLhuqduIMSQ4bqhaSBOZ2jEqWEsIMSQ4buTbmcgVMOibSwgSGFpIELDoCBUcsawbmcsIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2sus!4v1681468318680!5m2!1svi!2sus'
            width='100%'
            height='350'
          ></iframe>
        </div>
      </div>
      <div className={styles.contactInfo}>
        <div className={styles.comments}>
          <div>Chúng tôi trân trọng ý kiến của quý khách</div>
          <div className={styles.information}>Nếu bạn có gì thắc mắc hãy liên hệ với chúng tôi qua địa chỉ</div>
          <div className={styles.information}>
            <div>Điện thoại</div>
            <div>1900.27.27.30</div>
          </div>
          <div className={styles.information}>
            <div>Điạ chỉ</div>
            <div>Số 82 Trần Đại Nghĩa, phường Đồng Tâm, quận Hai Bà Trưng, Hà Nội</div>
          </div>
          <div className={styles.information}>
            <div>Email</div>
            <div>30shinestore@30shine.com</div>
          </div>
          <div className={styles.information}>
            <div>Tất cả ngày trong tuần</div>
            <div>Tất cả các ngày trong tuần</div>
          </div>
          <div className={styles.socialNetwork}>
            <div>Mạng xã hội</div>
            <div className={styles.fontIcon}>
              <img src='https://shop.30shine.com/images/fb-icon.png' alt='icon' />
              <img src='https://shop.30shine.com/images/yt-icon.png' alt='icon' />
              <img src='https://shop.30shine.com/images/ig-icon.png' alt='icon' />
            </div>
          </div>
        </div>
        <div className={styles.sendComments}>
          <div>Gửi thắc mắc cho chúng tôi</div>
          <div className={styles.loginInformation}>
            <div>
              Nếu bạn có thắc mắc gì, có thể gửi yêu cầu cho chúng tôi, và chúng tôi sẽ liên lạc lại với bạn sớm nhất có
              thể
            </div>
            <div className={styles.loginName}>
              <div>Họ và tên *</div>
              <div id='name' className={`${errorName ? styles.borderRed : ''}`}>
                <input
                  // onBlur={handleOnBlurName}
                  value={name}
                  type='text'
                  placeholder='Nhập họ và tên của bạn'
                  onChange={handleOnchageName}
                />
              </div>
              <div className={styles.errorText}>{errorName}</div>
            </div>
            <div className={styles.loginPhone}>
              <div className={styles.phone}>
                <div>Số điện thoại *</div>
                <div id='phone' className={`${errorPhone ? styles.borderRed : ''}`}>
                  <input
                    // onBlur={handleOnBlurPhone}
                    value={phone}
                    type='text'
                    placeholder='Nhập số điện thoại của bạn '
                    onChange={handleOnchagePhone}
                  />
                </div>
                <div className={styles.errorText}>{errorPhone}</div>
              </div>
              <div className={styles.loginEmail}>
                <div>Email</div>
                <div id='email' className={`${errorEmail ? styles.borderRed : ''}`}>
                  <input
                    // onBlur={handleOnBlurEmail}
                    onChange={handleOnchagEmail}
                    value={email}
                    type='text'
                    name=''
                    id=''
                    placeholder='Nhập địa chỉ Email của bạn'
                  />
                </div>
                <div className={styles.errorText}>{errorEmail}</div>
              </div>
            </div>
            <div className={styles.content}>
              <div>Nội dung liên hệ *</div>
              <div id='content' className={`${errorContent ? styles.borderRed : ''}`}>
                <textarea
                  // onBlur={handleOnBlurContent}
                  value={content}
                  onChange={handleOnchageContent}
                  placeholder='Nội dung liên hệ'
                ></textarea>
              </div>
              <div className={styles.errorText}>{errorContent}</div>
              <div onClick={handleOnSubmit}>GỬI THÔNG TIN</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
