import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { CurrencyFormat } from '../../../../components/CurrencyFormat'
import { StarProduct } from '../../../../components/StarProduct'
import { ERROR_MESSAGES } from '../../../../helpers/contanst'
import { scrollToTop } from '../../../../helpers/scrollToTop'
import { useCalculateProductPercentage } from '../../../../helpers/useCalculateProductPercentage'

import { ProductResultType, saveRelateProducts } from '../../../../redux/Slices/appSlices'
import { getProductRelate } from '../../../../services/detailProduct'
import styles from './styles.module.scss'

export const RelateProducts = ({ handleGetDetail, setDetailProduct }: any) => {
  const relateProducts = useSelector((state: any) => state.app.relateProducts)
  const calculateDiscountPercentage = useCalculateProductPercentage()
  const navigate = useNavigate()
  const params = useParams()
  const dispatch = useDispatch()

  // lấy sp liên quan
  const handleGetRelate = () => {
    getProductRelate(params?.id ?? '')
      .then((res) => {
        setDetailProduct(res.data?.data)
        dispatch(saveRelateProducts(res.data.data))
      })
      .catch((error) => {
        toast.error(ERROR_MESSAGES.SERVER_ERROR)
      })
  }

  const redirectDetailProduct = (idProduct: string) => {
    handleGetDetail()
    navigate(idProduct)
    scrollToTop()
  }

  useEffect(() => {
    handleGetRelate()
  }, [])

  return (
    <div className={styles.otherProducts}>
      <div>SẢN PHẨM CÙNG LOẠI</div>
      <div className={styles.containerProduct}>
        {/* <Products products={relateProducts} /> */}
        {relateProducts.map((item: ProductResultType) => (
          <div
            className={styles.itemProduct}
            key={item.id}
            onClick={() => {
              redirectDetailProduct(`/detail-product/${item.id}`)
            }}
          >
            <div className={styles.stickerPercent}>
              <div></div>
              <div className={styles.percent}>
                <span>-</span> {calculateDiscountPercentage(item?.salePrice || 0, item?.originPrice || 0)}%
              </div>
              <div></div>
            </div>
            <div className={styles.product}>
              <div className={styles.images}>
                <img src={item.image} alt='images' />
              </div>
              <div>{item.name}</div>
              <div className={styles.productPrice}>
                <div>
                  <CurrencyFormat amount={item.salePrice} />
                  <span>đ</span>
                </div>
                <div>
                  <CurrencyFormat amount={item.originPrice} />
                  <span>đ</span>
                </div>
              </div>
              <div className={styles.iconStar}>
                <StarProduct numberYellow={item.star || 0} numberGray={5 - (item.star || 0)} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
