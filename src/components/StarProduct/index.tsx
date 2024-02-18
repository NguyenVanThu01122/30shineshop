import { StarOutlined } from '@ant-design/icons'

export const StarProduct = ({ numberYellow, numberGray }: { numberYellow: number; numberGray: number }) => {
  const renderYellow = () => {
    return Array(numberYellow || 0)
      .fill(0)
      .map(() => <StarOutlined style={{ color: 'yellow', fontSize: '16px' }} />)
  }

  const renderGray = () => {
    return Array(numberGray || 0)
      .fill(0)
      .map(() => <StarOutlined style={{ color: 'gray', fontSize: '16px' }} />)
  }

  return (
    <div>
      {renderYellow()}
      {renderGray()}
    </div>
  )
}
