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
  form
}: {
  detailPayment: any
  onFinish: (values: FormValuesType) => void
  form: any
}) => {
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
        <div>THÔNG TIN ĐƠN HÀNG</div>
        <div className='itemProvisional'>
          <div>
            Tạm tính <span>({detailPayment?.products?.length} sản phẩm)</span>
          </div>
          <div>
            <CurrencyFormat amount={detailPayment?.totalOriginPrice} />
            <span>₫</span>
          </div>
        </div>
        <div className='itemProvisional'>
          <div>Phí giao hàng</div>
          <div>
            <CurrencyFormat amount={detailPayment?.deliveryPrice} />
            <span>đ</span>
          </div>
        </div>
        <div className='itemProvisional'>
          <div>Khuyến mãi</div>
          <div>
            - 0<span>₫</span>
          </div>
        </div>
        <div>Chọn hoặc nhập mã khuyến mãi</div>
        <div className='totalMoney'>
          <div>Tổng tiền</div>
          <div>
            <CurrencyFormat amount={detailPayment?.totalPrice} />
            <span>₫</span>
          </div>
        </div>
        <div>Đã bao gồm VAT (nếu có)</div>
      </div>
      <div className='paymentMethods'>
        <div>Phương Thức Thanh Toán</div>
        <div className='paymentCheckbox'>
          <InputGeneral type='radio' name='payment' checked={true} />
          <div>Thanh toán khi nhận hàng</div>
        </div>
        <div className='paymentCheckbox'>
          <InputGeneral type='radio' name='payment' />
          <div>Thanh toán qua cổng VNpay</div>
        </div>
      </div>
      <div className='itemOrder'>
        <ButtonGeneral onClick={validateAndSubmit} className='order'>
          <div>ĐẶT HÀNG</div>
          <div>Không Ưng Đổi Ngay Trong 30 Ngày</div>
        </ButtonGeneral>
        <div>
          Nhấn <span> "ĐẶT HÀNG”</span> đồng nghĩa với việc bạn đồng ý tuân theo Điều khoản của 30Shine
        </div>
      </div>
    </WrapperInformation>
  )
}
