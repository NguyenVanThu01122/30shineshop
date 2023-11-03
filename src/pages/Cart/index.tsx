import { Button, Modal, message } from 'antd'
import { useEffect, useState } from 'react'
import { AiOutlineDelete } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { saveTotalCart } from '../../redux/actions/detailProduct'
import { privateAxios } from '../../service/axios'
import { CartWrapper, DeleteProductAll } from './style'

export default function Cart() {
  const navigate = useNavigate()
  let [listCart, setListCart] = useState<any>([])
  const [totalPrice, setTotalPrice] = useState(0)
  const [amountProducts, setAmountProducts] = useState(0)
  const [listCartId, setListCartId] = useState<any>([])
  const [showTitleProduct, setTitleProduct] = useState(false)
  const [isOpenModalDeleteAll, setIsOpenModalDeleteAll] = useState(false)

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [idDeleteOne, setIdDeleteOne] = useState('')
  const disPatch = useDispatch()

  // hàm lấy danh sách sản phảm giỏ hàng
  const getListCart = () => {
    privateAxios
      .get('/cart')
      .then((res) => {
        setListCart(res.data?.listCart)
      })
      .catch((error) => {
        message.error(error.response?.data?.message)
      })
  }
  
  // hàm lấy số lượng sản phẩm đã chọn
  const getLengthOfCart = () => {
    privateAxios.get('/cart').then((res) => {
      const length = res.data?.listCart?.length
      disPatch(saveTotalCart(length))
    })
  }

  // hàm mở tiêu đề thông tin sản phẩm
  const handleShowTitle = () => {
    setTitleProduct(!showTitleProduct)
  }

  // hàm cập nhật số lượng sản phâm
  const upDateCart = (idCart: string, amount: number) => {
    privateAxios
      .put(`/cart/${idCart}`, {
        amount
      })
      .then((res) => {
        message.success(res.data.message)
        getListCart()
      })
      .catch((error) => {
        message.error(error.response.data?.message)
      })
  }

  // hàm mở modal xóa 1 sản phẩm
  const handleOpenModalOneDelete = (id: string) => {
    setIsModalOpen(true)
    setIdDeleteOne(id)
  }

  // hàm hủy bỏ trong modal xóa 1 sản phẩm
  const handleCancelDeleteOne = () => {
    setIsModalOpen(false)
    setIdDeleteOne('')
  }

  // hàm xóa 1 sản phẩm
  const handleDeleteOne = () => {
    privateAxios
      .delete(`/cart/${idDeleteOne}`)
      .then((res) => {
        message.success(res.data?.message)
        getListCart()
        handleCancelDeleteOne()
        getLengthOfCart()
      })
      .catch((error) => {
        message.error(error.response?.data?.message)
      })
  }

  // hàm mở modal của chức năng xóa tất cả sản phẩm
  const showModalDeleteAll = () => {
    if (listCartId == 0) {
      message.error('Bạn không có sản phẩm nào để xóa !')
    } else {
      setIsOpenModalDeleteAll(true)
    }
  }

  // hàm hủy modal của chức năng xóa tất cả sản phẩm
  const handleModalCancelDeleteAll = () => {
    setIsOpenModalDeleteAll(false)
  }

  // hàm xóa tất cả sản phẩm trong giỏ hàng
  const handleModallDeleteAll = () => {
    privateAxios
      .post('/cart/delete-many', {
        listCartId
      })
      .then((res) => {
        message.success(res.data?.message)
        handleModalCancelDeleteAll()
        getListCart()
        setListCartId([])
        setTitleProduct(false)
      })
      .catch((error) => {
        message.error(error.response?.message)
      })
  }

  // hàm click vào item checkbox
  const handleClickItemCheckbox = (id: string) => {
    // kiểm tra id của listCart trong listCartId nếu listCartId không có id của listCart thì thêm id của listCart vào listCartId.
    if (listCartId.includes(id) === false) {
      // kiểm tra id có tồn tại trong listCartId k, nếu id k tồn tại thì khối if dc thực thi.
      listCartId.push(id) // nếu id k tồn tại trong listCartId thì thêm id vào cuối mảng listCartId.
      setListCartId([...listCartId]) // cập nhật lại listCartId, dùng toán tư trải rộng để tạo ra 1 bản sao của mảng hiện tại.
    } else {
      //else: Nếu id tồn tại trong mảng listCartId, khối code trong phần else sẽ được thực thi.
      const newArr = listCartId.filter((item: any) => {
        //dùng filter tạo một mảng mới từ listCartId nhưng loại bỏ giá trị id.
        if (item !== id) {
          //Cách này được sử dụng để xóa một giá trị cụ thể khỏi mảng.
          return true
        }
      })
      setListCartId(newArr) //: Dòng này cập nhật giá trị của listCartId bằng giá trị của newArr, loại bỏ id khỏi mảng.
    }
  }

  // hàm click vào item đặt hàng
  const handleClickOrder = () => {
    if (listCartId.length > 0) {
      privateAxios
        .post('/payment/order', {
          listCartId // danh sách các id trong giỏ hàng đc gửi lên
        })
        .then((res) => {
          // res.data trả vể cho paymentId
          navigate(`/payment/${res.data?.paymentId}`)
        })
        .catch((error) => {
          message.error(error)
        })
    }
  }
  // hook useEffect này sử lý nếu có showTitleProduct thì khối if dc thực thi, ngược lại khối else đc thực thi.
  useEffect(() => {
    if (showTitleProduct) {
      const arrId = listCart?.map((item: any) => {
        // dùng map tạo mảng mới từ listCart, gom id của listCart vào mảng mới và mảng mới chỉ chứa 1 mảng id.
        return item.id
      })
      setListCartId(arrId) // cập nhật lại listCartId bằng giá trị mới là arrId
    } else {
      setListCartId([]) // nếu showTitleProduct là false thì setListCartId là mảng rỗng
    }
  }, [showTitleProduct]) //và sẽ dc gọi lại mỗi khi giá trị showTitleProduct thay đổi,trong trường hợp này nó chỉ chạy khi showTitleProduct thay đổi.

  // useEffect này xử lý lấy tổng tiền sản phẩm, và lấy tổng số lượng của từng sản phẩm
  useEffect(() => {
    let totalPrice = 0
    let amountProducts = 0
    for (let i = 0; i < listCartId.length; i++) {
      for (let j = 0; j < listCart.length; j++) {
        if (listCart[j]?.id === listCartId[i]) {
          totalPrice += listCart[j]?.totalPrice
          amountProducts += listCart[j]?.amount
        }
      }
    }
    setTotalPrice(totalPrice)
    setAmountProducts(amountProducts)
    // let totalPrice = 0
    // let amountProduct = 0
    // listCartId?.forEach((id: string) => {
    //   listCart?.forEach((cart: any) => {
    //     if (cart.id === id) {
    //       totalPrice += cart.totalPrice
    //       amountProduct += cart.amount
    //     }
    //   })
    // })
    // // console.log(totalPrice) //0
    // // console.log(amountProduct) //0
    // setAmountProducts(amountProduct)
    // setTotalPrice(totalPrice)
  }, [listCartId, listCart]) // nó sẽ chỉ thay đổi giá trị của totalPrice và amountProdut khi biến phụ thuộc bị thay đổi.

  useEffect(() => {
    getListCart()
  }, [])

  return (
    <CartWrapper>
      <div className='itemCart'>
        <div>GIỎ HÀNG</div>
        <div className='itemProduct'>
          <div className='product'>
            <div className='itemTitle'>
              <div className='detailTitle'>
                <input checked={showTitleProduct} onClick={handleShowTitle} type='checkbox' id='checkbox1' />
                <div className='checkboxProduct'>
                  {!showTitleProduct ? (
                    <div className='titleProduct'>
                      <div>Sản phẩm</div>
                      <div>Đơn giá</div>
                      <div>Số lượng</div>
                      <div>Tạm tính</div>
                      <div>Xóa</div>
                    </div>
                  ) : (
                    <div className='cartProduct'>
                      <div>
                        Sản phẩm <span>({listCartId?.length} sản phẩm)</span>
                      </div>
                      <Button type='primary' onClick={showModalDeleteAll} className='deleteProduct'>
                        <AiOutlineDelete className='iconDelete'>/</AiOutlineDelete>
                        <div>Xóa tất cả</div>
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
            {listCart.length > 0
              ? listCart.map((item: any) => {
                  return (
                    <div className='detailProduct' key={item.id}>
                      <div className='informationProduct'>
                        <input
                          type='checkbox'
                          id='checkbox2'
                          checked={listCartId?.includes(item.id)} // kiểm tra sự tồn tại item.id nếu có thì trả về true, tức là checked là true và dc chọn.
                          onClick={() => handleClickItemCheckbox(item.id)}
                        />
                        <img className='imgProduct' src={item.image} alt='image' />
                        <div>{item.productName}</div>
                        <div className='priceProduct'>
                          <div>
                            {item.originPrice}
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
                          <div onClick={() => upDateCart(item.id, item.amount - 1)}>-</div>
                          <div>{item.amount}</div>
                          <div onClick={() => upDateCart(item.id, item.amount + 1)}>+</div>
                        </div>
                        <div>
                          {item?.amount * item?.originPrice}
                          <span>đ</span>
                        </div>
                        <AiOutlineDelete
                          onClick={() => handleOpenModalOneDelete(item.id)}
                          className='iconDelete'
                        ></AiOutlineDelete>
                      </div>
                    </div>
                  )
                })
              : ''}
          </div>
        </div>
      </div>
      <div className='informationLine'>
        <div className='itemPay'>
          <div>THÔNG TIN ĐƠN HÀNG</div>
          <div className='itemProvisional'>
            <div className='provisional'>
              <div className='amountOrder'>
                <div>
                  Tạm tính <span>({listCartId?.length} sản phẩm)</span>
                </div>
                <div>
                  <span>X</span>
                  {amountProducts}
                </div>
              </div>
            </div>
            <div className='number'>
              {totalPrice} <span>đ</span>
            </div>
          </div>
          <div className='totalMoney'>
            <div className='money'>
              <div>Tổng tiền</div>
              <div className='numberTotal'>
                {totalPrice} <span>đ</span>
              </div>
            </div>
            <div>Đã bao gồm VAT (nếu có)</div>
          </div>
        </div>
        <div className={`order ${listCartId.length > 0 ? 'colorYelow' : ''}`} onClick={handleClickOrder}>
          <div>TIẾN HÀNH ĐẶT HÀNG</div>
          <div>Không Ưng Đổi Ngay Trong 30 Ngày</div>
        </div>
      </div>
      {/* Modal xoa 1 gio hang */}
      <Modal
        width={370}
        title='Bạn có chắc chắn muốn xóa sản phẩm này ?'
        open={isModalOpen}
        onOk={handleDeleteOne}
        onCancel={handleCancelDeleteOne}
      />
      {/* Modal xoa ta ca gio hang */}
      <Modal open={isOpenModalDeleteAll} onCancel={handleModalCancelDeleteAll} onOk={handleModallDeleteAll}>
        <DeleteProductAll className='modalDelete'>XOÁ KHỎI GIỎ HÀNG</DeleteProductAll>
        <div>Bạn chắc chắn muốn xóa {listCartId?.length} sản phẩm này khỏi giỏ hàng?</div>
      </Modal>
    </CartWrapper>
  )
}
