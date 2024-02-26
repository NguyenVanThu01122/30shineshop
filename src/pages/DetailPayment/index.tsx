import { Form } from 'antd'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { toast } from 'react-toastify'
import { InputGeneral } from '../../components/Ui/input'
import { TextArealInput } from '../../components/Ui/textAreaInput'
import { ERROR_MESSAGES, PLACEHOLDER } from '../../helpers/contanst'
import { useGetLengthOfCart } from '../../helpers/useGetLengthOfCart'
import { validateAddress, validateEmail, validateName, validatePhone } from '../../helpers/validationRules'
import { getDetailPayment, orderPayment } from '../../service/detailPayment'
import { DeliveryTime } from './components/DeliveryTime'
import { OrderInformation } from './components/OrderInformation'
import { Product } from './components/Product'
import { PaymentWrapper } from './styles'

export interface ProductType {
  amount: number
  id: string
  image: string
  name: string
  price: number
}
export interface DetailPaymentType {
  deliveryPrice?: number
  products?: ProductType[]
  totalOriginPrice?: number
  totalPrice?: number
}

export default function DetailPayment() {
  const params = useParams()
  const navigate = useNavigate()
  const paymentId = params?.id
  const [form] = Form.useForm()

  const [note, setNote] = useState('')
  const [timeDelivery, setTimeDelivery] = useState(1)
  const [errorNote, setErrorNote] = useState('')
  const [detailPayment, setDetailPayment] = useState<DetailPaymentType>()
  const [getLengthOfCart] = useGetLengthOfCart()

  useEffect(() => {
    getDetailPayment(paymentId).then((res) => {
      setDetailPayment(res.data?.data)
      console.log(res.data.data)
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

  const onFinish = (values: any) => {
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
    orderPayment(body)
      .then((res) => {
        getLengthOfCart() // gọi lại số lượng sp trong giỏ hàng
        const orderId = res.data?.orderId
        navigate(`/order-success/${orderId}`)
      })
      .catch((error) => toast.error(ERROR_MESSAGES.SERVER_ERROR))
  }

  // // hàm Validate fields
  // const validateAndSubmit = () => {
  //   form
  //     .validateFields() // sd validateFields của form Kiểm tra tất cả các trường trong form
  //     .then((values) => {
  //       // Thêm đối số values để truyền vào hàm onFinish
  //       onFinish(values) // Truyền values và gọi hàm onFinish
  //     })
  //     .catch(() => {
  //       // Nếu có lỗi scroll đến phần lỗi đầu tiên
  //       const firstErrorField = document.querySelector('.ant-form-item-has-error')
  //       if (firstErrorField) {
  //         firstErrorField.scrollIntoView({ behavior: 'smooth' })
  //       }
  //     })
  // }

  return (
    <PaymentWrapper>
      <div>THANH TOÁN</div>
      <Form onFinish={onFinish} scrollToFirstError form={form} className='pagePayment'>
        <div className='payment'>
          <div className='deliveryInformation'>
            <div>Thông Tin Nhận Hàng</div>
            <Form.Item rules={validateName} className='itemInput' name='name'>
              <InputGeneral size='large' placeholder={PLACEHOLDER.PLEASE_ENTER_NAME} />
            </Form.Item>
            <div className='groupInput'>
              <Form.Item rules={validatePhone} name='phone'>
                <InputGeneral type='number' size='large' placeholder={PLACEHOLDER.PLEASE_ENTER_PHONE} />
              </Form.Item>
              <Form.Item rules={validateEmail} name='email'>
                <InputGeneral size='large' placeholder={PLACEHOLDER.PLEASE_ENTER_EMAIL} type='email' />
              </Form.Item>
            </div>
            <Form.Item rules={validateAddress} className='itemInput' name='address'>
              <InputGeneral size='large' placeholder={PLACEHOLDER.PLEASE_ENTER_ADDRESS} />
            </Form.Item>
          </div>
          <DeliveryTime setTimeDelivery={setTimeDelivery} />
          <div className='orderNotes'>
            <div>Ghi Chú Đơn Hàng</div>
            <TextArealInput
              onChange={handleOnchangeNote}
              value={note}
              className={`texArea ${errorNote ? 'borderRed' : ''}`}
              placeholder={PLACEHOLDER.MESSAGE_FOR_SELLER}
              id='texArea'
            />
            <div className='errorText'>{errorNote}</div>
          </div>
          <Product detailPayment={detailPayment} />
        </div>
        <OrderInformation detailPayment={detailPayment} form={form} onFinish={onFinish} />
      </Form>
    </PaymentWrapper>
  )
}
