import { debounce } from 'lodash'
import { Dispatch, SetStateAction, useState } from 'react'
import { ButtonGeneral } from '../../../../components/Ui/button'
import { InputGeneral } from '../../../../components/Ui/input'
import { SelectGeneral } from '../../../../components/Ui/select'
import { LIST_CATEGORY, PLACEHOLDER, optionSelect } from '../../../../helpers/contanst'
import Category from '../Category'
import styles from './styles.module.scss'

interface ProductFilterPanelProps {
  isCategory: boolean
  setIsCategory: Dispatch<SetStateAction<boolean>>
  category: string
  setCategory: Dispatch<SetStateAction<string>>
  setMinPrice: any
  setMaxPrice: any
  setSort: Dispatch<SetStateAction<string>>
  setPage: Dispatch<SetStateAction<number>>
  setKeyword: Dispatch<SetStateAction<string>>
}
export const ProductFilterPanel = ({
  isCategory,
  setIsCategory,
  category,
  setCategory,
  setMinPrice,
  setMaxPrice,
  setSort,
  setPage,
  setKeyword
}: ProductFilterPanelProps) => {
  const [fnTimeout, setFnTimeout] = useState<any>()

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

  // Hàm định dạng tiền tệ
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(value)
  }
  
  // hàm xử lý changeMinPrice kết hợp debounce (kết hợp library lodash)
  const handleChangeMinPrice = debounce((value: number) => {
    // const formattedNumber = formatCurrency(value)
    setMinPrice(value)
  }, 1000)

  const handleChangeMaxPrice = debounce((value: number) => {
    setMaxPrice(value)
  }, 1000)

  return (
    <div className={styles.optionItem}>
      <div className={styles.itemCategory}>
        <ButtonGeneral onClick={() => setIsCategory(!isCategory)} className={styles.btnCategory}>
          Danh Mục
        </ButtonGeneral>
        {isCategory && <Category category={category} setCategory={setCategory} listCategory={LIST_CATEGORY} />}
      </div>
      <InputGeneral
        className={styles.customInput}
        placeholder={PLACEHOLDER.ENTER_PRODUCT_NAME}
        type='text'
        // value={keyword}
        onChange={handleChangeKeyword}
      />
      <InputGeneral
        className={styles.customInput}
        placeholder={PLACEHOLDER.LOWEST_PRICE}
        type='number'
        // value={minPrice}
        onChange={handleChangeMinPrice}
      />
      <InputGeneral
        className={styles.customInput}
        placeholder={PLACEHOLDER.HIGHEST_PRICE}
        type='number'
        // value={maxPrice}
        onChange={handleChangeMaxPrice}
      />
      <SelectGeneral
        className={styles.customSelect}
        defaultValue='Mặc định'
        size='large'
        onChange={(value: any) => setSort(value)}
        options={optionSelect}
      />
    </div>
  )
}
