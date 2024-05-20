import { faLeftLong } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import PageNavbar from '../../components/PageNavbar'
import styles from './styles.module.css'

export default function Introduce() {
  const navigate = useNavigate()
  const { t } = useTranslation()

  const productValue = [
    {
      icon: 'https://theme.hstatic.net/1000306701/1000727092/14/about03_infor_1_ico.png?v=333',
      title: t('PRODUCT_QUALITY'),
      content: t('PRODUCT_QUALITY_CONTENT')
    },
    {
      icon: 'https://theme.hstatic.net/1000306701/1000727092/14/about03_infor_2_ico.png?v=333',
      title: t('CUSTOMER_POLICY'),
      content: t('CUSTOMER_POLICY_CONTENT')
    },
    {
      icon: 'https://theme.hstatic.net/1000306701/1000727092/14/about03_infor_3_ico.png?v=333',
      title: t('DELIVERY_SUPPORT'),
      content: t('DELIVERY_SUPPORT_CONTENT')
    }
  ]
  const myProduct = [
    {
      img: 'https://theme.hstatic.net/1000306701/1000727092/14/about03_team_1_img.jpg?v=333',
      title: t('OUR_PRODUCTS'),
      content: t('OUR_PRODUCTS_CONTENT')
    },
    {
      img: 'https://theme.hstatic.net/1000306701/1000727092/14/about03_team_2_img.jpg?v=333',
      title: t('PRODUCT_DETAILS'),
      content: t('PRODUCT_DETAILS_CONTENT')
    },
    {
      img: 'https://theme.hstatic.net/1000306701/1000727092/14/about03_team_3_img.jpg?v=333',
      title: t('QUALITY_ASSURANCE'),
      content: t('QUALITY_ASSURANCE_CONTENT')
    },
    {
      img: 'https://theme.hstatic.net/1000306701/1000727092/14/about03_team_4_img.jpg?v=333',
      title: t('WE_LISTEN'),
      content: t('WE_LISTEN_CONTENT')
    }
  ]
  const commitments = [
    {
      icon: 'https://theme.hstatic.net/1000306701/1000727092/14/about03_services_1_ico.png?v=333',
      title: t('CORE_VALUES'),
      content: t('CORE_VALUES_CONTENT')
    },
    {
      icon: 'https://theme.hstatic.net/1000306701/1000727092/14/about03_services_2_ico.png?v=333',
      title: t('VISION_MISSION'),
      content: t('VISION_MISSION_CONTENT')
    },
    {
      icon: 'https://theme.hstatic.net/1000306701/1000727092/14/about03_services_3_ico.png?v=333',
      title: t('OUR_STRENGTHS'),
      content: t('OUR_STRENGTHS_CONTENT')
    },
    {
      icon: 'https://theme.hstatic.net/1000306701/1000727092/14/about03_services_4_ico.png?v=333',
      title: t('CUSTOMER_SUPPORT'),
      content: t('CUSTOMER_SUPPORT_CONTENT')
    },
    {
      icon: 'https://theme.hstatic.net/1000306701/1000727092/14/about03_services_5_ico.png?v=333',
      title: t('PRIVACY_POLICY'),
      content: t('PRIVACY_POLICY_CONTENT')
    },
    {
      icon: 'https://theme.hstatic.net/1000306701/1000727092/14/about03_services_6_ico.png?v=333',
      title: t('RETURN_POLICY'),
      content: t('RETURN_POLICY_CONTENT')
    }
  ]

  return (
    <div className={styles.pageIntroduce}>
      <PageNavbar page={t('INTRODUCE')} />
      <div className={styles.titleIntro}>
        <FontAwesomeIcon onClick={() => navigate('/list-product')} className={styles.iconBack} icon={faLeftLong} />
        <div>{t('GIỚI_THIỆU')}</div>
      </div>
      <div className={styles.imgWax}>
        <img src='https://theme.hstatic.net/1000306701/1000727092/14/about03_banner_bkg.jpg?v=333' alt='img' />
      </div>
      <div className={styles.itroduce30shine}>
        <div className={styles.blockHead}>
          <div>30Shine Store</div>
          <div>{t('MISSION_STATEMENT')}</div>
        </div>
        <div className={styles.blockTwo}>
          {productValue.map((item, index) => (
            <div key={index} className={styles.productValue}>
              <div>
                <img src={item.icon} alt='icon' />
              </div>
              <div>{item.title}</div>
              <div>{item.content}</div>
            </div>
          ))}
        </div>
        <div className={styles.blockThree}>
          {myProduct.map((item, index) => (
            <div
              key={index}
              className={styles.myProduct}
              style={{ flexDirection: index % 2 === 0 ? 'row' : 'row-reverse' }}
            >
              <div>
                <img src={item.img} alt='' />
              </div>
              <div className={styles.product}>
                <div>{item.title}</div>
                <div>{item.content}</div>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.blockFour}>
          <div>{t('WHY_CHOOSE_US')}</div>
          <div>{t('WHY_CHOOSE_US_CONTENT')}</div>
        </div>
        <div className={styles.blockEnd}>
          {commitments.map((item, index) => (
            <div key={index} className={styles.commitments}>
              <div>
                <img src={item.icon} alt='icon' />
              </div>
              <div>{item.title}</div>
              <div>{item.content}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
