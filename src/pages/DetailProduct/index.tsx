import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { scrollToTop } from '../../helpers/scrollToTop'
import { getDetailProduct } from '../../service/detailProduct'
import { ComponentDetailProduct } from './componets/DetailProduct'
import { ProductSupportInfo } from './componets/ProductSupportInfo'
import { RelateProducts } from './componets/RelateProducts'
import { ModalCart } from './componets/modalCart'
import styles from './styles.module.scss'
export interface DetailProductProps {
  name?: string
  star?: number
  totalEvaluate?: number
  salePrice?: number
  originPrice?: number
  id?: string
  images?: string[] | any
}

function DetailProduct() {
  const [detailProduct, setDetailProduct] = useState<DetailProductProps>({})
  const [imageSelect, setImageSelect] = useState('')
  const [count, setCount] = useState(1)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const relatedProducts = useSelector((state: any) => state.app.products) // lấy sản phẩm liên quan trong store

  const params = useParams()
  const totalCart = useSelector((state: any) => state.app.totalCart) // lấy số lượng sản phẩm trong store

  // hàm lấy chi tiết sản phẩm
  const handleGetDetail = () => {
    getDetailProduct(params?.id).then((res) => {
      setDetailProduct(res.data?.data)
      setImageSelect(res.data?.data?.images[0])
    })
  }

  useEffect(() => {
    scrollToTop()
    handleGetDetail()
  }, [])

  return (
    <div className={styles.pageDetailProduct}>
      <div className={styles.detailProduct}>
        <ComponentDetailProduct
          count={count}
          setCount={setCount}
          handleGetDetail={handleGetDetail}
          imageSelect={imageSelect}
          setImageSelect={setImageSelect}
          detailProduct={detailProduct}
          setIsModalOpen={setIsModalOpen}
        />
        <ProductSupportInfo />
      </div>

      {relatedProducts.length > 0 && <RelateProducts handleGetDetail={handleGetDetail} />}
      {isModalOpen && (
        <ModalCart
          detailProduct={detailProduct}
          count={count}
          totalCart={totalCart}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </div>
  )
}
export default DetailProduct
