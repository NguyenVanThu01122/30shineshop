import { Button } from 'antd'
import { useEffect, useState } from 'react'
import { AiOutlineDelete } from 'react-icons/ai'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import { ModalDelete } from '../../components/Ui/ModalDelete'
import { GetLengthOfCart } from '../../helper/useGetLengthOfCart'
import iconGifDuck from '../../images/img-duck.jpg'
import { deleteCart, deleteCartAll, getListCartProduct, order, updateCart } from '../../service/cart'
import { CartWrapper } from './style'

export default function Cart() {
  let [listCart, setListCart] = useState<any>([])
  const [totalPrice, setTotalPrice] = useState(0)
  const [amountProducts, setAmountProducts] = useState(0)
  const [listCartId, setListCartId] = useState<any>([])
  const [isShowTitleProduct, setIsTitleProduct] = useState(false)
  const navigate = useNavigate()

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [idDeleteOne, setIdDeleteOne] = useState('')
  const [modalTitle, setModalTitle] = useState('')
  const [modalContent, setModalContent] = useState('')
  const [getLengthOfCart] = GetLengthOfCart()

  // hàm lấy danh sách sản phảm giỏ hàng
  const getListCart = () => {
    getListCartProduct()
      .then((res) => {
        setListCart(res.data?.listCart)
      })
      .catch((error) => {
        toast.error(error.response?.data?.message)
      })
  }

  // hàm mở tiêu đề thông tin sản phẩm
  const handleShowTitle = () => {
    setIsTitleProduct(!isShowTitleProduct)
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

  // // hàm mở modal xóa 1 sản phẩm
  // const handleOpenModalOneDelete = (id: string) => {
  //   setIsModalOpen(true)
  //   setIdDeleteOne(id)
  // }

  // // hàm hủy bỏ trong modal xóa 1 sản phẩm
  // const handleCancelDeleteOne = () => {
  //   setIsModalOpen(false)
  //   setIdDeleteOne('')
  // }

  // // hàm xóa 1 sản phẩm
  // const handleDeleteOne = () => {
  //   deleteCart(idDeleteOne)
  //     .then((res) => {
  //       toast.success(res.data?.message)
  //       getListCart()
  //       handleCancelDeleteOne()
  //       getLengthOfCart()
  //       setListCartId([])
  //       setIsTitleProduct(false)
  //     })
  //     .catch((error) => {
  //       toast.error(error.response?.data?.message)
  //     })
  // }

  // // hàm hủy modal của chức năng xóa tất cả sản phẩm
  // const ModalCancelDeleteAll = () => {
  //   setIsOpenModalDeleteAll(false)
  // }

  // // hàm xóa tất cả sản phẩm trong giỏ hàng
  // const handleModalDeleteAll = () => {
  //   deleteCartAll(listCartId)
  //     .then((res) => {
  //       toast.success(res.data?.message)
  //       ModalCancelDeleteAll()
  //       getListCart()
  //       setListCartId([])
  //       setIsTitleProduct(false)
  //     })
  //     .catch((error) => {
  //       toast.error(error.response?.message)
  //     })
  // }

  // Hàm mở modal xác nhận xóa sản phẩm
  const handleOpenModal = (action: string, id: string) => {
    if (action === 'deleteOne') {
      setIsModalOpen(true)
      setIdDeleteOne(id)
      setModalTitle('Xóa sản phẩm')
      setModalContent('Bạn có chắc chắn muốn xóa sản phẩm này?')
    } else if (action === 'deleteAll') {
      if (!listCartId.length) {
        toast.error('Bạn không có sản phẩm nào để xóa !')
        handleCancelModal() // Đóng modal sau khi hiển thị thông báo
        return
      }
      setIsModalOpen(true)
      setModalTitle('Xóa tất cả sản phẩm')
      setModalContent(`Bạn chắc chắn muốn xóa tất cả ${listCartId?.length} sản phẩm khỏi giỏ hàng?`)
    }
  }
  // Hàm đóng modal
  const handleCancelModal = () => {
    setIsModalOpen(false)
    setModalTitle('')
    setModalContent('')
  }

  // hàm xử lý xóa sản phẩm khỏi giỏ hàng
  const handleDeleteProduct = () => {
    if (modalTitle === 'Xóa sản phẩm') {
      deleteCart(idDeleteOne)
        .then((res) => {
          toast.success(res.data?.message)
          getListCart() // gọi lại getListCart sau khi xóa
          handleCancelModal()
          getLengthOfCart()
          setListCartId([])
          setIsTitleProduct(false)
        })
        .catch((error) => {
          toast.error(error.response?.data?.message)
        })
    } else if (modalTitle === 'Xóa tất cả sản phẩm') {
      deleteCartAll(listCartId)
        .then((res) => {
          toast.success(res.data?.message)
          handleCancelModal()
          getListCart() // gọi lại getListCart sau khi xóa
          setListCartId([])
          setIsTitleProduct(false)
        })
        .catch((error) => {
          toast.error(error.response?.message)
        })
    }
  }

  // hàm click vào item checkbox
  const handleClickItemCheckbox = (id: string) => {
    if (listCartId.includes(id) === false) {
      listCartId.push(id)
      setListCartId([...listCartId]) // cập nhật lại listCartId, dùng toán tư trải rộng để tạo ra 1 bản sao của mảng hiện tại.
    } else {
      const newArr = listCartId.filter((item: any) => {
        if (item !== id) {
          //Cách này được sử dụng để xóa một giá trị cụ thể khỏi mảng.
          return true
        }
      })
      setListCartId(newArr) // cập nhật giá trị của listCartId bằng giá trị của newArr, loại bỏ id khỏi mảng.
    }
  }

  // hàm click vào item đặt hàng
  const handleClickOrder = () => {
    if (listCartId.length) {
      order(listCartId)
        .then((res) => {
          // res.data trả vể cho paymentId
          navigate(`/payment/${res.data?.paymentId}`)
        })
        .catch((error) => {
          toast.error(error)
        })
    }
  }

  useEffect(() => {
    if (isShowTitleProduct) {
      const arrId = listCart?.map((item: any) => {
        return item.id
        // gom id listCart vào mảng arrId
      })
      setListCartId(arrId) // cập nhật lại listCartId bằng giá trị mới là arrId
    } else {
      setListCartId([]) // nếu showTitleProduct là false thì setListCartId là mảng rỗng
    }
  }, [isShowTitleProduct])

  // useEffect này xử lý tính tổng tiền sản phẩm, và t tổng số lượng của từng sản phẩm
  useEffect(() => {
    let totalPrice = 0
    let amountProducts = 0
    listCartId.forEach((cartId: any) => {
      listCart?.forEach((cartItem: any) => {
        if (cartItem?.id === cartId) {
          // Cập nhật tổng giá trị và số lượng sản phẩm
          totalPrice += cartItem?.totalPrice
          amountProducts += cartItem?.amount
        }
      })
    })
    setTotalPrice(totalPrice)
    setAmountProducts(amountProducts)
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
                <input checked={isShowTitleProduct} onClick={handleShowTitle} type='checkbox' id='checkbox1' />
                <div className='checkboxProduct'>
                  {!isShowTitleProduct ? (
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
                      <Button type='primary' onClick={() => handleOpenModal('deleteAll', '')} className='deleteProduct'>
                        <AiOutlineDelete className='iconDelete'>/</AiOutlineDelete>
                        <div>Xóa tất cả</div>
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
            {listCart.length ? (
              listCart.map((item: any) => {
                return (
                  <div className='detailProduct' key={item.id}>
                    <div className='informationProduct'>
                      <input
                        type='checkbox'
                        id='checkbox2'
                        checked={listCartId?.includes(item.id)} // kiểm tra sự tồn tại item.id trong listCartId nếu có thì trả về true, tức là checked là true và dc chọn.
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
                        onClick={() => handleOpenModal('deleteOne', item?.id)}
                        className='iconDelete'
                      ></AiOutlineDelete>
                    </div>
                  </div>
                )
              })
            ) : (
              <div className='notificationSection'>
                <div>Không có sản phẩm nào !</div>
                <img className='iconGifDuck' src={iconGifDuck} alt='' />
              </div>
            )}
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
        <div className={`order ${listCartId.length ? 'colorYelow' : ''}`} onClick={handleClickOrder}>
          <div>TIẾN HÀNH ĐẶT HÀNG</div>
          <div>Không Ưng Đổi Ngay Trong 30 Ngày</div>
        </div>
      </div>

      {/* Modal xoa 1 gio hang */}
      <ModalDelete
        isModalOpen={isModalOpen}
        handleCancelModal={handleCancelModal}
        handleDeleteProduct={handleDeleteProduct}
        modalTitle={modalTitle}
      >
        {modalContent}
      </ModalDelete>
    </CartWrapper>
  )
}
