import { Carousel } from 'antd'
import { useRef } from 'react'
import { brandImage } from '../../data'
import { WrapperBrand } from './styles'

export const Brands = () => {
  const brandRef = useRef(null)

  const handleNextBrand = () => {
    ;(brandRef.current as any).next()
  }
  const handlePrevBrand = () => {
    ;(brandRef.current as any).prev()
  }
  return (
    <WrapperBrand>
      <div>THƯƠNG HIỆU</div>
      <div className='list_Brand'>
        <Carousel
          // variableWidth={true}
          autoplay={true}
          ref={brandRef}
          slidesToShow={6}
          className='images_Brand'
        >
          {brandImage.map((item: any) => (
            <div className='child-brand'>
              <img src={item.image} alt='' />
            </div>
          ))}
        </Carousel>
        <div className='brand_Prev' onClick={handlePrevBrand}>
          {'<'}
        </div>
        <div className='brand_Next' onClick={handleNextBrand}>
          {'>'}
        </div>
      </div>
    </WrapperBrand>
  )
}
