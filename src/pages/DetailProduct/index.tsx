import { StarOutlined } from '@ant-design/icons'
import { message } from 'antd'
import { useCallback, useEffect, useState } from 'react'
import { BiChevronDown } from 'react-icons/bi'
import { BsCartPlus } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { ModalCart } from '../../components/Ui/modalCart'
import { useBuyNow } from '../../helper/useBuyNow'
import { saveTotalCart } from '../../redux/actions/detailProduct'
import { getCartProduct } from '../../service/cart'
import { addProductCart, getDetailProduct } from '../../service/detailProduct'
import { CustomerFeedback } from './componets/CustomerFeedback'
import { RelateProducts } from './componets/RelateProducts'
import styles from './styles.module.scss'

function DetailProduct() {
  const [detailProduct, setDetailProduct] = useState<any>({})
  const [imageSelect, setImageSelect] = useState('')
  const [count, setCount] = useState(1)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const params = useParams()
  const dispatch = useDispatch()
  const totalCart = useSelector((state: any) => state.app.totalCart) // lấy số lượng sản phẩm trong store
  const [handleBuyNow] = useBuyNow()

  // hàm lấy chi tiết sản phẩm
  const handleGetDetail = useCallback(() => {
    getDetailProduct(params?.id).then((res) => {
      setDetailProduct(res.data?.data)
      setImageSelect(res.data?.data?.images[0])
    })
  }, [params?.id])

  // hàm lấy số lượng giỏ hàng hiện ở modal giỏ hàng
  const getLengthOfCart = useCallback(() => {
    getCartProduct().then((res) => {
      const length = res.data?.listCart.length
      dispatch(saveTotalCart(length))
    })
  }, [])

  // hàm thêm sản phẩm vào giỏ hàng
  const handleAddProductCart = useCallback((id: string, amount: number) => {
    addProductCart(id, amount)
      .then((res) => {
        setIsModalOpen(true)
        getLengthOfCart() // gọi lại hàm lấy số lượng sản phẩm này để hiện số lượng sp ở icon giỏ hàng,
        // vì khi bấm vào nút thêm giỏ hàng thì state totalCart được lưu trên stor sẽ dc cập nhật lại số lượng//
      })
      .catch((error) => {
        message.error(error.response?.data?.message)
      })
  }, [])

  // hàm giảm số lượng sản phẩm
  const decreaseNumber = useCallback(() => {
    if (count > 1) {
      setCount(count - 1)
    }
  }, [count])

  // hàm tăng số lượng sản
  const increaseNumber = useCallback(() => {
    setCount(count + 1)
  }, [count])

  // hàm chọn ảnh sản phẩm
  const handleSelectImage = useCallback((item: string) => {
    setImageSelect(item)
  }, [])

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Sử dụng 'smooth' để có hiệu ứng cuộn mượt
    })
    handleGetDetail()
  }, [])

  return (
    <div className={styles.pageDetailProduct}>
      <div className={styles.detailProduct}>
        <div className={styles.headerProduct}>
          <div className={styles.product}>
            <div className={styles.imgProduct}>
              <img src={imageSelect} alt='' />
            </div>
            <div className={styles.detailnformation}>
              <div>{detailProduct?.name}</div>
              <div className={styles.number}>
                <div>{detailProduct.star}</div>
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
              <div style={{ fontSize: '25px', color: 'rgba(229,77,62', fontFamily: 'Oswald', fontWeight: '600' }}>
                {detailProduct?.salePrice} VND
              </div>
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
                  <div onClick={() => decreaseNumber()}>-</div>
                  <div>{count}</div>
                  <div onClick={() => increaseNumber()}>+</div>
                </div>
              </div>
              <div className={styles.orderProducts}>
                <div className={styles.addCart} onClick={() => handleAddProductCart(detailProduct.id, count)}>
                  <div>
                    <BsCartPlus className={styles.icon} />
                  </div>
                  <div>THÊM GIỎ HÀNG</div>
                </div>
                <div className={styles.buyNow} onClick={() => handleBuyNow(detailProduct.id, count)}>
                  <div>MUA NGAY</div>
                  <div>Không ưng đổi ngay trong 30 ngày</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.imgProduct}>
            {detailProduct?.images?.map((item: string) => {
              return (
                <div onClick={() => handleSelectImage(item)}>
                  <img src={item} alt='' className={`${imageSelect === item ? styles.active : ''}`} />
                </div>
              )
            })}
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

            <CustomerFeedback detailProduct={detailProduct} handleDetail={handleGetDetail} />
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
      <RelateProducts />
      {isModalOpen && (
        <ModalCart
          detailProduct={detailProduct}
          count={count}
          totalCart={totalCart}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </div>
  )
}
export default DetailProduct
