import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { StarProduct } from '../../../../components/StarProduct'
import { ERROR_MESSAGES } from '../../../../helpers/contanst'
import { addListProduct } from '../../../../redux/actions/app'
import { getProductRelate } from '../../../../services/detailProduct'
import styles from './styles.module.scss'

export const RelateProducts = ({ handleGetDetail }: any) => {
  const relatedProducts = useSelector((state: any) => state.app.products) // lấy sản phẩm liên quan trong store
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const params = useParams()

  // lấy sp liên quan
  const handleGetRelate = () => {
    getProductRelate(params?.id)
      .then((res) => {
        dispatch(addListProduct(res.data?.data))
      })
      .catch((error) => {
        toast.error(ERROR_MESSAGES.SERVER_ERROR)
      })
  }

  const redirectDetailProduct = (idProduct: string) => {
    navigate(idProduct)
    handleGetDetail() // call lại Getdetail
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    handleGetRelate()
  }, [])

  // const [dotPosition, setDotPosition] = useState<DotPosition>('top') // chuyển slick-dots(dấu chấm bóng mượt) lên top
  // const imagesRef = useRef(null)
  // const handleImagePrev = () => {
  //   ;(imagesRef.current as any).prev()
  // }
  // const handleImageNext = () => {
  //   ;(imagesRef.current as any).next()
  // }

  return (
    <div className={styles.otherProducts}>
      <div>SẢN PHẨM CÙNG LOẠI</div>
      <div className={styles.similarProducts}>
        {/* <Carousel
          // dotPosition={dotPosition}
          autoplay={true}
          dots={true}
          slidesToShow={5}
          ref={imagesRef}
          className={styles.itemCarousel}
        > */}
        {relatedProducts.map((item: any) => {
          return (
            <div
              className={styles.informationProduct}
              onClick={() => redirectDetailProduct(`/detail-product/${item.id}`)}
            >
              <img className={styles.otherImage} src={item.image} alt='icon' />
              <div>{item.name}</div>
              <div className={styles.priceProduct}>
                <div>
                  {item.originPrice}
                  <span>đ</span>
                </div>
                <div>
                  {item.salePrice}
                  <span>đ</span>
                </div>
              </div>
              <div>
                <StarProduct numberYellow={item?.star} numberGray={5 - item?.star} />
              </div>
            </div>
          )
        })}
        {/* </Carousel> */}
        {/* <div onClick={handleImagePrev} className={styles.otherPrev}>
          {'<'}
        </div>
        <div onClick={handleImageNext} className={styles.otherNext}>
          {'>'}
        </div> */}
      </div>
    </div>
  )
}
