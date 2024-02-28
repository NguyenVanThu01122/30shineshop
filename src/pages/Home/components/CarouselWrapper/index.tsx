import { useRef } from 'react'
import { CarouselGeneral } from '../../../../components/Ui/carousel'
import { WrapperCarousel } from './styles'

interface CarouselWrapperProps {
  autoplay?: boolean
  dots?: boolean
  images: any
}

const CarouselWrapper = ({ images }: CarouselWrapperProps) => {
  const carouselRef = useRef<any>(null)
  // const [dotPosition, setDotPosition] = useState<DotPosition>('top')

  const handleNext = () => {
    carouselRef.current?.next()
  }
  const handlePrev = () => {
    carouselRef.current?.prev()
  }

  return (
    <WrapperCarousel>
      <CarouselGeneral slidesToShow={1} autoplay={true} dots={true} ref={carouselRef} infinite={false}>
        {images.map((item: any) => (
          <img style={{ width: '100%' }} key={item?.id} src={item?.image} alt='' />
        ))}
      </CarouselGeneral>
      <div className='prev' onClick={handlePrev}>
        {'<'}
      </div>
      <div className='next' onClick={handleNext}>
        {'>'}
      </div>
    </WrapperCarousel>
  )
}

export default CarouselWrapper
