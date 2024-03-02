import { Modal } from 'antd'
interface CommonModalProps {
  children?: React.ReactNode
  modalTitle?: string
  isModalOpen: boolean
  onCancel: () => void
  onOk?: () => void
  footer?: React.ReactNode
  width?: number
  centered?: boolean
  style?: React.CSSProperties
  className?: string
  title?: string
}
export const CommonModal = ({
  children,
  modalTitle,
  isModalOpen,
  onOk,
  onCancel,
  footer,
  width,
  centered,
  style,
  className
}: CommonModalProps) => {
  return (
    <Modal
      width={width}
      title={modalTitle}
      open={isModalOpen}
      onOk={onOk}
      onCancel={onCancel}
      footer={footer}
      style={style}
      className={className}
      centered={centered}
    >
      {children}
    </Modal>
  )
}
