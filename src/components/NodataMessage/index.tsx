import { ArrowRightOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import iconGifDuck from '../../images/img-duck.jpg'
import { ButtonGeneral } from '../Ui/button'
import Translations from '../translations'
import { BoxNoDataCart, WrapperMessage } from './styles'

const NoDataMessage = ({ message, image }: { message?: string; image?: string }) => {
  const navigate = useNavigate()
  return (
    <WrapperMessage>
      <div>{message}</div>
      {image ? (
        <BoxNoDataCart>
          <img src={image} alt='' />
          <ButtonGeneral className='btn' onClick={() => navigate('/')}>
            <Translations text={'CONTINUE_SHOPPING'} />
            <span>
              <ArrowRightOutlined />
            </span>
          </ButtonGeneral>
        </BoxNoDataCart>
      ) : (
        <img className='iconGifDuck' src={iconGifDuck} alt='' />
      )}
    </WrapperMessage>
  )
}

export default NoDataMessage
