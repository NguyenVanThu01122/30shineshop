import { Modal } from 'antd'

export const CommonModal = ({
  children,
  modalTitle,
  isModalOpen,
  deleteItem,
  onCancel,
  footer,
  width,
  centered,
  style,
  className
}: {
  children?: any
  modalTitle?: string
  isModalOpen: boolean
  onCancel: any
  deleteItem?: any
  footer?: boolean
  width?: number | undefined
  centered?: boolean | undefined
  style?: any
  className?: any
}) => {
  return (
    <Modal
      width={450}
      title={modalTitle}
      open={isModalOpen}
      onOk={deleteItem}
      onCancel={onCancel}
      footer={footer}
      style={style}
      className={className}
    >
      {children}
    </Modal>
  )
}
