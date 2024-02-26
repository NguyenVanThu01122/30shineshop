import { Input } from 'antd'

interface TypeTextArealProps {
  onChange?: (e: any) => void | undefined
  name?: string
  id?: string
  value?: any
  className?: any
  placeholder?: string
  size?: 'large' | 'small' | 'middle'
}
export const TextArealInput = ({ size, name, id, value, className, onChange, placeholder }: TypeTextArealProps) => {
  return (
    <Input.TextArea
      className={className}
      name={name}
      id={id}
      size={size}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  )
}
