import styles from './styles.module.scss'
export default function SellingProducts() {
  return (
    <div className={styles.pageSellingProducts}>
      <div className={styles.homeSellingProducts}>
        <div>Trang chủ</div>
        <span>/</span>
        <div>Sản phẩm bán chạy nhất</div>
      </div>
      <div className={styles.sellingProducts}>
        <div className={styles.listProducts}>
          <div>SẢN PHẨM BÁN CHẠY NHẤT</div>
          <div className={styles.foundProduct}>
            <div>sản phẩm được tìm thấy theo “Sản phẩm bán chạy nhất”</div>
            <div className={styles.sortProduct}>
              <div>Sắp xếp theo</div>
              <select>
                <option value=''>Mặc định</option>
                <option value='Đánh giá cao'>Đánh giá cao</option>
                <option value='Giá thấp đến cao'>Giá thấp đến cao</option>
                <option value='Giá cao đến thấp'>Giá cao đến thấp</option>
                <option value='Giá thấp đến cao'>Giá thấp đến cao</option>
                <option value='Tên: từ A-Z'>Tên: từ A-Z</option>
                <option value='Tên: từ Z-A'>Tên: từ Z-A</option>
              </select>
            </div>
          </div>
          <div className={styles.product}>
            <div className={styles.informationProduct}>
              <div>
                <img
                  src='https://static.30shine.com/shop-admin/2022/10/17/30S7J273-G%C3%B4m%20X%E1%BB%8Bt%20T%C3%B3c%20glanzen%206.jpg'
                  alt='ảnh sản phẩm'
                />
              </div>
              <div>Gôm xịt tóc giữ nếp Glanzen original 380lm</div>
              <div className={styles.priceProduct}>
                <div>
                  189.000 <span>đ</span>
                </div>
                <div>
                  299.000 <span>đ</span>
                </div>
              </div>
              <div>
                <img
                  src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTv8DrfzVopdJxTYIsJptveHtNrlRN62yKeV_OpyBKZxGoCeAAG'
                  alt='ngôi sao'
                />
              </div>
            </div>
            <div className={styles.informationProduct}>
              <div>
                <img
                  src='https://static.30shine.com/shop-admin/2022/10/17/30S7J273-G%C3%B4m%20X%E1%BB%8Bt%20T%C3%B3c%20glanzen%206.jpg'
                  alt='ảnh sản phẩm'
                />
              </div>
              <div>Gôm xịt tóc giữ nếp Glanzen original 380lm</div>
              <div className={styles.priceProduct}>
                <div>
                  189.000 <span>đ</span>
                </div>
                <div>
                  299.000 <span>đ</span>
                </div>
              </div>
              <div>
                <img
                  src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTv8DrfzVopdJxTYIsJptveHtNrlRN62yKeV_OpyBKZxGoCeAAG'
                  alt='ngôi sao'
                />
              </div>
            </div>
            <div className={styles.informationProduct}>
              <div>
                <img
                  src='https://static.30shine.com/shop-admin/2022/10/17/30S7J273-G%C3%B4m%20X%E1%BB%8Bt%20T%C3%B3c%20glanzen%206.jpg'
                  alt='ảnh sản phẩm'
                />
              </div>
              <div>Gôm xịt tóc giữ nếp Glanzen original 380lm</div>
              <div className={styles.priceProduct}>
                <div>
                  189.000 <span>đ</span>
                </div>
                <div>
                  299.000 <span>đ</span>
                </div>
              </div>
              <div>
                <img
                  src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTv8DrfzVopdJxTYIsJptveHtNrlRN62yKeV_OpyBKZxGoCeAAG'
                  alt='ngôi sao'
                />
              </div>
            </div>
            <div className={styles.informationProduct}>
              <div>
                <img
                  src='https://static.30shine.com/shop-admin/2022/10/17/30S7J273-G%C3%B4m%20X%E1%BB%8Bt%20T%C3%B3c%20glanzen%206.jpg'
                  alt='ảnh sản phẩm'
                />
              </div>
              <div>Gôm xịt tóc giữ nếp Glanzen original 380lm</div>
              <div className={styles.priceProduct}>
                <div>
                  189.000 <span>đ</span>
                </div>
                <div>
                  299.000 <span>đ</span>
                </div>
              </div>
              <div>
                <img
                  src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTv8DrfzVopdJxTYIsJptveHtNrlRN62yKeV_OpyBKZxGoCeAAG'
                  alt='ngôi sao'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
