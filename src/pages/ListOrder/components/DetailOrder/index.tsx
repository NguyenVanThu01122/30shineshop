import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { CurrencyFormat } from '../../../../components/CurrencyFormat'
import { ButtonGeneral } from '../../../../components/Ui/button'
import { ItemDetailOrder } from './styles'
import { ComponentDetailOrderProps, OrderItemType, ProductType } from './type'

export const ComponentDetailOrder = ({
  listStatusOrder,
  orderStatusCommon,
  colorStatus
}: ComponentDetailOrderProps) => {
  const navigate = useNavigate()
  const { t } = useTranslation()

  return (
    <>
      {listStatusOrder?.map((item: OrderItemType) => (
        <ItemDetailOrder>
          <div style={{ color: colorStatus(item.status) }}>{orderStatusCommon(item.status)}</div>
          <div className='list-product'>
            {item?.products.map((product: ProductType) => (
              <div className='information-product'>
                <div className='detail-order'>
                  <img className='img-product' src={product?.image} alt='' />
                  <div className='name-product'>
                    <div>{product?.name}</div>
                    <div>{t('VERSION')}: default</div>
                    <div>X{product?.amount}</div>
                  </div>
                </div>
                <div className='price'>
                  <CurrencyFormat amount={product.amount * product.price} />
                  <span>đ</span>
                </div>
              </div>
            ))}
          </div>
          <div className='total-price'>
            <div>{t('TOTAL_PRICE')}</div>
            <div>
              <CurrencyFormat amount={item?.totalPrice} />
              <span>đ</span>
            </div>
          </div>
          <div className='select'>
            <div style={{ color: colorStatus(item.status) }}>{orderStatusCommon(item.status)}</div>
            <div className='group-button'>
              <ButtonGeneral
                onClick={() => navigate(`/detail-order/${item?._id}`)}
                size='large'
                className='btn-detail-order'
              >
                {t('ORDER_DETAILS')}
              </ButtonGeneral>
            </div>
          </div>
        </ItemDetailOrder>
      ))}
    </>
  )
}
