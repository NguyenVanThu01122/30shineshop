import { Button } from 'antd'
import { CSSProperties, MouseEventHandler, ReactNode } from 'react'
import { useTranslation } from 'react-i18next'

export const ButtonGeneral = ({
  children,
  onClick,
  className,
  size,
  type,
  span,
  disabled,
  style,
  htmlType,
  loading,
  i18nKey
}: {
  children: ReactNode
  onClick?: MouseEventHandler<HTMLElement>
  className?: string
  htmlType?: 'button' | 'submit' | 'reset'
  size?: 'large' | 'middle' | 'small'
  type?: 'default' | 'primary' | 'ghost' | 'dashed' | 'link' | 'text'
  span?: any
  style?: CSSProperties
  disabled?: boolean
  loading?: boolean
  i18nKey?: string
}) => {
  const { t } = useTranslation()
  return (
    <Button
      onClick={onClick}
      className={className}
      disabled={disabled}
      htmlType={htmlType}
      size={size}
      style={style}
      type={type}
      loading={loading}
    >
      {i18nKey ? t(i18nKey) : children}
    </Button>
  )
}
