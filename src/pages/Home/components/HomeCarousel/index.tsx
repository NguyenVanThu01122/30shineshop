import { Carousel } from 'antd'
import { useRef } from 'react'
import { WrapperCarousel } from './styles'

export const HomeCarousel = () => {
  const imagesRef = useRef(null)

  const handlePrev = () => {
    ;(imagesRef.current as any).prev()
  }
  const handleNext = () => {
    ;(imagesRef.current as any).next()
  }
  return (
    <WrapperCarousel>
      <Carousel autoplay={true} dots={true} ref={imagesRef}>
        <img
          src='https://shop.30shine.com/_next/image?url=https%3A%2F%2Fstatic.30shine.com%2Fshop-web%2Fbanners%2FbannerT0723-2.jpg&w=1920&q=75'
          alt=''
        />
        <img
          src='https://shop.30shine.com/_next/image?url=https%3A%2F%2Fstatic.30shine.com%2Fshop-web%2Fbanners%2FbannerT0723-3.jpg&w=1920&q=75'
          alt=''
        />
        <img
          src='https://shop.30shine.com/_next/image?url=https%3A%2F%2Fstatic.30shine.com%2Fshop-web%2Fbanners%2FbannerT0723-1.jpg&w=1920&q=75'
          alt=''
        />
      </Carousel>
      <div className='prev' onClick={handlePrev}>
        {'<'}
      </div>
      <div className='next' onClick={handleNext}>
        {'>'}
      </div>
    </WrapperCarousel>
  )
}
