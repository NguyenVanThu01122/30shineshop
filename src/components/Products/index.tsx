import { useNavigate } from 'react-router-dom'
import { CurrencyFormat } from '../CurrencyFormat'
import { StarProduct } from '../StarProduct'
import styles from './styles.module.scss'
import { ProductResultType } from '../../redux/reducers/app'


export const Products = ({ products }: { products: ProductResultType[] }) => {
  const navigate = useNavigate()
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
          <div className={styles.stickerPercen}>
            <div></div>
            <div className={styles.percent}>
              <span>-</span>{' '}
              {item.salePrice && item.originPrice && `${Math.floor(100 - (item.salePrice / item.originPrice) * 100)}%`}
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
