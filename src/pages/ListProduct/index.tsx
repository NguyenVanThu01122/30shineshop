import { Suspense, lazy, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import NoDataMessage from '../../components/NodataMessage'
import PageNavbar from '../../components/PageNavbar'
import Products from '../../components/Products'
import { Loading } from '../../components/Ui/loading'
import Translations from '../../components/translations'
import { ERROR_MESSAGES, LIMIT, MAXPRICE, MINPRICE, NO_DATA_MESSAGE, PAGE, SORT, TOTAL } from '../../helpers/contanst'
import { scrollToTop } from '../../helpers/scrollToTop'
import { useIsLoading } from '../../helpers/useIsLoading'
import { addListProduct } from '../../redux/Slices/appSlices'
import { RootState } from '../../redux/Slices/rootReducer'
import { TypeListProduct, listProduct } from '../../services/listProduct'
import { FindProduct, ListProducts, WrapperListProducts, WrapperPagination } from './styles'
import { t } from 'i18next'

const ProductFilterPanelLazy = lazy(() => import('./components/ProductFilterPanel'))
const PaginationLazy = lazy(() => import('../../components/Ui/pagination'))

export default function ListProduct() {
  const [keyword, setKeyword] = useState('')
  const [category, setCategory] = useState('')
  const [minPrice, setMinPrice] = useState(MINPRICE)
  const [maxPrice, setMaxPrice] = useState(MAXPRICE)
  const [sort, setSort] = useState(SORT)
  const [page, setPage] = useState(PAGE)
  const [limit] = useState(LIMIT)
  const [total, setTotal] = useState(TOTAL)

  let [isLoading, setIsLoading] = useIsLoading()
  const [isCategory, setIsCategory] = useState(false)

  const dispatch = useDispatch()
  const products = useSelector((state: RootState) => state.app.products)
  const productsLength = products ? products.length : 0

  const handleGetLitsProduct = () => {
    setIsLoading(true)
    setIsCategory(false)
    const params: TypeListProduct = {
      sort,
      page,
      limit
    }
    if (keyword) {
      params.keyword = keyword
    }
    if (category) {
      params.category = category
    }
    if (minPrice) {
      params.minPrice = String(minPrice)
    }
    if (maxPrice) {
      params.maxPrice = String(maxPrice)
    }
    listProduct(params)
      .then((response) => {
        setTotal(response.data?.totalProducts)
        dispatch(addListProduct(response.data?.data))
        setIsLoading(false)
      })
      .catch((error) => {
        setIsLoading(false)
        toast.error(ERROR_MESSAGES.SERVER_ERROR)
      })
  }

  useEffect(() => {
    handleGetLitsProduct()
    scrollToTop()
  }, [page, keyword, category, minPrice, maxPrice, sort, limit])

  return (
    <WrapperListProducts>
      <PageNavbar page={t('PRODUCT_LIST')} />
      {isLoading ? (
        <Loading />
      ) : (
        /* Wrap ProductFilterPanel, ProductsComponentLazy,PaginationLazy with Suspense */
        <Suspense fallback={<Loading />}>
          <ProductFilterPanelLazy
            isCategory={isCategory}
            setIsCategory={setIsCategory}
            category={category}
            setCategory={setCategory}
            setMinPrice={setMinPrice}
            setMaxPrice={setMaxPrice}
            setSort={setSort}
            sort={sort}
            setPage={setPage}
            setKeyword={setKeyword}
          />
          <ListProducts>
            <FindProduct>
              {!isLoading && (
                <div>
                  <span>{productsLength}</span>
                  <Translations text={'PRODUCT_FOUND'} />
                </div>
              )}
            </FindProduct>
            <Products products={products} />
          </ListProducts>

          {/* pagination */}
          {products?.length > 0 && (
            <WrapperPagination>
              <PaginationLazy current={page} total={total} pageSize={limit} onChange={(page) => setPage(page)} />
            </WrapperPagination>
          )}
        </Suspense>
      )}

      {!isLoading && !products?.length && <NoDataMessage message={NO_DATA_MESSAGE.NO_PRODUCT} />}
    </WrapperListProducts>
  )
}
