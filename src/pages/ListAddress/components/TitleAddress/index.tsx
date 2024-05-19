import { useTranslation } from 'react-i18next'
import { ButtonGeneral } from '../../../../components/Ui/button'
import { ContentTitle, WrapperTitle } from './styles'

export default function TitleAddress({ setIsOpenModal }: { setIsOpenModal: (value: boolean) => void }) {
  const { t } = useTranslation()
  return (
    <WrapperTitle>
      <ContentTitle>{t('DELIVERY_ADDRESS')}</ContentTitle>
      <ButtonGeneral className='button' onClick={() => setIsOpenModal(true)}>
        <div>
          <span className='icon-plus'>+</span>
          {t('ADD_NEW_ADDRESS')}
        </div>
      </ButtonGeneral>
    </WrapperTitle>
  )
}
