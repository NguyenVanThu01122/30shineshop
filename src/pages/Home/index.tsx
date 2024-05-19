import { useEffect } from 'react'
import { scrollToTop } from '../../helpers/scrollToTop'
import { Blogs } from './components/Blogs'
import { Brands } from './components/Brands'
import { ServiceSection } from './components/Commitment'
import { HomeCarousel } from './components/HomeCarousel'
import ProductRecommendations from './components/ProductRecommendations'
import { ProductsHome } from './components/Products'
import SearchProducts from './components/SearchProduct'
import { MainContent, Wrapper } from './styles'

function Home() {
  useEffect(() => {
    scrollToTop()
  }, [])

  return (
    <Wrapper>
      <HomeCarousel />
      <MainContent>
        <ServiceSection />
        <SearchProducts />
        <ProductsHome />
        <ProductRecommendations />
        <Brands />
        <Blogs />
      </MainContent>
    </Wrapper>
  )
}
export default Home
