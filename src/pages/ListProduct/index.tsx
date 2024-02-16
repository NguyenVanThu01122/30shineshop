import { Button, Input } from 'antd'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Category from '../../components/Category'
import Products from '../../components/Products'
import { Loading } from '../../components/Ui/loading'
import { PaginationUi } from '../../components/Ui/pagination'
import { LIST_CATEGORY } from '../../helper/contanst'
import { addListProduct } from '../../redux/actions/detailProduct'
import { TypeListProduct, listProduct } from '../../service/listProduct'
import styles from './styles.module.css'

export default function ListProduct() {
  const [keyword, setKeyword] = useState('')
  const [category, setCategory] = useState('')
  const [minPrice, setMinPrice] = useState('')
  const [maxPrice, setMaxPrice] = useState('')
  const [sort, setSort] = useState<any>('-1')
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(15)
  const [total, setTotal] = useState(0)
  let [isLoading, setIsLoading] = useState(false)
  const [isCategory, setIsCategory] = useState(false)

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const products = useSelector((state: any) => state.app.products)

  const handleGetLitsProduct = () => {
    const params: TypeListProduct = {
      sort,
      page,
      limit: 15
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
    setIsLoading(true)
    listProduct(params)
      .then((response) => {
        setTotal(response.data?.totalProducts)
        dispatch(addListProduct(response.data?.data))
        setIsLoading(false)
        setIsCategory(false)
      })
      .catch((error) => {
        setIsLoading(false)
        toast.error('Lỗi Server')
      })
  }

  const handleChangePage = (page: number) => {
    setPage(page)
  }

  const handleChangeKeyword = (e: any) => {
    const valueInputSearch = e.target.value
    setKeyword(valueInputSearch)
    setPage(1)
  }

  useEffect(() => {
    handleGetLitsProduct()
  }, [page, keyword, category, minPrice, maxPrice, sort, limit])

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Sử dụng 'smooth' để có hiệu ứng cuộn mượt
    })
  }, [page])

  return (
    <div className={styles.pageProduct}>
      <div className={styles.titlePage}>
        <div onClick={() => navigate('/')}>Tran chủ</div>
        <span>/ Danh sách sản phẩm</span>
      </div>
      <div className={styles.optionItem}>
        <div className={styles.itemCategory}>
          <Button onClick={() => setIsCategory(!isCategory)} className={styles.btnCategory}>
            Danh Mục
          </Button>
          {isCategory && (
            <Category
              category={category}
              setCategory={setCategory}
              listCategory={LIST_CATEGORY}
              // getListProduct={handleGetLitsProduct()}
            />
          )}
        </div>
        <Input
          className={styles.customInput}
          placeholder='nhập tên sản phẩm'
          type='text'
          value={keyword}
          onChange={handleChangeKeyword}
        />
        <Input
          className={styles.customInput}
          placeholder='Giá thấp nhất'
          type='number'
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
        <Input
          className={styles.customInput}
          placeholder='Giá cao nhất'
          type='number'
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
        <select
          className={styles.customSelect}
          placeholder='Sắp xếp theo'
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value='-1'>Mặc định</option>
          <option value='0'>Từ thấp đến cao</option>
          <option value='1'>Từ cao đến thấp</option>
        </select>
      </div>
      <div className={styles.findProducts}>{!isLoading && <div>{products.length} sản phẩm được tìm thấy</div>}</div>
      <div className={styles.listProduct}>{!isLoading && <Products />}</div>
      {isLoading && <Loading />}
      {products?.length > 0 && (
        <PaginationUi
          current={page}
          total={total} //Prop này xác định tổng số mục (hoặc tổng số trang) có sẵn để phân trang.
          pageSize={limit}
          onChange={handleChangePage}
        />
      )}
    </div>
  )
}
