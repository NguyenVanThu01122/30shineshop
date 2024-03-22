import { useSelector } from 'react-redux'
import Products from '../../../../components/Products'
import { useIsLoading } from '../../../../helpers/useIsLoading'
import { RootState } from '../../../../redux/Slices/rootReducer'
import styles from './styles.module.scss'

export default function ProductsComponent() {
  const products = useSelector((state: RootState) => state.app.products)
  let [isLoading, setIsLoading] = useIsLoading()
  const productsLength = products ? products.length : 0
  return (
    <div className={styles.wrapperProducts}>
      <div className={styles.findProducts}>{!isLoading && <div>{productsLength} sản phẩm được tìm thấy</div>}</div>
      <Products products={products} />
    </div>
  )
}
