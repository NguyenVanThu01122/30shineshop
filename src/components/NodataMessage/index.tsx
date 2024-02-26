import iconGifDuck from '../../images/img-duck.jpg'
import { WrapperMessage } from './styles'

const NoDataMessage = ({ icon, message }: { icon?: string; message?: string }) => {
  return (
    <WrapperMessage>
      <div>{message}</div>
      <img className='iconGifDuck' src={iconGifDuck} alt='' />
    </WrapperMessage>
  )
}

export default NoDataMessage
