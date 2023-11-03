import { StarOutlined } from '@ant-design/icons'
import { Button, Input, Pagination } from 'antd'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addListProduct } from '../../redux/actions/detailProduct'
import { privateAxios } from '../../service/axios'
import styles from './styles.module.css'
export default function ListProduct() {
  const [keyword, setKeyword] = useState('')
  const [category, setCategory] = useState('')
  const [minPrice, setMinPrice] = useState('')
  const [maxPrice, setMaxPrice] = useState('')
  const [sort, setSort] = useState<any>('-1')
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(12)
  const [total, setTotal] = useState(0)
  let [isLoading, setisLoading] = useState(false)
  const [error, setError] = useState('')
  const [isCategory, setIsCategory] = useState(false)

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const products = useSelector((state: any) => state.app.products)

  const listCategory = {
    suaRuaMat: '64357b7a431573bb82a5f028',
    dauGoi: '64341dab40c628f4c65323f2',
    suaTam: '64341dab40c628f4c65323f3',
    sapVuotToc: '64341dab40c628f4c65323f1'
  }

  const handleGetListProduct = () => {
    interface IParams {
      sort: string
      keyword?: string
      category?: string
      maxPrice?: string
      minPrice?: string
      page: number
      limit: number
    }
    const params: IParams = {
      sort,
      page,
      limit: 12
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

    setisLoading(true)
    privateAxios
      .get('/product', {
        params
      })
      .then((response) => {
        setTotal(response.data?.totalProducts)
        dispatch(addListProduct(response.data?.data))
        setError('')
        setisLoading(false)
        setIsCategory(false)
      })
      .catch((error) => {
        setisLoading(false)
        setError('lỗi server')
      })
  }

  const handleChangePage = (page: number) => {
    setPage(page)
    window.location.reload()
  }

  const handleChangeKeyword = (e: any) => {
    const valueInputSearch = e.target.value
    setKeyword(valueInputSearch)
    setPage(1)
  }

  useEffect(() => {
    // Sẽ được chạy sau lần render thành công đầu tiên, và được chạy lại mối khi giá trị của page thay đổi
    handleGetListProduct()
  }, [page, keyword, category, maxPrice, minPrice, sort])

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Sử dụng 'smooth' để có hiệu ứng cuộn mượt
    })
  }, [])

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
            <div className={styles.selectCategory}>
              <div onClick={() => setCategory('')} className={category === '' ? styles.activeCategory : ''}>
                Tất cả
              </div>
              <div
                onClick={() => setCategory(listCategory.dauGoi)}
                // className={`${category === listCategory.dauGoi ? styles.activeCategory : ''}`}
              >
                Dầu gội
              </div>
              <div
                onClick={() => setCategory(listCategory.suaRuaMat)}
                // className={`${category === listCategory.suaRuaMat ? styles.activeCategory : ''}`}
              >
                Sữa rửa mặt
              </div>
              <div
                onClick={() => setCategory(listCategory.suaTam)}
                // className={`${category === listCategory.suaTam ? styles.activeCategory : ''}`}
              >
                Sữa tắm
              </div>
              <div
                onClick={() => setCategory(listCategory.sapVuotToc)}
                // className={`${category === listCategory.sapVuotToc ? styles.activeCategory : ''}`}
              >
                Sắp vuốt tóc
              </div>
            </div>
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
      <div className={styles.listProduct}>
        {isLoading && (
          <div className={styles.loading}>
            <img src='https://i.stack.imgur.com/hzk6C.gif' alt='loading' />
          </div>
        )}
        {!isLoading &&
          products?.map((item: any) => {
            return (
              <div className={styles.itemProduct} key={item.id}>
                <div className={styles.stickerPercen}>
                  <div></div>
                  <div className={styles.percent}>
                    <span>-</span> {Math.floor(100 - (item.salePrice / item.originPrice) * 100)}%
                  </div>
                  <div></div>
                </div>
                <div key={item.id} className={styles.product} onClick={() => navigate(`/detail-product/${item.id}`)}>
                  <div className={styles.images}>
                    <img src={item.image} alt='images' />
                  </div>
                  <div>{item.name}</div>
                  <div className={styles.productPrice}>
                    <div>
                      {item.salePrice}
                      <span>đ</span>
                    </div>
                    <div>
                      {item.originPrice}
                      <span>đ</span>
                    </div>
                  </div>
                  <div className={styles.iconStar}>
                    {item.star === 5 && (
                      <div>
                        <StarOutlined style={{ color: 'yellow' }} />
                        <StarOutlined style={{ color: 'yellow' }} />
                        <StarOutlined style={{ color: 'yellow' }} />
                        <StarOutlined style={{ color: 'yellow' }} />
                        <StarOutlined style={{ color: 'yellow' }} />
                      </div>
                    )}
                    {item.star === 4 && (
                      <div>
                        <StarOutlined style={{ color: 'yellow' }} />
                        <StarOutlined style={{ color: 'yellow' }} />
                        <StarOutlined style={{ color: 'yellow' }} />
                        <StarOutlined style={{ color: 'yellow' }} />
                        <StarOutlined style={{ color: 'gray' }} />
                      </div>
                    )}
                    {item.star === 3 && (
                      <div>
                        <StarOutlined style={{ color: 'yellow' }} />
                        <StarOutlined style={{ color: 'yellow' }} />
                        <StarOutlined style={{ color: 'yellow' }} />
                        <StarOutlined style={{ color: 'gray' }} />
                        <StarOutlined style={{ color: 'gray' }} />
                      </div>
                    )}
                    {item.star === 2 && (
                      <div>
                        <StarOutlined style={{ color: 'yellow' }} />
                        <StarOutlined style={{ color: 'yellow' }} />
                        <StarOutlined style={{ color: 'gray' }} />
                        <StarOutlined style={{ color: 'gray' }} />
                        <StarOutlined style={{ color: 'gray' }} />
                      </div>
                    )}
                    {item.star === 1 && (
                      <div>
                        <StarOutlined style={{ color: 'yellow' }} />
                        <StarOutlined style={{ color: 'gray' }} />
                        <StarOutlined style={{ color: 'gray' }} />
                        <StarOutlined style={{ color: 'gray' }} />
                        <StarOutlined style={{ color: 'gray' }} />
                      </div>
                    )}
                    {item.star === 0 && (
                      <div>
                        <StarOutlined style={{ color: 'gray' }} />
                        <StarOutlined style={{ color: 'gray' }} />
                        <StarOutlined style={{ color: 'gray' }} />
                        <StarOutlined style={{ color: 'gray' }} />
                        <StarOutlined style={{ color: 'gray' }} />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        <div className={styles.textError}>{error}</div>
      </div>

      {products?.length > 0 && (
        <Pagination
          current={page}
          total={total} //Prop này xác định tổng số mục (hoặc tổng số trang) có sẵn để phân trang.
          pageSize={limit}
          onChange={handleChangePage}
          className={styles.item_Pagination}
        />
      )}
    </div>
  )
}
