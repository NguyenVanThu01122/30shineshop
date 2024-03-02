import { useEffect } from 'react'
import { AiOutlineDelete } from 'react-icons/ai'
import { toast } from 'react-toastify'
import { ProductType } from '../..'
import { CurrencyFormat } from '../../../../components/CurrencyFormat'
import { ButtonGeneral } from '../../../../components/Ui/button'
import { InputGeneral } from '../../../../components/Ui/input'
import { updateCart } from '../../../../services/cart'
import { DetailProductCart } from './styles'

export default function ListProductCart({
  getListCart,
  listCart,
  listCartId,
  setListCartId,
  handleOpenModal
}: {
  getListCart: () => void
  listCart: ProductType[] | any
  listCartId: string[]
  setListCartId: (string: string[]) => void
  handleOpenModal: (type: string, id: string) => void
}) {
  // hàm click vào item checkbox
  const handleClickItemCheckbox = (id: string) => {
    if (!listCartId.includes(id)) {
      listCartId.push(id)
      setListCartId([...listCartId]) // cập nhật lại listCartId, dùng toán tư trải rộng để tạo ra 1 bản sao của mảng hiện tại.
    } else {
      const newArr = listCartId.filter((item: string) => {
        if (item !== id) {
          //Cách này được sử dụng để xóa một giá trị cụ thể khỏi mảng.
          return true
        }
      })
      setListCartId(newArr) // cập nhật giá trị của listCartId bằng giá trị của newArr, loại bỏ id khỏi mảng.
    }
  }

  // hàm cập nhật số lượng sản phâm
  const upDateCart = (idCart: string, amount: number) => {
    updateCart(idCart, amount)
      .then((res) => {
        toast.success(res.data.message)
        getListCart()
      })
      .catch((error) => {
        toast.error(error.response.data?.message)
      })
  }

  useEffect(() => {
    getListCart()
  }, [])

  return listCart?.map((item: ProductType) => {
    return (
      <DetailProductCart key={item.id}>
        <div className='informationProduct'>
          <InputGeneral
            type='checkbox'
            id='checkbox2'
            checked={listCartId?.includes(item.id)} // kiểm tra sự tồn tại item.id trong listCartId nếu có thì trả về true, tức là checked là true và dc chọn.
            onClick={() => handleClickItemCheckbox(item.id)}
          />
          <img className='imgProduct' src={item.image} alt='image' />
          <div>{item.productName}</div>
          <div className='priceProduct'>
            <div>
              <CurrencyFormat amount={item.originPrice} />
              <span>₫</span>
            </div>
            {/* <div className='priceSale'>
                      <div>299.000 đ</div>
                      <div>14%</div>
                    </div> */}
          </div>
        </div>
        <div className='upDown'>
          <div className='buttonUpDown'>
            <ButtonGeneral
              className='btn'
              disabled={item.amount === 1}
              onClick={() => upDateCart(item.id, item.amount - 1)}
            >
              -
            </ButtonGeneral>
            <div className='btnAmount'>{item.amount}</div>
            <ButtonGeneral className='btn' onClick={() => upDateCart(item.id, item.amount + 1)}>
              +
            </ButtonGeneral>
          </div>
          <div>
            <CurrencyFormat amount={item?.amount * item?.originPrice} />
            <span>đ</span>
          </div>
          <AiOutlineDelete
            onClick={() => handleOpenModal('deleteOne', item?.id)}
            className='iconDelete'
          ></AiOutlineDelete>
        </div>
      </DetailProductCart>
    )
  })
}
