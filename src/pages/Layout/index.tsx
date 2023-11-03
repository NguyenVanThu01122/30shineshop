import { useEffect } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { checkLogin } from '../../helper'
import { ItemHeader, MainItem, Wrapper } from './styles'

export default function Layout() {
  
  if (!checkLogin()) {
    return <Navigate to='new-login' />
  }

  return (
    <Wrapper>
      <ItemHeader>
        <Header />
      </ItemHeader>
      <MainItem>
        <Outlet />
        <Footer />
      </MainItem>
    </Wrapper>
  )
}
