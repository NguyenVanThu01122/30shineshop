import { Form } from 'antd'
import { Suspense, lazy, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import NoDataMessage from '../../components/NodataMessage'
import CustomLoading from '../../components/customLoading'
import { ERROR_MESSAGES, NO_DATA_MESSAGE } from '../../helpers/contanst'
import { scrollToTop } from '../../helpers/scrollToTop'
import { useIsLoading } from '../../helpers/useIsLoading'
import { useShowDataMessage } from '../../helpers/useIsShowDataMessage'
import { getListAddress } from '../../services/listAddress'
import { ContainerAddress, WrapperListAddress } from './styles'
export interface AddressType {
  id: string
  name: string
  telephone: string
  email: string
  address: string
}

const SidebarAccountLazy = lazy(() => import('../../components/SidebarAccount'))
const ComponentDetailAddressLazy = lazy(() => import('./components/ComponentDetailAddress'))
const ModalAddressLazy = lazy(() => import('./components/ModalAddress'))
const ModalDeleteAddressLazy = lazy(() => import('./components/ModalDeleteAddress'))
const TitleAddressLazy = lazy(() => import('./components/TitleAddress'))

function ListAddress() {
  const [listAddress, setListAddress] = useState<AddressType[]>([])
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [isOpenModalDelete, setIsOpenModalDelete] = useState<boolean>(false)
  const [edit, setEdit] = useState<any>(null)
  const [form] = Form.useForm()
  const [idDeleteAddress, setIdDeleteAddress] = useState('')
  const [isShowNoDataMessage, setIsShowDataMessage] = useShowDataMessage()
  const [isLoading, setIsLoading] = useIsLoading()

  // hàm lấy thông tin address
  const handleGetListAddress = () => {
    setIsLoading(true)
    getListAddress()
      .then((res) => {
        setListAddress(res.data?.data)
        setIsLoading(false)
        setIsShowDataMessage(true)
      })
      .catch((error) => {
        setIsLoading(false)
        toast.error(ERROR_MESSAGES.SERVER_ERROR)
      })
  }

  useEffect(() => {
    handleGetListAddress()
    scrollToTop()
  }, [form])

  return (
    <WrapperListAddress>
      <Suspense>
        <SidebarAccountLazy />
        <ContainerAddress>
          <TitleAddressLazy setIsOpenModal={setIsOpenModal} />
          {/* item DetailAddress */}
          {listAddress?.length > 0 && (
            <ComponentDetailAddressLazy
              form={form}
              setEdit={setEdit}
              isLoading={isLoading}
              listAddress={listAddress}
              setIsOpenModalDelete={setIsOpenModalDelete}
              setIdDeleteAddress={setIdDeleteAddress}
              setIsOpenModal={setIsOpenModal}
            />
          )}

          {/* item loading */}
          {isLoading && <CustomLoading />}
          {!isLoading && !listAddress?.length && isShowNoDataMessage && (
            <NoDataMessage message={NO_DATA_MESSAGE.NO_ADDRESS} />
          )}

          {/* item modal add & edit */}
          <ModalAddressLazy
            form={form}
            edit={edit}
            setEdit={setEdit}
            setIsLoading={setIsLoading}
            isOpenModal={isOpenModal}
            setIsOpenModal={setIsOpenModal}
            handleGetListAddress={handleGetListAddress}
          />

          {/* item modal delete*/}
          <ModalDeleteAddressLazy
            handleGetListAddress={handleGetListAddress}
            isOpenModalDelete={isOpenModalDelete}
            setIsOpenModalDelete={setIsOpenModalDelete}
            idDeleteAddress={idDeleteAddress}
          />
        </ContainerAddress>
      </Suspense>
    </WrapperListAddress>
  )
}
export default ListAddress
