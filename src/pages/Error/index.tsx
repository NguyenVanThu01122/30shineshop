import { useNavigate } from 'react-router-dom'
import { ButtonGeneral } from '../../components/Ui/button'
import imgError404 from '../../images/img-404.jpg'
import { Wrapper } from './style'
function Error() {
  const navigate = useNavigate()
  return (
    <Wrapper>
      <img src={imgError404} alt='' />
      {/* <img src='https://ai-art-generator-lyart.vercel.app/static/media/icon-gif1.9b5632186cfeee0b21d3.gif' alt='' /> */}
      <ButtonGeneral className='btn' onClick={() => navigate('/')}>
        Back Home
      </ButtonGeneral>
    </Wrapper>
  )
}
export default Error
