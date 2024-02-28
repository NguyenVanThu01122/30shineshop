import { useEffect } from 'react'
import { scrollToTop } from '../../helpers/scrollToTop'
import { Blogs } from './components/Blogs'
import { Brands } from './components/Brands'
import { ServiceSection } from './components/Commitment'
import { HomeCarousel } from './components/HomeCarousel'
import ProductRecommendations from './components/ProductRecommendations'
import { Products } from './components/Products'
import SearchProducts from './components/SearchProduct'
import { Wrapper } from './styles'

function Home() {
  useEffect(() => {
    scrollToTop()
  }, [])

  return (
    <Wrapper>
      <HomeCarousel />
      <ServiceSection />
      <SearchProducts />
      <Products />
      <ProductRecommendations />
      <Brands />
      <Blogs />
    </Wrapper>
  )
}
export default Home
