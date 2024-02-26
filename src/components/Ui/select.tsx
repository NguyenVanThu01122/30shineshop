import { Select } from 'antd'

export const SelectGeneral = ({
  className,
  defaultValue,
  onChange,
  options,
  size
}: {
  size?: 'large' | 'small' | 'middle'
  className?: string
  defaultValue?: string | number | string[]
  onChange?: (value: string | number | string[] | undefined) => void
  options?: { label: string; value: string | number }[]
}) => {
  return <Select size={size} className={className} defaultValue={defaultValue} onChange={onChange} options={options} />
}
