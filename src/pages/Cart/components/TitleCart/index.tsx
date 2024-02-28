import { Dispatch, SetStateAction, useEffect } from 'react'
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
export const TitleCart = ({
  handleOpenModal,
  listCartId,
  listCart,
  isShowTitleProduct,
  setIsShowTitleProduct,
  setListCartId
}: TitleCartProps) => {
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
        <input checked={isShowTitleProduct} onClick={showTitle} type='checkbox' id='checkbox1' />
        <div className='checkboxProduct'>
          {!isShowTitleProduct ? (
            <div className='titleProduct'>
              <div>Sản phẩm</div>
              <div>Đơn giá</div>
              <div>Số lượng</div>
              <div>Tạm tính</div>
              <div>Xóa</div>
            </div>
          ) : (
            <div className='cartProduct'>
              <div>
                Sản phẩm <span>({listCartId?.length} sản phẩm)</span>
              </div>
              <ButtonGeneral type='primary' onClick={() => handleOpenModal('deleteAll', '')} className='deleteProduct'>
                <AiOutlineDelete className='iconDelete'>/</AiOutlineDelete>
                <div>Xóa tất cả</div>
              </ButtonGeneral>
            </div>
          )}
        </div>
      </div>
    </WrapperTitle>
  )
}
