import { useEffect, useState } from 'react'
import { privateAxios } from '../../service/axios'
import styles from './styles.module.css'
export default function Brand() {

  let [list, setList] = useState([])
  let [error, setError] = useState('')

  useEffect(() => {
    privateAxios
      .get('/brand')
      .then((response) => {
        console.log(response)
        setList(response.data?.brand)
        setError('')
      })
      .catch((error) => {
        setError('Lỗi server')
      })
  }, [])

  return (
    <div className={styles.pageBrand}>
      <div className={styles.title}>
        {/* <div className={styles.loginBrand}>
          <div>Trang chủ /</div>
          <div>Thương hiệu</div>
        </div> */}
        <div>THƯƠNG HIỆU</div>
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
