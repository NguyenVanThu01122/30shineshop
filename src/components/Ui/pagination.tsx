import { Pagination } from 'antd'

const PaginationUi = ({
  current,
  total,
  pageSize,
  onChange
}: {
  current: number
  total: number
  pageSize: number
  onChange: (e: any) => void
}) => {
  return (
    <div>
      <Pagination
        current={current}
        total={total} //Prop này xác định tổng số mục (hoặc tổng số trang) có sẵn để phân trang.
        pageSize={pageSize}
        onChange={onChange}
        style={{
          display: 'flex',
          borderRadius: '6px',
          margin: 'auto',
          textAlign: 'center',
          width: '10%',
          fontSize: 'large'
        }}
      />
    </div>
  )
}
export default PaginationUi
