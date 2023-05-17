import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import Account from './pages/Account'
import Blog from './pages/Blog'
import Brand from './pages/Brand'
import Contact from './pages/Contact'
import DetailProduct from './pages/DetailProduct'
import Error from './pages/Error'
import Home from './pages/Home'
import Introduce from './pages/Introduce'
import Login from './pages/Login'
import Register from './pages/Register'

import ListProduct from './pages/ListProduct'
import SellingProducts from './pages/SellingProducts'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/introduce' element={<Introduce />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/brand' element={<Brand />} />
        <Route path='/account' element={<Account />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/listProduct' element={<ListProduct />} />
        <Route path='/sellingProducts' element={<SellingProducts />} />
        <Route path='/detail-product/:id' element={<DetailProduct />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    // <div>
    //   <RouterProvider router={router}/>
    // </div>
  )
}
export default App
