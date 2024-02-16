import { StarOutlined } from '@ant-design/icons'
import { Carousel } from 'antd'
import { DotPosition } from 'antd/es/carousel'
import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addListProduct } from '../../../../redux/actions/detailProduct'
import { getProductRelate } from '../../../../service/detailProduct'
import styles from './styles.module.scss'

export const RelateProducts = () => {
  const relatedProducts = useSelector((state: any) => state.app.products) // lấy sản phẩm liên quan trong store
  const [dotPosition, setDotPosition] = useState<DotPosition>('top') // chuyển slick-dots(dấu chấm bóng mượt) lên top
  const imagesRef = useRef(null)

  const params = useParams()
  const dispatch = useDispatch()

  // lấy sp liên quan
  const handleGetRelate = () => {
    getProductRelate(params?.id)
      .then((res) => {
        dispatch(addListProduct(res.data?.data))
      })
      .catch((error) => {})
  }

  const handleImagePrev = () => {
    ;(imagesRef.current as any).prev()
  }

  const handleImageNext = () => {
    ;(imagesRef.current as any).next()
  }

  useEffect(() => {
    handleGetRelate()
  }, [])

  return (
    <div className={styles.otherProducts}>
      <div>SẢN PHẨM CÙNG LOẠI</div>
      <div className={styles.similarProducts}>
        <Carousel
          // dotPosition={dotPosition}
          autoplay={true}
          dots={true}
          slidesToShow={5}
          ref={imagesRef}
          className={styles.itemCarousel}
        >
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
            )
          })}
        </Carousel>
        <div onClick={handleImagePrev} className={styles.otherPrev}>
          {'<'}
        </div>
        <div onClick={handleImageNext} className={styles.otherNext}>
          {'>'}
        </div>
      </div>
    </div>
  )
}
