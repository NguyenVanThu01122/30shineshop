import { Button, Form, Input, message } from 'antd'
import { useEffect, useState } from 'react'
import SidebarAccount from '../../components/SidebarAccount'
import { privateAxios } from '../../service/axios'
import { MyModal, Wrapper } from './styles'

function ListAddress() {
  const [listAddress, setListAddress] = useState([])
  const [openModal, setOpenModal] = useState(false)

  const [edit, setEdit] = useState<any>(null)

  const [form] = Form.useForm()

  const handleClose = () => {
    setOpenModal(false)
    form.resetFields()
    setEdit(null) // set edit về null
  }
  const handleOpenCreate = () => {
    setOpenModal(true)
  }
  const getListAddress = () => {
    privateAxios.get('/address').then((res) => {
      setListAddress(res.data.data)
    })
  }
  useEffect(() => {
    getListAddress()
  }, [])
  const handleDelete = (id: string) => {
    privateAxios.delete(`/address/${id}`).then((res) => {
      message.success(res.data.message)
      getListAddress()
    })
  }

  const handleFinish = (values: any) => {
    if (edit) {
      privateAxios
        .put(`/address/${edit.id}`, {
          name: values.name,
          telephone: values.telephone,
          email: values.email,
          address: values.address
        })
        .then((res) => {
          message.success(res.data?.message)
          setOpenModal(false)
          form.resetFields()
          getListAddress()
          setEdit(null)
        })
    } else {
      privateAxios
        .post('/address', {
          name: values.name,
          email: values.email,
          address: values.address,
          telephone: values.telephone
        })
        .then((res) => {
          message.success(res.data.message)
          handleClose()
          getListAddress()
          form.resetFields() // xoa cac gia tri cua form
        })
    }
  }

  const handleSubmit = () => {
    form.submit()
  }
  const handleEdit = (item: any) => {
    setOpenModal(true)
    setEdit(item)
    form.setFieldsValue({
      name: item?.name,
      telephone: item?.telephone,
      address: item?.address,
      email: item?.email
    })
  }
  return (
    <Wrapper>
      <SidebarAccount />
      <div className='pageAddress'>
        <div className='titleAddress'>
          <div>Địa chỉ nhận hàng</div>
          <Button className='button' onClick={handleOpenCreate}>
            <span className='icon-plus'>+</span>
            Thêm địa chỉ mới
          </Button>
        </div>
        {listAddress.map((item: any) => (
          <div className='parent-address' key={item.id}>
            <div className='address'>
              <div>Họ tên</div>
              <div>{item.name}</div>
            </div>
            <div className='address'>
              <div>Số điện thoại</div>
              <div>{item.telephone}</div>
            </div>
            <div className='address'>
              <div>Email</div>
              <div>{item.email}</div>
            </div>
            <div className='address'>
              <div>Địa chỉ</div>
              <div>{item.address}</div>
            </div>
            <div className='action'>
              <Button onClick={() => handleDelete(item.id)}>Xóa</Button>
              <Button onClick={() => handleEdit(item)}>Sửa</Button>
            </div>
          </div>
        ))}
        {listAddress.length === 0 && <div>Bạn chưa có địa chỉ nào!</div>}
      </div>

      <MyModal open={openModal} footer={null} closable={false} width={500} centered={true} onCancel={handleClose}>
        <h2 className='title'>{edit ? 'SỬA ĐỊA CHỈ' : 'THÊM ĐỊA CHỈ MỚI'}</h2>
        <Form
          onFinish={handleFinish}
          layout='vertical'
          form={form}
          // requiredMark={false} // bỏ dấu sao đỏ
          // labelCol={{ span: 6 }}
          // wrapperCol={{ span: 18 }}
        >
          <Form.Item
            label='Họ tên'
            name='name'
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập tên'
              },
              {
                min: 5,
                message: 'Vui lòng nhập ít nhất 5 ký tự'
              },
              {
                max: 20,
                message: 'Vui lòng nhập tối đa 20 ký tự'
              }
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label='Số điện thoại'
            name='telephone'
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập số điện thoại'
              }
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label='Email'
            name='email'
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập email'
              }
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label='Địa chỉ'
            name='address'
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập địa chỉ'
              }
            ]}
          >
            <Input />
          </Form.Item>
          <div className='group-button'>
            {edit ? (
              <>
                <Button className='buttonSubmit' htmlType='submit'>
                  Sửa
                </Button>
                <Button className='buttonSubmit' onClick={handleClose}>
                  Hủy
                </Button>
              </>
            ) : (
              <>
                <Button className='buttonSubmit' onClick={handleSubmit}>
                  Tạo địa chỉ
                </Button>
                <Button className='buttonSubmit' onClick={handleClose}>
                  Hủy
                </Button>
              </>
            )}
          </div>
        </Form>
      </MyModal>
    </Wrapper>
  )
}
export default ListAddress
