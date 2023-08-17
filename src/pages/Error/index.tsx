import { Carousel } from 'antd'
import React from 'react'
import { Wrapper } from './style'

const App: React.FC = () => {
  
  return (
    <Wrapper>
      <Carousel dots={true} autoplay={false} slidesToShow={3}>
        <div className='detail_blogs'>
          <img
                src='https://static.30shine.com/shop-admin/2023/07/15/30SSFX9Q-sap-vuot-toc-nam-cho-toc-dau.jpg'
                alt=''
              />
          <div>5+ Loại sáp vuốt tóc không mùi đáng thử nhất 2023</div>
          <div>
            Sữa rửa mặt là sản phẩm chăm sóc da không thể thiếu trong quy trình làm đẹp của cả nam và nữ. Tuy nhiên,
            việc sử dụng sữa rửa mặt đúng cách lại là điều mà không phải ai cũng biết
          </div>
        </div>
        <div className='detail_blogs'>
          <img
            src='https://static.30shine.com/shop-admin/2023/07/12/30SLX8SF-sua-rua-mat-cho-nam-tuoi-day-thi.jpg'
            alt=''
          />
          <div>10+ Sữa rửa cho nam tuổi dậy thì được chuyên gia da liễu khuyên dùng</div>
          <div>
            Sữa rửa mặt là sản phẩm chăm sóc da không thể thiếu trong quy trình làm đẹp của cả nam và nữ. Tuy nhiên,
            việc sử dụng sữa rửa mặt đúng cách lại là điều mà không phải ai cũng biết, đặc biệt là nam giới. Việc sử
            dụng sữa rửa mặt sai cách có thể dẫn đến việc da không được làm sạch hoàn toàn, bị khô da thậm chí là nổi
            mụn. Trong bài viết này, 30Shine Shop sẽ chỉ ra 4 sai lầm thường gặp trong cách dùng sữa rửa mặt nam và cách
            khắc phục chúng để giúp bạn có làn da khỏe mạnh và tươi trẻ hơn.
          </div>
        </div>
        <div className='detail_blogs'>
          <img src='https://static.30shine.com/shop-admin/2023/07/12/30SSYJGX-gia-sap-vuot-toc-nam.jpg' alt='' />
          <div>5+ Loại sáp vuốt tóc không mùi đáng thử nhất 2023</div>
          <div>
            Sữa rửa mặt là sản phẩm chăm sóc da không thể thiếu trong quy trình làm đẹp của cả nam và nữ. Tuy nhiên,
            việc sử dụng sữa rửa mặt đúng cách lại là điều mà không phải ai cũng biết, đặc biệt là nam giới. Việc sử
            dụng sữa rửa mặt sai cách có thể dẫn đến việc da không được làm sạch hoàn toàn, bị khô da thậm chí là nổi
            mụn. Trong bài viết này, 30Shine Shop sẽ chỉ ra 4 sai lầm thường gặp trong cách dùng sữa rửa mặt nam và cách
            khắc phục chúng để giúp bạn có làn da khỏe mạnh và tươi trẻ hơn.
          </div>
        </div>
        <div className='detail_blogs'>
          <img
            src='https://static.30shine.com/shop-admin/2023/07/19/30STNQSQ-sap-vuot-toc-reuzel-clay-matte-pomade-khong-mui.jpg'
            alt=''
          />
          <div>5+ Loại sáp vuốt tóc không mùi đáng thử nhất 2023</div>
          <div>
            Sữa rửa mặt là sản phẩm chăm sóc da không thể thiếu trong quy trình làm đẹp của cả nam và nữ. Tuy nhiên,
            việc sử dụng sữa rửa mặt đúng cách lại là điều mà không phải ai cũng biết, đặc biệt là nam giới. Việc sử
            dụng sữa rửa mặt sai cách có thể dẫn đến việc da không được làm sạch hoàn toàn, bị khô da thậm chí là nổi
            mụn. Trong bài viết này, 30Shine Shop sẽ chỉ ra 4 sai lầm thường gặp trong cách dùng sữa rửa mặt nam và cách
            khắc phục chúng để giúp bạn có làn da khỏe mạnh và tươi trẻ hơn.
          </div>
        </div>
        <div className='detail_blogs'>
          <img src='https://static.30shine.com/shop-admin/2023/07/26/30SC7VD7-cach-dung-sua-rua-mat-nam.jpg' alt='' />
          <div>5+ Loại sáp vuốt tóc không mùi đáng thử nhất 2023</div>
          <div>
            Sữa rửa mặt là sản phẩm chăm sóc da không thể thiếu trong quy trình làm đẹp của cả nam và nữ. Tuy nhiên,
            việc sử dụng sữa rửa mặt đúng cách lại là điều mà không phải ai cũng biết, đặc biệt là nam giới. Việc sử
            dụng sữa rửa mặt sai cách có thể dẫn đến việc da không được làm sạch hoàn toàn, bị khô da thậm chí là nổi
            mụn. Trong bài viết này, 30Shine Shop sẽ chỉ ra 4 sai lầm thường gặp trong cách dùng sữa rửa mặt nam và cách
            khắc phục chúng để giúp bạn có làn da khỏe mạnh và tươi trẻ hơn.
          </div>
        </div>
      </Carousel>
    </Wrapper>
  )
}

export default App
