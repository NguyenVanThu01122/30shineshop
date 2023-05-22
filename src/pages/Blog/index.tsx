import { useEffect, useState } from 'react'
import { AiOutlineClockCircle } from 'react-icons/ai'
import styles from './styles.module.css'
import { privateAxios, publicAxios } from '../../service/axios'

export default function Blog() {
  // https://shop30shine.herokuapp.com/blog
  // https://shop30shine.herokuapp.com/brand // api thương hiệu dây nhé

  let [list, setList] = useState([])
  let [textError, setTextError] = useState('')

  useEffect(() => {
    publicAxios
      .get('/blog')
      .then((response) => {
        setList(response.data.data)
        setTextError('')
      })
      .catch((error) => {
        setTextError('Lỗi server')
      })
  }, [])

  // const data = [
  //   {
  //     id: 1,
  //     img: 'https://static.30shine.com/shop-admin/2023/04/12/30S8TFME-reuzel-green-pomade-review.jpg',
  //     title: 'Review Reuzel Green Pomade: hiệu quả tạo kiểu, giữ nếp có như lời đồn',
  //     time: '12/04/2023',
  //     category: 'Tóc đẹp mỗi ngày',
  //     description: `Là sản phẩm vuốt tóc thương hiệu Reuzel đình đám, Reuzel Green Pomade tên đầy đủ là Reuzel Green Grease
  //       Medium Hold Pomade nhận được “cơn mưa” lời khen về khả năng biến hóa phù hợp với mọi kiểu tóc. Vậy chất
  //       lượng thực sự của sản phẩm có “thần thánh” như...`
  //   },
  //   {
  //     id: 2,
  //     img: 'https://static.30shine.com/shop-admin/2023/04/12/30S8TFME-reuzel-green-pomade-review.jpg',
  //     title: 'Review Reuzel Green Pomade: hiệu quả tạo kiểu, giữ nếp có như lời đồn',
  //     time: '12/04/2023',
  //     category: 'Tóc đẹp mỗi ngày',
  //     description: `Là sản phẩm vuốt tóc thương hiệu Reuzel đình đám, Reuzel Green Pomade tên đầy đủ là Reuzel Green Grease
  //       Medium Hold Pomade nhận được “cơn mưa” lời khen về khả năng biến hóa phù hợp với mọi kiểu tóc. Vậy chất
  //       lượng thực sự của sản phẩm có “thần thánh” như...`
  //   },
  //   {
  //     id: 3,
  //     img: 'https://static.30shine.com/shop-admin/2023/04/12/30S8TFME-reuzel-green-pomade-review.jpg',
  //     title: 'Review Reuzel Green Pomade: hiệu quả tạo kiểu, giữ nếp có như lời đồn',
  //     time: '12/04/2023',
  //     category: 'Tóc đẹp mỗi ngày',
  //     description: `Là sản phẩm vuốt tóc thương hiệu Reuzel đình đám, Reuzel Green Pomade tên đầy đủ là Reuzel Green Grease
  //       Medium Hold Pomade nhận được “cơn mưa” lời khen về khả năng biến hóa phù hợp với mọi kiểu tóc. Vậy chất
  //       lượng thực sự của sản phẩm có “thần thánh” như...`
  //   },
  //   {
  //     id: 4,
  //     img: 'https://static.30shine.com/shop-admin/2023/04/12/30S8TFME-reuzel-green-pomade-review.jpg',
  //     title: 'Bài viết 4',
  //     time: '12/04/2023',
  //     category: 'Sáp vuốt tóc',
  //     description: `Là sản phẩm vuốt tóc thương hiệu Reuzel đình đám, Reuzel Green Pomade tên đầy đủ là Reuzel Green Grease
  //       Medium Hold Pomade nhận được “cơn mưa” lời khen về khả năng biến hóa phù hợp với mọi kiểu tóc. Vậy chất
  //       lượng thực sự của sản phẩm có “thần thánh” như...`
  //   }
  // ]
  return (
    <div className={styles.pageBlog}>
      {/* <div className={styles.headerBlog}>
        <div>Trang chủ /</div>
        <div>Blog</div>
      </div> */}
      <div className={styles.sectionTwo}>
        <div className={styles.productIntroduction}>
          <div className={styles.blog}>
            <div>BLOGS</div>
            <div>
              <span>Sắp xếp theo</span>
              <select className={styles.select}>
                <option value='Mặc định'>Mặc định</option>
                <option value='Lượt xem từ cao đến thấp'>Lượt xem từ cao đến thấp</option>
                <option value='Lượt xem từ thấp đến cao'>Lượt xem từ thấp đến cao</option>
                <option value='Tên: từ A-Z'>Tên: từ A-Z</option>
                <option value='Tên: từ Z-A'>Tên: từ Z-A</option>
              </select>
            </div>
          </div>
          {list.map((item: any) => {
            return (
              <div className={styles.introduceWax}>
                <img src={item.image}></img>
                <div className={styles.productDescription}>
                  <div>{item.title}</div>
                  <div className={styles.time}>
                    <AiOutlineClockCircle />
                    <span>{item.time}</span>
                    <img
                      className={styles.fontIcon}
                      src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf-fco-XkvbomqXlumafj9t8zdSm_x_AIpUXVSHYlXqmZrKRx-'
                      alt='img'
                    />
                    <span>{item.description}</span>
                  </div>
                </div>
              </div>
            )
          })}
          <div>{textError}</div>
          {/* {data.map((item) => {
            return (
              <div className={styles.introduceWax} key={item.id}>
                <img src={item.img}></img>
                <div className={styles.productDescription}>
                  <div>{item.title}</div>
                  <div className={styles.time}>
                    <AiOutlineClockCircle />
                    <span>{item.time}</span>
                    <img
                      className={styles.fontIcon}
                      src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf-fco-XkvbomqXlumafj9t8zdSm_x_AIpUXVSHYlXqmZrKRx-'
                      alt='img'
                    />
                    <span>{item.category}</span>
                  </div>
                  <div>{item.description}</div>
                </div>
              </div>
            )
          })} */}
          <div className={styles.sectionEnd}>
            <div>
              <img src='https://shop.30shine.com/icons/first-icon.svg' alt='img' />
            </div>
            <div>
              <img src='https://shop.30shine.com/icons/angle-icon.svg' alt='img' />
            </div>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>
              <img src='https://shop.30shine.com/icons/angle-icon-2.svg' alt='img' />
            </div>
            <div>
              <img src='https://shop.30shine.com/icons/last-icon.svg' alt='img' />
            </div>
          </div>
        </div>
        <div className={styles.Categories}>
          <div className={styles.serviceSelection}>
            <div className={styles.service}>CHUYÊN MỤC</div>
            <div className={styles.selectDiv}>Tóc đẹp mỗi ngày</div>
            <div className={styles.selectDiv}>Da đẹp mỗi ngày</div>
            <div className={styles.service}>LOẠI BÀI VIẾT</div>
            <div>Tất cả</div>
            <div className={styles.selectDiv}>Bài viết</div>
            <div className={styles.selectDiv}>Video</div>
          </div>
          <div className={styles.posts}>
            <div>BÀI VIẾT ĐƯỢC XEM NHIỀU NHẤT</div>
            <img
              className={styles.postsImagesWax}
              src='https://static.30shine.com/shop-admin/2023/02/15/30SV3RHN-sap-vuot-toc-bi-chay.jpg'
              alt='img'
            />
            <div>Sáp vuốt tóc bị chảy còn dùng được không? Cách khắc phục hiệu quả</div>
            <div className={styles.time}>
              <AiOutlineClockCircle className={styles.fontIcon} />
              <span>12/04/2023</span>
              <img
                className={styles.fontIcon}
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf-fco-XkvbomqXlumafj9t8zdSm_x_AIpUXVSHYlXqmZrKRx-'
                alt='img'
              />
              <span>Tóc đẹp mỗi ngày</span>
            </div>
          </div>
          <div className={styles.answers}>
            <div className={styles.productAnswer}>
              <img
                className={styles.imgWax}
                src='https://static.30shine.com/shop-admin/2023/02/16/30S52XDD-cach-check-sap-volcanic-clay.jpg'
                alt='img'
              />
              <div className={styles.useWax}>
                <div>2 cách check sáp volcanic Clay chuẩn nhất, tránh mua khỏi hàng giả</div>
                <div className={styles.time}>
                  <AiOutlineClockCircle className={styles.fontIcon} />
                  <span>12/04/2023</span>
                  <img
                    className={styles.fontIcon}
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf-fco-XkvbomqXlumafj9t8zdSm_x_AIpUXVSHYlXqmZrKRx-'
                    alt='img'
                  />
                  <span>Tóc đẹp mỗi ngày</span>
                </div>
              </div>
            </div>
            <div className={styles.productAnswer}>
              <img
                className={styles.imgWax}
                src='https://static.30shine.com/shop-admin/2023/02/21/30S5SWL7-sap-vuot-toc-het-han-co-sao-khong.jpg'
                alt='img'
              />
              <div className={styles.useWax}>
                <div>Sử dụng sáp vuốt tóc hết hạn có sao không? có nên dùng không?</div>
                <div className={styles.time}>
                  <AiOutlineClockCircle className={styles.fontIcon} />
                  <span>12/04/2023</span>
                  <img
                    className={styles.fontIcon}
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf-fco-XkvbomqXlumafj9t8zdSm_x_AIpUXVSHYlXqmZrKRx-'
                    alt='img'
                  />
                  <span>Tóc đẹp mỗi ngày</span>
                </div>
              </div>
            </div>
            <div className={styles.productAnswer}>
              <img
                className={styles.imgWax}
                src='https://static.30shine.com/shop-admin/2023/02/15/30SNHVPH-sap-vuot-toc-bi-kho-cung.jpg'
                alt='img'
              />
              <div className={styles.useWax}>
                <div>Sáp vuốc tóc bị khô cứng có dùng được không, 6 mẹo khắc phục cực hay</div>
                <div className={styles.time}>
                  <AiOutlineClockCircle className={styles.fontIcon} />
                  <span>12/04/2023</span>
                  <img
                    className={styles.fontIcon}
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf-fco-XkvbomqXlumafj9t8zdSm_x_AIpUXVSHYlXqmZrKRx-'
                    alt='img'
                  />
                  <span>Tóc đẹp mỗi ngày</span>
                </div>
              </div>
            </div>
            <div className={styles.productAnswer}>
              <img
                className={styles.imgWax}
                src='https://static.30shine.com/shop-admin/2023/02/21/30SBJ4SP-pomade-goc-nuoc-la-gi.jpg'
                alt='img'
              />
              <div className={styles.useWax}>
                <div>Pomade gốc nước là gì? Có gì khiến nam giới đam mê kiểu tóc Classic yêu thích?</div>
                <div className={styles.time}>
                  <AiOutlineClockCircle className={styles.fontIcon} />
                  <span>12/04/2023</span>
                  <img
                    className={styles.fontIcon}
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf-fco-XkvbomqXlumafj9t8zdSm_x_AIpUXVSHYlXqmZrKRx-'
                    alt='img'
                  />
                  <span>Tóc đẹp mỗi ngày</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
