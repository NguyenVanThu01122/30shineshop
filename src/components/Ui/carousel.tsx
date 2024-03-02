import { Carousel } from 'antd'
import { CSSProperties, ReactNode } from 'react'
interface CarouselGeneralProps {
  children?: ReactNode
  autoplay?: boolean
  dots?: boolean
  ref?: React.Ref<any>
  className?: string
  slidesToShow?: number
  infinite?: boolean
  dotPosition?: 'top' | 'bottom' | 'left' | 'right'
  style?: CSSProperties // Thêm kiểu CSSProperties cho style prop
}
export const CarouselGeneral = ({
  children,
  autoplay,
  dots,
  ref,
  className,
  slidesToShow,
  infinite,
  dotPosition
}: CarouselGeneralProps) => {
  return (
    <Carousel
      autoplay={autoplay}
      dots={dots}
      ref={ref}
      className={className}
      slidesToShow={slidesToShow}
      infinite={infinite}
      dotPosition={dotPosition}
    >
      {children}
    </Carousel>
  )
}
