import { Dispatch, SetStateAction, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { AiOutlineDelete } from 'react-icons/ai'
import { ProductType } from '../..'
import { ButtonGeneral } from '../../../../components/Ui/button'
import { WrapperTitle } from './styles'

interface TitleCartProps {
  listCart: ProductType[]
  listCartId: string[]
  setListCartId: Dispatch<SetStateAction<string[]>>
  handleOpenModal: (action: string, id: string) => void
  isShowTitleProduct: boolean
  setIsShowTitleProduct: Dispatch<SetStateAction<boolean>>
}
export default function TitleCart(props: TitleCartProps) {
  const { handleOpenModal, listCartId, listCart, isShowTitleProduct, setIsShowTitleProduct, setListCartId } = props
  const { t } = useTranslation()
  // hàm mở tiêu đề thông tin sản phẩm
  const showTitle = () => {
    setIsShowTitleProduct(!isShowTitleProduct)
  }

  useEffect(() => {
    if (isShowTitleProduct) {
      const arrId = listCart?.map((item: ProductType) => {
        return item.id
        // gom id listCart vào mảng arrId
      })
      setListCartId(arrId) // cập nhật lại listCartId bằng giá trị mới là arrId
    } else {
      setListCartId([]) // nếu showTitleProduct là false thì setListCartId là mảng rỗng
    }
  }, [isShowTitleProduct])
  return (
    <WrapperTitle>
      <div className='detailTitle'>
        <div className='selectAll'>
          <input
            checked={isShowTitleProduct}
            disabled={!listCart.length}
            onClick={showTitle}
            type='checkbox'
            id='checkbox1'
          />
          <span>{t('Select All')}</span>
        </div>
        <div className='checkboxProduct'>
          {!isShowTitleProduct ? (
            <div className='titleProduct'>
              <div>{t('PRODUCT')}</div>
              <div>{t('UNIT_PRICE')}</div>
              <div>{t('QUANTITY')}</div>
              <div>{t('TEMPORARY_CALCULATION')}</div>
              <div>{t('DELETE')}</div>
            </div>
          ) : (
            <div className='cartProduct'>
              <div>
                {t('PRODUCTS')}{' '}
                <span>
                  ({listCartId?.length} {t('PRODUCTS')})
                </span>
              </div>
              <ButtonGeneral type='primary' onClick={() => handleOpenModal('deleteAll', '')} className='deleteProduct'>
                <AiOutlineDelete className='iconDelete'>/</AiOutlineDelete>
                <div>{t('DELETE_ALL')}</div>
              </ButtonGeneral>
            </div>
          )}
        </div>
      </div>
    </WrapperTitle>
  )
}
