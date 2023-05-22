import { StarOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { publicAxios } from '../../service/axios'
import styles from './styles.module.css'
export default function ListProduct() {
  const navigate = useNavigate()
  const listCategory = {
    suaRuaMat: '64341dab40c628f4c65323f0',
    dauGoi: '64341dab40c628f4c65323f2',
    suaTam: '64341dab40c628f4c65323f3',
    sapVuotToc: '64341dab40c628f4c65323f1'
  }

  const [keyword, setKeyword] = useState('')
  const [category, setCategory] = useState('')
  const [minPrice, setMinPrice] = useState('')
  const [maxPrice, setMaxPrice] = useState('')
  const [sort, setSort] = useState('-1')
  //shop30shine.herokuapp.com/product'
  let [list, setList] = useState([])
  let [loading, setLoading] = useState(false)
  let [error, setError] = useState('')

  const handleSearch = () => {
    interface IParams {
      sort: string
      keyword?: string
      category?: string
      maxPrice?: string
      minPrice?: string
    }
    const params: IParams = {
      sort
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
    setLoading(true)
    publicAxios
      .get('/product', {
        params
      })
      .then((response) => {
        setLoading(false)
        setList(response.data?.data)
        setError('')
      })
      .catch((error) => {
        console.log(error?.response)
        setLoading(false)
        setError('Lỗi server')
      })
  }
  useEffect(() => {
    handleSearch()
  }, [])
  return (
    <div className={styles.pageProduct}>
      <div className={styles.searchProduct}>
        <div className={styles.category}>
          <div>Danh mục</div>
          <div className={styles.detailCategory}>
            <div onClick={() => setCategory('')} className={`${category === '' ? styles.activeCategory : ''}`}>
              Tất cả
            </div>
            {/* <input type='radio' name='category' onClick={() => setCategory('')} /> */}
            <div
              onClick={() => setCategory(listCategory.dauGoi)}
              className={`${category === listCategory.dauGoi ? styles.activeCategory : ''}`}
            >
              Dầu gội
            </div>
            {/* <input type='radio' name='category' onClick={() => setCategory(listCategory.dauGoi)} /> */}
            <div
              onClick={() => setCategory(listCategory.suaRuaMat)}
              className={`${category === listCategory.suaRuaMat ? styles.activeCategory : ''}`}
            >
              Sữa rửa mặt
            </div>
            {/* <input type='radio' name='category' onClick={() => setCategory(listCategory.suaRuaMat)} /> */}
            <div
              onClick={() => setCategory(listCategory.suaTam)}
              className={`${category === listCategory.suaTam ? styles.activeCategory : ''}`}
            >
              Sữa tắm
            </div>
            {/* <input type='radio' name='category' onClick={() => setCategory(listCategory.suaTam)} /> */}
            <div
              onClick={() => setCategory(listCategory.sapVuotToc)}
              className={`${category === listCategory.sapVuotToc ? styles.activeCategory : ''}`}
            >
              Sắp vuốt tóc
            </div>
            {/* <input type='radio' name='category' onClick={() => setCategory(listCategory.sapVuotToc)} /> */}
          </div>
        </div>
        <div className={styles.nameProduct}>
          <span>Tên sản phẩm</span>
          <input type='text' value={keyword} onChange={(e) => setKeyword(e.target.value)} />
        </div>
        <div className={styles.numberPrice}>
          <div>Khoảng giá</div>
          <div className={styles.priceRange}>
            <span>Giá thấp nhất</span>
            <input type='number' value={minPrice} onChange={(e) => setMinPrice(e.target.value)} />
            <span>Giá cao nhất</span>
            <input type='number' value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />
          </div>
        </div>
        <div className={styles.selectPrice}>
          <span>Sắp xếp theo</span>
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value='-1'>Giá mặc định</option>
            <option value='0'>Giá từ thấp đến cao</option>
            <option value='1'>Giá từ cao đến thấp</option>
          </select>
        </div>
        <Button type='primary' size='large' onClick={handleSearch}>
          Tìm kiếm
        </Button>
        {/* <div className={styles.buttonSearch}>
          <button onClick={handleSearch}>Tìm kiếm sản phẩm</button>
        </div> */}
      </div>

      <div className={styles.findProducts}>
        <div>{list.length} sản phẩm được tìm thấy</div>
      </div>
      <div className={styles.listProduct}>
        {loading && (
          <div className={styles.loading}>
            <img src='https://i.stack.imgur.com/hzk6C.gif' alt='loading' />
          </div>
        )}
        {!loading &&
          list.map((item: any) => {
            return (
              <div className={styles.itemProduct} key={item.id}>
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

        {error}
      </div>
    </div>
  )
}
