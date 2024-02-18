import { Button, Modal } from 'antd'
import { useNavigate } from 'react-router-dom'
import { useBuyNow } from '../../../../helper/useBuyNow'
import styles from './styles.module.scss'
export const ModalCart = ({
  detailProduct,
  count,
  totalCart,
  isModalOpen,
  setIsModalOpen
}: {
  detailProduct: any
  count: number
  totalCart: number
  isModalOpen: boolean
  setIsModalOpen: any
}) => {
  const navigate = useNavigate()
  const [handleBuyNow] = useBuyNow()

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  return (
    <Modal className={styles.modal} centered width={400} open={isModalOpen} onCancel={handleCancel} footer={false}>
      <div className={styles.modalCart}>
        <div className={styles.cart}>
          <div>GIỎ HÀNG</div>
          <div>Thêm giỏ hàng thành công</div>
        </div>
        <div className={styles.detailCart}>
          <img src={detailProduct?.images[0]} alt='' />
          <div className={styles.priceProductCart}>
            <div>{detailProduct.name}</div>
            <div className={styles.price}>
              <div className={styles.priceSale}>
                <div>
                  {detailProduct.salePrice}
                  <span>đ</span>
                </div>
                <div>
                  {detailProduct.originPrice} <span>đ</span>
                </div>
              </div>
              <div>x{count}</div>
            </div>
          </div>
        </div>
        <div className={styles.numberProduct}>Giỏ hàng của bạn đang có: {totalCart} sản phẩm</div>
        <div className={styles.totalMoney}>
          <div>TỔNG TIỀN: </div>
          <div>
            {detailProduct.salePrice * count}
            <span>đ</span>
          </div>
        </div>
        <div className={styles.buyNow}>
          <Button type='primary' size='large' onClick={() => navigate('/cart')}>
            XEM GIỎ HÀNG
          </Button>
          <Button size='large' onClick={() => handleBuyNow(detailProduct.id, count)}>
            MUA NGAY
          </Button>
        </div>
      </div>
    </Modal>
  )
}
