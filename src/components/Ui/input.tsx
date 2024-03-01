import { Input } from 'antd'

interface TypeInputGeneralProps {
  className?: string
  placeholder?: string
  size?: 'large' | 'middle' | 'small'
  type?: string
  id?: string
  value?: string | number
  onChange?: (value: any) => void | undefined
  name?: string
  checked?: boolean
  defaultChecked?: boolean
  onClick?: () => void | undefined
  onBlur?: () => void
  style?: any
}

export const InputGeneral = ({
  id,
  size,
  type,
  placeholder,
  onChange,
  value,
  name,
  defaultChecked,
  onClick,
  className,
  checked,
  onBlur,
  style
}: TypeInputGeneralProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value)
    }
  }
  return (
    <Input
      id={id}
      className={className}
      value={value}
      name={name}
      size={size}
      type={type}
      placeholder={placeholder}
      onChange={handleChange}
      onClick={onClick}
      checked={checked}
      onBlur={onBlur}
      defaultChecked={defaultChecked}
      style={style}
    ></Input>
  )
}
