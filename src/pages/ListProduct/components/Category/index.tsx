import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addListProduct } from '../../../../redux/actions/detailProduct'
import { privateAxios } from '../../../../service/axios'
import styles from './styles.module.scss'

export default function Category({
  listCategory,
  category,
  setCategory
}: // getListProduct
{
  listCategory: any
  category: string
  setCategory: any
  // getListProduct: any
}) {
  const dispatch = useDispatch()

  const handleSearch = () => {
    privateAxios
      .get('/product', {
        params: {
          category
        }
      })
      .then((res) => {
        dispatch(addListProduct(res.data?.data))
      })
  }
  useEffect(() => {
    // getListProduct()
  }, [category])

  return (
    <div className={styles.selectCategory}>
      <div onClick={() => setCategory('')} className={category === '' && styles.activeCategory}>
        Tất cả
      </div>
      <div
        onClick={() => setCategory(listCategory.Dầu_Gội)}
        className={`${category === listCategory.Dầu_Gội && styles.activeCategory}`}
      >
        Dầu gội
      </div>
      <div
        onClick={() => setCategory(listCategory.Sữa_Rửa_Mặt)}
        className={`${category === listCategory.Sữa_Rửa_Mặt && styles.activeCategory}`}
      >
        Sữa rửa mặt
      </div>
      <div
        onClick={() => setCategory(listCategory.Sữa_Tắm)}
        className={`${category === listCategory.Sữa_Tắm && styles.activeCategory}`}
      >
        Sữa tắm
      </div>
      <div
        onClick={() => setCategory(listCategory.Sáp_Vuốt_Tóc)}
        className={`${category === listCategory.Sáp_Vuốt_Tóc && styles.activeCategory}`}
      >
        Sáp vuốt tóc
      </div>
    </div>
  )
}
