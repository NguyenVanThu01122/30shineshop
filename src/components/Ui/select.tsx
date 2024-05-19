import { Select } from 'antd'

export const SelectGeneral = ({
  children,
  className,
  defaultValue,
  onChange,
  onClick,
  onBlur,
  options,
  size,
  placeholder,
  value
}: {
  children?: React.ReactNode
  value?: string | number | string[]
  size?: 'large' | 'small' | 'middle'
  className?: string
  placeholder?: string
  defaultValue?: string | number | string[]
  onChange?: (value: string | number | string[] | undefined) => void
  options?: { label: string; value: string | number }[]
  onClick?: () => void
  onBlur?: () => void
}) => {
  return (
    <Select
      value={value}
      size={size}
      className={className}
      defaultValue={defaultValue}
      onChange={onChange}
      options={options}
      onClick={onClick}
      onBlur={onBlur}
      placeholder={placeholder}
    >
      {children}
    </Select>
  )
}
