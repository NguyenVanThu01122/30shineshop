import { data } from '../../data'
import { Wrapper } from './styles'

export const ProductsHome = () => {
  return (
    <Wrapper>
      {data.map((item: any, index: number) => (
        <img key={index} className='image_Products' src={item.image} alt='' />
      ))}
    </Wrapper>
  )
}
