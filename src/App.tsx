import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Account from './pages/Account'
import Blog from './pages/Blog'
import Brand from './pages/Brand'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import DetailOrder from './pages/DetailOrder'
import DetailPayment from './pages/DetailPayment'
import DetailProduct from './pages/DetailProduct'
import Error from './pages/Error'
import Home from './pages/Home'
import Introduce from './pages/Introduce'
import Layout from './pages/Layout'
import ListAddress from './pages/ListAddress'
import ListOrder from './pages/ListOrder'
import ListProduct from './pages/ListProduct'
import Login from './pages/Login'
import NewLogin from './pages/NewLogin'
import NewRegister from './pages/NewRegister'
import OrderSuccess from './pages/OrderSuccess'
import ProductSearchResult from './pages/ProductSearchResult'
import Register from './pages/Register'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/list-address' element={<ListAddress />} />
          <Route path='/header' element={<Header />}></Route>
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
          <Route path='/list-order' element={<ListOrder />} />
          <Route path='/detail-order/:id' element={<DetailOrder />} />
          <Route path='/product-search-result' element={<ProductSearchResult />} />
          {/* <Route path='/selling-Products' element={<SellingProducts />} /> */}
        </Route>
        <Route path='/new-register' element={<NewRegister />} />
        <Route path='/new-login' element={<NewLogin />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        {/* <Route path='/redux-demo' element={<ReduxDemo />} /> */}
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
