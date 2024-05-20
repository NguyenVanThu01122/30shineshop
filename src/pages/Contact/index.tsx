import { faLeftLong } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Form } from 'antd'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import PageNavbar from '../../components/PageNavbar'
import { ButtonGeneral } from '../../components/Ui/button'
import { FormGeneral } from '../../components/Ui/form'
import { InputGeneral } from '../../components/Ui/input'
import { TextArealInput } from '../../components/Ui/textAreaInput'
import { validateContent, validateEmail, validateName, validatePhone } from '../../helpers/validationRules'
import styles from './styles.module.css'

export default function Contact() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const [form] = Form.useForm()

  const onFinish = (values: any) => {
    toast.success(t('Bạn đã gửi thắc mắc thành công'))
    form.resetFields()
  }

  return (
    <div className={styles.pageContact}>
      <PageNavbar page={'CONTACT'} />
      <div className={styles.mainContent}>
        <div className={styles.contact}>
          <div>
            <FontAwesomeIcon onClick={() => navigate('/list-product')} className={styles.iconBack} icon={faLeftLong} />
            {t('CONTACT')}
          </div>
          <div>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7449.628785119932!2d105.845141!3d21.000076!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac71132ea2b5%3A0xab941ece69bef2a7!2zODIgUC4gVHLhuqduIMSQ4bqhaSBOZ2jEqWEsIMSQ4buTbmcgVMOibSwgSGFpIELDoCBUcsawbmcsIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2sus!4v1681468318680!5m2!1svi!2sus'
              width='100%'
              height='350'
              title='Google Maps'
            />
          </div>
        </div>
        <div className={styles.contactInfo}>
          <div className={styles.comments}>
            <div>{t('appreciation')}</div>
            <div className={styles.information}>{t('information')}</div>
            <div className={styles.information}>
              <div>{t('PHONE')}</div>
              <div>1900.27.27.30</div>
            </div>
            <div className={styles.information}>
              <div>{t('ADDRESS')}</div>
              <div>Số 82 Trần Đại Nghĩa, phường Đồng Tâm, quận Hai Bà Trưng, Hà Nội</div>
            </div>
            <div className={styles.information}>
              <div>Email</div>
              <div>30shinestore@30shine.com</div>
            </div>
            <div className={styles.information}>
              <div>{t('allDays')}</div>
            </div>
            <div className={styles.socialNetwork}>
              <div>{t('socialNetwork')}</div>
              <div className={styles.fontIcon}>
                <img src='https://shop.30shine.com/images/fb-icon.png' alt='icon' />
                <img src='https://shop.30shine.com/images/yt-icon.png' alt='icon' />
                <img src='https://shop.30shine.com/images/ig-icon.png' alt='icon' />
              </div>
            </div>
          </div>
          <div className={styles.sendComments}>
            <div>{t('sendComments')}</div>
            <div className={styles.loginInformation}>
              <div>{t('message')}</div>
              <FormGeneral form={form} onFinish={onFinish}>
                <Form.Item name='name' rules={validateName()}>
                  <InputGeneral className={styles.input} placeholder={t('PLEASE_ENTER_NAME')} />
                </Form.Item>
                <div className={styles.groupInput}>
                  <Form.Item style={{ width: '100%' }} name='phone' rules={validatePhone()}>
                    <InputGeneral className={styles.input} placeholder={t('PLEASE_ENTER_PHONE')} />
                  </Form.Item>
                  <Form.Item name='email' style={{ width: '100%' }} rules={validateEmail()}>
                    <InputGeneral className={styles.input} placeholder={t('PLEASE_ENTER_EMAIL')} />
                  </Form.Item>
                </div>
                <Form.Item name='content' rules={validateContent()}>
                  <TextArealInput className={styles.inputTextAreal} placeholder={t('PLEASE_ENTER_CONTENT')} />
                </Form.Item>
                <Form.Item>
                  <ButtonGeneral className={styles.btnSubmit} type='primary' htmlType='submit'>
                    {t('submit')}
                  </ButtonGeneral>
                </Form.Item>
              </FormGeneral>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
