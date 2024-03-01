import { toast } from 'react-toastify'
import { CommonModal } from '../../../../components/Ui/commonModal'
import { deleteAddress } from '../../../../service/listAddress'

interface ModalDeleteAddressProps {
  isOpenModalDelete: boolean
  handleGetListAddress: () => void
  setIsOpenModalDelete: (value: boolean) => void
  idDeleteAddress: string
}
export const ModalDeleteAddress = ({
  isOpenModalDelete,
  idDeleteAddress,
  handleGetListAddress,
  setIsOpenModalDelete
}: ModalDeleteAddressProps) => {
  // hàm xóa địa chỉ
  const handleDeleteAddress = () => {
    deleteAddress(idDeleteAddress)
      .then((res) => {
        toast.success(res.data?.message)
        handleGetListAddress()
        setIsOpenModalDelete(false)
      })
      .catch((error) => {
        toast.error(error.response?.data?.message)
      })
  }

  return (
    <CommonModal
      isModalOpen={isOpenModalDelete}
      onCancel={() => setIsOpenModalDelete(false)}
      onOk={handleDeleteAddress}
      modalTitle='Bạn có chắc chắn muốn xóa địa chỉ này không ?'
    />
  )
}
