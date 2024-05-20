import { Dispatch, SetStateAction } from 'react'
import { useTranslation } from 'react-i18next'
import { toast } from 'react-toastify'
import { CommonModal } from '../../../../components/Ui/modal'
import { deleteCartAll, deleteCartOne } from '../../../../services/cart'
interface ModalDeleteProps {
  getListCart: () => void
  listCartId: string[]
  idDeleteOne: string
  setListCartId: Dispatch<SetStateAction<string[]>>
  setIsLoading: Dispatch<SetStateAction<boolean>>
  getLengthOfCart: () => void
  isModalOpen: boolean
  setIsModalOpen: Dispatch<SetStateAction<boolean>>
  setModalContent: Dispatch<SetStateAction<string>>
  modalContent: string
  modalTitle: string
  setModalTitle: Dispatch<SetStateAction<string>>
  setIsShowTitleProduct: Dispatch<SetStateAction<boolean>>
}
export default function ModalDeleteProduct(props: ModalDeleteProps) {
  const {
    getListCart,
    listCartId,
    idDeleteOne,
    isModalOpen,
    modalContent,
    modalTitle,
    setListCartId,
    setIsLoading,
    getLengthOfCart,
    setIsModalOpen,
    setModalContent,
    setModalTitle,
    setIsShowTitleProduct
  } = props
  const { t } = useTranslation()
  // hàm xử lý xóa sản phẩm khỏi giỏ hàng
  const handleDeleteProduct = () => {
    if (modalTitle === t('DELETE_PRODUCT')) {
      deleteCartOne(idDeleteOne)
        .then((res) => {
          toast.success(res.data?.message)
          getListCart() // gọi lại getListCart sau khi xóa
          handleCancelModal()
          getLengthOfCart()
          setListCartId([])
          setIsShowTitleProduct(false)
          setIsLoading(false)
        })
        .catch((error) => {
          toast.error(error.response?.data?.message)
        })
    } else if (modalTitle === t('DELETE_PRODUCT_ALL')) {
      deleteCartAll(listCartId)
        .then((res) => {
          toast.success(res.data?.message)
          getListCart() // gọi lại getListCart sau khi xóa
          setListCartId([])
          handleCancelModal()
          setIsShowTitleProduct(false)
          setIsShowTitleProduct(false)
          getLengthOfCart()
        })
        .catch((error) => {
          toast.error(error.response?.message)
        })
    } else {
      console.log('error')
    }
  }

  // Hàm đóng modal
  const handleCancelModal = () => {
    setIsModalOpen(false)
    setModalTitle('')
    setModalContent('')
    setIsLoading(false)
  }

  return (
    <CommonModal
      isModalOpen={isModalOpen}
      onCancel={handleCancelModal}
      onOk={handleDeleteProduct}
      modalTitle={modalTitle}
      width={450}
    >
      {modalContent}
    </CommonModal>
  )
}
