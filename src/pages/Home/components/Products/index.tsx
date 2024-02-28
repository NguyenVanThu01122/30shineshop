import { data } from '../../data'
import { Wrapper } from './styles'

export const Products = () => {
  return (
    <Wrapper>
      {data.map((item: any) => (
        <img className='image_Products' src={item.image} alt='' />
      ))}
    </Wrapper>
  )
}
