import { faLeftLong } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { privateAxios } from '../../service/axios'
import styles from './styles.module.css'
export default function Brand() {
  let [list, setList] = useState([])
  let [error, setError] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    privateAxios
      .get('/brand')
      .then((response) => {
        setList(response.data?.brand)
        setError('')
      })
      .catch((error) => {
        setError('Lỗi server')
      })
  }, [])

  return (
    <div className={styles.pageBrand}>
      <div className={styles.loginBrand}>
        <div onClick={() => navigate('/')}>Trang chủ </div>
        <div>/ Thương hiệu</div>
      </div>
      <div className={styles.title}>
        <div className={styles.brand}>
          <FontAwesomeIcon onClick={() => navigate('/list-product')} className={styles.iconBack} icon={faLeftLong} />
          THƯƠNG HIỆU
        </div>
      </div>
      <div className={styles.brandParent}>
        {list.map((item: any) => {
          return (
            <div className={styles.brandItem} key={item.id}>
              <img src={item.image} />
              <div>{item.name}</div>
            </div>
          )
        })}
      </div>

      {error}
    </div>
  )
}
