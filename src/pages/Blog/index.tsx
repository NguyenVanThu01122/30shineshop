import { faLeftLong } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import PageNavbar from '../../components/PageNavbar'
import { ERROR_MESSAGES, PAGE_NAMES } from '../../helpers/contanst'
import { scrollToTop } from '../../helpers/scrollToTop'
import { getBlog } from '../../services/blog'
import styles from './styles.module.css'
interface ListBlogType {
  id: number
  image: string
  title: string
  category: string
  description: string
  time: string
}
export default function Blog() {
  let [listBlog, setListBlog] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    scrollToTop()
    getBlog()
      .then((response) => {
        setListBlog(response.data.data)
      })
      .catch((error) => {
        toast.error(ERROR_MESSAGES.SERVER_ERROR)
      })
  }, [])

  return (
    <div className={styles.pageBlog}>
      <PageNavbar page={PAGE_NAMES.BLOG} />
      <div className={styles.sectionTwo}>
        <div className={styles.productIntroduction}>
          <div className={styles.blog}>
            <div>
              <FontAwesomeIcon
                onClick={() => navigate('/list-product')}
                className={styles.iconBack}
                icon={faLeftLong}
              />
              BLOGS
            </div>
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

          {listBlog.length > 0 &&
            listBlog.map((item: ListBlogType) => {
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
  )
}
