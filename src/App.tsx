import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Account from './pages/Account'
import Blog from './pages/Blog'
import Brand from './pages/Brand'
import Contact from './pages/Contact'
import DetailProduct from './pages/DetailProduct'
import Error from './pages/Error'
import Introduce from './pages/Introduce'
import Layout from './pages/Layout'
import ListProduct from './pages/ListProduct'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<ListProduct />} />
          <Route path='/detail-product/:id' element={<DetailProduct />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/introduce' element={<Introduce />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/brand' element={<Brand />} />
          <Route path='/account' element={<Account />} />
          {/* <Route path='/selling-Products' element={<SellingProducts />} /> */}
        </Route>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
