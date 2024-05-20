import { faLeftLong } from '@fortawesome/free-solid-svg-icons'
import { t } from 'i18next'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import NoDataMessage from '../../components/NodataMessage'
import PageNavbar from '../../components/PageNavbar'
import { Loading } from '../../components/Ui/loading'
import Translations from '../../components/translations'
import checkLogin from '../../helpers/checkLogin'
import { ERROR_MESSAGES, NO_DATA_MESSAGE } from '../../helpers/contanst'
import { useIsLoading } from '../../helpers/useIsLoading'
import { useShowDataMessage } from '../../helpers/useIsShowDataMessage'
import { isDialogLogin } from '../../redux/Slices/appSlices'
import { ROUTES } from '../../routes/routes'
import { getListBrand } from '../../services/brand'
import ContainerBrands from './ContainerBrands'
import { IconBack, Title, WrapperBrand } from './styles'

export interface ListBrandType {
  id: number
  image: string
  name: string
}

export default function Brand() {
  let [listBrand, setListBrand] = useState([])
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useIsLoading()
  const [isShowNoDataMessage, setIsShowDataMessage] = useShowDataMessage()
  const isLogin = checkLogin()
  const dispatch = useDispatch()
  useEffect(() => {
    if (isLogin) {
      setIsLoading(true)
      getListBrand()
        .then((response) => {
          setListBrand(response.data?.brand)
          setIsLoading(false)
          setIsShowDataMessage(true)
        })
        .catch((error) => {
          setIsLoading(false)
          toast.error(ERROR_MESSAGES.SERVER_ERROR)
        })
    } else {
      dispatch(isDialogLogin(true))
      setIsShowDataMessage(true)
    }
  }, [])

  return (
    <WrapperBrand>
      <PageNavbar page={t('BRAND')} />
      <Title>
        <IconBack onClick={() => navigate(ROUTES.LIST_PRODUCT)} icon={faLeftLong} />
        <Translations text='BRAND' />
      </Title>
      <ContainerBrands listBrand={listBrand} />
      {isLoading && <Loading />}
      {!isLogin && !isLoading && !listBrand.length && isShowNoDataMessage && (
        <NoDataMessage message={NO_DATA_MESSAGE.NO_BRAND} />
      )}
    </WrapperBrand>
  )
}
