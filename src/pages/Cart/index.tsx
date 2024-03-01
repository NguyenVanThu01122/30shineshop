import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import NoDataMessage from '../../components/NodataMessage'
import { Loading } from '../../components/Ui/loading'
import { ERROR_MESSAGES, NO_DATA_MESSAGE, STRING } from '../../helpers/contanst'
import { useGetLengthOfCart } from '../../helpers/useGetLengthOfCart'
import { useIsLoading } from '../../helpers/useIsLoading'
import image from '../../images/empty cart.svg'
import { getListCartProduct } from '../../service/cart'
import { InformationOrder } from './components/InformationOder'
import { ListProductCart } from './components/ListProductCart'
import { ModalCart } from './components/ModalCart'
import { TitleCart } from './components/TitleCart'
import { CartWrapper } from './style'

export interface ProductType {
  id: string
  image: string
  productName: string
  originPrice: number
  amount: number
  totalPrice: number
}

export default function Cart() {
  let [listCart, setListCart] = useState<ProductType[]>([])
  const [listCartId, setListCartId] = useState<string[]>([])
  const [isShowTitleProduct, setIsShowTitleProduct] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [idDeleteOne, setIdDeleteOne] = useState('')
  const [modalTitle, setModalTitle] = useState('')
  const [modalContent, setModalContent] = useState('')
  const [getLengthOfCart] = useGetLengthOfCart()
  const [isLoading, setIsLoading] = useIsLoading()

  // hàm lấy danh sách sản phảm giỏ hàng
  const getListCart = () => {
    setIsLoading(true)
    getListCartProduct()
      .then((res) => {
        setListCart(res.data?.listCart)
        setIsLoading(false)
      })
      .catch((error) => {
        toast.error(error.response?.data?.message)
        setIsLoading(false)
      })
  }

  // Hàm mở modal xác nhận xóa sản phẩm
  const handleOpenModal = (action: string, id: string) => {
    if (action === 'deleteOne') {
      setIsModalOpen(true)
      setIdDeleteOne(id)
      setModalTitle(STRING.DELETE_PRODUCT)
      setModalContent(STRING.CONFIRM_DELETE_PRODUCT)
    } else if (action === 'deleteAll') {
      if (!listCartId.length) {
        toast.error(ERROR_MESSAGES.NOTIFICATION_ERROR)
        setIsShowTitleProduct(false)
        return
      }
      setIsModalOpen(true)
      setModalTitle(STRING.DELETE_PRODUCT_ALL)
      setModalContent(`Bạn chắc chắn muốn xóa tất cả ${listCartId?.length} sản phẩm khỏi giỏ hàng?`)
    }
  }

  useEffect(() => {
    getListCart()
  }, [])

  return (
    <CartWrapper>
      <div className='itemCart'>
        <div>GIỎ HÀNG</div>
        <div className='itemProduct'>
          <div className='product'>
            <TitleCart
              listCart={listCart}
              listCartId={listCartId}
              setListCartId={setListCartId}
              isShowTitleProduct={isShowTitleProduct}
              setIsShowTitleProduct={setIsShowTitleProduct}
              handleOpenModal={handleOpenModal}
            />

            {listCart.length > 0 && (
              <ListProductCart
                listCart={listCart}
                listCartId={listCartId}
                getListCart={getListCart}
                handleOpenModal={handleOpenModal}
                setListCartId={setListCartId}
              />
            )}

            {/* item loading */}
            {isLoading && !listCart.length && <Loading />}
            {!isLoading && !listCart.length && <NoDataMessage image={image} message={NO_DATA_MESSAGE.NO_ORDER} />}
          </div>
        </div>
      </div>

      {/* thông tin đơn hàng */}
      <InformationOrder listCartId={listCartId} listCart={listCart} />

      {/* Modal xoa 1 gio hang */}
      <ModalCart
        listCartId={listCartId}
        getListCart={getListCart}
        idDeleteOne={idDeleteOne}
        setListCartId={setListCartId}
        setIsShowTitleProduct={setIsShowTitleProduct}
        setIsLoading={setIsLoading}
        getLengthOfCart={getLengthOfCart}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        setModalContent={setModalContent}
        modalContent={modalContent}
        modalTitle={modalTitle}
        setModalTitle={setModalTitle}
      />
    </CartWrapper>
  )
}
