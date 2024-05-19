import { useTranslation } from 'react-i18next'
import { InputGeneral } from '../../../../components/Ui/input'
import { WrapperDeliveryTime } from './styles'
interface DeliveryTimeProps {
  setTimeDelivery: (time: number) => void
}
export const DeliveryTime = ({ setTimeDelivery }: DeliveryTimeProps) => {
  const { t } = useTranslation()
  return (
    <WrapperDeliveryTime>
      <div className='time'>
        <div>{t('DELIVERY_TIME')}</div>
        <div className='inputDelivery'>
          <InputGeneral type='radio' name='address-delivery' defaultChecked={true} onClick={() => setTimeDelivery(1)} />
          <div>
            {t('DELIVERY_OFFICE_HOURS')} <span>{t('SUITABLE_OFFICE_ADDRESS')}</span>
          </div>
        </div>
        <div className='inputDelivery'>
          <InputGeneral type='radio' name='address-delivery' onClick={() => setTimeDelivery(2)} />
          <div>
            {t('ALL_DAYS_OF_WEEK')} <span>{t('SUITABLE_HOME_ADDRESS')}</span>
          </div>
        </div>
        <div className='inputDelivery'>
          <InputGeneral type='radio' name='address-delivery' onClick={() => setTimeDelivery(3)} />
          <div>
            {t('FAST_DELIVERY_2H')} <span>{t('APPLY_HANOI_HCM')}</span>
          </div>
        </div>
      </div>
    </WrapperDeliveryTime>
  )
}
