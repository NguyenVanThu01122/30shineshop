import { useState } from 'react'
import { BsArrowUp, BsTelephoneMinusFill } from 'react-icons/bs'
import styles from './styles.module.css'
export default function Footer() {

  // const [showIcon, setShowIcon] = useState(false);

  // const handleScroll = (e: any) => {
  //   const { scrollTop } = e.target;
  //   setShowIcon(scrollTop >= 100)
  // };
  // onScroll={handleScroll} 
  return (
    <div className={styles.pageFooter}>
      <div className={styles.footer}>
        <div className={styles.information}>
          <div>CÔNG TY CỔ PHẦN TMDV 30SHINE</div>
          <div>82 Trần Đại Nghĩa, P. Đồng Tâm, Q. Hai Bà Trưng, HN</div>
          <div>Số giấy chứng nhận kinh doanh: 010.7467.693</div>
          <div>Ngày cấp: 08/06/2016</div>
          <div>Nơi cấp: Sở kế hoạch đầu tư TP Hà Nội</div>
          <div className={styles.images}>
            <img
              src='https://storage.30shine.com/ResourceWeb/data/images/congthuongicon.png'
              alt='img'
              className={styles.imgNotification}
            />
            <img
              src='https://images.dmca.com/Badges/dmca_protected_26_120.png?ID=1e720659-fbd3-461e-858a-89ef9307260a'
              alt='img'
              className={styles.imgDMCA}
            />
          </div>
          <div className={styles.text}>Chấp nhận thanh toán</div>
          <div className={styles.images}>
            <img src='https://shop.30shine.com/images/mastercard.svg' alt='img' className={styles.imgPay} />
            <img src='https://shop.30shine.com/images/visa.svg' alt='img' className={styles.imgVisa} />
          </div>
        </div>
        <div className={styles.support}>
          <div>LIÊN KẾT</div>
          <div>Giới thiệu</div>
          <div>Fanpage</div>
          <div>Chính sách bảo mật</div>
          <div>Điều kiện giao dịch chung</div>
        </div>
        <div className={styles.feedback}>
          <div>ỨNG DỤNG CỦA 30SHINE</div>
          <div>Trải nghiệm đặt lịch nhanh chóng và nhiều tiện ích khác với ứng dụng 30Shine.</div>
          <div className={styles.images}>
            <img src='https://shop.30shine.com/icons/google-play.png' alt='img' className={styles.imgGoogle} />
            <img src='https://shop.30shine.com/icons/app-store.png' alt='img' className={styles.imgApstore} />
          </div>
          <div className={styles.order}>HOTLINE ĐẶT HÀNG</div>
          <div className={styles.phoneNumber}>
            <BsTelephoneMinusFill className={styles.icon} />
            <span>HOTLINE 1900.27.27.30(MIỄN PHÍ)</span>
          </div>
        </div>
      </div>
      <div className={styles.selectionPackage}>
        <div>Copyright ©2020 30shine. All Right Reserved</div>
        <div className={styles.select}>
          <div>Về 30Shine</div>
          <div>Ưu đãi</div>
          <div>Dịch vụ</div>
          <div>Shine Member</div>
        </div>
      </div>
      {/* {showIcon && */}
        <div className={styles.fontIcons}>
          <img src='https://shop.30shine.com/images/Phone.png' alt='img' className={styles.iconPhone} />
          <img src='https://shop.30shine.com/images/Message.png' alt='img' className={styles.iconMessenger} />
          <img src='https://shop.30shine.com/images/Zalo.png' alt='img' className={styles.iconZalo} />
          <BsArrowUp className={styles.iconUp} />
        </div>
      {/* } */}
    </div>
  )
}
