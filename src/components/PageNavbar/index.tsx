import { useNavigate } from 'react-router-dom'
import { WrapperNavbar } from './styles'

const PageNavbar = ({ page }: { page: string }) => {
  const navigate = useNavigate()

  return (
    <WrapperNavbar>
      <div onClick={() => navigate('/')}>Trang chủ</div>
      <div>/ {page}</div>
    </WrapperNavbar>
  )
}

export default PageNavbar
