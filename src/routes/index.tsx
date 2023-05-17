import { Route, Routes } from 'react-router-dom'
import Account from '../pages/Account'
import Blog from '../pages/Blog'
import Brand from '../pages/Brand'
import Contact from '../pages/Contact'
import Home from '../pages/Home'
import Introduce from '../pages/Introduce'
function RouterComonHeaderFooter() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/blog' element={<Blog />} />
      <Route path='/introduce' element={<Introduce />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/brand' element={<Brand />} />
      <Route path='/account' element={<Account />} />
    </Routes>

    // <div>
    //   <RouterProvider router={router}/>
    // </div>
  )
}
export default RouterComonHeaderFooter
