import { useEffect, useState } from 'react'
import { BiChevronDown } from 'react-icons/bi'
import { BsCartPlus } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { StarProduct } from '../../components/StarProduct'
import { useBuyNow } from '../../helper/useBuyNow'
import { GetLengthOfCart } from '../../helper/useGetLengthOfCart'
import { addListProduct } from '../../redux/actions/detailProduct'
import { addProductCart, getDetailProduct, getProductRelate } from '../../service/detailProduct'
import { CustomerFeedback } from './componets/CustomerFeedback'
import { ProductSupportInfo } from './componets/ProductSupportInfo'
import { RelateProducts } from './componets/RelateProducts'
import { ModalCart } from './componets/modalCart'
import styles from './styles.module.scss'

function DetailProduct() {
  const [detailProduct, setDetailProduct] = useState<any>({})
  const [imageSelect, setImageSelect] = useState('')
  const [count, setCount] = useState(1)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const relatedProducts = useSelector((state: any) => state.app.products) // lấy sản phẩm liên quan trong store

  const params = useParams()
  const dispatch = useDispatch()
  const totalCart = useSelector((state: any) => state.app.totalCart) // lấy số lượng sản phẩm trong store
  const [handleBuyNow] = useBuyNow()
  const [getLengthOfCart] = GetLengthOfCart()

  // hàm lấy chi tiết sản phẩm
  const handleGetDetail = () => {
    getDetailProduct(params?.id).then((res) => {
      setDetailProduct(res.data?.data)
      setImageSelect(res.data?.data?.images[0])
    })
  }

  // lấy sp liên quan
  const handleGetRelate = () => {
    getProductRelate(params?.id)
      .then((res) => {
        dispatch(addListProduct(res.data?.data))
      })
      .catch((error) => {
        toast.error('Lỗi server')
      })
  }

  const [addedToCart, setAddedToCart] = useState<any>([])
  const handleAddProductCart = (idProduct: string, amount: number) => {
    addProductCart(idProduct, amount)
      .then((res) => {
        setIsModalOpen(true)
        getLengthOfCart()
      })
      .catch((error) => {
        toast.error(error.response?.data?.message)
      })
  }

  // hàm giảm số lượng sản phẩm
  const decreaseNumber = () => {
    if (count > 1) {
      setCount(count - 1)
    }
  }

  // hàm tăng số lượng sản
  const increaseNumber = () => {
    setCount(count + 1)
  }

  // hàm chọn ảnh sản phẩm
  const handleSelectImage = (item: string) => {
    setImageSelect(item)
  }

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Sử dụng 'smooth' để có hiệu ứng cuộn mượt
    })
    handleGetDetail()
    handleGetRelate()
  }, [])

  return (
    <div className={styles.pageDetailProduct}>
      <div className={styles.detailProduct}>
        <div className={styles.headerProduct}>
          <div className={styles.product}>
            <div className={styles.imgProduct}>
              <img src={imageSelect} alt='' />
            </div>
            <div className={styles.detailInformation}>
              <div>{detailProduct?.name}</div>
              <div className={styles.number}>
                <div>{detailProduct.star}</div>
                <div>
                  <StarProduct numberYellow={detailProduct?.star} numberGray={5 - detailProduct?.star} />
                </div>
                <div>{detailProduct?.totalEvaluate} đánh giá</div>
              </div>
              <div className={styles.vnd}>{detailProduct?.salePrice} VND</div>
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
        <ProductSupportInfo />
      </div>

      {relatedProducts.length > 0 && <RelateProducts />}
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
