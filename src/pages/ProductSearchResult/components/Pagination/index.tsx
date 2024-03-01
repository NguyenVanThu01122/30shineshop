import { ButtonGeneral } from '../../../../components/Ui/button'
import styles from './styles.module.scss'
interface PaginationItemProps {
  products: any[]
  ITEMS_PER_PAGE: number
  setCurrentPage: (pageNumber: number) => void
  currentPage: number
}

export const PaginationItem = ({ products, ITEMS_PER_PAGE, setCurrentPage, currentPage }: PaginationItemProps) => {
  // Tính toán tổng số trang dựa trên số lượng sản phẩm và số lượng sản phẩm trên mỗi trang
  const totalPage = Math.ceil(products.length / ITEMS_PER_PAGE)

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }

  return (
    <div className={styles.pagination}>
      <ButtonGeneral
        className={`${currentPage === 1 && styles.disable}`}
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Prev
      </ButtonGeneral>
      {/* Array.from() để tạo một mảng mới có độ dài là totalPage, tức là tổng số trang cần hiển thị. */}
      {Array.from({ length: totalPage }, (_, index) => (
        <ButtonGeneral
          className={`${currentPage === index + 1 && styles.activePage}`}
          key={index + 1}
          onClick={() => handlePageChange(index + 1)}
        >
          {index + 1}
        </ButtonGeneral>
      ))}
      <ButtonGeneral
        className={`${currentPage === totalPage && styles.disable}`}
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPage}
      >
        Next
      </ButtonGeneral>
    </div>
  )
}
