import { ProductType } from '../..'
import { CurrencyFormat } from '../../../../components/CurrencyFormat'

export const Product = ({ detailPayment }: any) => {
  return (
    <div className='itemProduct'>
      <div>Sản Phẩm</div>
      {detailPayment?.products?.map((product: ProductType) => (
        <div className='product' key={product?.id}>
          <img src={product?.image} alt='imageProduct' />
          <div className='detailProdut'>
            <div>{product?.name}</div>
          </div>
          <div className='priceNumber'>
            <CurrencyFormat amount={product?.price} />
            <span>₫</span>
          </div>
          <div>x{product?.amount}</div>
          <div className='priceQuantity'>
            <CurrencyFormat amount={product?.price * product?.amount} />
            <span>₫</span>
          </div>
        </div>
      ))}
    </div>
  )
}
