import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { CurrencyFormat } from '../../../../components/CurrencyFormat'
import { ButtonGeneral } from '../../../../components/Ui/button'
import { InputGeneral } from '../../../../components/Ui/input'
import { isDialogLogin } from '../../../../redux/Slices/appSlices'
import { FormValuesType } from '../../type'
import { WrapperInformation } from './styles'

export const OrderInformation = ({
  detailPayment,
  onFinish,
  form,
  loading
}: {
  detailPayment: any
  onFinish: (values: FormValuesType) => void
  form: any
  loading: boolean
}) => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const login = useSelector((state: any) => state.app.isLogin)
  // hàm Validate fields
  const validateAndSubmit = () => {
    form
      .validateFields() // sd validateFields của form Kiểm tra tất cả các trường trong form
      .then((values: FormValuesType) => {
        // Thêm đối số values để truyền vào hàm onFinish
        if (login) {
          onFinish(values)
        } else {
          dispatch(isDialogLogin(true))
        }
      })
      .catch(() => {
        // Nếu có lỗi scroll đến phần lỗi đầu tiên
        const firstErrorField = document.querySelector('.ant-form-item-has-error')
        if (firstErrorField) {
          firstErrorField.scrollIntoView({ behavior: 'smooth' })
        }
      })
  }

  return (
    <WrapperInformation>
      <div className='information'>
        <div>{t('ORDER_INFORMATION')}</div>
        <div className='itemProvisional'>
          <div>
            {t('PROVISIONAL')}{' '}
            <span>
              ({detailPayment?.products?.length} {t('PRODUCTS')})
            </span>
          </div>
          <div>
            <CurrencyFormat amount={detailPayment?.totalOriginPrice} />
            <span>₫</span>
          </div>
        </div>
        <div className='itemProvisional'>
          <div>{t('DELIVERY_FEE')}</div>
          <div>
            <CurrencyFormat amount={detailPayment?.deliveryPrice} />
            <span>đ</span>
          </div>
        </div>
        <div className='itemProvisional'>
          <div>{t('PROMOTION')}</div>
          <div>
            - 0<span>₫</span>
          </div>
        </div>
        <div>{t('ENTER_PROMO_CODE')}</div>
        <div className='totalMoney'>
          <div>{t('TOTAL')}</div>
          <div>
            <CurrencyFormat amount={detailPayment?.totalPrice} />
            <span>₫</span>
          </div>
        </div>
        <div>{t('INCLUDED_VAT')}</div>
      </div>
      <div className='paymentMethods'>
        <div>{t('PAYMENT_METHODS')}</div>
        <div className='paymentCheckbox'>
          <InputGeneral type='radio' name='payment' checked={true} />
          <div>{t('PAY_ON_DELIVERY')}</div>
        </div>
        <div className='paymentCheckbox'>
          <InputGeneral type='radio' name='payment' />
          <div>{t('PAY_VIA_VNPAY')}</div>
        </div>
      </div>
      <div className='itemOrder'>
        <ButtonGeneral onClick={validateAndSubmit} className='order' loading={loading}>
          <div>{t('PLACE_ORDER')}</div>
          <div>{t('NOT_SATISFIED_EXCHANGE')}</div>
        </ButtonGeneral>
        <div>{t('AGREE_TERMS')}</div>
      </div>
    </WrapperInformation>
  )
}
