import { FormInstance } from 'antd'
import { useTranslation } from 'react-i18next'
import { toast } from 'react-toastify'
import { ButtonGeneral } from '../../../../components/Ui/button'
import { CommonModal } from '../../../../components/Ui/modal'
import { TypeAddress, addAddress, updateAddress } from '../../../../services/listAddress'
import FormComponent from '../FormAddress'
import { GroupButton, ItemTitle } from './styles'

interface ModalAddressProps {
  edit: any
  setEdit: React.Dispatch<React.SetStateAction<TypeAddress | null>>
  isOpenModal: boolean
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>
  handleGetListAddress: () => void
  form: FormInstance<any>
  setIsLoading?: (value: boolean) => void
}

export default function ModalAddress(props: ModalAddressProps) {
  const { edit, isOpenModal, handleGetListAddress, setIsOpenModal, setEdit, form } = props
  const { t } = useTranslation()
  // hàm xử lý render theo điều kiện
  const handleFinish = (values: TypeAddress) => {
    if (edit && edit?.id) {
      // xư lý api sửa địa chỉ
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

  // hàm hủy bỏ modal
  const handleModalCancel = () => {
    setIsOpenModal(false)
    form.resetFields() // hủy bỏ modal thì reset form về rỗng
    setEdit(null)
  }
  const handleSubmitForm = () => form.submit()

  return (
    <CommonModal isModalOpen={isOpenModal} footer={false} width={500} centered={true} onCancel={handleModalCancel}>
      <ItemTitle>{edit ? t('EDIT_ADDRESS') : t('ADD_ADDRESS')}</ItemTitle>
      <FormComponent
        form={form}
        onFinish={handleFinish}
        groupButtonContent={
          <GroupButton>
            {edit ? (
              <>
                <ButtonGeneral
                  className='buttonSubmit'
                  htmlType='submit'
                  i18nKey={t('SUBMIT_ADDRESS')}
                  children={undefined}
                />
                <ButtonGeneral
                  className='buttonCancel'
                  onClick={handleModalCancel}
                  i18nKey={t('CANCEL')}
                  children={undefined}
                />
              </>
            ) : (
              <>
                <ButtonGeneral
                  className='buttonSubmit'
                  onClick={handleSubmitForm}
                  i18nKey={t('CREATE_ADDRESS')}
                  children={undefined}
                />
                <ButtonGeneral
                  className='buttonCancel'
                  onClick={handleModalCancel}
                  i18nKey={t('CANCEL')}
                  children={undefined}
                />
              </>
            )}
          </GroupButton>
        }
      />
    </CommonModal>
  )
}
