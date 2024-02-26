import { InputGeneral } from '../../../../components/Ui/input'
import { WrapperDeliveryTime } from './styles'
interface DeliveryTimeProps {
  setTimeDelivery: (time: number) => void
}
export const DeliveryTime = ({ setTimeDelivery }: DeliveryTimeProps) => {
  return (
    <WrapperDeliveryTime>
      <div className='time'>
        <div>Thời Gian Nhận Hàng</div>
        <div className='inputDelivery'>
          <InputGeneral type='radio' name='address-delivery' defaultChecked={true} onClick={() => setTimeDelivery(1)} />
          <div>
            Chỉ giao hàng giờ hành chính <span>(phù hợp với địa chỉ văn phòng/cơ quan)</span>
          </div>
        </div>
        <div className='inputDelivery'>
          <InputGeneral type='radio' name='address-delivery' onClick={() => setTimeDelivery(2)} />
          <div>
            Tất cả các ngày trong tuần <span>(phù hợp với địa chỉ nhà riêng, luôn có người nhận hàng)</span>
          </div>
        </div>
        <div className='inputDelivery'>
          <InputGeneral type='radio' name='address-delivery' onClick={() => setTimeDelivery(3)} />
          <div>
            Giao nhanh trong 2h <span>(áp dụng với địa chỉ giao hàng tại Hà Nội và Hồ Chí Minh)</span>
          </div>
        </div>
      </div>
    </WrapperDeliveryTime>
  )
}
