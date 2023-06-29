import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Account from './pages/Account'
import Blog from './pages/Blog'
import Brand from './pages/Brand'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import DetailPayment from './pages/DetailPayment'
import DetailProduct from './pages/DetailProduct'
import Error from './pages/Error'
import Introduce from './pages/Introduce'
import Layout from './pages/Layout'
import ListProduct from './pages/ListProduct'
import Login from './pages/Login'
import OrderSuccess from './pages/OrderSuccess'
import Register from './pages/Register'
import Header from './components/Header'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<ListProduct />} />
          <Route path='/header' element={<Header/>}></Route>
          <Route path='/detail-product/:id' element={<DetailProduct />} />
          <Route path='/list-product' element={<ListProduct />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/introduce' element={<Introduce />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/brand' element={<Brand />} />
          <Route path='/account' element={<Account />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/payment/:id' element={<DetailPayment />} />
          <Route path='/order-success/:id' element={<OrderSuccess />} />
          {/* <Route path='/selling-Products' element={<SellingProducts />} /> */}
        </Route>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        {/* <Route path='/redux-demo' element={<ReduxDemo />} /> */}
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
