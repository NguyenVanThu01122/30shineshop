import { ButtonGeneral } from '../../../../components/Ui/button'
import { ContentTitle, WrapperTitle } from './styles'

export default function TitleAddress({ setIsOpenModal }: { setIsOpenModal: (value: boolean) => void }) {
  return (
    <WrapperTitle>
      <ContentTitle>Địa chỉ nhận hàng</ContentTitle>
      <ButtonGeneral className='button' onClick={() => setIsOpenModal(true)}>
        <div>
          <span className='icon-plus'>+</span>
          Thêm địa chỉ mới
        </div>
      </ButtonGeneral>
    </WrapperTitle>
  )
}
