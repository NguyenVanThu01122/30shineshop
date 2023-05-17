import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { BiChevronDown } from 'react-icons/bi'
import { BsCartPlus } from 'react-icons/bs'
import { useParams } from 'react-router-dom'
import styles from './index.module.scss'

function DetailProduct() {
 
  let params = useParams();
  // GET: https://shop30shine.herokuapp.com/product/relate/:id
  const [detailProduct, setDetailProduct] = useState<any>({})
  // http://shop30shine.herokuapp.com/product/${params.id}
  useEffect(() => {
    axios
      .get('https://shop30shine.herokuapp.com/product/relate/:id')
      .then((res) => {
        console.log(res.data?.data)
        // setDetailProduct(res.data.data)
      })
      .catch((_error) => {})
    setDetailProduct('lỗi')
  }, [])
  let [count, setCount] = useState(1)

  let reduceNumber = () => {
    if (count > 0) setCount(count - 1)
  }
  let increaseNumber = () => {
    if (count < 10) {
      setCount(count + 1)
    } else {
      alert('bạn không được mua quá 10 sản phẩm')
    }
  }
  return (
    <div className={styles.pageDetailProduct}>
      <div className={styles.detailProduct}>
        <div className={styles.headerProduct}>
          <div className={styles.product}>
            <div className={styles.imgProduct}>
              <img src='https://static.30shine.com/shop-admin/2023/03/06/30S4BMAN-COMBO%201.jpg' alt='' />
            </div>
            <div className={styles.detailnformation}>
              <div>Combo Da Sạch Mụn Sáng Mịn</div>
              <div className={styles.number}>
                <div>0</div>
                <img
                  src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTv8DrfzVopdJxTYIsJptveHtNrlRN62yKeV_OpyBKZxGoCeAAG'
                  alt=''
                />
                <div>|</div>
                <div>0 đánh giá</div>
              </div>
              <div>Thương hiệu:</div>
              <div>
                479.000 <span>đ</span>
              </div>
              <div className={styles.salePrice}>
                <div>508.000 ₫</div>
                <div>Giảm 6%</div>
              </div>
              <div className={styles.quantity}>
                <div>Số lượng</div>
                <div className={styles.count}>
                  <div onClick={reduceNumber}>-</div>
                  <div>{count}</div>
                  <div onClick={increaseNumber}>+</div>
                </div>
              </div>
              <div className={styles.orderProducts}>
                <div className={styles.addCart}>
                  <div>
                    <BsCartPlus className={styles.icon} />
                  </div>
                  <div>THÊM GIỎ HÀNG</div>
                </div>
                <div className={styles.buyNow}>
                  <div>MUA NGAY</div>
                  <div>Không ưng đổi ngay trong 30 ngày</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.informationItem}>
            <div className={styles.itemProduct}>
              <div className={styles.instruct}>
                <div>Thông tin sản phẩm</div>
                <div>Thành phần</div>
                <div>Hướng dẫn sử dụng</div>
              </div>
              <div>[NEW 2023] Combo Diệt Mụn </div>
              <div className={styles.readMore}>
                <div>Đọc thêm</div>
                <BiChevronDown className={styles.iconDown} />
              </div>
            </div>
            <div className={styles.CustomerFeedback}>
              <div>Phản hồi khách hàng</div>
              <div className={styles.feedback}>
                <div className={styles.noFeedback}>
                  <div>0</div>
                  <div className={styles.FontAwesomeIcon}>
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} className={styles.iconStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} className={styles.iconStar} />
                    <FontAwesomeIcon icon={faStar} />
                  </div>
                  <div>0 phản hồi</div>
                </div>
                <div className={styles.starOder}>
                  <div className={styles.reviewStar}>
                    <div className={styles.star}>
                      <div>5</div>
                      <div>
                        <img
                          className={styles.iconStarYellow}
                          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbpahTs3DQGUQxtS8nVwG8_I64DImoNFkaTadiHr5nNQGIn61I'
                          alt=''
                        />
                      </div>
                      <div className={styles.Crossbar}></div>
                      <div>0</div>
                    </div>
                    <div className={styles.star}>
                      <div>4</div>
                      <div>
                        <img
                          className={styles.iconStarYellow}
                          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbpahTs3DQGUQxtS8nVwG8_I64DImoNFkaTadiHr5nNQGIn61I'
                          alt=''
                        />
                      </div>
                      <div className={styles.Crossbar}></div>
                      <div>0</div>
                    </div>
                    <div className={styles.star}>
                      <div>3</div>
                      <div>
                        <img
                          className={styles.iconStarYellow}
                          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbpahTs3DQGUQxtS8nVwG8_I64DImoNFkaTadiHr5nNQGIn61I'
                          alt=''
                        />
                      </div>
                      <div className={styles.Crossbar}></div>
                      <div>0</div>
                    </div>
                    <div className={styles.star}>
                      <div>2</div>
                      <div>
                        <img
                          className={styles.iconStarYellow}
                          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbpahTs3DQGUQxtS8nVwG8_I64DImoNFkaTadiHr5nNQGIn61I'
                          alt=''
                        />
                      </div>
                      <div className={styles.Crossbar}></div>
                      <div>0</div>
                    </div>
                    <div className={styles.star}>
                      <div>1</div>
                      <div>
                        <img
                          id={styles.imgStar}
                          className={styles.iconStarYellow}
                          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbpahTs3DQGUQxtS8nVwG8_I64DImoNFkaTadiHr5nNQGIn61I'
                          alt=''
                        />
                      </div>
                      <div className={styles.Crossbar}></div>
                      <div>0</div>
                    </div>
                  </div>
                  <div>VIẾT ĐÁNH GIÁ</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.endProduct}>
          <div className={styles.support}>
            <div>
              <img src='https://shop.30shine.com/icons/usp-detail-icon-1.png' alt='icon' />
            </div>
            <div>cam kết 7 ngày hiệu quả</div>
          </div>
          <div className={styles.support}>
            <div>
              <img src='https://shop.30shine.com/icons/usp-detail-icon-2.png' alt='icon' />
            </div>
            <div>mua 1 hưởng 5 đặc quyền</div>
          </div>
          <div className={styles.support}>
            <div>
              <img src='https://shop.30shine.com/icons/usp-detail-icon-3.png' alt='icon' />
            </div>
            <div>chính sách hoàn tiền 120%</div>
          </div>
          <div className={styles.support}>
            <div>
              <img src='https://shop.30shine.com/icons/usp-detail-icon-4.png' alt='icon' />
            </div>
            <div>chất lượng sản phẩm cấp cao nhất</div>
          </div>
          <div className={styles.support}>
            <div>
              <img src='https://shop.30shine.com/icons/usp-detail-icon-5.png' alt='icon' />
            </div>
            <div>giao hàng siêu tốc 2h</div>
          </div>
          <div className={styles.support}>
            <div>
              <img src='https://shop.30shine.com/icons/usp-detail-icon-6.png' alt='icon' />
            </div>
            <div>đổi trả tận nơi trong 24h</div>
          </div>
          <div className={styles.support}>
            <div>
              <img src='https://shop.30shine.com/icons/usp-detail-icon-7.png' alt='icon' />
            </div>
            <div>Tổng đài tư vấn mọi lúc mọi nơi</div>
          </div>
          <div className={styles.support}>
            <div>
              <img src='https://shop.30shine.com/icons/usp-detail-icon-8.png' alt='icon' />
            </div>
            <div>An toàn chuẩn giao vận quốc tế</div>
          </div>
          <div className={styles.oder}>
            <img src='https://shop.30shine.com/icons/icon-phone.svg' alt='icon' />
            <div className={styles.hotlineOder}>
              <div>Hotline đặt hàng</div>
              <div>1900.27.27.30</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.otherProducts}>
        <div>SẢN PHẨM CÙNG LOẠI</div>
        <div className={styles.sameProducts}>
          <div className={styles.informationProduct}>
            <div>
              <img src='https://static.30shine.com/shop-admin/2023/03/06/30SXU6JL-COMBO%208.jpg' alt='icon' />
            </div>
            <div>Combo Gel rửa mặt da dầu mụn và Gel ngăn..</div>
            <div className={styles.priceProduct}>
              <div>
                690.000<span>đ</span>
              </div>
              <div>
                828.000<span>đ</span>
              </div>
            </div>
            <div>
              <img
                src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTv8DrfzVopdJxTYIsJptveHtNrlRN62yKeV_OpyBKZxGoCeAAG'
                alt=''
              />
            </div>
          </div>
          <div className={styles.informationProduct}>
            <div>
              <img src='https://static.30shine.com/shop-admin/2023/03/06/30SXU6JL-COMBO%208.jpg' alt='icon' />
            </div>
            <div>Combo Gel rửa mặt da dầu mụn và Gel ngăn..</div>
            <div className={styles.priceProduct}>
              <div>
                690.000<span>đ</span>
              </div>
              <div>
                828.000<span>đ</span>
              </div>
            </div>
            <div>
              <img
                src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTv8DrfzVopdJxTYIsJptveHtNrlRN62yKeV_OpyBKZxGoCeAAG'
                alt=''
              />
            </div>
          </div>
          <div className={styles.informationProduct}>
            <div>
              <img src='https://static.30shine.com/shop-admin/2023/03/06/30SXU6JL-COMBO%208.jpg' alt='icon' />
            </div>
            <div>Combo Gel rửa mặt da dầu mụn và Gel ngăn..</div>
            <div className={styles.priceProduct}>
              <div>
                690.000<span>đ</span>
              </div>
              <div>
                828.000<span>đ</span>
              </div>
            </div>
            <div>
              <img
                src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTv8DrfzVopdJxTYIsJptveHtNrlRN62yKeV_OpyBKZxGoCeAAG'
                alt=''
              />
            </div>
          </div>
          <div className={styles.informationProduct}>
            <div>
              <img src='https://static.30shine.com/shop-admin/2023/02/22/30SY84DK-Gel%20%20Drforskin.jpeg' alt='icon' />
            </div>
            <div>Combo hồi xuân trẻ</div>
            <div className={styles.priceProduct}>
              <div>
                690.000<span>đ</span>
              </div>
              <div>
                828.000<span>đ</span>
              </div>
            </div>
            <div>
              <img
                src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTv8DrfzVopdJxTYIsJptveHtNrlRN62yKeV_OpyBKZxGoCeAAG'
                alt=''
              />
            </div>
          </div>
          <div className={styles.informationProduct}>
            <div>
              <img src='https://static.30shine.com/shop-admin/2023/02/22/30SY84DK-Gel%20%20Drforskin.jpeg' alt='icon' />
            </div>
            <div>Combo Gel rửa mặt da dầu mụn và Gel ngăn..</div>
            <div className={styles.priceProduct}>
              <div>
                690.000<span>đ</span>
              </div>
              <div>
                828.000<span>đ</span>
              </div>
            </div>
            <div>
              <img
                src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTv8DrfzVopdJxTYIsJptveHtNrlRN62yKeV_OpyBKZxGoCeAAG'
                alt=''
              />
            </div>
          </div>
        </div>
        <div>SẢN PHẨM ĐÃ XEM</div>
        <div className={styles.sameProducts}>
          <div className={styles.informationProduct}>
            <div>
              <img src='https://static.30shine.com/shop-admin/2023/03/06/30SXU6JL-COMBO%208.jpg' alt='icon' />
            </div>
            <div>Combo Gel rửa mặt da dầu mụn và Gel ngăn..</div>
            <div className={styles.priceProduct}>
              <div>
                690.000<span>đ</span>
              </div>
              <div>
                828.000<span>đ</span>
              </div>
            </div>
            <div>
              <img
                src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTv8DrfzVopdJxTYIsJptveHtNrlRN62yKeV_OpyBKZxGoCeAAG'
                alt=''
              />
            </div>
          </div>
          <div className={styles.informationProduct}>
            <div>
              <img src='https://static.30shine.com/shop-admin/2023/03/06/30SXU6JL-COMBO%208.jpg' alt='icon' />
            </div>
            <div>Combo Gel rửa mặt da dầu mụn và Gel ngăn..</div>
            <div className={styles.priceProduct}>
              <div>
                690.000<span>đ</span>
              </div>
              <div>
                828.000<span>đ</span>
              </div>
            </div>
            <div>
              <img
                src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTv8DrfzVopdJxTYIsJptveHtNrlRN62yKeV_OpyBKZxGoCeAAG'
                alt=''
              />
            </div>
          </div>
          <div className={styles.informationProduct}>
            <div>
              <img src='https://static.30shine.com/shop-admin/2023/03/06/30SXU6JL-COMBO%208.jpg' alt='icon' />
            </div>
            <div>Combo Gel rửa mặt da dầu mụn và Gel ngăn..</div>
            <div className={styles.priceProduct}>
              <div>
                690.000<span>đ</span>
              </div>
              <div>
                828.000<span>đ</span>
              </div>
            </div>
            <div>
              <img
                src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTv8DrfzVopdJxTYIsJptveHtNrlRN62yKeV_OpyBKZxGoCeAAG'
                alt=''
              />
            </div>
          </div>
          <div className={styles.informationProduct}>
            <div>
              <img src='https://static.30shine.com/shop-admin/2023/02/22/30SY84DK-Gel%20%20Drforskin.jpeg' alt='icon' />
            </div>
            <div>Combo hồi xuân trẻ</div>
            <div className={styles.priceProduct}>
              <div>
                690.000<span>đ</span>
              </div>
              <div>
                828.000<span>đ</span>
              </div>
            </div>
            <div>
              <img
                src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTv8DrfzVopdJxTYIsJptveHtNrlRN62yKeV_OpyBKZxGoCeAAG'
                alt=''
              />
            </div>
          </div>
          <div className={styles.informationProduct}>
            <div>
              <img src='https://static.30shine.com/shop-admin/2023/02/22/30SY84DK-Gel%20%20Drforskin.jpeg' alt='icon' />
            </div>
            <div>Combo Gel rửa mặt da dầu mụn và Gel ngăn..</div>
            <div className={styles.priceProduct}>
              <div>
                690.000<span>đ</span>
              </div>
              <div>
                828.000<span>đ</span>
              </div>
            </div>
            <div>
              <img
                src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTv8DrfzVopdJxTYIsJptveHtNrlRN62yKeV_OpyBKZxGoCeAAG'
                alt=''
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default DetailProduct
{
  /* <div>Giảm {100 - (detailProduct.salePrice / detailProduct.originPrice) * 100} %</div> */
}
