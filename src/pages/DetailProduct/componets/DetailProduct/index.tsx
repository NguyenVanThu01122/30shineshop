import { Dispatch, SetStateAction } from 'react'
import { BiChevronDown } from 'react-icons/bi'
import { BsCartPlus } from 'react-icons/bs'
import { toast } from 'react-toastify'
import { DetailProductProps } from '../..'
import { CurrencyFormat } from '../../../../components/CurrencyFormat'
import { StarProduct } from '../../../../components/StarProduct'
import { ERROR_MESSAGES } from '../../../../helpers/contanst'
import { useBuyNow } from '../../../../helpers/useBuyNow'
import { useGetLengthOfCart } from '../../../../helpers/useGetLengthOfCart'
import { getListCartProduct } from '../../../../services/cart'
import { addProductCart } from '../../../../services/detailProduct'
import { CustomerFeedback } from '../CustomerFeedback'
import { WrapperDetail } from './styles'

interface ComponentDetailProps {
  setCount: any
  count: number
  imageSelect: string
  setImageSelect: any
  detailProduct: DetailProductProps
  handleGetDetail: () => void
  setIsModalOpen: Dispatch<SetStateAction<boolean>>
}

export default function ComponentDetailProduct({
  count,
  setCount,
  imageSelect,
  setImageSelect,
  detailProduct,
  handleGetDetail,
  setIsModalOpen
}: ComponentDetailProps) {
  const [getLengthOfCart] = useGetLengthOfCart()
  const [handleBuyNow] = useBuyNow()

  // hàm xử lý check sp có trong giỏ hàng và add sp vào giỏ hàng
  const handleAddProductCart = (idProduct: string, amount: number) => {
    getListCartProduct().then((res: any) => {
      const currentCart = res.data?.listCart
      // check đk nếu name sp trong pageCart và pageDetailProduct nếu là 1 thì hiện thông báo toast..
      if (currentCart.some((item: any) => item?.productName === detailProduct?.name)) {
        toast.error(ERROR_MESSAGES?.NOTIFICATION_PlEASE_CHOOSE_ANOTHER_PRODUCT)
        return
      }
      // add sp vào giỏ hàng
      else {
        addProductCart(idProduct, amount)
          .then((res) => {
            setIsModalOpen(true)
            getLengthOfCart()
          })
          .catch((error) => {
            toast.error(error.response?.data?.message)
          })
      }
    })
  }
  // hàm giảm số lượng sản phẩm
  const decreaseNumber = () => {
    if (count > 1) {
      setCount(count - 1)
    }
  }

  // hàm tăng số lượng sản
  const increaseNumber = () => {
    setCount(count + 1)
  }

  // hàm chọn ảnh sản phẩm
  const handleSelectImage = (item: string) => {
    setImageSelect(item)
  }
  return (
    <WrapperDetail>
      <div className='product'>
        <div className='imgProduct'>
          <img src={imageSelect} alt='' />
        </div>
        <div className='detailInformation'>
          <div>{detailProduct?.name}</div>
          <div className='number'>
            <div>{detailProduct?.star}</div>
            <div>
              <StarProduct
                numberYellow={detailProduct?.star || 0}
                numberGray={detailProduct ? 5 - (detailProduct?.star || 0) : 5}
              />
            </div>
            <div>{detailProduct?.totalEvaluate} đánh giá</div>
          </div>
          <div className='vnd'>
            {' '}
            <CurrencyFormat amount={detailProduct?.salePrice} /> VND
          </div>
          <div className='salePrice'>
            <div>
              <CurrencyFormat amount={detailProduct?.originPrice} /> VND
            </div>
            <div>
              Giảm{' '}
              {detailProduct && detailProduct.originPrice && detailProduct.salePrice
                ? Math.floor(((detailProduct.originPrice - detailProduct.salePrice) / detailProduct.originPrice) * 100)
                : 0}
              %
            </div>
          </div>
          <div className='quantity'>
            <div>Số lượng</div>
            <div className='count'>
              <div onClick={() => decreaseNumber()}>-</div>
              <div>{count}</div>
              <div onClick={() => increaseNumber()}>+</div>
            </div>
          </div>
          <div className='orderProducts'>
            <div className='addCart' onClick={() => handleAddProductCart(detailProduct.id || '', count)}>
              <div>
                <BsCartPlus className='icon' />
              </div>
              <div>THÊM GIỎ HÀNG</div>
            </div>
            <div className='buyNow' onClick={() => handleBuyNow(detailProduct.id || '', count)}>
              <div>MUA NGAY</div>
              <div>Không ưng đổi ngay trong 30 ngày</div>
            </div>
          </div>
        </div>
      </div>

      <div className='imgProduct'>
        {detailProduct?.images?.map((item: string) => {
          return (
            <div onClick={() => handleSelectImage(item)}>
              <img src={item} alt='' className={`${imageSelect === item ? 'active' : ''}`} />
            </div>
          )
        })}
      </div>
      <div className='informationItem'>
        <div className='itemProduct'>
          <div className='instruct'>
            <div>Thông tin sản phẩm</div>
            <div>Thành phần</div>
            <div>Hướng dẫn sử dụng</div>
          </div>
          <div>[NEW 2023] Combo Diệt Mụn </div>
          <div className='readMore'>
            <div>Đọc thêm</div>
            <BiChevronDown className='iconDown' />
          </div>
        </div>
        <CustomerFeedback detailProduct={detailProduct} handleDetail={handleGetDetail} />
      </div>
    </WrapperDetail>
  )
}
