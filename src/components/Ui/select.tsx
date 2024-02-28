import { Select } from 'antd'

export const SelectGeneral = ({
  className,
  defaultValue,
  onChange,
  onClick,
  onBlur,
  options,
  size,
  placeholder
}: {
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
      size={size}
      className={className}
      defaultValue={defaultValue}
      onChange={onChange}
      options={options}
      onClick={onClick}
      onBlur={onBlur}
      placeholder={placeholder}
    />
  )
}
