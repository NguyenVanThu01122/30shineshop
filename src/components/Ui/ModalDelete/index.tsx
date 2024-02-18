import { Modal } from 'antd'

export const ModalDelete = ({
  children,
  modalTitle,
  isModalOpen,
  handleDeleteProduct,
  handleCancelModal
}: {
  children: any
  modalTitle: string
  isModalOpen: boolean
  handleDeleteProduct: any
  handleCancelModal: any
}) => {
  return (
    <Modal width={450} title={modalTitle} open={isModalOpen} onOk={handleDeleteProduct} onCancel={handleCancelModal}>
      {children}
    </Modal>
  )
}
