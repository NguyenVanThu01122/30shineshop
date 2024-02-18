import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { StarProduct } from '../../../../components/StarProduct'
import styles from './styles.module.scss'

export default function Products() {
  const products = useSelector((state: any) => state.app.products)
  const navigate = useNavigate()

  return products?.map((item: any) => {
    return (
      <div className={styles.itemProduct} key={item.id}>
        <div className={styles.stickerPercen}>
          <div></div>
          <div className={styles.percent}>
            <span>-</span> {Math.floor(100 - (item.salePrice / item.originPrice) * 100)}%
          </div>
          <div></div>
        </div>
        <div key={item.id} className={styles.product} onClick={() => navigate(`/detail-product/${item.id}`)}>
          <div className={styles.images}>
            <img src={item.image} alt='images' />
          </div>
          <div>{item.name}</div>
          <div className={styles.productPrice}>
            <div>
              {item.salePrice}
              <span>đ</span>
            </div>
            <div>
              {item.originPrice}
              <span>đ</span>
            </div>
          </div>
          <div className={styles.iconStar}>
            <StarProduct numberYellow={item.star} numberGray={5 - item.star} />
          </div>
        </div>
      </div>
    )
  })
}
