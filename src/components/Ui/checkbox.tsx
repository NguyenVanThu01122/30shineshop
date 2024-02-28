import { Checkbox } from 'antd'
import { ReactNode } from 'react'

export const CheckboxGeneral = ({
  className,
  children,
  onChange
}: {
  className?: string
  children: ReactNode
  onChange?: (e: any) => void
}) => {
  return (
    <Checkbox onChange={onChange} className={className}>
      {children}
    </Checkbox>
  )
}
