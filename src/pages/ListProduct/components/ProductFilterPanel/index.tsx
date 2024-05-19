import { debounce } from 'lodash'
import { Dispatch, SetStateAction, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ButtonGeneral } from '../../../../components/Ui/button'
import { InputGeneral } from '../../../../components/Ui/input'
import { SelectGeneral } from '../../../../components/Ui/select'
import Translations from '../../../../components/translations'
import { LIST_CATEGORY } from '../../../../helpers/contanst'
import Category from '../Category'
import styles from './styles.module.scss'

interface ProductFilterPanelProps {
  isCategory: boolean
  setIsCategory: Dispatch<SetStateAction<boolean>>
  category: string
  setCategory: Dispatch<SetStateAction<string>>
  setMinPrice: (value: number) => void
  setMaxPrice: (value: number) => void
  sort: string
  setSort: Dispatch<SetStateAction<string>>
  setPage: Dispatch<SetStateAction<number>>
  setKeyword: Dispatch<SetStateAction<string>>
}
export default function ProductFilterPanel(props: ProductFilterPanelProps) {
  const {
    isCategory,
    setIsCategory,
    category,
    setCategory,
    setMinPrice,
    setMaxPrice,
    setSort,
    sort,
    setPage,
    setKeyword
  } = props

  const [fnTimeout, setFnTimeout] = useState<any>()
  const { t } = useTranslation()

  // hàm xử lý changeKeyword kết hợp kĩ thuật debounce (cách 1: logic tự nhiên)
  const handleChangeKeyword = (value: string) => {
    // dùng setTimeout và clearTimeout để xử lý debounce
    clearTimeout(fnTimeout) //dùng hàm clearTimeout xóa fnTimeout trước đó, đảm bảo rằng hàm xử lý sẽ k bị gọi lại nếu user tiếp tục nhập dữ liệu trong khoảng thời gian debounce.
    setFnTimeout(
      setTimeout(() => {
        setKeyword(value)
        setPage(1)
      }, 1000) //dùng setTimeout delay 1s rồi mới setKeword vầ setPage
    )
  }

  // hàm xử lý changeMinPrice kết hợp debounce (kết hợp library lodash)
  const handleChangeMinPrice = debounce((value: number) => {
    setMinPrice(value)
  }, 1000)

  const handleChangeMaxPrice = debounce((value: number) => {
    setMaxPrice(value)
  }, 1000)

  return (
    <div className={styles.optionItem}>
      <div className={styles.itemCategory}>
        <ButtonGeneral onClick={() => setIsCategory(!isCategory)} className={styles.btnCategory}>
          <Translations text='CATEGORY' />
        </ButtonGeneral>
        {isCategory && <Category category={category} setCategory={setCategory} listCategory={LIST_CATEGORY} />}
      </div>
      <InputGeneral
        className={styles.customInput}
        placeholder={t('ENTER_PRODUCT_NAME')}
        type='text'
        onChange={handleChangeKeyword}
      />
      <InputGeneral
        className={styles.customInput}
        placeholder={t('LOWEST_PRICE')}
        type='number'
        onChange={handleChangeMinPrice}
      />
      <InputGeneral
        className={styles.customInput}
        placeholder={t('HIGHEST_PRICE')}
        type='number'
        onChange={handleChangeMaxPrice}
      />
      <SelectGeneral
        className={styles.customSelect}
        value={sort}
        size='large'
        onChange={(value: any) => setSort(value)}
        options={[
          { value: '-1', label: t('DEFAULT') },
          { value: '0', label: t('FROM_LOW_TO_HIGH') },
          { value: '1', label: t('FROM_HIGH_TO_LOW') }
        ]}
      />
    </div>
  )
}
