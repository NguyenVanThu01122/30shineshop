import { Form } from 'antd'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import SidebarAccount from '../../components/SidebarAccount'
import { ButtonGeneral } from '../../components/Ui/button'
import { CommonModal } from '../../components/Ui/commonModal'
import { FormComponent } from '../../components/Ui/form'
import { Loading } from '../../components/Ui/loading'
import { ERROR_MESSAGES } from '../../helpers/contanst'
import { scrollToTop } from '../../helpers/scrollToTop'
import iconGifDuck from '../../images/img-duck.jpg'
import { TypeAddress, addAddress, deleteAddress, getListAddress, updateAddress } from '../../service/listAddress'
import { ItemNotAvailable } from '../DetailOrder/styles'
import { ContainerAddress, GroupButton, ItemTitle, Wrapper } from './styles'

function ListAddress() {
  const [listAddress, setListAddress] = useState<any>([])
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [isOpenModalDelete, setIsOpenModalDelete] = useState<boolean>(false)
  const [edit, setEdit] = useState<any>(null)
  const [form] = Form.useForm()
  const [idDeleteAddress, setIdDeleteAddress] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  // hàm lấy thông tin address
  const handleGetListAddress = () => {
    setIsLoading(true)
    getListAddress()
      .then((res) => {
        setListAddress(res.data?.data)
        setIsLoading(false)
      })
      .catch((error) => {
        setIsLoading(false)
        toast.error(ERROR_MESSAGES.SERVER_ERROR)
      })
  }

  // hàm xử lý render theo điều kiện
  const handleFinish = (values: TypeAddress) => {
    if (edit) {
      // xư lý call api sửa địa chỉ
      const bodyUpdate: TypeAddress = {
        name: values?.name,
        email: values?.email,
        telephone: values?.telephone,
        address: values?.address
      }
      updateAddress(bodyUpdate, edit?.id)
        .then((res) => {
          toast.success(res.data?.message)
          handleModalCancel()
          handleGetListAddress()
        })
        .catch((error) => {
          toast.error(error.response?.data?.message)
        })
    } else {
      // sử lý api tạo mới địa chỉ
      const body: TypeAddress = {
        name: values?.name,
        email: values?.email,
        telephone: values?.telephone,
        address: values?.address
      }
      addAddress(body)
        .then((res) => {
          toast.success(res.data?.message)
          handleModalCancel()
          form.resetFields() // xóa các giá trị của form
          handleGetListAddress() // gọi lại hàm lấy địa chỉ để cập nhập lại thông tin
        })
        .catch((error) => {
          toast.error(error.response?.data?.message)
        })
    }
  }

  // hàm edit address
  const handleEdit = (item: any) => {
    setIsOpenModal(true)
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
  const handleDeleteAddress = () => {
    deleteAddress(idDeleteAddress)
      .then((res) => {
        toast.success(res.data?.message)
        handleGetListAddress()
        setIsOpenModalDelete(false)
      })
      .catch((error) => {
        toast.error(error.response?.data?.message)
      })
  }
  // hàm mở modal xóa địa chỉ
  const showModalDeleteAddress = (id: string) => {
    setIsOpenModalDelete(true)
    setIdDeleteAddress(id) //lưu id của listCart vào trong state idDeleteAddress, nhằm mục đích lấy đc id listCart để xóa sản phẩm
  }

  // hàm mở modal để tạo thêm địa chỉ mới
  const openCreateAddress = () => {
    setIsOpenModal(true)
  }
  // hàm hủy bỏ modal địa chỉ
  const handleModalCancelAddress = () => {
    setIsOpenModalDelete(false)
  }
  // hàm hủy bỏ modal
  const handleModalCancel = () => {
    setIsOpenModal(false)
    form.resetFields() // hủy bỏ modal thì reset form về rỗng
    setEdit(null)
  }

  useEffect(() => {
    handleGetListAddress()
    scrollToTop()
  }, [form])

  return (
    <Wrapper>
      <SidebarAccount />
      <ContainerAddress>
        <div className='pageAddress'>
          <div className='titleAddress'>
            <div>Địa chỉ nhận hàng</div>
            <ButtonGeneral className='button' onClick={openCreateAddress}>
              <div>
                <span className='icon-plus'>+</span>
                Thêm địa chỉ mới
              </div>
            </ButtonGeneral>
          </div>

          {/* item listAddress */}
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
                <ButtonGeneral size='middle' type='primary' className='buttonEdit' onClick={() => handleEdit(item)}>
                  Sửa địa chỉ
                </ButtonGeneral>
                <ButtonGeneral size='middle' className='buttonDelete' onClick={() => showModalDeleteAddress(item?.id)}>
                  xóa
                </ButtonGeneral>
              </div>
            </div>
          ))}

          {/* item Loading */}
          {isLoading && <Loading />}
          {!isLoading && listAddress?.length === 0 && (
            <ItemNotAvailable>
              <div>Bạn không có địa chỉ nào !</div>
              <img className='iconGifDuck' src={iconGifDuck} alt='' />
            </ItemNotAvailable>
          )}
        </div>

        {/* item moda; */}
        <CommonModal isModalOpen={isOpenModal} footer={false} width={500} centered={true} onCancel={handleModalCancel}>
          <ItemTitle>{edit ? 'Sửa địa chỉ' : 'Thêm địa chỉ'}</ItemTitle>
          <FormComponent
            form={form}
            onFinish={handleFinish}
            groupButtonContent={
              <GroupButton>
                {edit ? (
                  <>
                    <ButtonGeneral className='buttonSubmit' htmlType='submit'>
                      Sửa địa chỉ
                    </ButtonGeneral>
                    <ButtonGeneral className='buttonCancel' onClick={handleModalCancel}>
                      Hủy
                    </ButtonGeneral>
                  </>
                ) : (
                  <>
                    <ButtonGeneral className='buttonSubmit' onClick={handleSubmitForm}>
                      Tạo địa chỉ
                    </ButtonGeneral>
                    <ButtonGeneral className='buttonCancel' onClick={handleModalCancel}>
                      Hủy
                    </ButtonGeneral>
                  </>
                )}
              </GroupButton>
            }
          />
        </CommonModal>

        <CommonModal
          isModalOpen={isOpenModalDelete}
          onCancel={handleModalCancelAddress}
          deleteItem={handleDeleteAddress}
          modalTitle='Bạn có chắc chắn muốn xóa địa chỉ này không ?'
        />
      </ContainerAddress>
    </Wrapper>
  )
}
export default ListAddress
