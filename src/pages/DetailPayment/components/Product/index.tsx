import { CurrencyFormat } from '../../../../components/CurrencyFormat'
import Translations from '../../../../components/translations'
import { ProductType } from '../../type'
import { WrapperProduct } from './styles'

export const Product = ({ detailPayment }: any) => {
  return (
    <WrapperProduct>
      <div>
        <Translations text={'PRODUCT'} />
      </div>
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
    </WrapperProduct>
  )
}
