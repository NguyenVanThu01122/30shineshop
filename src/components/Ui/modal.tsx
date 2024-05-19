import { Modal } from 'antd'
import { useTranslation } from 'react-i18next'
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
  i18nKey?: string
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
  className,
  i18nKey
}: CommonModalProps) => {
  const { t } = useTranslation()
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
      {i18nKey ? t(i18nKey) : children}
    </Modal>
  )
}
