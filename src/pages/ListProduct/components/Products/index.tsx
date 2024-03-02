import { useSelector } from 'react-redux'
import { useIsLoading } from '../../../../helpers/useIsLoading'
import styles from './styles.module.scss'
import Products from '../../../../components/Products'

export default function ProductsComponent() {
  const products = useSelector((state: any) => state.app.products)
  let [isLoading, setIsLoading] = useIsLoading()

  return (
    <div className={styles.wrapperProducts}>
      <div className={styles.findProducts}>{!isLoading && <div>{products.length} sản phẩm được tìm thấy</div>}</div>
      <Products products={products} />
    </div>
  )
}
