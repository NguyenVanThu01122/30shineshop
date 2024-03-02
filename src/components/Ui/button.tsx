import { Button } from 'antd'
import { CSSProperties, MouseEventHandler, ReactNode } from 'react'

export const ButtonGeneral = ({
  children,
  onClick,
  className,
  size,
  type,
  span,
  disabled,
  style,
  htmlType
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
}) => {
  return (
    <Button
      onClick={onClick}
      className={className}
      disabled={disabled}
      htmlType={htmlType}
      size={size}
      style={style}
      type={type}
    >
      {children}
    </Button>
  )
}
