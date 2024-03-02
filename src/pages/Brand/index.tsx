import { faLeftLong } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Suspense, lazy, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import NoDataMessage from '../../components/NodataMessage'
import PageNavbar from '../../components/PageNavbar'
import { Loading } from '../../components/Ui/loading'
import { ERROR_MESSAGES, NO_DATA_MESSAGE, PAGE_NAMES } from '../../helpers/contanst'
import { useIsLoading } from '../../helpers/useIsLoading'
import { getListBrand } from '../../services/brand'
import styles from './styles.module.css'

export interface ListBrandType {
  id: number
  image: string
  name: string
}
const ContainerBrandsLazy = lazy(() => import('./ContainerBrands'))

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
      <PageNavbar page={PAGE_NAMES.BRAND} />
      <div className={styles.title}>
        <div className={styles.brand}>
          <FontAwesomeIcon onClick={() => navigate('/list-product')} className={styles.iconBack} icon={faLeftLong} />
          THƯƠNG HIỆU
        </div>
      </div>
      <Suspense>
        <ContainerBrandsLazy listBrand={listBrand} />
      </Suspense>
      {isLoading && <Loading />}
      {!isLoading && !listBrand.length && <NoDataMessage message={NO_DATA_MESSAGE.NO_BRAND} />}
    </div>
  )
}
