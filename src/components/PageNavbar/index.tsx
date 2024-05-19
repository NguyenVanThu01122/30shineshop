import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../../routes/routes'
import Translations from '../translations'
import { WrapperNavbar } from './styles'

const PageNavbar = ({ page }: { page: string }) => {
  const navigate = useNavigate()

  return (
    <WrapperNavbar>
      <div onClick={() => navigate(ROUTES.HOME)}>
        <Translations text={'HOME'} />
      </div>
      <div>/ {page}</div>
    </WrapperNavbar>
  )
}

export default PageNavbar
