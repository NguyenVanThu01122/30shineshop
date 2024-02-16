import { Pagination } from 'antd'

export const PaginationUi = ({
  current,
  total,
  pageSize,
  onChange
}: {
  current: number
  total: number
  pageSize: number
  onChange: any
}) => {
  return (
    <div>
      <Pagination
        current={current}
        total={total} //Prop này xác định tổng số mục (hoặc tổng số trang) có sẵn để phân trang.
        pageSize={pageSize}
        onChange={onChange}
        style={{ display: 'flex', borderRadius: '6px', margin: 'auto', width: '10%', fontSize: 'large' }}
      />
    </div>
  )
}
