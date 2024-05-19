import { Drawer } from 'antd'
import styled from 'styled-components'
import { ButtonGeneral } from '../../../Ui/button'

export const DrawerMenu = styled(Drawer)`
  width: 100%;
  display: none;
  z-index: 100;

  @media screen and (max-width: 768px) {
    display: block;
  }
`
export const ListMenu = styled.div`
  width: 100%;
  padding: 0px 5px;

  & div {
    width: 100%;
    font-size: 18px;
  }
  & > div:hover {
    color: rgba(255, 204, 51, 0.913);
  }
`
export const MenuItem = styled.div`
  display: flex;
  border-top: 1px solid rgb(233, 230, 230);
  border-bottom: 1px solid rgb(233, 230, 230);
  padding: 10px 0px;
`
export const StyledButtonGeneral = styled(ButtonGeneral)`
  width: 100%;
  height: 45px;
  margin-top: 10px;
  background-color: #ffcc33;
  color: #000;
  border: none;
  font-size: 18px;
  font-weight: 600;
  &:hover {
    background-color: #ffcc33;
    color: #000;
  }
`
