import { Button, Form, Input, Modal, message } from 'antd'
import { useEffect, useState } from 'react'
import SidebarAccount from '../../components/SidebarAccount'
import { privateAxios } from '../../service/axios'
import { MyModal, Wrapper } from './styles'

function ListAddress() {
  const [listAddress, setListAddress] = useState<any>([])
  const [openModal, setOpenModal] = useState(false)
  const [isOpenModalDelete, setIsOpenModalDelete] = useState(false)
  const [edit, setEdit] = useState<any>(null)
  const [form] = Form.useForm()
  const [idDeleteAddress, setIdDeleteAddress] = useState('')

  // hàm lấy thông tin address
  const getListAddress = () => {
    privateAxios.get('/address').then((res) => {
      setListAddress(res.data?.data)
    })
  }

  // hàm xử lý render theo điều kiện, nếu có edit thì xử lý logic gọi api sửa address,ngược lại gọi api tạo mới address
  const handleFinish = (values: any) => {
    if (edit) {
      // xư lý call api sửa địa chỉ
      privateAxios
        .put(`/address/${edit?.id}`, {
          name: values?.name,
          email: values?.email,
          telephone: values?.telephone,
          address: values?.address
        })
        .then((res) => {
          message.success(res.data?.message)
          handleModalCancel()
          getListAddress()
        })
        .catch((error) => {
          message.error(error.response?.data?.message)
        })
    } else {
      // sử lý api tạo mới địa chỉ
      privateAxios
        .post('/address', {
          name: values?.name,
          email: values?.email,
          telephone: values?.telephone,
          address: values?.address
        })
        .then((res) => {
          message.success(res.data?.message)
          handleModalCancel()
          form.resetFields() // xóa các giá trị của form
          getListAddress() // tạo mới xong gọi lại hàm lấy địa  chỉ để cập nhập lại thông tin
        })
        .catch((error) => {
          message.error(error.response?.data?.message)
        })
    }
  }

  // hàm edit address
  const handleEdit = (item: any) => {
    setOpenModal(true)
    setEdit(item) // lưu item vào trong state edit
    // method này xử lý đặt lại giá trị cho các trường trong form
    form.setFieldsValue({
      name: item?.name,
      email: item?.email,
      telephone: item?.telephone,
      address: item?.address
    })
  }

  // hàm này dùng để gửi form lên server
  const handleSubmitForm = () => {
    form.submit()
  }

  // hàm xóa địa chỉ
  const handelModalDeleteAddress = () => {
    privateAxios
      .delete(`/address/${idDeleteAddress}`)
      .then((res) => {
        message.success(res.data?.message)
        getListAddress()
        setIsOpenModalDelete(false)
      })
      .catch((error) => {
        message.error(error.response?.data?.message)
      })
  }

  // hàm mở modal xóa địa chỉ
  const showModalDeleteAddress = (id: string) => {
    setIsOpenModalDelete(true)
    setIdDeleteAddress(id) //lưu id của listCart vào trong state idDeleteAddress, nhằm mục đích lấy đc id listCart để xóa sản phẩm
  }

  // hàm mở modal để tạo thêm địa chỉ mới
  const handleOpenCreateAddress = () => {
    setOpenModal(true)
  }
  // hàm hủy bỏ modal địa chỉ
  const handleModalCancelAddress = () => {
    setIsOpenModalDelete(false)
  }
  // hàm hủy bỏ modal
  const handleModalCancel = () => {
    setOpenModal(false)
    form.resetFields() // hủy bỏ modal thì reset form về rỗng
    setEdit(null)
  }

  useEffect(() => {
    getListAddress()
  }, [])

  return (
    <Wrapper>
      <SidebarAccount />
      <div className='pageAddress'>
        <div className='titleAddress'>
          <div>Địa chỉ nhận hàng</div>
          <Button className='button' onClick={handleOpenCreateAddress}>
            <span className='icon-plus'>+</span>
            Thêm địa chỉ mới
          </Button>
        </div>
        {listAddress?.map((item: any) => (
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
              <Button size='middle' type='primary' className='buttonEdit' onClick={() => handleEdit(item)}>
                Sửa
              </Button>
              <Button size='middle' className='buttonDelete' onClick={() => showModalDeleteAddress(item?.id)}>
                xóa
              </Button>
            </div>
          </div>
        ))}
        {listAddress?.length === 0 && <div>Bạn chưa có địa chỉ nào!</div>}
      </div>

      <MyModal open={openModal} footer={null} width={500} centered={true} onCancel={handleModalCancel}>
        <h2 className='title'>{edit ? 'Sửa địa chỉ' : 'Thêm địa chỉ'}</h2>
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
            <Input size='large' />
          </Form.Item>
          <Form.Item
            label='Số điện thoại'
            name='telephone'
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập số điện thoại'
              },

              () => ({
                validator(_, value) {
                  if (value[0] !== '0' && value !== '') {
                    // tìm số 0 và khác rỗng thì mới in ra lỗi
                    return Promise.reject(new Error('Vui lòng nhập đúng định dạng !'))
                  } else if ((value.length < 10 || value.length > 10) && value !== '') {
                    // nếu lớn hơn 10 hoặc nhỏ hơn 10 và phải khác rỗng mới in ra lỗi
                    return Promise.reject(new Error('Vui lòng nhập đúng 10 chữ số !'))
                  } else {
                    return Promise.resolve()
                  }
                }
              })
            ]}
          >
            <Input size='large' type='number' />
          </Form.Item>
          <Form.Item
            label='Email'
            name='email'
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập email'
              },
              () => ({
                validator(_, value: string) {
                  if (value.includes('@')) {
                    return Promise.resolve()
                  } else {
                    return Promise.reject(new Error('Vui lòng nhập đúng định dạng !'))
                  }
                }
              })
            ]}
          >
            <Input size='large' />
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
            <Input size='large' />
          </Form.Item>
          <div className='group-button'>
            {edit ? (
              <>
                <Button className='buttonSubmit' htmlType='submit'>
                  Sửa
                </Button>
                <Button className='buttonSubmit' onClick={handleModalCancel}>
                  Hủy
                </Button>
              </>
            ) : (
              <>
                <Button className='buttonSubmit' onClick={handleSubmitForm}>
                  Tạo địa chỉ
                </Button>
                <Button className='buttonSubmit' onClick={handleModalCancel}>
                  Hủy
                </Button>
              </>
            )}
          </div>
        </Form>
      </MyModal>

      <Modal
        open={isOpenModalDelete}
        onCancel={handleModalCancelAddress}
        onOk={handelModalDeleteAddress}
        title='Bạn có chắc chắn muốn xóa địa chỉ này không ?'
      ></Modal>
    </Wrapper>
  )
}
export default ListAddress
