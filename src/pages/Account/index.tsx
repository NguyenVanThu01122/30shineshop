import { Form, Input } from 'antd'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import SidebarAccount from '../../components/SidebarAccount'
import { ButtonGeneral } from '../../components/Ui/button'
import { ERROR_MESSAGES, PLACEHOLDER } from '../../helpers/contanst'
import { validateBirthday, validateEmail, validateName, validatePhone } from '../../helpers/validationRules'
import { saveUser } from '../../redux/Slices/appSlices'
import { TypeBodyUser, getUser, updateUser } from '../../services/account'
import styles from './styles.module.css'

export default function Account() {
  const dispatch = useDispatch()
  const user = useSelector((state: any) => state.app.user)
  const [form] = Form.useForm()

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
    updateUser(body)
      .then((res) => {
        toast.success(res.data.message)
        dispatch(saveUser({ ...user, name: values.name, date: values.date, telephone: values.telephone }))
      })
      .catch((error) => {
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
        <div>Thông tin tài khoản</div>
        <Form form={form} layout='vertical' onFinish={onFinish} className={styles.login}>
          <Form.Item label='Họ tên' name='name' rules={validateName} className={styles.formLogin}>
            <Input placeholder={PLACEHOLDER.PLEASE_ENTER_NAME} size='large' />
          </Form.Item>
          <Form.Item name='telephone' rules={validatePhone} label='Số điện thoại' className={styles.formLogin}>
            <Input placeholder={PLACEHOLDER.PLEASE_ENTER_PHONE} size='large' type='number' />
          </Form.Item>
          <Form.Item name='email' label='Email' rules={validateEmail} className={styles.formLogin}>
            <Input placeholder={PLACEHOLDER.PLEASE_ENTER_EMAIL} size='large' />
          </Form.Item>
          <Form.Item name='date' rules={validateBirthday} label='Ngày sinh' className={styles.formLogin}>
            <Input type='date' size='large' />
          </Form.Item>
          <ButtonGeneral className={styles.btnUpdate} onClick={submitForm} type='primary' size='large'>
            Cập nhật
          </ButtonGeneral>
        </Form>
      </div>
    </div>
  )
}
