import Products from '../../../../components/Products'
import Translations from '../../../../components/translations'
import { ProductResultType } from '../../../../redux/Slices/appSlices'
import { Title, WrapperResult } from './styles'

export const ProductResult = ({
  keyword,
  products,
  currentPage,
  limit
}: {
  keyword: string
  currentPage: number
  products: ProductResultType[]
  limit: number
}) => {
  // Lấy chỉ mục bắt đầu và chỉ mục kết thúc của sản phẩm trên trang hiện tại
  const startIndex = (currentPage - 1) * limit //index = 0
  let endIndex = currentPage * limit //index = 10

  // Lọc các sản phẩm để hiển thị trên trang hiện tại
  const displayedProducts = products.slice(startIndex, endIndex) // dùng hàm slice để cắt ptu trong mảng, cắt từ startIndex đến endIndex và trả về mảng mới là displayedProducts

  return (
    <WrapperResult>
      <Title>
        <Translations text='SEARCH_RESULTS_FOR' />
        <span>
          {keyword} ({displayedProducts.length}
          {''}
          <Translations text='PRODUCT' />)
        </span>
      </Title>
      <Products products={displayedProducts} />
    </WrapperResult>
  )
}
