import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import NoDataMessage from '../../components/NodataMessage'
import PageNavbar from '../../components/PageNavbar'
import { Loading } from '../../components/Ui/loading'
import { NO_PRODUCT_FOUND_MESSAGE, PAGE_NAMES } from '../../helpers/contanst'
import { scrollToTop } from '../../helpers/scrollToTop'
import { ProductResultType } from '../../redux/reducers/app'
import { PaginationItem } from './components/Pagination'
import { ProductResult } from './components/ProductResult'
import { ContainerProduct, Wrapper } from './styles'

const ProductSearchResult = () => {
  const products: ProductResultType[] = useSelector((state: any) => state.app.productSearch)
  const keyword: string = useSelector((state: any) => state.app.keywordSearch)
  const [currentPage, setCurrentPage] = useState(1)
  const ITEMS_PER_PAGE = 8 // Số lượng sản phẩm hiển thị trên mỗi trang
  const isLoading = useSelector((state: any) => state.app.isLoading)

  useEffect(() => {
    scrollToTop()
  }, [currentPage])

  return (
    <Wrapper>
      <PageNavbar page={PAGE_NAMES.SEARCH_RESULTS} />
      {isLoading ? (
        <Loading />
      ) : (
        <ContainerProduct>
          <ProductResult
            products={products}
            currentPage={currentPage}
            keyword={keyword}
            ITEMS_PER_PAGE={ITEMS_PER_PAGE}
          />
          {products.length > 0 && (
            <PaginationItem
              products={products}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              ITEMS_PER_PAGE={ITEMS_PER_PAGE}
            />
          )}
        </ContainerProduct>
      )}
      {!products.length && <NoDataMessage message={NO_PRODUCT_FOUND_MESSAGE} />}
    </Wrapper>
  )
}

export default ProductSearchResult
