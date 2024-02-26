import { Button } from 'antd'

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
  children: any
  onClick?: any
  className?: string
  htmlType?: any
  size?: string
  type?: string
  span?: any
  style?: any
  disabled?: boolean
}) => {
  return (
    <Button onClick={onClick} className={className} disabled={disabled} htmlType={htmlType}>
      {children}
    </Button>
  )
}
