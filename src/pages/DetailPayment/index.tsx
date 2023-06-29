import { Input } from 'antd'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { privateAxios } from '../../service/axios'
import { PaymentWrapper } from './styled'

export default function DetailPayment() {
  const params = useParams()
  const navigate = useNavigate()
  const paymentId = params?.id

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [note, setNote] = useState('')

  const [timeDelivery, setTimeDelivery] = useState(1)

  const [errorNote, setErrorNote] = useState('')
  const [errorName, setErrorName] = useState('')
  const [errorPhone, setErrorPhone] = useState('')
  const [errorAddress, setErrorAddress] = useState('')
  const [errorEmail, setErrorEmail] = useState('')

  const [detailPayment, setDetailPayment] = useState<any>({})

  useEffect(() => {
    privateAxios.get(`/payment/${paymentId}`)
    .then((res) => {
      setDetailPayment(res.data?.data)
    })
  }, [])

  const handleOnchangeName = (e: any) => {
    const valueName = e.target.value
    setName(valueName)
    if (!valueName) {
      setErrorName('x Vui lòng nhập tên')
    } else if (valueName.length < 3 || valueName.length > 16) {
      setErrorName('x vui lòng nhập từ 3 đến 16 ký tự')
    } else {
      setErrorName('')
    }
  }
  const handleOnchangePhone = (e: any) => {
    const valuePhone = e.target.value
    setPhone(valuePhone)
    if (!valuePhone) {
      setErrorPhone('x Vui lòng nhập số điện thoại')
    } else if (valuePhone[0] !== '0') {
      setErrorPhone('x Số đầu tiên phải bắt đầu bằng số 0')
    } else if (valuePhone.length !== 10) {
      setErrorPhone('x Vui lòng nhập đúng định dạng')
    } else {
      setErrorPhone('')
    }
  }
  const handleOnchangeAddress = (e: any) => {
    const valueAddress = e.target.value
    setAddress(valueAddress)
    if (!valueAddress) {
      setErrorAddress('x Vui lòng nhập địa chỉ của bạn')
    } else {
      setErrorAddress('')
    }
  }
  const handleOnchangeEmail = (e: any) => {
    const valueEmail = e.target.value
    setEmail(valueEmail)
    if (!valueEmail) {
      setErrorEmail('x Vui lòng nhập Email')
    } else if (!valueEmail.includes('@')) {
      setErrorEmail('x Vui lòng nhập đúng định dạng')
    } else {
      setErrorEmail('')
    }
  }
  const handleOnchangeNote = () => {
    const elementNote = (document.getElementById('texArea') as any).value
    setNote(elementNote)
    if (!elementNote) {
      setErrorNote('x Vui lòng nhập ghi chú')
    } else {
      setErrorNote('')
    }
  }

  const handleOrder = () => {
    if (!name) {
      setErrorName('x Vui lòng nhập tên')
    }
    if (!phone) {
      setErrorPhone('x Vui lòng nhập số điện thoại')
    }
    if (!address) {
      setErrorAddress('x Vui lòng nhập địa chỉ của bạn')
    }
    if (!email) {
      setErrorEmail('x Vui lòng nhập Email')
    }

    if (name && phone && email && address) {
      privateAxios
        .post('/order', {
          paymentId: paymentId,
          address: {
            name,
            email,
            phone,
            detailAddress: address
          },
          noteOrder: note,
          timeDelivery,
          methodPayment: 'offline'
        })
        .then((res) => {
          console.log(res.data)
          const orderId = res.data?.orderId
          navigate(`/order-success/${orderId}`)
        })
    }
  }
  return (
    <PaymentWrapper>
      <div>THANH TOÁN</div>
      <div className='pagePayment'>
        <div className='payment'>
          <div className='deliveryInformation'>
            <div>Thông Tin Nhận Hàng</div>
            <div className='itemInput'>
              <Input
                placeholder='Họ tên *'
                value={name}
                onChange={handleOnchangeName}
                className={`${errorName ? 'borderRed' : ''}`}
              />
              <div className='errorText'>{errorName}</div>
            </div>
            <div className='groupInput'>
              <div>
                <Input
                  className={`${errorPhone ? 'borderRed' : ''}`}
                  onChange={handleOnchangePhone}
                  value={phone}
                  type='number'
                  placeholder='Nhập số điện thoại của bạn *'
                />
                <div className='errorText'>{errorPhone}</div>
              </div>
              <div>
                <Input
                  className={`${errorEmail ? 'borderRed' : ''}`}
                  onChange={handleOnchangeEmail}
                  value={email}
                  placeholder='Email'
                />
                <div className='errorText'>{errorEmail}</div>
              </div>
            </div>
            <div className='itemInput'>
              <Input
                className={`${errorAddress ? 'borderRed' : ''}`}
                onChange={handleOnchangeAddress}
                value={address}
                placeholder='Địa chỉ của bạn'
              />
              <div className='errorText'>{errorAddress}</div>
            </div>
          </div>
          <div className='deliveryTime'>
            <div className='time'>
              <div>Thời Gian Nhận Hàng</div>
              <div className='inputDelivery'>
                {/* <input type="radio" /> */}
                <Input type='radio' name='address-delivery' defaultChecked={true} onClick={() => setTimeDelivery(1)} />
                <div>
                  Chỉ giao hàng giờ hành chính <span>(phù hợp với địa chỉ văn phòng/cơ quan)</span>
                </div>
              </div>
              <div className='inputDelivery'>
                <Input type='radio' name='address-delivery' onClick={() => setTimeDelivery(2)} />
                <div>
                  Tất cả các ngày trong tuần <span>(phù hợp với địa chỉ nhà riêng, luôn có người nhận hàng)</span>
                </div>
              </div>
              <div className='inputDelivery'>
                <Input type='radio' name='address-delivery' onClick={() => setTimeDelivery(3)} />
                <div>
                  Giao nhanh trong 2h <span>(áp dụng với địa chỉ giao hàng tại Hà Nội và Hồ Chí Minh)</span>
                </div>
              </div>
            </div>
          </div>
          <div className='orderNotes'>
            <div>Ghi Chú Đơn Hàng</div>
            <Input.TextArea
              onChange={handleOnchangeNote}
              value={note}
              className={`texArea ${errorNote ? 'borderRed' : ''}`}
              placeholder='Lời nhắn cho người bán'
              id='texArea'
            />
            <div className='errorText'>{errorNote}</div>
          </div>
          <div className='itemProduct'>
            <div>Sản Phẩm</div>
            {detailPayment?.products?.map((product: any) => (
              <div className='product' key={product?.id}>
                <img src={product?.image} alt='imageProduct' />
                <div className='detailProdut'>
                  <div>{product?.name}</div>
                </div>
                <div className='priceNumber'>
                  {product?.price}
                  <span>₫</span>
                </div>
                <div>x{product?.amount}</div>
                <div className='priceQuantity'>
                  {product?.price * product?.amount}
                  <span>₫</span>
                </div>
              </div>
            ))}
          </div>
          {/* <div className='product'>
            <img
              src='https://static.30shine.com/shop-admin/2022/04/08/30S01VB6-1_usp_4680d06064b54acb913b59bd7bc30118.jpg'
              alt='imageProduct'
            />
            <div className='detailProdut'>
              <div>Gel rửa mặt cho da dầu mụn, sưng viêm La Roche-Posay</div>
              <div>phiên bản: Default</div>
            </div>
            <div className='priceNumber'>
              229.000<span>₫</span>
            </div>
            <div>x3</div>
            <div className='priceQuantity'>
              687.000<span>₫</span>
            </div>
          </div> */}
        </div>
        <div className='informationLine'>
          <div className='information'>
            <div>THÔNG TIN ĐƠN HÀNG</div>
            <div className='itemProvisional'>
              <div>
                Tạm tính <span>({detailPayment?.products?.length} sản phẩm)</span>
              </div>
              <div>
                {detailPayment?.totalOriginPrice} <span>₫</span>
              </div>
            </div>
            <div className='itemProvisional'>
              <div>Phí giao hàng</div>
              <div>
                {detailPayment?.deliveryPrice} <span>đ</span>
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
                {detailPayment?.totalPrice} <span>₫</span>
              </div>
            </div>
            <div>Đã bao gồm VAT (nếu có)</div>
          </div>
          <div className='paymentMethods'>
            <div>Phương Thức Thanh Toán</div>
            <div className='paymentCheckbox'>
              <Input type='radio' name='payment' checked={true} />
              <div>Thanh toán khi nhận hàng</div>
            </div>
            {/* <div className='paymentCheckbox'>
              <Input type='radio' name='payment' />
              <div>Thanh toán qua cổng VNpay</div>
            </div> */}
          </div>
          <div className='itemOrder'>
            <div className='order' onClick={handleOrder}>
              <div>ĐẶT HÀNG</div>
              <div>Không Ưng Đổi Ngay Trong 30 Ngày</div>
            </div>
            <div>
              Nhấn <span> "ĐẶT HÀNG”</span> đồng nghĩa với việc bạn đồng ý tuân theo Điều khoản của 30Shine
            </div>
          </div>
        </div>
      </div>
    </PaymentWrapper>
  )
}
