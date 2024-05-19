import { Form, Input } from 'antd'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import SidebarAccount from '../../components/SidebarAccount'
import { ButtonGeneral } from '../../components/Ui/button'
import { ERROR_MESSAGES } from '../../helpers/contanst'
import { useIsLoading } from '../../helpers/useIsLoading'
import { validateBirthday, validateEmail, validateName, validatePhone } from '../../helpers/validationRules'
import { saveUser } from '../../redux/Slices/appSlices'
import { TypeBodyUser, getUser, updateUser } from '../../services/account'
import styles from './styles.module.css'

export default function Account() {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const user = useSelector((state: any) => state.app.user)
  const [form] = Form.useForm()
  const [isLoading, setIsLoading] = useIsLoading()

  useEffect(() => {
    getUser()
      .then((res) => {
        form.setFieldsValue({
          name: user?.name,
          telephone: user?.telephone,
          date: user?.date?.substring(0, 10),
          email: user?.email
        })
      })
      .catch((error) => toast.error(ERROR_MESSAGES.SERVER_ERROR))
  })

  const onFinish = (values: TypeBodyUser) => {
    const body: TypeBodyUser = {
      name: values.name,
      date: values.date,
      telephone: values.telephone
    }
    setIsLoading(true)
    updateUser(body)
      .then((res) => {
        setIsLoading(false)
        toast.success(res.data.message)
        dispatch(saveUser({ ...user, name: values.name, date: values.date, telephone: values.telephone }))
      })
      .catch((error) => {
        setIsLoading(false)
        toast.error(error.response?.data?.message)
      })
  }

  const submitForm = () => {
    form
      .validateFields()
      .then((values: TypeBodyUser) => {
        onFinish(values)
      })
      .catch((error) => toast.error(ERROR_MESSAGES.PLEASE_ENTER_COMPLETE_INFORMATION))
  }

  return (
    <div className={styles.pageAccount}>
      <SidebarAccount />
      <div className={styles.accountInformation}>
        <div>{t('ACCOUNT_INFORMATION')}</div>
        <Form form={form} layout='vertical' onFinish={onFinish} className={styles.login}>
          <Form.Item label={t('NAME')} name='name' rules={validateName()} className={styles.formLogin}>
            <Input placeholder={t('PLEASE_ENTER_NAME')} size='large' />
          </Form.Item>
          <Form.Item name='telephone' rules={validatePhone()} label={t('PHONE_NUMBER')} className={styles.formLogin}>
            <Input placeholder={t('PLEASE_ENTER_PHONE')} size='large' type='number' />
          </Form.Item>
          <Form.Item name='email' label={t('EMAIL')} rules={validateEmail()} className={styles.formLogin}>
            <Input placeholder={t('PLEASE_ENTER_EMAIL')} size='large' />
          </Form.Item>
          <Form.Item name='date' rules={validateBirthday()} label={t('BIRTHDAY')} className={styles.formLogin}>
            <Input type='date' size='large' />
          </Form.Item>
          <ButtonGeneral
            className={styles.btnUpdate}
            onClick={submitForm}
            type='primary'
            size='large'
            loading={isLoading}
            i18nKey={t('UPDATE')}
            children={undefined}
          />
        </Form>
      </div>
    </div>
  )
}
