import { faLeftLong } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import NoDataMessage from '../../components/NodataMessage'
import { Loading } from '../../components/Ui/loading'
import { ERROR_MESSAGES, NO_DATA_MESSAGE } from '../../helpers/contanst'
import { useIsLoading } from '../../helpers/useIsLoading'
import { getListBrand } from '../../service/brand'
import styles from './styles.module.css'

interface ListBrandType {
  id: number
  image: string
  name: string
}
export default function Brand() {
  let [listBrand, setListBrand] = useState([])
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useIsLoading()

  useEffect(() => {
    setIsLoading(true)
    getListBrand()
      .then((response) => {
        setListBrand(response.data?.brand)
        setIsLoading(false)
      })
      .catch((error) => {
        setIsLoading(false)
        toast.error(ERROR_MESSAGES.SERVER_ERROR)
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
      {listBrand.length > 0 && (
        <div className={styles.brandParent}>
          {listBrand.map((item: ListBrandType) => {
            return (
              <div className={styles.brandItem} key={item.id}>
                <img src={item.image} />
                <div>{item.name}</div>
              </div>
            )
          })}
        </div>
      )}
      {isLoading && <Loading />}
      {!isLoading && !listBrand.length && <NoDataMessage message={NO_DATA_MESSAGE.NO_BRAND} />}
    </div>
  )
}
