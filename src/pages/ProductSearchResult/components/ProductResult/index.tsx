import { Products } from '../../../../components/Products'
import { ProductResultType } from '../../../../redux/reducers/app'
import { Title, WrapperResult } from './styles'

export const ProductResult = ({
  keyword,
  products,
  currentPage,
  ITEMS_PER_PAGE
}: {
  keyword: string
  currentPage: number
  products: ProductResultType[]
  ITEMS_PER_PAGE: number
}) => {
  // Lấy chỉ mục bắt đầu và chỉ mục kết thúc của sản phẩm trên trang hiện tại
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE //index = 0
  const endIndex = currentPage * ITEMS_PER_PAGE //index = 8

  // Lọc các sản phẩm để hiển thị trên trang hiện tại
  const displayedProducts = products.slice(startIndex, endIndex) // dùng hàm slice để cắt ptu trong mảng, cắt từ startIndex đến endIndex và trả về mảng mới là displayedProducts
  return (
    <WrapperResult>
      <Title>
        Kết quả tìm kiếm cho:{' '}
        <span>
          {keyword} ({products.length} sản phẩm)
        </span>
      </Title>
      <Products products={displayedProducts} />
    </WrapperResult>
  )
}
