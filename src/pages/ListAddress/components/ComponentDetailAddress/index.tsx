import React, { useCallback } from 'react'
import { AddressType } from '../..'
import { ButtonGeneral } from '../../../../components/Ui/button'
import { WrapperDetailAddress } from './styles'
interface ComponentDetailAddressProps {
  listAddress: AddressType[] | any
  setIsOpenModal: (isOpen: boolean) => void
  setEdit: (edit: AddressType | null) => void
  setIsOpenModalDelete: (isOpen: boolean) => void
  setIdDeleteAddress: (id: string) => void
  form: any
  isLoading: boolean
}

const ComponentDetailAddress = React.memo(
  ({
    listAddress,
    setIsOpenModal,
    setEdit,
    setIsOpenModalDelete,
    setIdDeleteAddress,
    form,
    isLoading
  }: ComponentDetailAddressProps) => {
    // hàm edit address
    const handleEdit = useCallback(
      (item: any) => {
        setIsOpenModal(true)
        setEdit(item) // lưu item vào trong state edit
        // method này xử lý đặt lại giá trị cho các trường trong form
        form.setFieldsValue({
          name: item?.name,
          email: item?.email,
          telephone: item?.telephone,
          address: item?.address
        })
      },
      [setEdit, setIsOpenModal, form]
    )

    // hàm mở modal xóa địa chỉ
    const showModalDeleteAddress = useCallback(
      (id: string) => {
        setIsOpenModalDelete(true)
        setIdDeleteAddress(id) //lưu id của listCart vào trong state idDeleteAddress, nhằm mục đích lấy đc id listCart để xóa sản phẩm
      },
      [setIdDeleteAddress, setIsOpenModalDelete]
    )

    return listAddress?.map((item: AddressType) => (
      <>
        {!isLoading && (
          <WrapperDetailAddress key={item.id}>
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
          </WrapperDetailAddress>
        )}
      </>
    ))
  }
)
export default ComponentDetailAddress
