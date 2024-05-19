import { useTranslation } from 'react-i18next'
import { BsTelephoneMinusFill } from 'react-icons/bs'
import { useDelayComponent } from '../../helpers/useDelayComponent'
import styles from './styles.module.scss'

export default function Footer() {
  const [showComponent] = useDelayComponent()
  const { t } = useTranslation()
  return (
    <div>
      {showComponent ? (
        <div className={styles.pageFooter}>
          <div className={styles.footer}>
            <div className={styles.information}>
              <div>{t('COMPANY_NAME')}</div>
              <div>{t('COMPANY_ADDRESS')}</div>
              <div>{t('BUSINESS_CERTIFICATE')}</div>
              <div>{t('ISSUE_DATE')}</div>
              <div>{t('ISSUE_PLACE')}</div>
              <div className={styles.images}>
                <img
                  src='https://storage.30shine.com/ResourceWeb/data/images/congthuongicon.png'
                  alt='img'
                  className={styles.imgNotification}
                />
                <img
                  src='https://images.dmca.com/Badges/dmca_protected_26_120.png?ID=1e720659-fbd3-461e-858a-89ef9307260a'
                  alt='img'
                  className={styles.imgDMCA}
                />
              </div>
              <div className={styles.text}>Chấp nhận thanh toán</div>
              <div className={styles.images}>
                <img src='https://shop.30shine.com/images/mastercard.svg' alt='img' className={styles.imgPay} />
                <img src='https://shop.30shine.com/images/visa.svg' alt='img' className={styles.imgVisa} />
              </div>
            </div>
            <div className={styles.support}>
              <div>{t('LINKS')}</div>
              <div>{t('INTRODUCE')}</div>
              <div>{t('FANPAGE')}</div>
              <div>{t('PRIVACY_POLICY')}</div>
              <div>{t('GENERAL_TRANSACTION_CONDITIONS')}</div>
            </div>
            <div className={styles.feedback}>
              <div>{t('APP_30SHINE')}</div>
              <div>{t('APP_EXPERIENCE')}</div>
              <div className={styles.images}>
                <img src='https://shop.30shine.com/icons/google-play.png' alt='img' className={styles.imgGoogle} />
                <img src='https://shop.30shine.com/icons/app-store.png' alt='img' className={styles.imgApstore} />
              </div>
              <div className={styles.order}>{t('ORDER_HOTLINE')}</div>
              <div className={styles.phoneNumber}>
                <BsTelephoneMinusFill className={styles.icon} />
                <span>{t('HOTLINE_FREE')}</span>
              </div>
            </div>
          </div>
          <div className={styles.selectionPackage}>
            <div>Copyright ©2020 30shine. All Right Reserved</div>
            <div className={styles.select}>
              <div>{t('ABOUT_30SHINE')}</div>
              <div>{t('PROMOTIONS')}</div>
              <div>{t('SERVICES')}</div>
              <div>{t('SHINE_MEMBER')}</div>
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}
