import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { DetailProductType } from '../..'
import { CurrencyFormat } from '../../../../components/CurrencyFormat'
import { ButtonGeneral } from '../../../../components/Ui/button'
import { CommonModal } from '../../../../components/Ui/modal'
import { useBuyNow } from '../../../../helpers/useBuyNow'
import styles from './styles.module.scss'
interface modalCartProps {
  detailProduct: DetailProductType
  count: number
  totalCart: number
  isModalOpen: boolean
  setIsModalOpen: any
}
export default function ModalCart({ detailProduct, count, totalCart, isModalOpen, setIsModalOpen }: modalCartProps) {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const [handleBuyNow] = useBuyNow()
  const handleCancel = () => {
    setIsModalOpen(false)
  }

  return (
    <CommonModal className={styles.modal} width={400} isModalOpen={isModalOpen} onCancel={handleCancel} footer={false}>
      <div className={styles.ItemModalCart}>
        <div className={styles.cart}>
          <div>{t('CART')}</div>
          <div>{t('ADD_TO_CART_SUCCESS')}</div>
        </div>
        <div className={styles.detailCart}>
          <img src={detailProduct?.images[0]} alt='' />
          <div className={styles.priceProductCart}>
            <div>{detailProduct?.name}</div>
            <div className={styles.price}>
              <div className={styles.priceSale}>
                <div>
                  <CurrencyFormat amount={detailProduct?.salePrice} />
                  <span>đ</span>
                </div>
                <div>
                  <CurrencyFormat amount={detailProduct?.originPrice} />
                  <span>đ</span>
                </div>
              </div>
              <div>x{count}</div>
            </div>
          </div>
        </div>
        <div className={styles.numberProduct}>
          {t('YOUR_CART_HAS')}: {totalCart} {t('PRODUCTS')}
        </div>
        <div className={styles.totalMoney}>
          <div>{t('TOTAL_MONEY')}: </div>
          <div>
            <CurrencyFormat amount={(detailProduct?.salePrice || 0) * count} />
            <span>đ</span>
          </div>
        </div>
        <div className={styles.buyNow}>
          <ButtonGeneral className={styles.btnByNow} type='primary' size='large' onClick={() => navigate('/cart')}>
            {t('VIEW_CART')}
          </ButtonGeneral>
          <ButtonGeneral size='large' onClick={() => handleBuyNow(detailProduct?.id || '', count)}>
            {t('BUY_NOW')}
          </ButtonGeneral>
        </div>
      </div>
    </CommonModal>
  )
}
