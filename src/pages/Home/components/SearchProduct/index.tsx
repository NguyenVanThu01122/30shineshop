import { Carousel } from 'antd'
import { DotPosition } from 'antd/es/carousel'
import { useRef, useState } from 'react'
import { Wrapper } from './styles'

const SearchProducts = () => {
  const searchRef = useRef(null)
  const [dotPosition, setDotPosition] = useState<DotPosition>('top')

  const handlePrevSearch = () => {
    ;(searchRef.current as any).prev()
  }
  const handleNextSearch = () => {
    ;(searchRef.current as any).next()
  }

  const images = [
    'https://shop.30shine.com/_next/image?url=https%3A%2F%2Fstatic.30shine.com%2Fshop-web%2Fbanners%2Ftopsearch_t33_3.jpg&w=1920&q=75',
    'https://shop.30shine.com/_next/image?url=https%3A%2F%2Fstatic.30shine.com%2Fshop-web%2Fbanners%2Ftopsearch_t33_4.jpg&w=1920&q=75',
    'https://shop.30shine.com/_next/image?url=https%3A%2F%2Fstatic.30shine.com%2Fshop-web%2Fbanners%2Ftopsearch_t33_5.jpg&w=1920&q=75',
    'https://shop.30shine.com/_next/image?url=https%3A%2F%2Fstatic.30shine.com%2Fshop-web%2Fbanners%2Ftopsearch_t33_6.jpg&w=1920&q=75',
    'https://shop.30shine.com/_next/image?url=https%3A%2F%2Fstatic.30shine.com%2Fshop-web%2Fbanners%2Ftopsearch_t33_7.jpg&w=1920&q=75',
    'https://shop.30shine.com/_next/image?url=https%3A%2F%2Fstatic.30shine.com%2Fshop-web%2Fbanners%2Ftopsearch_t33_2.jpg&w=1920&q=75',
    'https://shop.30shine.com/_next/image?url=https%3A%2F%2Fstatic.30shine.com%2Fshop-web%2Fbanners%2Ftopsearch_t33_1.jpg&w=1920&q=75'
  ]

  return (
    <Wrapper>
      <div>TOP TÌM KIẾM</div>
      <Carousel
        className='carousel-list-products'
        autoplay={true}
        dots={true}
        slidesToShow={3.5}
        ref={searchRef}
        infinite={false}
        dotPosition={dotPosition}
      >
        {images.map((image, index) => (
          <img key={index} src={image} alt='' />
        ))}
      </Carousel>
      <div className='prev' onClick={handlePrevSearch}>
        {'<'}
      </div>
      <div className='next' onClick={handleNextSearch}>
        {'>'}
      </div>
    </Wrapper>
  )
}

export default SearchProducts
