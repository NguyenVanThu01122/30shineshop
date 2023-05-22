import { StarOutlined } from '@ant-design/icons'
import { useEffect, useState } from 'react'
import { BiChevronDown } from 'react-icons/bi'
import { BsCartPlus } from 'react-icons/bs'
import { useParams } from 'react-router-dom'
import { publicAxios } from '../../service/axios'
import styles from './index.module.scss'

function DetailProduct() {
  let params = useParams()
  // Lấy chi tiết sản phẩm: // http://shop30shine.herokuapp.com/product/${params.id}
  // Lấy danh sách sản phẩm liên quan: https://shop30shine.herokuapp.com/product/relate/:id
  const [detailProduct, setDetailProduct] = useState<any>({})

  useEffect(() => {
    publicAxios
      .get(`/product/${params.id}`)
      .then((res) => {
        console.log(res.data?.data)
        setDetailProduct(res.data?.data)
      })
      .catch((_error) => {})
    setDetailProduct('Lỗi server')
  }, [])
  let [count, setCount] = useState(1)

  let reduceNumber = () => {
    if (count > 0) setCount(count - 1)
  }
  let increaseNumber = () => {
    if (count < 10) {
      setCount(count + 1)
    } else {
      alert('Bạn không được mua quá 10 sản phẩm')
    }
  }
  return (
    <div className={styles.pageDetailProduct}>
      <div className={styles.detailProduct}>
        <div className={styles.headerProduct}>
          <div className={styles.product}>
            <div className={styles.imgProduct}>
              <img src={detailProduct?.images ? detailProduct?.images[0] : ''} alt='' />
            </div>
            <div className={styles.detailnformation}>
              <div>{detailProduct?.name}</div>
              <div className={styles.number}>
                <div>{detailProduct?.star}</div>
                <div>
                  {detailProduct?.star === 5 && (
                    <div>
                      <StarOutlined style={{ color: 'yellow', fontSize: '16px' }} />
                      <StarOutlined style={{ color: 'yellow', fontSize: '16px' }} />
                      <StarOutlined style={{ color: 'yellow', fontSize: '16px' }} />
                      <StarOutlined style={{ color: 'yellow', fontSize: '16px' }} />
                      <StarOutlined style={{ color: 'yellow', fontSize: '16px' }} />
                    </div>
                  )}
                  {detailProduct?.star === 4 && (
                    <div>
                      <StarOutlined style={{ color: 'yellow', fontSize: '16px' }} />
                      <StarOutlined style={{ color: 'yellow', fontSize: '16px' }} />
                      <StarOutlined style={{ color: 'yellow', fontSize: '16px' }} />
                      <StarOutlined style={{ color: 'yellow', fontSize: '16px' }} />
                      <StarOutlined style={{ color: 'gray', fontSize: '16px' }} />
                    </div>
                  )}
                  {detailProduct?.star === 3 && (
                    <div>
                      <StarOutlined style={{ color: 'yellow', fontSize: '16px' }} />
                      <StarOutlined style={{ color: 'yellow', fontSize: '16px' }} />
                      <StarOutlined style={{ color: 'yellow', fontSize: '16px' }} />
                      <StarOutlined style={{ color: 'gray', fontSize: '16px' }} />
                      <StarOutlined style={{ color: 'gray', fontSize: '16px' }} />
                    </div>
                  )}
                  {detailProduct?.star === 2 && (
                    <div>
                      <StarOutlined style={{ color: 'yellow', fontSize: '16px' }} />
                      <StarOutlined style={{ color: 'yellow', fontSize: '16px' }} />
                      <StarOutlined style={{ color: 'gray', fontSize: '16px' }} />
                      <StarOutlined style={{ color: 'gray', fontSize: '16px' }} />
                      <StarOutlined style={{ color: 'gray', fontSize: '16px' }} />
                    </div>
                  )}
                  {detailProduct?.star === 1 && (
                    <div>
                      <StarOutlined style={{ color: 'yellow', fontSize: '16px' }} />
                      <StarOutlined style={{ color: 'gray', fontSize: '16px' }} />
                      <StarOutlined style={{ color: 'gray', fontSize: '16px' }} />
                      <StarOutlined style={{ color: 'gray', fontSize: '16px' }} />
                      <StarOutlined style={{ color: 'gray', fontSize: '16px' }} />
                    </div>
                  )}
                  {detailProduct?.star === 0 && (
                    <div>
                      <StarOutlined style={{ color: 'gray', fontSize: '16px' }} />
                      <StarOutlined style={{ color: 'gray', fontSize: '16px' }} />
                      <StarOutlined style={{ color: 'gray', fontSize: '16px' }} />
                      <StarOutlined style={{ color: 'gray', fontSize: '16px' }} />
                      <StarOutlined style={{ color: 'gray', fontSize: '16px' }} />
                    </div>
                  )}
                </div>
                <div>{detailProduct?.totalEvaluate} đánh giá</div>
              </div>
              <div style={{ fontSize: '18px' }}>{detailProduct?.salePrice} VND</div>
              <div className={styles.salePrice}>
                <div>{detailProduct?.originPrice} VND</div>
                <div>
                  Giảm{' '}
                  {Math.floor(
                    ((detailProduct?.originPrice - detailProduct?.salePrice) / detailProduct?.originPrice) * 100
                  )}
                  %
                </div>
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
                  ~<div>MUA NGAY</div>
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
                  <div>{detailProduct?.star}</div>
                  <div>
                    {detailProduct?.star === 5 && (
                      <div>
                        <StarOutlined style={{ color: 'yellow', fontSize: '16px' }} />
                        <StarOutlined style={{ color: 'yellow', fontSize: '16px' }} />
                        <StarOutlined style={{ color: 'yellow', fontSize: '16px' }} />
                        <StarOutlined style={{ color: 'yellow', fontSize: '16px' }} />
                        <StarOutlined style={{ color: 'yellow', fontSize: '16px' }} />
                      </div>
                    )}
                    {detailProduct?.star === 4 && (
                      <div>
                        <StarOutlined style={{ color: 'yellow', fontSize: '16px' }} />
                        <StarOutlined style={{ color: 'yellow', fontSize: '16px' }} />
                        <StarOutlined style={{ color: 'yellow', fontSize: '16px' }} />
                        <StarOutlined style={{ color: 'yellow', fontSize: '16px' }} />
                        <StarOutlined style={{ color: 'gray', fontSize: '16px' }} />
                      </div>
                    )}
                    {detailProduct?.star === 3 && (
                      <div>
                        <StarOutlined style={{ color: 'yellow', fontSize: '16px' }} />
                        <StarOutlined style={{ color: 'yellow', fontSize: '16px' }} />
                        <StarOutlined style={{ color: 'yellow', fontSize: '16px' }} />
                        <StarOutlined style={{ color: 'gray', fontSize: '16px' }} />
                        <StarOutlined style={{ color: 'gray', fontSize: '16px' }} />
                      </div>
                    )}
                    {detailProduct?.star === 2 && (
                      <div>
                        <StarOutlined style={{ color: 'yellow', fontSize: '16px' }} />
                        <StarOutlined style={{ color: 'yellow', fontSize: '16px' }} />
                        <StarOutlined style={{ color: 'gray', fontSize: '16px' }} />
                        <StarOutlined style={{ color: 'gray', fontSize: '16px' }} />
                        <StarOutlined style={{ color: 'gray', fontSize: '16px' }} />
                      </div>
                    )}
                    {detailProduct?.star === 1 && (
                      <div>
                        <StarOutlined style={{ color: 'yellow', fontSize: '16px' }} />
                        <StarOutlined style={{ color: 'gray', fontSize: '16px' }} />
                        <StarOutlined style={{ color: 'gray', fontSize: '16px' }} />
                        <StarOutlined style={{ color: 'gray', fontSize: '16px' }} />
                        <StarOutlined style={{ color: 'gray', fontSize: '16px' }} />
                      </div>
                    )}
                    {detailProduct?.star === 0 && (
                      <div>
                        <StarOutlined style={{ color: 'gray', fontSize: '16px' }} />
                        <StarOutlined style={{ color: 'gray', fontSize: '16px' }} />
                        <StarOutlined style={{ color: 'gray', fontSize: '16px' }} />
                        <StarOutlined style={{ color: 'gray', fontSize: '16px' }} />
                        <StarOutlined style={{ color: 'gray', fontSize: '16px' }} />
                      </div>
                    )}
                  </div>
                  <div>{detailProduct?.totalEvaluate} phản hồi</div>
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
                      <div>{detailProduct?.listStar?.fiveStar}</div>
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
                      <div>{detailProduct?.listStar?.fourStar}</div>
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
                      <div>{detailProduct?.listStar?.threeStar}</div>
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
                      <div>{detailProduct?.listStar?.twoStar}</div>
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
                      <div>{detailProduct?.listStar?.oneStar}</div>
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
