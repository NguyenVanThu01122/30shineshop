import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import NoDataMessage from '../../components/NodataMessage'
import SidebarAccount from '../../components/SidebarAccount'
import CustomLoading from '../../components/customLoading'
import { scrollToTop } from '../../helpers/scrollToTop'
import { useIsLoading } from '../../helpers/useIsLoading'
import { useShowDataMessage } from '../../helpers/useIsShowDataMessage'
import { useOrderStatusUtils } from '../../helpers/useOrderStatusUtils'
import { addListOrder } from '../../redux/actions/app'
import { getListOrder } from '../../services/listOrder'
import { ComponentDetailOrder } from './components/DetailOrder'
import { TitleStatusOrder } from './components/TitleStatusOrder'
import { ItemOrder, MyOrder, WrapperOrder } from './styles'

function ListOrder() {
  const [SaveOrderStatus, setSaveOrderStatus] = useState('')
  const [listStatusOrder, setListStatusOrder] = useState([])
  const [isShowNoDataMessage, setIsShowDataMessage] = useShowDataMessage()
  const [isLoading, setIsLoading] = useIsLoading()

  const orders = useSelector((state: any) => state.app?.listOrder)
  const { orderStatusCommon, arrStatusOrder, colorStatus, messageStatusOrder, updateOrderStatusMessage } =
    useOrderStatusUtils()

  const dispatch = useDispatch()

  // hàm lấy danh sách đơn hàng
  const handleGetlistOrder = () => {
    setIsLoading(true)
    getListOrder()
      .then((res) => {
        dispatch(addListOrder(res.data?.data))
        setIsLoading(false)
        setIsShowDataMessage(true)
      })
      .catch((error) => {
        toast.error(error.response?.data?.message)
        setIsLoading(false)
      })
  }

  useEffect(() => {
    // dùng filter lọc trạng thái đơn hàng theo trạng thái đã chọn
    const arrStatus = orders.filter((item: any) => {
      if (SaveOrderStatus === '') {
        return true
        // Nếu orderStatus là rỗng (không có trạng thái nào được chọn),
        //trả về true cho mọi phần tử trong danh sách đơn hàng, do đó danh sách đơn hàng không bị lọc và được hiển thị đầy đủ.
      } else {
        return item.status === SaveOrderStatus
        //Nếu orderStatus có giá trị, chỉ trả về các phần tử có trạng thái giống với orderStatus
      }
    })
    setListStatusOrder(arrStatus) //  save mảng arr vào state listOrder
  }, [SaveOrderStatus, orders])

  useEffect(() => {
    scrollToTop()
    handleGetlistOrder()
    updateOrderStatusMessage(SaveOrderStatus) // gọi hàm cập nhật lời nhắn trạng thái order
  }, [SaveOrderStatus])

  return (
    <WrapperOrder>
      <SidebarAccount />
      <ItemOrder>
        <MyOrder>Đơn hàng của tôi</MyOrder>
        <TitleStatusOrder
          arrStatusOrder={arrStatusOrder}
          SaveOrderStatus={SaveOrderStatus}
          setSaveOrderStatus={setSaveOrderStatus}
        />
        {/* <Input className='custom-input' size='large' placeholder='Tìm id đơn hàng hoặc tên sản phẩm '></Input> */}
        <ComponentDetailOrder
          listStatusOrder={listStatusOrder}
          orderStatusCommon={orderStatusCommon}
          colorStatus={colorStatus}
        />

        {/* item Loading */}
        {isLoading && <CustomLoading />}
        {!isLoading && !listStatusOrder.length && isShowNoDataMessage && <NoDataMessage message={messageStatusOrder} />}
      </ItemOrder>
    </WrapperOrder>
  )
}
export default ListOrder
