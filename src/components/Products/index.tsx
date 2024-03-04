import { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { ProductResultType } from '../../redux/reducers/app'
import { CurrencyFormat } from '../CurrencyFormat'
import { StarProduct } from '../StarProduct'
import styles from './styles.module.scss'

export default function Products({ products }: { products: ProductResultType[] }) {
  const navigate = useNavigate()

  // hàm tính toán giảm giá phần trăm cho sản phẩm
  const calculateDiscountPercentage = useMemo(() => {
    return (salePrice: number, originPrice: number) => {
      if (salePrice && originPrice) {
        return Math.floor(100 - (salePrice / originPrice) * 100)
      } else {
        return 0
      }
    }
  }, [])

  return (
    <div className={styles.containerProduct}>
      {products.map((item: ProductResultType) => (
        <div
          className={styles.itemProduct}
          key={item.id}
          onClick={() => {
            navigate(`/detail-product/${item.id}`)
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
  )
}
