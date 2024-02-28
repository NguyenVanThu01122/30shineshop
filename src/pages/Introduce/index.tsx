import { faLeftLong } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'
import styles from './styles.module.css'
export default function Introduce() {
  const navigate = useNavigate()  
  return (
    <div className={styles.pageIntroduce}>
      <div className={styles.introduce}>
        <div onClick={()=>navigate('/')}>Trang chủ</div>
        <div>/ Giới thiệu</div>
      </div>
      <div className={styles.titleIntro}>
        <FontAwesomeIcon onClick={() => navigate('/list-product')} className={styles.iconBack} icon={faLeftLong} />
        <div>GIỚI THIỆU</div>
      </div>
      <div className={styles.imgWax}>
        <img src='https://theme.hstatic.net/1000306701/1000727092/14/about03_banner_bkg.jpg?v=333' alt='img' />
      </div>
      <div className={styles.itroduce30shine}>
        <div className={styles.blockHead}>
          <div>30Shine Store</div>
          <div>
            Sứ mệnh của 30Shine Store là giúp nam giới Việt Nam có được vẻ ngoài đẹp trai, tinh thần sảng khoái thu hút
            phái đẹp. Với kinh nghiệm phục vụ hàng triệu nam giới Việt thông qua việc chuyên cung cấp các sản phẩm chăm
            sóc tóc, da mặt, dầu gội…của chuỗi cắt tóc nam 30Shine. 30Shine Store khẳng định được vị thế là nhà phân
            phối mỹ phẩm nam chính hãng giá tốt nhất thị trường. Song song với sự phát triển của xã hội và nhu cầu chăm
            sóc tăng cao của nam giới vì chính ngoại hình giúp phái mạnh trở nên tự tin hơn, có nhiều cơ hội trong cuộc
            sống. Hiểu được điều này 30Shine Store đem đến cho bạn những dòng sản phẩm dẫn đầu thị trường với giá cực
            tốt:
          </div>
        </div>
        <div className={styles.blockTwo}>
          <div className={styles.productValue}>
            <div>
              <img src='https://theme.hstatic.net/1000306701/1000727092/14/about03_infor_1_ico.png?v=333' alt='img' />
            </div>
            <div>Chất lượng thật - Giá trị thật</div>
            <div>
              30Shine Store đa dạng hoá tất cả các sản phẩm giúp nam giới tự tin hơn và bứt phá trong cuộc sống. Hơn 200
              mặt hàng tiêu dùng và hơn 100 sản phẩm chuyên dụng chăm sóc tóc, chăm sóc da, sản phẩm underwear đồ lót,
              tất nam…
            </div>
          </div>
          <div className={styles.productValue}>
            <div>
              <img src='https://theme.hstatic.net/1000306701/1000727092/14/about03_infor_2_ico.png?v=333' alt='img' />
            </div>
            <div>Chính sách cho khách hàng</div>
            <div>
              Hàng ngàn khách hàng đã sử dụng sản phẩm của 30Shine Store. Tất cả khách hàng của 30Shine đều sử dụng sản
              phẩm 30Shine Store cung cấp. Chính sách đổi trả hàng không cần lý do trên tất cả hệ thống cửa hàng 30Shine
              trên toàn quốc. 30Shine Store làm tất cả vì sự hài lòng của khách hàng.
            </div>
          </div>
          <div className={styles.productValue}>
            <div>
              <img src='https://theme.hstatic.net/1000306701/1000727092/14/about03_infor_3_ico.png?v=333' alt='img' />
            </div>
            <div>Hỗ trợ giao hàng toàn quốc</div>
            <div>
              Vận chuyển nhanh chóng, giao hàng tận nơi. Gọi điện đặt hàng là có hàng luôn. Thanh toán ship COD an toàn
              tiện lợi, phù hợp với mọi khách hàng.
            </div>
          </div>
        </div>
        <div className={styles.blockThree}>
          <div className={styles.myProduct}>
            <div className={styles.product}>
              <div>Các sản phẩm của chúng tôi</div>
              <div>
                30Shine Store mang đến những sản phẩm của những thương hiệu hàng đầu thế giới được nhiều người ưa dùng.
              </div>
            </div>
            <div>
              <img src='https://theme.hstatic.net/1000306701/1000727092/14/about03_team_1_img.jpg?v=333' alt='img' />
            </div>
          </div>
          <div className={styles.myProduct}>
            <div>
              <img src='https://theme.hstatic.net/1000306701/1000727092/14/about03_team_2_img.jpg?v=333' alt='' />
            </div>
            <div className={styles.product}>
              <div>Chi tiết sản phẩm</div>
              <div>
                Bất cứ sản phẩm nào không đạt được tiêu chuẩn sẽ được loại bỏ và tiêu hủy lập tức. Sản phẩm hoàn thiện
                đồng nhất đảm bảo chất lượng đưa tới tay người tiêu dùng.
              </div>
            </div>
          </div>
          <div className={styles.myProduct}>
            <div className={styles.product}>
              <div>Đảm bảo chất lượng</div>
              <div>
                Tất cả sản phẩm của chúng tôi đều được đảm bảo thích ứng tốt với người Việt Nam, không gây các tác dụng
                phụ hay ảnh hưởng đến sức khỏe khi sử dụng lâu dài. Mọi tác động đến sức khỏe có nguyên nhân từ sản phẩm
                của chúng tôi đều được công ty chịu hoàn toàn trách nhiệm.
              </div>
            </div>
            <div>
              <img src='https://theme.hstatic.net/1000306701/1000727092/14/about03_team_3_img.jpg?v=333' alt='icon' />
            </div>
          </div>
          <div className={styles.myProduct}>
            <div>
              <img src='https://theme.hstatic.net/1000306701/1000727092/14/about03_team_4_img.jpg?v=333' alt='icon' />
            </div>
            <div className={styles.product}>
              <div>Chúng tôi luôn lắng nghe</div>
              <div>
                30Shine Store luôn lắng nghe phản hồi, góp ý từ phía khách hàng nhằm ngày càng cải thiện chất lượng dịch
                vụ, sản phẩm tốt hơn tới tay khách hàng
              </div>
            </div>
          </div>
        </div>
        <div className={styles.blockFour}>
          <div>Tại sao chọn chúng tôi</div>
          <div>
            Vì sứ mệnh tạo nên những giá trị thương hiệu, chúng tôi đã, đang và sẽ luôn nỗ lực hết mình vì sự phát triển
            – khẳng định thương hiệu Việt, mang lại những giá trị lâu dài cho doanh nghiệp.
          </div>
        </div>
        <div className={styles.blockEnd}>
          <div className={styles.ourPolicy}>
            <div className={styles.commitments}>
              <div>
                <img
                  src='https://theme.hstatic.net/1000306701/1000727092/14/about03_services_1_ico.png?v=333'
                  alt='icon'
                />
              </div>
              <div>Giá trị cốt lõi</div>
              <div>
                Với cốt lõi luôn xem khách hàng là bạn hàng. Chúng tôi mong muốn đem đến cho các khách hàng, đối tác của
                mình những sản phẩm, dịch vụ với chất lượng vượt trội.
              </div>
            </div>
            <div className={styles.commitments}>
              <div>
                <img
                  src='https://theme.hstatic.net/1000306701/1000727092/14/about03_services_2_ico.png?v=333'
                  alt='icon'
                />
              </div>
              <div>Tầm nhìn và Sứ mệnh</div>
              <div>
                30Shine Store tin tưởng & nỗ lực mỗi ngày để mang đến những sản phẩm chất lượng cho phái mạnh toàn cầu
                kiểu tóc khỏe đẹp, làn da khoẻ mạnh cuốn hút phái đẹp; tinh thần thư giãn để bứt phá trong sự nghiệp.
              </div>
            </div>
            <div className={styles.commitments}>
              <div>
                <img
                  src='https://theme.hstatic.net/1000306701/1000727092/14/about03_services_3_ico.png?v=333'
                  alt='icon'
                />
              </div>
              <div>Thế mạnh của chúng tôi?</div>
              <div>
                Cam kết cung cấp các sản phẩm chính hãng 100%. Số lượng sản phẩm lớn nhất với chủng loại đa dạng, phong
                phú sẽ đáp ứng tất cả nhu cầu mua sắm của bạn.
              </div>
            </div>
          </div>
          <div className={styles.ourPolicy}>
            <div className={styles.commitments}>
              <div>
                <img
                  src='https://theme.hstatic.net/1000306701/1000727092/14/about03_services_4_ico.png?v=333'
                  alt='icon'
                />
              </div>
              <div>Hỗ trợ khách hàng 24/7</div>
              <div>
                Trong trường hợp Quý Khách hàng có ý kiến đóng góp/khiếu nại liên quan đến chất lượng sản phẩm, Quý
                Khách hàng vui lòng liên hệ đường dây chăm sóc khách hàng của chúng tôi.
              </div>
            </div>
            <div className={styles.commitments}>
              <div>
                <img
                  src='https://theme.hstatic.net/1000306701/1000727092/14/about03_services_5_ico.png?v=333'
                  alt='icon'
                />
              </div>
              <div>Đổi trả, hoàn tiền</div>
              <div>
                Nếu nhận được sản phẩm bị lỗi ngoại quan (có dấu hiệu bị trầy xước, hư hỏng bên ngoài, bể vỡ ) , quý
                khách vui lòng liên hệ trong vòng 48h kể từ khi nhận hàng thành công.
              </div>
            </div>
            <div className={styles.commitments}>
              <div>
                <img
                  src='https://theme.hstatic.net/1000306701/1000727092/14/about03_services_6_ico.png?v=333'
                  alt='icon'
                />
              </div>
              <div>Chính sách bảo mật</div>
              <div>
                Chúng tôi coi trọng việc bảo mật thông tin và sử dụng các biện pháp tốt nhất để bảo vệ thông tin cũng
                như việc thanh toán của khách hàng.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
