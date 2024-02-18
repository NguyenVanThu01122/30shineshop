import { useSelector } from 'react-redux'
import { StarProduct } from '../../../../components/StarProduct'
import styles from './styles.module.scss'

export const RelateProducts = () => {
  const relatedProducts = useSelector((state: any) => state.app.products) // lấy sản phẩm liên quan trong store

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
              onClick={() => window.location.assign(`/detail-product/${item.id}`)}
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
