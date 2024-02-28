import { Form } from 'antd'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import NoDataMessage from '../../components/NodataMessage'
import SidebarAccount from '../../components/SidebarAccount'
import { ButtonGeneral } from '../../components/Ui/button'
import { Loading } from '../../components/Ui/loading'
import { ERROR_MESSAGES, NO_DATA_MESSAGE } from '../../helpers/contanst'
import { scrollToTop } from '../../helpers/scrollToTop'
import { useIsLoading } from '../../helpers/useIsLoading'
import { getListAddress } from '../../service/listAddress'
import { ComponentDetailAddress } from './components/ComponentDetailAddress'
import { ModalAddress } from './components/ModalAddress'
import { ModalDeleteAddress } from './components/ModalDeleteAddress'
import { ContainerAddress, ContentAddress, WrapperListAddress } from './styles'

export interface AddressType {
  id: string
  name: string
  telephone: string
  email: string
  address: string
}
function ListAddress() {
  const [listAddress, setListAddress] = useState<AddressType[]>([])
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [isOpenModalDelete, setIsOpenModalDelete] = useState<boolean>(false)
  const [edit, setEdit] = useState<any>(null)
  const [form] = Form.useForm()
  const [idDeleteAddress, setIdDeleteAddress] = useState('')
  const [isLoading, setIsLoading] = useIsLoading()

  // hàm lấy thông tin address
  const handleGetListAddress = () => {
    setIsLoading(true)
    getListAddress()
      .then((res) => {
        setListAddress(res.data?.data)
        setIsLoading(false)
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
      <SidebarAccount />
      <ContainerAddress>
        <ContentAddress>
          <div className='titleAddress'>
            <div>Địa chỉ nhận hàng</div>
            <ButtonGeneral className='button' onClick={() => setIsOpenModal(true)}>
              <div>
                <span className='icon-plus'>+</span>
                Thêm địa chỉ mới
              </div>
            </ButtonGeneral>
          </div>

          {/* item DetailAddress */}
          {listAddress?.length > 0 && (
            <ComponentDetailAddress
              listAddress={listAddress}
              setIsOpenModalDelete={setIsOpenModalDelete}
              setIdDeleteAddress={setIdDeleteAddress}
              setIsOpenModal={setIsOpenModal}
              setEdit={setEdit}
              form={form}
            />
          )}

          {/* item Loading */}
          {isLoading && <Loading />}
          {!isLoading && !listAddress?.length && <NoDataMessage message={NO_DATA_MESSAGE.NO_ADDRESS} />}
        </ContentAddress>

        {/* item modal add & edit */}
        <ModalAddress
          form={form}
          edit={edit}
          setEdit={setEdit}
          isOpenModal={isOpenModal}
          setIsOpenModal={setIsOpenModal}
          handleGetListAddress={handleGetListAddress}
        />

        {/* item modal delete*/}
        <ModalDeleteAddress
          handleGetListAddress={handleGetListAddress}
          isOpenModalDelete={isOpenModalDelete}
          setIsOpenModalDelete={setIsOpenModalDelete}
          idDeleteAddress={idDeleteAddress}
        />
      </ContainerAddress>
    </WrapperListAddress>
  )
}
export default ListAddress
