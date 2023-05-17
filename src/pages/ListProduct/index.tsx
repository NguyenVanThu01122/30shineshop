import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './styles.module.css'
export default function ListProduct() {
  const navigate = useNavigate()
  let token = localStorage.getItem('token')
  if(!token){
    window.location.assign('/login')
    alert('Bạn chưa đăng nhập')

  }
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
// 
    axios
      .get('http://shop30shine.herokuapp.com/product', {
        params
      })
      .then((response) => {
        setLoading(false)
        console.log(response.data?.data)
        setList(response.data?.data)
        setError('')
      })
      .catch((error) => {
        setLoading(false)
        setError('Lỗi server')
      })
  }

  useEffect(() => {
    handleSearch()
  }, [keyword, minPrice, maxPrice, sort, category])
  return (
    <div className={styles.pageProduct}>
      <div className={styles.searchProduct}>
        <div className={styles.category}>
          <div>Danh mục</div>
          <div>
            <span>Tất cả</span>
            <input type='radio' name='category' onClick={() => setCategory('')} />
            <span>Dầu gội</span>
            <input type='radio' name='category' onClick={() => setCategory(listCategory.dauGoi)} />
            <span>Sữa rửa mặt</span>
            <input type='radio' name='category' onClick={() => setCategory(listCategory.suaRuaMat)} />
            <span>Sữa tắm</span>
            <input type='radio' name='category' onClick={() => setCategory(listCategory.suaTam)} />
            <span>Sắp vuốt tóc</span>
            <input type='radio' name='category' onClick={() => setCategory(listCategory.sapVuotToc)} />
          </div>
        </div>

        <div className={styles.nameProduct}>
          <div>Tên sản phẩm</div>
          <input type='text' value={keyword} onChange={(e) => setKeyword(e.target.value)} />
        </div>

        <div className={styles.numberPrice}>
          <div>Khoảng giá</div>
          <span>Giá thấp nhất</span>
          <input type='number' value={minPrice} onChange={(e) => setMinPrice(e.target.value)} />
          <span>Giá cao nhất</span>
          <input type='number' value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />
        </div>

        <div className={styles.selectPrice}>
          <div>Sắp xếp theo</div>
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value='-1'>Giá mặc định</option>
            <option value='0'>Giá từ thấp đến cao</option>
            <option value='1'>Giá từ cao đến thấp</option>
          </select>
        </div>

        {/* <div className={styles.buttonSearch}>
          <button onClick={handleSearch}>Tìm kiếm sản phẩm</button>
        </div> */}
      </div>

      <div className={styles.findProducts}>
        <div>{list.length} sản phẩm được tìm thấy</div>
      </div>

      {/* <img src='https://i.stack.imgur.com/hzk6C.gif' alt='' /> */}
      <div className={styles.listProduct}>
        {loading && <img src='https://i.stack.imgur.com/hzk6C.gif' alt='' />}
        {!loading &&
          list.map((item: any) => {
            return (
              <div className={styles.itemProduct}>
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
                    {item.star === 5 && <img src='' alt='5 sao' />}
                    {item.star === 4 && <img src='' alt='4 sao' />}
                    {item.star === 3 && <img src='' alt='3 sao' />}
                    {item.star === 2 && <img src='' alt='2 sao' />}
                    {item.star === 1 && <img src='' alt='1 sao' />}
                    {item.star === 0 && (
                      <img
                        src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTv8DrfzVopdJxTYIsJptveHtNrlRN62yKeV_OpyBKZxGoCeAAG'
                        alt='iconStar'
                      />
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
