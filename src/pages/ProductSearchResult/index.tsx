import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import NoDataMessage from '../../components/NodataMessage'
import PageNavbar from '../../components/PageNavbar'
import { Loading } from '../../components/Ui/loading'
import { LIMIT, NO_PRODUCT_FOUND_MESSAGE, PAGE, PAGE_NAMES } from '../../helpers/contanst'
import { scrollToTop } from '../../helpers/scrollToTop'
import { RootState } from '../../redux/Slices/rootReducer'
import { PaginationItem } from './components/Pagination'
import { ProductResult } from './components/ProductResult'
import { ContainerProduct, Wrapper } from './styles'

const ProductSearchResult = () => {
  const products = useSelector((state: RootState) => state.app.productSearch)
  const keyword = useSelector((state: RootState) => state.app.keywordSearch)
  const isLoading = useSelector((state: RootState) => state.app.isLoading)
  const [currentPage, setCurrentPage] = useState(PAGE)
  const limit = LIMIT

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
          <ProductResult products={products} currentPage={currentPage} keyword={keyword} limit={limit} />
          {products.length > 0 && (
            <PaginationItem
              products={products}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              limit={limit}
            />
          )}
        </ContainerProduct>
      )}
      {!products.length && !isLoading && <NoDataMessage message={NO_PRODUCT_FOUND_MESSAGE} />}
    </Wrapper>
  )
}

export default ProductSearchResult
