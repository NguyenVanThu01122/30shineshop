import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import NoDataMessage from '../../components/NodataMessage'
import PageNavbar from '../../components/PageNavbar'
import { Loading } from '../../components/Ui/loading'
import { PaginationUi } from '../../components/Ui/pagination'
import { ERROR_MESSAGES, LIMIT, NO_DATA_MESSAGE, PAGE, PAGE_NAMES, SORT, TOTAL } from '../../helpers/contanst'
import { scrollToTop } from '../../helpers/scrollToTop'
import { useIsLoading } from '../../helpers/useIsLoading'
import { addListProduct } from '../../redux/actions/app'
import { TypeListProduct, listProduct } from '../../service/listProduct'
import { ProductFilterPanel } from './components/ProductFilterPanel'
import Products from './components/Products'
import { ListProducts, WrapperListProducts } from './styles'

export default function ListProduct() {
  const [keyword, setKeyword] = useState('')
  const [category, setCategory] = useState('')
  const [minPrice, setMinPrice] = useState('')
  const [maxPrice, setMaxPrice] = useState('')
  const [sort, setSort] = useState(SORT)
  const [page, setPage] = useState(PAGE)
  const [limit, setLimit] = useState(LIMIT)
  const [total, setTotal] = useState(TOTAL)

  let [isLoading, setIsLoading] = useIsLoading()
  const [isCategory, setIsCategory] = useState(false)

  const dispatch = useDispatch()
  const products = useSelector((state: any) => state.app.products)

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
      params.minPrice = minPrice
    }
    if (maxPrice) {
      params.maxPrice = maxPrice
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
      <PageNavbar page={PAGE_NAMES.LIST_PRODUCTS} />
      <ProductFilterPanel
        isCategory={isCategory}
        setIsCategory={setIsCategory}
        category={category}
        setCategory={setCategory}
        setMinPrice={setMinPrice}
        setMaxPrice={setMaxPrice}
        setSort={setSort}
        setPage={setPage}
        setKeyword={setKeyword}
      />
      {/* <FindProducts>{!isLoading && <div>{products.length} sản phẩm được tìm thấy</div>}</FindProducts> */}
      <ListProducts>{!isLoading && <Products />}</ListProducts>

      {/* item Loading */}
      {isLoading && <Loading />}
      {!isLoading && !products?.length && <NoDataMessage message={NO_DATA_MESSAGE.NO_PRODUCT} />}

      {products?.length > 0 && (
        <PaginationUi
          current={page}
          total={total} //Prop này xác định tổng số mục (hoặc tổng số trang) có sẵn để phân trang.
          pageSize={limit}
          onChange={(page) => setPage(page)}
        />
      )}
    </WrapperListProducts>
  )
}
