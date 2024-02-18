import styles from './styles.module.scss'
export const ProductSupportInfo = () => {
  return (
    <div className={styles.itemSupportProduct}>
      <div className={styles.support}>
        <div>
          <img src='https://shop.30shine.com/icons/usp-detail-icon-1.png' alt='icon' />
        </div>
        <div>cam kết 7 ngày hiệu quả</div>
      </div>
      <div className={styles.support}>
        <div>
          <img src='https://shop.30shine.com/icons/usp-detail-icon-2.png' alt='icon' />
        </div>
        <div>mua 1 hưởng 5 đặc quyền</div>
      </div>
      <div className={styles.support}>
        <div>
          <img src='https://shop.30shine.com/icons/usp-detail-icon-3.png' alt='icon' />
        </div>
        <div>chính sách hoàn tiền 120%</div>
      </div>
      <div className={styles.support}>
        <div>
          <img src='https://shop.30shine.com/icons/usp-detail-icon-4.png' alt='icon' />
        </div>
        <div>chất lượng sản phẩm cấp cao nhất</div>
      </div>
      <div className={styles.support}>
        <div>
          <img src='https://shop.30shine.com/icons/usp-detail-icon-5.png' alt='icon' />
        </div>
        <div>giao hàng siêu tốc 2h</div>
      </div>
      <div className={styles.support}>
        <div>
          <img src='https://shop.30shine.com/icons/usp-detail-icon-6.png' alt='icon' />
        </div>
        <div>đổi trả tận nơi trong 24h</div>
      </div>
      <div className={styles.support}>
        <div>
          <img src='https://shop.30shine.com/icons/usp-detail-icon-7.png' alt='icon' />
        </div>
        <div>Tổng đài tư vấn mọi lúc mọi nơi</div>
      </div>
      <div className={styles.support}>
        <div>
          <img src='https://shop.30shine.com/icons/usp-detail-icon-8.png' alt='icon' />
        </div>
        <div>An toàn chuẩn giao vận quốc tế</div>
      </div>
      <div className={styles.oder}>
        <img src='https://shop.30shine.com/icons/icon-phone.svg' alt='icon' />
        <div className={styles.hotlineOder}>
          <div>Hotline đặt hàng</div>
          <div>1900.27.27.30</div>
        </div>
      </div>
    </div>
  )
}
