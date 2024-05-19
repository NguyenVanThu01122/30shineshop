import Translations from '../../../../components/translations'
import styles from './styles.module.scss'
export default function ProductSupportInfo() {
  const arrSupport = [
    {
      icon: 'https://shop.30shine.com/icons/usp-detail-icon-1.png',
      text: 'COMMITMENT_7_DAYS_EFFECTIVE'
    },
    {
      icon: 'https://shop.30shine.com/icons/usp-detail-icon-2.png',
      text: 'BUY_1_ENJOY_5_PRIVILEGES'
    },
    {
      icon: 'https://shop.30shine.com/icons/usp-detail-icon-3.png',
      text: '120_REFUND_POLICY'
    },
    {
      icon: 'https://shop.30shine.com/icons/usp-detail-icon-4.png',
      text: 'HIGHEST_QUALITY_PRODUCT'
    },
    {
      icon: 'https://shop.30shine.com/icons/usp-detail-icon-5.png',
      text: 'SUPER_FAST_DELIVERY_2H'
    },
    {
      icon: 'https://shop.30shine.com/icons/usp-detail-icon-6.png',
      text: 'EXCHANGE_AT_PLACE_WITHIN_24H'
    },
    {
      icon: 'https://shop.30shine.com/icons/usp-detail-icon-7.png',
      text: 'CONSULTANCY_CALL_CENTER_ANYTIME_ANYWHERE'
    },
    {
      icon: 'https://shop.30shine.com/icons/usp-detail-icon-8.png',
      text: 'INTERNATIONAL_STANDARD_SAFE_DELIVERY'
    }
  ]
  return (
    <div className={styles.itemSupportProduct}>
      {arrSupport.map((item, index) => {
        return (
          <div key={index} className={styles.support}>
            <img src={item.icon} alt='' />
            <Translations text={item.text} />
          </div>
        )
      })}
      <div className={styles.oder}>
        <img src='https://shop.30shine.com/icons/icon-phone.svg' alt='icon' />
        <div className={styles.hotlineOder}>
          <div>
            <Translations text={'HOTLINE_ORDER'} />
          </div>
          <div>1900.27.27.30</div>
        </div>
      </div>
    </div>
  )
}
