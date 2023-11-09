import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Carousel, Tabs } from 'antd'
import { DotPosition } from 'antd/es/carousel'
import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Wrapper } from './styles'
const { TabPane } = Tabs

const tabList = [
  {
    nameTab: 'Sản phẩm mới',
    key: '1'
  },
  {
    nameTab: 'Tạo kiểu tóc',
    key: '2'
  },
  {
    nameTab: 'Chăm sóc tóc',
    key: '3'
  },
  {
    nameTab: 'Chăm sóc da',
    key: '4'
  },
  {
    nameTab: 'Chăm sóc cá nhân',
    key: '5'
  },
  {
    nameTab: 'Combo siêu tiếp kiệm',
    key: '6'
  }
]
const data = [
  {
    image: 'https://static.30shine.com/shop-web/banners/Banner3_2-T0323-1.jpg'
  },
  {
    image: 'https://static.30shine.com/shop-web/banners/Banner3_2-T0323-2.jpg'
  },
  {
    image: 'https://static.30shine.com/shop-web/banners/Banner3_2-T0323-3.jpg'
  },
  {
    image: 'https://static.30shine.com/shop-web/banners/Banner3_2-T0323-6.jpg'
  },
  {
    image: 'https://static.30shine.com/shop-web/banners/Banner3_2-T0323-5.jpg'
  },
  {
    image: 'https://static.30shine.com/shop-web/banners/Banner3_2-T0323-4.jpg'
  }
]

const brandImage = [
  {
    image:
      'https://shop.30shine.com/_next/image?url=https%3A%2F%2Ftheme.hstatic.net%2F1000306701%2F1000727092%2F14%2Fbanner_vendors_show_1_img.jpg%3Fv%3D336&w=1920&q=75'
  },
  {
    image:
      'https://shop.30shine.com/_next/image?url=https%3A%2F%2Ftheme.hstatic.net%2F1000306701%2F1000727092%2F14%2Fbanner_vendors_show_2_img.jpg%3Fv%3D336&w=1920&q=75'
  },
  {
    image:
      'https://shop.30shine.com/_next/image?url=https%3A%2F%2Ftheme.hstatic.net%2F1000306701%2F1000727092%2F14%2Fbanner_vendors_show_3_img.jpg%3Fv%3D336&w=1920&q=75'
  },
  {
    image:
      'https://shop.30shine.com/_next/image?url=https%3A%2F%2Ftheme.hstatic.net%2F1000306701%2F1000727092%2F14%2Fbanner_vendors_show_5_img.jpg%3Fv%3D336&w=1920&q=75'
  },
  {
    image:
      'https://shop.30shine.com/_next/image?url=https%3A%2F%2Ftheme.hstatic.net%2F1000306701%2F1000727092%2F14%2Fbanner_vendors_show_4_img.jpg%3Fv%3D336&w=1920&q=75'
  },
  {
    image:
      'https://shop.30shine.com/_next/image?url=https%3A%2F%2Ftheme.hstatic.net%2F1000306701%2F1000727092%2F14%2Fbanner_vendors_show_6_img.jpg%3Fv%3D336&w=1920&q=75'
  },
  {
    image:
      'https://shop.30shine.com/_next/image?url=https%3A%2F%2Ftheme.hstatic.net%2F1000306701%2F1000727092%2F14%2Fbanner_vendors_show_7_img.jpg%3Fv%3D336&w=1920&q=75'
  },
  {
    image: 'https://static.30shine.com/shop-admin/2023/05/19/30SNSJSB-r&b.jpeg'
  }
]
const imagesBlog = [
  {
    image: 'https://static.30shine.com/shop-admin/2023/07/15/30SSFX9Q-sap-vuot-toc-nam-cho-toc-dau.jpg',
    title: 'Tham khảo bảng giá sáp vuốt tóc nam hiện nay [Cập nhật 07/2023]',
    detailContent:
      'Sữa rửa mặt là sản phẩm chăm sóc da không thể thiếu trong quy trình làm đẹp của cả nam và nữ. Tuy nhiên việc sử dụng sữa rửa mặt đúng cách lại là điều mà không phải ai cũng biết'
  },
  {
    image: 'https://static.30shine.com/shop-admin/2023/07/12/30SLX8SF-sua-rua-mat-cho-nam-tuoi-day-thi.jpg',
    title: '10+ Sữa rửa cho nam tuổi dậy thì được chuyên gia da liễu khuyên dùng',
    detailContent:
      'Sữa rửa mặt là sản phẩm chăm sóc da không thể thiếu trong quy trình làm đẹp của cả nam và nữ. Tuy nhiên việc sử dụng sữa rửa mặt đúng cách lại là điều mà không phải ai cũng biết'
  },
  {
    image: 'https://static.30shine.com/shop-admin/2023/07/12/30SSYJGX-gia-sap-vuot-toc-nam.jpg',
    title: '10+ Sữa rửa cho nam tuổi dậy thì được chuyên gia da liễu khuyên dùng',
    detailContent:
      'Sữa rửa mặt là sản phẩm chăm sóc da không thể thiếu trong quy trình làm đẹp của cả nam và nữ. Tuy nhiên việc sử dụng sữa rửa mặt đúng cách lại là điều mà không phải ai cũng biết'
  },
  {
    image:
      'https://static.30shine.com/shop-admin/2023/07/19/30STNQSQ-sap-vuot-toc-reuzel-clay-matte-pomade-khong-mui.jpg',
    title: '10+ Sữa rửa cho nam tuổi dậy thì được chuyên gia da liễu khuyên dùng',
    detailContent:
      'Sữa rửa mặt là sản phẩm chăm sóc da không thể thiếu trong quy trình làm đẹp của cả nam và nữ. Tuy nhiên việc sử dụng sữa rửa mặt đúng cách lại là điều mà không phải ai cũng biết'
  },
  {
    image: 'https://static.30shine.com/shop-admin/2023/07/26/30SC7VD7-cach-dung-sua-rua-mat-nam.jpg',
    title: '10+ Sữa rửa cho nam tuổi dậy thì được chuyên gia da liễu khuyên dùng',
    detailContent:
      'Sữa rửa mặt là sản phẩm chăm sóc da không thể thiếu trong quy trình làm đẹp của cả nam và nữ. Tuy nhiên việc sử dụng sữa rửa mặt đúng cách lại là điều mà không phải ai cũng biết'
  }
]
function Home() {
  const imagesRef = useRef(null)
  const seachRef = useRef(null)
  const brandRef = useRef(null)
  const blogsRef = useRef(null)
  const navigate = useNavigate()
  const [tab, setTab] = useState('1')
  const [dotPosition, setDotPosition] = useState<DotPosition>('top')

  const handlePrev = () => {
    ;(imagesRef.current as any).prev()
  }
  const handleNext = () => {
    ;(imagesRef.current as any).next()
  }
  const handlePrevSeach = () => {
    ;(seachRef.current as any).prev()
  }
  const handleNextSeach = () => {
    ;(seachRef.current as any).next()
  }
  const handleNextBrand = () => {
    ;(brandRef.current as any).next()
  }
  const handlePrevBrand = () => {
    ;(brandRef.current as any).prev()
  }
  const handlePrevBlogs = () => {
    ;(blogsRef.current as any).prev()
  }
  const handleNextBlogs = () => {
    ;(blogsRef.current as any).next()
  }

  const handleTabChange = (key: string) => {
    setTab(key)
  }

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Sử dụng 'smooth' để có hiệu ứng cuộn mượt
    })
  }, [])

  return (
    <Wrapper>
      <div className='item_Carousel'>
        <Carousel autoplay={true} dots={true} ref={imagesRef}>
          <img
            src='https://shop.30shine.com/_next/image?url=https%3A%2F%2Fstatic.30shine.com%2Fshop-web%2Fbanners%2FbannerT0723-2.jpg&w=1920&q=75'
            alt=''
          />
          <img
            src='https://shop.30shine.com/_next/image?url=https%3A%2F%2Fstatic.30shine.com%2Fshop-web%2Fbanners%2FbannerT0723-3.jpg&w=1920&q=75'
            alt=''
          />
          <img
            src='https://shop.30shine.com/_next/image?url=https%3A%2F%2Fstatic.30shine.com%2Fshop-web%2Fbanners%2FbannerT0723-1.jpg&w=1920&q=75'
            alt=''
          />
        </Carousel>
        <div className='prev' onClick={handlePrev}>
          {'<'}
        </div>
        <div className='next' onClick={handleNext}>
          {'>'}
        </div>
      </div>
      <div className='item_Commitment'>
        <div className='detail_Commitment'>
          <img src='https://shop.30shine.com/_next/image?url=%2Ficons%2Fnew-usp-icon-1.svg&w=48&q=75' alt='' />
          <div>Giao hàng siêu tốc 2h</div>
        </div>
        <div className='detail_Commitment'>
          <img src='https://shop.30shine.com/_next/image?url=%2Ficons%2Fnew-usp-icon-2.svg&w=48&q=75' alt='' />
          <div>Hoàn tiền 120%</div>
        </div>
        <div className='detail_Commitment'>
          <img src='https://shop.30shine.com/_next/image?url=%2Ficons%2Fnew-usp-icon-3.svg&w=48&q=75' alt='' />
          <div>Đổi trả tận nơi</div>
        </div>
        <div className='icon_Commitment'>
          <img src='https://shop.30shine.com/_next/image?url=%2Ficons%2Fnew-usp-icon-4.svg&w=48&q=75' alt='' />
          <div>Cam kết 7 ngày hiệu quả</div>
        </div>
      </div>
      <div className='item_Service'>
        <div className='detail_Service'>
          <img
            src='https://shop.30shine.com/_next/image?url=https%3A%2F%2Fstatic.30shine.com%2Fshop-web%2Fgroups%2Fhot.png&w=256&q=75'
            alt=''
          />
          <div>Sản phẩm mới</div>
        </div>
        <div className='detail_Service'>
          <img
            src='https://shop.30shine.com/_next/image?url=https%3A%2F%2Fstatic.30shine.com%2Fshop-web%2Fgroups%2Fsale-shock.png&w=256&q=75'
            alt=''
          />
          <div>Sale sốc deal hời</div>
        </div>
        <div className='detail_Service'>
          <img
            src='https://shop.30shine.com/_next/image?url=https%3A%2F%2Fstatic.30shine.com%2Fshop-web%2Fgroups%2Fdoc-quyen.png&w=256&q=75'
            alt=''
          />
          <div>Sản phẩm độc quyền</div>
        </div>
        <div className='detail_Service'>
          <img
            src='https://shop.30shine.com/_next/image?url=https%3A%2F%2Fstatic.30shine.com%2Fshop-web%2Fgroups%2Fhet-mun.png&w=256&q=75'
            alt=''
          />
          <div>Nhanh hết mụn</div>
        </div>
        <div className='detail_Service'>
          <img
            src='https://shop.30shine.com/_next/image?url=https%3A%2F%2Fstatic.30shine.com%2Fshop-web%2Fgroups%2Fskincare.png&w=256&q=75'
            alt=''
          />
          <div>Skin care</div>
        </div>
        <div className='detail_Service'>
          <img
            src='https://shop.30shine.com/_next/image?url=https%3A%2F%2Fstatic.30shine.com%2Fshop-web%2Fgroups%2Ftoc-dep.png&w=256&q=75'
            alt=''
          />
          <div>Muốn tóc đẹp</div>
        </div>
        <div className='detail_Service'>
          <img
            src='https://shop.30shine.com/_next/image?url=https%3A%2F%2Fstatic.30shine.com%2Fshop-web%2Fgroups%2Fthom-tho.png&w=256&q=75'
            alt=''
          />
          <div>Thơm tho sạch sẽ</div>
        </div>
        <div className='detail_Service'>
          <img
            src='https://shop.30shine.com/_next/image?url=https%3A%2F%2Fstatic.30shine.com%2Fshop-web%2Fgroups%2Frau-care.png&w=256&q=75'
            alt=''
          />
          <div>Râu care</div>
        </div>
      </div>
      <div className='seach_Products'>
        <div>TOP TÌM KIẾM</div>
        <Carousel
          className='carousel_List_Products'
          autoplay={true}
          dots={true}
          slidesToShow={3.5}
          ref={seachRef}
          infinite={false}
          dotPosition={dotPosition}
        >
          <img
            src='https://shop.30shine.com/_next/image?url=https%3A%2F%2Fstatic.30shine.com%2Fshop-web%2Fbanners%2Ftopsearch_t33_3.jpg&w=1920&q=75'
            alt=''
          />
          <img
            src='https://shop.30shine.com/_next/image?url=https%3A%2F%2Fstatic.30shine.com%2Fshop-web%2Fbanners%2Ftopsearch_t33_4.jpg&w=1920&q=75'
            alt=''
          />
          <img
            src='https://shop.30shine.com/_next/image?url=https%3A%2F%2Fstatic.30shine.com%2Fshop-web%2Fbanners%2Ftopsearch_t33_5.jpg&w=1920&q=75'
            alt=''
          />
          <img
            src='https://shop.30shine.com/_next/image?url=https%3A%2F%2Fstatic.30shine.com%2Fshop-web%2Fbanners%2Ftopsearch_t33_6.jpg&w=1920&q=75'
            alt=''
          />
          <img
            src='https://shop.30shine.com/_next/image?url=https%3A%2F%2Fstatic.30shine.com%2Fshop-web%2Fbanners%2Ftopsearch_t33_7.jpg&w=1920&q=75'
            alt=''
          />
          <img
            src='https://shop.30shine.com/_next/image?url=https%3A%2F%2Fstatic.30shine.com%2Fshop-web%2Fbanners%2Ftopsearch_t33_2.jpg&w=1920&q=75'
            alt=''
          />
          <img
            src='https://shop.30shine.com/_next/image?url=https%3A%2F%2Fstatic.30shine.com%2Fshop-web%2Fbanners%2Ftopsearch_t33_1.jpg&w=1920&q=75'
            alt=''
          />
        </Carousel>
        <div className='prev' onClick={handlePrevSeach}>
          {'<'}
        </div>
        <div className='next' onClick={handleNextSeach}>
          {'>'}
        </div>
      </div>
      <div className='products'>
        {data.map((item: any) => (
          <img className='image_Products' src={item.image} alt='' />
        ))}
      </div>
      <div className='list_Products'>
        <div>GỢI Ý HÔM NAY MUA SẮM LIỀN TAY</div>
        <div>Lựa Chọn Ưa Chuộng Dành Cho Quý Khách</div>
      </div>
      <Tabs activeKey={tab} onChange={handleTabChange} className='custom-tabs'>
        {tabList.map((item: any) => (
          <TabPane tab={item.nameTab} key={item.key} className='tabPane'>
            <div>{item.nameTab}</div>
          </TabPane>
        ))}
        {/* <TabPane tab='Sản phẩm mới' key='1'>
          <p>Content of Tab 1</p>
        </TabPane>
        <TabPane tab='Tạo kiểu tóc' key='2'>
          <p>Content of Tab 2</p>
        </TabPane>
        <TabPane tab='Chăm sóc tóc' key='3'>
          <p>Content of Tab 3</p>
        </TabPane>
        <TabPane tab='Chăm sóc da' key='4'>
          <p>Content of Tab 3</p>
        </TabPane>
        <TabPane tab='Chăm sóc cá nhân' key='5'>
          <p>Content of Tab 3</p>
        </TabPane>
        <TabPane tab='Combo siêu tiết kiệm' key='6'>
          <p>Content of Tab 3</p>
        </TabPane> */}
      </Tabs>
      <div className='item_Brand'>
        <div>THƯƠNG HIỆU</div>
        <div className='list_Brand'>
          <Carousel
            // dots={true}
            // variableWidth={true}
            autoplay={true}
            ref={brandRef}
            slidesToShow={6}
            className='images_Brand'
          >
            {brandImage.map((item: any) => (
              <div className='child-brand'>
                <img src={item.image} alt='' />
              </div>
            ))}
          </Carousel>
          <div className='brand_Prev' onClick={handlePrevBrand}>
            {'<'}
          </div>
          <div className='brand_Next' onClick={handleNextBrand}>
            {'>'}
          </div>
        </div>
      </div>
      <div className='item_Blogs'>
        <div className='blogs'>
          <div className='title_Blogs'>
            <div>BLOGS</div>
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
              <div>Xem tất cả</div>
            </div>
          </Carousel>
        </div>
      </div>
    </Wrapper>
  )
}
export default Home
