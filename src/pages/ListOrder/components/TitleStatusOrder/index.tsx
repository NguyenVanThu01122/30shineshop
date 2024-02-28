import { WrapperTitleStatus } from './styles'

interface StatusOrderType {
  id: number
  status: string
  title: string
}

interface TitleStatusOrderProps {
  arrStatusOrder: StatusOrderType[]
  SaveOrderStatus: string
  setSaveOrderStatus: (status: string) => void
}

export const TitleStatusOrder = ({ arrStatusOrder, SaveOrderStatus, setSaveOrderStatus }: TitleStatusOrderProps) => {
  return (
    <WrapperTitleStatus>
      {arrStatusOrder.map((item: StatusOrderType) => (
        <div
          key={item.id}
          className={`${SaveOrderStatus === item.status && 'active-status'}`}
          onClick={() => setSaveOrderStatus(item.status)}
        >
          {item.title}
        </div>
      ))}
    </WrapperTitleStatus>
  )
}
