import { Form } from 'antd'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate, useParams } from 'react-router'
import { toast } from 'react-toastify'
import PageNavbar from '../../components/PageNavbar'
import { FormGeneral } from '../../components/Ui/form'
import { InputGeneral } from '../../components/Ui/input'
import { TextArealInput } from '../../components/Ui/textAreaInput'
import { ERROR_MESSAGES } from '../../helpers/contanst'
import { useGetLengthOfCart } from '../../helpers/useGetLengthOfCart'
import { validateAddress, validateEmail, validateName, validatePhone } from '../../helpers/validationRules'
import { getDetailPayment, orderPayment } from '../../services/detailPayment'
import { DeliveryTime } from './components/DeliveryTime'
import { OrderInformation } from './components/OrderInformation'
import { Product } from './components/Product'
import { PaymentWrapper } from './styles'
import { DetailPaymentType, FormValuesType } from './type'

export default function DetailPayment() {
  const { t } = useTranslation()
  const params = useParams()
  const paymentId = params?.id
  const navigate = useNavigate()
  const [form] = Form.useForm()
  const [loading, setLoading] = useState(false)

  const [note, setNote] = useState('')
  const [timeDelivery, setTimeDelivery] = useState(1)
  const [errorNote, setErrorNote] = useState('')
  const [detailPayment, setDetailPayment] = useState<DetailPaymentType>()
  const [getLengthOfCart] = useGetLengthOfCart()

  useEffect(() => {
    getDetailPayment(paymentId ?? '').then((res) => {
      setDetailPayment(res.data?.data)
    })
  }, [])

  const handleOnchangeNote = () => {
    const elementNote = (document.getElementById('texArea') as any).value
    setNote(elementNote)
    if (!elementNote) {
      setErrorNote(ERROR_MESSAGES.PLEASE_ENTER_NOTE)
    } else {
      setErrorNote('')
    }
  }

  const onFinish = (values: FormValuesType) => {
    const body = {
      paymentId: paymentId,
      address: {
        name: values.name,
        email: values.email,
        phone: values.phone,
        detailAddress: values.address
      },
      noteOrder: note,
      timeDelivery,
      methodPayment: 'offline'
    }
    setLoading(true)
    orderPayment(body)
      .then((res) => {
        getLengthOfCart() // gọi lại số lượng sp trong giỏ hàng
        const orderId = res.data?.orderId
        navigate(`/order-success/${orderId}`)
        setLoading(false)
      })
      .catch((error) => {
        toast.error(ERROR_MESSAGES.SERVER_ERROR)
        setLoading(false)
      })
  }

  return (
    <PaymentWrapper>
      <PageNavbar page={t('PAYMENT')} />
      <div className='mainPayment'>
        <div>{t('PAYMENT')}</div>
        <FormGeneral
          className='formPayment'
          onFinish={onFinish}
          scrollToFirstError //tự động cuộn đến lỗi đầu tiên trong quá trình xử lý lỗi form
          form={form}
        >
          <div className='payment'>
            <div className='deliveryInformation'>
              <div>{t('DELIVERY_INFORMATION')}</div>
              <Form.Item rules={validateName()} className='itemInput' name='name'>
                <InputGeneral size='large' placeholder={t('PLEASE_ENTER_NAME')} />
              </Form.Item>
              <div className='groupInput'>
                <Form.Item rules={validatePhone()} name='phone'>
                  <InputGeneral type='number' size='large' placeholder={t('PLEASE_ENTER_PHONE')} />
                </Form.Item>
                <Form.Item rules={validateEmail()} name='email'>
                  <InputGeneral size='large' placeholder={t('PLEASE_ENTER_EMAIL')} type='email' />
                </Form.Item>
              </div>
              <Form.Item rules={validateAddress()} className='itemInput' name='address'>
                <InputGeneral size='large' placeholder={t('PLEASE_ENTER_ADDRESS')} />
              </Form.Item>
            </div>
            <DeliveryTime setTimeDelivery={setTimeDelivery} />
            <div className='orderNotes'>
              <div>{t('ORDER_NOTES')}</div>
              <TextArealInput
                onChange={handleOnchangeNote}
                value={note}
                className={`texArea ${errorNote ? 'borderRed' : ''}`}
                placeholder={t('MESSAGE_FOR_SELLER')}
                id='texArea'
              />
              <div className='errorText'>{errorNote}</div>
            </div>
            <Product detailPayment={detailPayment} />
          </div>
          <OrderInformation detailPayment={detailPayment} form={form} onFinish={onFinish} loading={loading} />
        </FormGeneral>
      </div>
    </PaymentWrapper>
  )
}
