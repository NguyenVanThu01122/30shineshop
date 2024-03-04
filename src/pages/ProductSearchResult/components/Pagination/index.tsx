import { ButtonGeneral } from '../../../../components/Ui/button'
import { WrapperPagination } from './styles'
interface PaginationItemProps {
  products: any[]
  limit: number
  setCurrentPage: (pageNumber: number) => void
  currentPage: number
}

export const PaginationItem = ({ products, limit, setCurrentPage, currentPage }: PaginationItemProps) => {
  // Tính toán tổng số trang dựa trên số lượng sản phẩm và số lượng sản phẩm trên mỗi trang
  const totalPage = Math.ceil(products.length / limit)

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }

  return (
    <WrapperPagination>
      <ButtonGeneral
        className={`${currentPage === 1 && 'disable'}`}
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Prev
      </ButtonGeneral>
      {/* Array.from() để tạo một mảng mới có độ dài là totalPage, tức là tổng số trang cần hiển thị. */}
      {Array.from({ length: totalPage }, (_, index) => (
        <ButtonGeneral
          className={`${currentPage === index + 1 && 'activePage'}`}
          key={index + 1}
          onClick={() => handlePageChange(index + 1)}
        >
          {index + 1}
        </ButtonGeneral>
      ))}
      <ButtonGeneral
        className={`${currentPage === totalPage && 'disable'}`}
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPage}
      >
        Next
      </ButtonGeneral>
    </WrapperPagination>
  )
}
