import { ListBrandType } from '..'
import { WrapperBrands } from './styles'

export default function ContainerBrands({ listBrand }: { listBrand: ListBrandType[] }) {
  return (
    <>
      {listBrand.length > 0 && (
        <WrapperBrands>
          {listBrand.map((item: ListBrandType) => {
            return (
              <div className='brandItem' key={item.id}>
                <img src={item.image} alt='' />
                <div>{item.name}</div>
              </div>
            )
          })}
        </WrapperBrands>
      )}
    </>
  )
}
