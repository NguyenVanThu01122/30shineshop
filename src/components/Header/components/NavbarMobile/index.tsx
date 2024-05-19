import { DrawerProps } from 'antd'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import checkLogin from '../../../../helpers/checkLogin'
import { useLogOut } from '../../../../helpers/useLogOut'
import logo30shine from '../../../../images/Logo_30shine.svg'
import { ROUTES } from '../../../../routes/routes'
import Translations from '../../../translations'
import { DrawerMenu, ListMenu, MenuItem, StyledButtonGeneral } from './styles'
interface NavbarMobileProps {
  handleRedirect: (path: string) => void
  openMenuMobile: boolean
  setOpenMenuMobile: (value: boolean) => void
}

const NavbarMobile = ({ openMenuMobile, setOpenMenuMobile, handleRedirect }: NavbarMobileProps) => {
  const [placement] = useState<DrawerProps['placement']>('left')
  const logout = useLogOut()
  const isLogin = checkLogin()
  const navigate = useNavigate()
  const closeMenu = () => {
    setOpenMenuMobile(false)
  }
  const arrMenu = [
    {
      title: 'HOME',
      path: ROUTES.HOME
    },
    {
      title: 'PRODUCT_LIST',
      path: ROUTES.LIST_PRODUCT
    },
    {
      title: 'BRAND',
      path: ROUTES.BRAND
    },
    {
      title: 'INTRODUCE',
      path: ROUTES.INTRODUCE
    },
    {
      title: 'CONTACT',
      path: ROUTES.CONTACT
    }
  ]
  if (checkLogin()) {
    arrMenu.push({
      title: 'ACCOUNT_MANAGEMENT',
      path: ROUTES.ACCOUNT
    })
  }

  return (
    <DrawerMenu
      width={300}
      placement={placement}
      onClose={closeMenu}
      title={<img style={{ width: 110 }} src={logo30shine} alt='img' />}
      open={openMenuMobile}
    >
      <ListMenu>
        {arrMenu.map((item, index) => (
          <MenuItem key={index} onClick={() => handleRedirect(item.path)}>
            <Translations text={item.title} />
          </MenuItem>
        ))}
      </ListMenu>
      {isLogin ? (
        <StyledButtonGeneral onClick={logout}>
          <Translations text={'LOG_OUT'} />
        </StyledButtonGeneral>
      ) : (
        <StyledButtonGeneral onClick={() => navigate(ROUTES.LOGIN)}>
          <Translations text={'LOG_IN'} />
        </StyledButtonGeneral>
      )}
    </DrawerMenu>
  )
}

export default NavbarMobile
