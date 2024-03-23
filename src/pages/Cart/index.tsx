import { Suspense, lazy, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import NoDataMessage from '../../components/NodataMessage'
import PageNavbar from '../../components/PageNavbar'
import { Loading } from '../../components/Ui/loading'
import checkLogin from '../../helpers/checkLogin'
import { NO_DATA_MESSAGE, PAGE_NAMES, STRING } from '../../helpers/contanst'
import { useGetLengthOfCart } from '../../helpers/useGetLengthOfCart'
import { useIsLoading } from '../../helpers/useIsLoading'
import { useShowDataMessage } from '../../helpers/useIsShowDataMessage'
import image from '../../images/empty cart.svg'
import { getListCartProduct } from '../../services/cart'
import { ContainerCart, ContentCart, ItemProduct, TitlePage, WrapperCart } from './style'
export interface ProductType {
  id: string
  image: string
  productName: string
  originPrice: number
  amount: number
  totalPrice: number
}

const TitleCartLazy = lazy(() => import('./components/TitleCart'))
const ListProductCartLazy = lazy(() => import('./components/ListProductCart'))
const InformationOrderLazy = lazy(() => import('./components/InformationOder'))
const ModalDeleteProductLazy = lazy(() => import('./components/ModalDeleteProduct'))

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
  const [isShowNoDataMessage, setIsShowDataMessage] = useShowDataMessage()
  const isLogin = checkLogin()
  const isCartNotEmpty = listCart.length > 0

  // hàm lấy danh sách sản phảm giỏ hàng
  const getListCart = () => {
    setIsLoading(true)
    getListCartProduct()
      .then((res) => {
        setListCart(res.data?.listCart)
        setIsLoading(false)
        setIsShowDataMessage(true)
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
      setIsModalOpen(true)
      setModalTitle(STRING.DELETE_PRODUCT_ALL)
      setModalContent(`Bạn chắc chắn muốn xóa tất cả ${listCartId?.length} sản phẩm khỏi giỏ hàng?`)
    }
  }

  useEffect(() => {
    if (isLogin) {
      getListCart()
    } else {
      setListCart([])
      setIsShowDataMessage(true)
    }
  }, [isLogin])

  return (
    <WrapperCart>
      <PageNavbar page={PAGE_NAMES.CART} />
      <ContainerCart>
        {isLoading && !isCartNotEmpty ? (
          <Loading />
        ) : !isLoading && !isCartNotEmpty && isShowNoDataMessage ? (
          <NoDataMessage image={image} message={NO_DATA_MESSAGE.NO_PRODUCT_CART} />
        ) : (
          /* sử dụng suspense như 1 container chứa các component lazy */
          <Suspense>
            {isLogin && isCartNotEmpty && (
              <ContentCart>
                <TitlePage>GIỎ HÀNG</TitlePage>
                <ItemProduct>
                  <TitleCartLazy
                    listCart={listCart}
                    listCartId={listCartId}
                    setListCartId={setListCartId}
                    isShowTitleProduct={isShowTitleProduct}
                    setIsShowTitleProduct={setIsShowTitleProduct}
                    handleOpenModal={handleOpenModal}
                  />

                  <ListProductCartLazy
                    listCart={listCart}
                    listCartId={listCartId}
                    getListCart={getListCart}
                    handleOpenModal={handleOpenModal}
                    setListCartId={setListCartId}
                  />
                </ItemProduct>
              </ContentCart>
            )}

            {/* thông tin đơn hàng */}
            {isCartNotEmpty && <InformationOrderLazy listCart={listCart} listCartId={listCartId} />}

            {/* Modal xoa sp gio hang */}
            <ModalDeleteProductLazy
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
          </Suspense>
        )}
      </ContainerCart>
    </WrapperCart>
  )
}
