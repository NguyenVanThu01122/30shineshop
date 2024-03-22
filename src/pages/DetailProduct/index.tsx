import { Suspense, lazy, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import CustomLoading from '../../components/customLoading'
import { ERROR_MESSAGES, INITIAL_COUNT } from '../../helpers/contanst'
import { scrollToTop } from '../../helpers/scrollToTop'
import { useIsLoading } from '../../helpers/useIsLoading'
import { RootState } from '../../redux/Slices/rootReducer'
import { getDetailProduct } from '../../services/detailProduct'
import { RelateProducts } from './components/RelateProducts'
import { ContentDetail, Wrapper } from './styles'
export interface DetailProductType {
  name?: string
  star?: number
  totalEvaluate?: number
  salePrice?: number
  originPrice?: number
  id?: string
  images?: string[] | any
}
const ComponentDetailProductLazy = lazy(() => import('./components/ComponentDetailProduct'))
const ProductSupportInfoLazy = lazy(() => import('./components/ProductSupportInfo'))
const ModalCartLazy = lazy(() => import('./components/modalCart'))

export default function DetailProduct() {
  const [detailProduct, setDetailProduct] = useState({})
  const [imageSelect, setImageSelect] = useState('')
  const [count, setCount] = useState(INITIAL_COUNT)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const relatedProducts = useSelector((state: RootState) => state.app.relateProducts)
  const totalCart = useSelector((state: RootState) => state.app.totalCart)
  const params = useParams()
  const idDetail = params?.id
  const [isLoading, setIsLoading] = useIsLoading()

  // hàm lấy chi tiết sản phẩm
  const handleGetDetail = () => {
    setIsLoading(true)
    if (idDetail) {
      getDetailProduct(idDetail)
        .then((res) => {
          setDetailProduct(res.data?.data)
          setImageSelect(res.data?.data?.images[0])
          setIsLoading(false)
        })
        .catch((error) => {
          toast.error(ERROR_MESSAGES.SERVER_ERROR)
          setIsLoading(false)
        })
    }
  }

  useEffect(() => {
    scrollToTop()
    handleGetDetail()
  }, [])

  return (
    <Wrapper>
      {isLoading ? (
        <CustomLoading />
      ) : (
        /* sử dụng suspense như 1 container chứa các component lazy */
        <Suspense>
          <ContentDetail>
            <ComponentDetailProductLazy
              count={count}
              setCount={setCount}
              handleGetDetail={handleGetDetail}
              imageSelect={imageSelect}
              setImageSelect={setImageSelect}
              detailProduct={detailProduct}
              setIsModalOpen={setIsModalOpen}
            />
            <ProductSupportInfoLazy />
          </ContentDetail>

          {relatedProducts.length > 0 && (
            <RelateProducts handleGetDetail={handleGetDetail} setDetailProduct={setDetailProduct} />
          )}
          {isModalOpen && (
            <ModalCartLazy
              detailProduct={detailProduct}
              count={count}
              totalCart={totalCart}
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
            />
          )}
        </Suspense>
      )}
    </Wrapper>
  )
}
