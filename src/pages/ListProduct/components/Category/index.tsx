import Translations from '../../../../components/translations'
import styles from './styles.module.scss'
interface TypeCategoryProps {
  listCategory: any
  category: string
  setCategory: React.Dispatch<React.SetStateAction<string>>
}

export default function Category({ listCategory, category, setCategory }: TypeCategoryProps) {
  return (
    <div className={styles.selectCategory}>
      <div onClick={() => setCategory('')} className={category === '' && styles.activeCategory}>
        <Translations text='ALL' />
      </div>
      <div
        onClick={() => setCategory(listCategory.dau_goi)}
        className={`${category === listCategory.dau_goi && styles.activeCategory}`}
      >
        <Translations text='SHAMPOO' />
      </div>
      <div
        onClick={() => setCategory(listCategory.sua_rua_mat)}
        className={`${category === listCategory.sua_rua_mat && styles.activeCategory}`}
      >
        <Translations text='FACE_WASH' />
      </div>
      <div
        onClick={() => setCategory(listCategory.sua_tam)}
        className={`${category === listCategory.sua_tam && styles.activeCategory}`}
      >
        <Translations text='BODY_WASH' />
      </div>
      <div
        onClick={() => setCategory(listCategory.Sáp_Vuốt_Tóc)}
        className={`${category === listCategory.Sáp_Vuốt_Tóc && styles.activeCategory}`}
      >
        <Translations text='HAIR_WAX' />
      </div>
    </div>
  )
}
