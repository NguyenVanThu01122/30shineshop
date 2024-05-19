import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Carousel } from 'antd'
import { DotPosition } from 'antd/es/carousel'
import { useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { imagesBlog } from '../../data'
import { WrapperBlogs } from './styles'

export const Blogs = () => {
  const [dotPosition, setDotPosition] = useState<DotPosition>('top')
  const navigate = useNavigate()
  const blogsRef = useRef(null)
  const { t } = useTranslation()

  const handlePrevBlogs = () => {
    ;(blogsRef.current as any).prev()
  }
  const handleNextBlogs = () => {
    ;(blogsRef.current as any).next()
  }
  return (
    <WrapperBlogs>
      <div className='blogs'>
        <div className='title_Blogs'>
          <div>{t('BLOGS')}</div>
          <div className='icon_blogs'>
            <div className='blogs_Prev' onClick={handlePrevBlogs}>
              {'<'}
            </div>
            <div className='blogs_Next' onClick={handleNextBlogs}>
              {'>'}
            </div>
          </div>
        </div>
        <Carousel dots={true} autoplay={false} slidesToShow={2} ref={blogsRef} dotPosition={dotPosition}>
          {imagesBlog.map((item: any) => {
            return (
              <div className='detail_blogs'>
                <img src={item.image} alt='' />
                <div>{item.title}</div>
                <div>{item.detailContent}</div>
              </div>
            )
          })}
          <div className='see_all' onClick={() => navigate('/blog')}>
            <FontAwesomeIcon icon={faArrowRight} className='icon_arrow' />
            <div>{t('SEE_ALL')}</div>
          </div>
        </Carousel>
      </div>
    </WrapperBlogs>
  )
}
