import { Button, Form, Input, message } from 'antd'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SidebarAccount from '../../components/SidebarAccount'
import { updateAccount } from '../../redux/actions/detailProduct'
import { privateAxios } from '../../service/axios'
import styles from './styles.module.css'

export default function Account() {
  const dispatch = useDispatch()
  const user = useSelector((state: any) => state.app.user)
  const [form] = Form.useForm()

  useEffect(() => {
    // window.scrollTo({
    //   top: 0,
    //   behavior: 'smooth' // Sử dụng 'smooth' để có hiệu ứng cuộn mượt
    // })
    privateAxios.get('/user').then((res) => {
      form.setFieldsValue({
        name: user?.name,
        telephone: user?.telephone,
        date: user?.date?.substring(0, 10),
        email: user?.email
      })
    })
  }, [])

  const onFinish = (values: any) => {
    privateAxios
      .put('/user', {
        name: values.name,
        date: values.date,
        telephone: values.telephone
      })
      .then((res) => {
        message.success(res.data.message)
        dispatch(updateAccount({ ...user, name: values.name, date: values.date, telephone: values.telephone }))
      })
      .catch((error) => {
        message.error(error.response?.data?.message)
      })
  }

  return (
    <div className={styles.pageAccount}>
      <SidebarAccount />
      <div className={styles.accountInformation}>
        <div>Thông tin tài khoản</div>
        <Form form={form} layout='vertical' onFinish={onFinish} className={styles.login}>
          <Form.Item
            label='Họ tên'
            name='name'
            rules={[{ required: true, message: 'Vui lòng nhập họ tên !' }]}
            className={styles.formLogin}
          >
            <Input placeholder='Họ tên' size='large' />
          </Form.Item>
          <Form.Item
            name='telephone'
            rules={[
              { required: true, message: 'Vui lòng nhập số điện thoại !' },
              () => ({
                validator(_, value: any) {
                  if (value[0] !== '0' && value !== '') {
                    return Promise.reject(new Error('Vui lòng nhập đúng định dạng ! '))
                  } else if ((value.length > 10 || value.length < 10) && value !== '') {
                    return Promise.reject(new Error('Vui lòng nhập đúng 10 chữ số ! '))
                  } else {
                    return Promise.resolve()
                  }
                }
              })
            ]}
            label='Số điện thoại'
            className={styles.formLogin}
          >
            <Input placeholder='Nhập số điện thoại' size='large' type='number' />
          </Form.Item>
          <Form.Item
            name='email'
            label='Email'
            rules={[
              { required: true, message: 'Vui lòng nhập Email !' },
              {
                type: 'email',
                message: 'Vui lòng nhập đúng định dạng !'
              }
            ]}
            className={styles.formLogin}
          >
            <Input placeholder='Vui lòng nhập Email !' size='large' />
          </Form.Item>

          <Form.Item
            name='date'
            rules={[{ required: true, message: 'Vui lòng nhập ngày sinh !' }]}
            label='Ngày sinh'
            className={styles.formLogin}
          >
            <Input type='date' size='large' />
          </Form.Item>
          <Button htmlType='submit' type='primary' size='large' style={{ marginTop: '15px' }}>
            Cập nhật
          </Button>
        </Form>
      </div>
    </div>
  )
}
