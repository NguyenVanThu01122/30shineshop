import { StarOutlined } from '@ant-design/icons'
import { Button, Carousel, Form, Input, Modal, Rate, message } from 'antd'
import { DotPosition } from 'antd/es/carousel'
import { useEffect, useRef, useState } from 'react'
import { BiChevronDown } from 'react-icons/bi'
import { BsCartPlus } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { addListProduct, saveTotalCart } from '../../redux/actions/detailProduct'
import { privateAxios } from '../../service/axios'
import styles from './styles.module.scss'

function DetailProduct() {
  const [listFeedback, setListFeedback] = useState<any>([])
  const [detailProduct, setDetailProduct] = useState<any>({})
  const [imageSelect, setImageSelect] = useState('')
  const [isOpenFeedback, setIsOpenFeedback] = useState(false)
  const [count, setCount] = useState(1)
  const [dotPosition, setDotPosition] = useState<DotPosition>('top') // chuyển slick-dots(dấu chấm bóng mượt) lên top
  const [numberStar, setNumberStar] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [form] = Form.useForm()

  const params = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const relatedProducts = useSelector((state: any) => state.app.products) // lấy sản phẩm liên quan trong stor
  const totalCart = useSelector((state: any) => state.app.totalCart) // lấy số lượng sản phẩm trong stor
  const imagesRef = useRef(null)

  // hàm lấy chi tiết sản phẩm
  const handleDetail = () => {
    privateAxios.get(`/product/${params.id}`).then((res) => {
      setDetailProduct(res.data?.data)
      setImageSelect(res.data?.data?.images[0])
    })
  }
  // hàm lấy sản phẩm cùng loại
  const handelRelate = () => {
    privateAxios
      .get(`/product/relate/${params.id}`)
      .then((res) => {
        dispatch(addListProduct(res.data?.data))
      })
      .catch((error) => {})
  }
  // hàm lấy số lượng giỏ hàng hiện ở modal giỏ hàng
  const getLengthOfCart = () => {
    privateAxios.get('/cart').then((res) => {
      const length = res.data?.listCart.length
      dispatch(saveTotalCart(length))
    })
  }
  // hàm thêm sản phẩm vào giỏ hàng
  const handleAddProductCart = (id: string, amount: number) => {
    privateAxios
      .post('/cart', {
        id,
        amount
      })
      .then((res) => {
        setIsModalOpen(true) // mở modal
        getLengthOfCart() // gọi lại hàm lấy số lượng sản phẩm này để hiện số lượng sp ở icon giỏ hàng,
        // vì khi bấm vào nút thêm giỏ hàng thì state totalCart được lưu trên stor sẽ dc cập nhật lại số lượng//
      })
      .catch((error) => {
        message.error(error.response?.data?.message)
      })
  }
  // hàm cancel modal
  const handleCancel = () => {
    setIsModalOpen(false)
  }
  //hàm mua sảm phẩm
  const handleBuyNow = (id: string, amount: number) => {
    privateAxios
      .post('/payment/buy-now', {
        id,
        amount
      })
      .then((res) => {
        // api sẽ trả về cho mình paymentId
        const paymentId = res.data?.paymentId
        navigate(`/payment/${paymentId}`) // Điều hướng đến trang chi tiết payment có paymentId nhận được từ backend
      })
  }
  // hàm xử lý Prev cho chức năng Carousel
  const handleImagePrev = () => {
    ;(imagesRef.current as any).prev()
  }
  // hàm xử lý next cho chức năng Carousel
  const handleImageNext = () => {
    ;(imagesRef.current as any).next()
  }
  // hàm mở feedback
  const openFeedback = () => {
    setIsOpenFeedback(!isOpenFeedback)
  }
  // hàm giảm số lượng sản phẩm
  const decreaseNumber = () => {
    if (count > 1) {
      setCount(count - 1)
    }
  }
  // hàm tăng số lượng sản
  const increaseNumber = () => {
    setCount(count + 1)
  }
  // hàm chọn ảnh sản phẩm
  const handleSelectImage = (item: string) => {
    setImageSelect(item)
  }
  // hàm lấy danh sách đánh giá sản phẩm
  const handleGetlistEvaluete = () => {
    privateAxios
      .get(`/evaluate/${params?.id}`)
      .then((res) => {
        setListFeedback(res.data?.data)
      })
      .catch((error) => {
        message.error(error.response?.data?.message)
      })
  }

  // hàm tạo đánh giá sản phẩm
  const sendPostEvaluate = (body: any) => {
    const data = { comment: body.comment, product: params.id, numberStar }
    privateAxios
      .post('/evaluate', data)
      .then((res) => {
        message.success(res.data?.message)
        form.resetFields()
        setNumberStar(0)
        handleGetlistEvaluete()
        handleDetail()
      })
      .catch((error) => {
        message.error(error.response?.data?.message)
      })
  }
  // hàm gửi yêu cầu đánh giá sp
  const handleSubmit = () => {
    form.submit()
    setIsOpenFeedback(false)
  }
  useEffect(() => {
    // mỗi lần render lại thì cho scroll to top(kéo lên đầu trang)
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Sử dụng 'smooth' để có hiệu ứng cuộn mượt
    })
    handleDetail()
    handelRelate()
    handleGetlistEvaluete()
  }, [])

  return (
    <div className={styles.pageDetailProduct}>
      <div className={styles.detailProduct}>
        <div className={styles.headerProduct}>
          <div className={styles.product}>
            <div className={styles.imgProduct}>
              <img src={imageSelect} alt='' />
            </div>
            <div className={styles.detailnformation}>
              <div>{detailProduct?.name}</div>
              <div className={styles.number}>
                <div>{detailProduct.star}</div>
                <div>
                  {detailProduct?.star === 5 && (
                    <div>
                      <StarOutlined style={{ color: 'yellow', fontSize: '16px' }} />
                      <StarOutlined style={{ color: 'yellow', fontSize: '16px' }} />
                      <StarOutlined style={{ color: 'yellow', fontSize: '16px' }} />
                      <StarOutlined style={{ color: 'yellow', fontSize: '16px' }} />
                      <StarOutlined style={{ color: 'yellow', fontSize: '16px' }} />
                    </div>
                  )}
                  {detailProduct?.star === 4 && (
                    <div>
                      <StarOutlined style={{ color: 'yellow', fontSize: '16px' }} />
                      <StarOutlined style={{ color: 'yellow', fontSize: '16px' }} />
                      <StarOutlined style={{ color: 'yellow', fontSize: '16px' }} />
                      <StarOutlined style={{ color: 'yellow', fontSize: '16px' }} />
                      <StarOutlined style={{ color: 'gray', fontSize: '16px' }} />
                    </div>
                  )}
                  {detailProduct?.star === 3 && (
                    <div>
                      <StarOutlined style={{ color: 'yellow', fontSize: '16px' }} />
                      <StarOutlined style={{ color: 'yellow', fontSize: '16px' }} />
                      <StarOutlined style={{ color: 'yellow', fontSize: '16px' }} />
                      <StarOutlined style={{ color: 'gray', fontSize: '16px' }} />
                      <StarOutlined style={{ color: 'gray', fontSize: '16px' }} />
                    </div>
                  )}
                  {detailProduct?.star === 2 && (
                    <div>
                      <StarOutlined style={{ color: 'yellow', fontSize: '16px' }} />
                      <StarOutlined style={{ color: 'yellow', fontSize: '16px' }} />
                      <StarOutlined style={{ color: 'gray', fontSize: '16px' }} />
                      <StarOutlined style={{ color: 'gray', fontSize: '16px' }} />
                      <StarOutlined style={{ color: 'gray', fontSize: '16px' }} />
                    </div>
                  )}
                  {detailProduct?.star === 1 && (
                    <div>
                      <StarOutlined style={{ color: 'yellow', fontSize: '16px' }} />
                      <StarOutlined style={{ color: 'gray', fontSize: '16px' }} />
                      <StarOutlined style={{ color: 'gray', fontSize: '16px' }} />
                      <StarOutlined style={{ color: 'gray', fontSize: '16px' }} />
                      <StarOutlined style={{ color: 'gray', fontSize: '16px' }} />
                    </div>
                  )}
                  {detailProduct?.star === 0 && (
                    <div>
                      <StarOutlined style={{ color: 'gray', fontSize: '16px' }} />
                      <StarOutlined style={{ color: 'gray', fontSize: '16px' }} />
                      <StarOutlined style={{ color: 'gray', fontSize: '16px' }} />
                      <StarOutlined style={{ color: 'gray', fontSize: '16px' }} />
                      <StarOutlined style={{ color: 'gray', fontSize: '16px' }} />
                    </div>
                  )}
                </div>
                <div>{detailProduct?.totalEvaluate} đánh giá</div>
              </div>
              <div style={{ fontSize: '25px', color: 'rgba(229,77,62', fontFamily: 'Oswald', fontWeight: '600' }}>
                {detailProduct?.salePrice} VND
              </div>
              <div className={styles.salePrice}>
                <div>{detailProduct?.originPrice} VND</div>
                <div>
                  Giảm{' '}
                  {Math.floor(
                    ((detailProduct?.originPrice - detailProduct?.salePrice) / detailProduct?.originPrice) * 100
                  )}
                  %
                </div>
              </div>
              <div className={styles.quantity}>
                <div>Số lượng</div>
                <div className={styles.count}>
                  <div onClick={() => decreaseNumber()}>-</div>
                  <div>{count}</div>
                  <div onClick={() => increaseNumber()}>+</div>
                </div>
              </div>
              <div className={styles.orderProducts}>
                <div className={styles.addCart} onClick={() => handleAddProductCart(detailProduct.id, count)}>
                  <div>
                    <BsCartPlus className={styles.icon} />
                  </div>
                  <div>THÊM GIỎ HÀNG</div>
                </div>
                <div className={styles.buyNow} onClick={() => handleBuyNow(detailProduct.id, count)}>
                  <div>MUA NGAY</div>
                  <div>Không ưng đổi ngay trong 30 ngày</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.imgProduct}>
            {detailProduct?.images?.map((item: string) => {
              // dùng map render ra image
              return (
                <div onClick={() => handleSelectImage(item)}>
                  <img src={item} alt='' className={`${imageSelect === item ? styles.active : ''}`} />
                </div>
              )
            })}
          </div>
          <div className={styles.informationItem}>
            <div className={styles.itemProduct}>
              <div className={styles.instruct}>
                <div>Thông tin sản phẩm</div>
                <div>Thành phần</div>
                <div>Hướng dẫn sử dụng</div>
              </div>
              <div>[NEW 2023] Combo Diệt Mụn </div>
              <div className={styles.readMore}>
                <div>Đọc thêm</div>
                <BiChevronDown className={styles.iconDown} />
              </div>
            </div>
            <div className={styles.CustomerFeedback}>
              <div>Phản hồi khách hàng</div>
              <div className={styles.feedback}>
                <div className={styles.animationFeedback}>
                  <div className={styles.noFeedback}>
                    <div>{detailProduct?.star}</div>
                    <div>
                      {detailProduct?.star === 5 && (
                        <div>
                          <StarOutlined style={{ color: 'yellow', fontSize: '16px' }} />
                          <StarOutlined style={{ color: 'yellow', fontSize: '16px' }} />
                          <StarOutlined style={{ color: 'yellow', fontSize: '16px' }} />
                          <StarOutlined style={{ color: 'yellow', fontSize: '16px' }} />
                          <StarOutlined style={{ color: 'yellow', fontSize: '16px' }} />
                        </div>
                      )}
                      {detailProduct?.star === 4 && (
                        <div>
                          <StarOutlined style={{ color: 'yellow', fontSize: '16px' }} />
                          <StarOutlined style={{ color: 'yellow', fontSize: '16px' }} />
                          <StarOutlined style={{ color: 'yellow', fontSize: '16px' }} />
                          <StarOutlined style={{ color: 'yellow', fontSize: '16px' }} />
                          <StarOutlined style={{ color: 'gray', fontSize: '16px' }} />
                        </div>
                      )}
                      {detailProduct?.star === 3 && (
                        <div>
                          <StarOutlined style={{ color: 'yellow', fontSize: '16px' }} />
                          <StarOutlined style={{ color: 'yellow', fontSize: '16px' }} />
                          <StarOutlined style={{ color: 'yellow', fontSize: '16px' }} />
                          <StarOutlined style={{ color: 'gray', fontSize: '16px' }} />
                          <StarOutlined style={{ color: 'gray', fontSize: '16px' }} />
                        </div>
                      )}
                      {detailProduct?.star === 2 && (
                        <div>
                          <StarOutlined style={{ color: 'yellow', fontSize: '16px' }} />
                          <StarOutlined style={{ color: 'yellow', fontSize: '16px' }} />
                          <StarOutlined style={{ color: 'gray', fontSize: '16px' }} />
                          <StarOutlined style={{ color: 'gray', fontSize: '16px' }} />
                          <StarOutlined style={{ color: 'gray', fontSize: '16px' }} />
                        </div>
                      )}
                      {detailProduct?.star === 1 && (
                        <div>
                          <StarOutlined style={{ color: 'yellow', fontSize: '16px' }} />
                          <StarOutlined style={{ color: 'gray', fontSize: '16px' }} />
                          <StarOutlined style={{ color: 'gray', fontSize: '16px' }} />
                          <StarOutlined style={{ color: 'gray', fontSize: '16px' }} />
                          <StarOutlined style={{ color: 'gray', fontSize: '16px' }} />
                        </div>
                      )}
                      {detailProduct?.star === 0 && (
                        <div>
                          <StarOutlined style={{ color: 'gray', fontSize: '16px' }} />
                          <StarOutlined style={{ color: 'gray', fontSize: '16px' }} />
                          <StarOutlined style={{ color: 'gray', fontSize: '16px' }} />
                          <StarOutlined style={{ color: 'gray', fontSize: '16px' }} />
                          <StarOutlined style={{ color: 'gray', fontSize: '16px' }} />
                        </div>
                      )}
                    </div>
                    <div>{detailProduct?.totalEvaluate} phản hồi</div>
                  </div>
                  <div className={styles.starOder}>
                    <div className={styles.reviewStar}>
                      <div className={styles.star}>
                        <div>5</div>
                        <div>
                          <img
                            className={styles.iconStarYellow}
                            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbpahTs3DQGUQxtS8nVwG8_I64DImoNFkaTadiHr5nNQGIn61I'
                            alt=''
                          />
                        </div>
                        <div className={styles.Crossbar}></div>
                        <div>{detailProduct?.listStar?.fiveStar}</div>
                      </div>
                      <div className={styles.star}>
                        <div>4</div>
                        <div>
                          <img
                            className={styles.iconStarYellow}
                            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbpahTs3DQGUQxtS8nVwG8_I64DImoNFkaTadiHr5nNQGIn61I'
                            alt=''
                          />
                        </div>
                        <div className={styles.Crossbar}></div>
                        <div>{detailProduct?.listStar?.fourStar}</div>
                      </div>
                      <div className={styles.star}>
                        <div>3</div>
                        <div>
                          <img
                            className={styles.iconStarYellow}
                            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbpahTs3DQGUQxtS8nVwG8_I64DImoNFkaTadiHr5nNQGIn61I'
                            alt=''
                          />
                        </div>
                        <div className={styles.Crossbar}></div>
                        <div>{detailProduct?.listStar?.threeStar}</div>
                      </div>
                      <div className={styles.star}>
                        <div>2</div>
                        <div>
                          <img
                            className={styles.iconStarYellow}
                            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbpahTs3DQGUQxtS8nVwG8_I64DImoNFkaTadiHr5nNQGIn61I'
                            alt=''
                          />
                        </div>
                        <div className={styles.Crossbar}></div>
                        <div>{detailProduct?.listStar?.twoStar}</div>
                      </div>
                      <div className={styles.star}>
                        <div>1</div>
                        <div>
                          <img
                            id={styles.imgStar}
                            className={styles.iconStarYellow}
                            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbpahTs3DQGUQxtS8nVwG8_I64DImoNFkaTadiHr5nNQGIn61I'
                            alt=''
                          />
                        </div>
                        <div className={styles.Crossbar}></div>
                        <div>{detailProduct?.listStar?.oneStar}</div>
                      </div>
                    </div>
                    {!isOpenFeedback ? (
                      <div className={styles.review} onClick={openFeedback}>
                        VIẾT ĐÁNH GIÁ
                      </div>
                    ) : (
                      <div className={styles.closeFeedback} onClick={openFeedback}>
                        ĐÓNG
                      </div>
                    )}
                  </div>
                </div>
                {isOpenFeedback && (
                  <div className={styles.itemFeedback}>
                    <div className={styles.feedbackStar}>
                      <div>Chọn đánh giá của bạn</div>
                      <span>
                        <Rate value={numberStar} onChange={setNumberStar} />
                      </span>
                    </div>
                    <div className={styles.clickItem}>
                      <Form onFinish={sendPostEvaluate} form={form}>
                        <Form.Item
                          name='comment'
                          rules={[
                            {
                              required: true,
                              message: 'Vui lòng nhập đánh giá !'
                            }
                          ]}
                          className={styles.formItemText}
                        >
                          <Input.TextArea
                            className={styles.textArea}
                            placeholder='Nhập đánh giá về sản phẩm...'
                            size='large'
                          />
                        </Form.Item>
                        <div className={styles.itemForm}>
                          <Button size='large' type='primary' onClick={handleSubmit}>
                            Gửi đánh giá
                          </Button>
                        </div>
                      </Form>
                    </div>
                  </div>
                )}
                <div className={styles.itemDetailFeedback}>
                  {listFeedback.map((item: any) => {
                    return (
                      <div className={styles.detailFeedback} key={item.id}>
                        <div>{item.user}</div>
                        <div className={styles.timeFeedback}>
                          <Rate value={item.star} disabled={true} />
                          <div>{item.time}</div>
                        </div>
                        <div>{item.comment}</div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.endProduct}>
          <div className={styles.support}>
            <div>
              <img src='https://shop.30shine.com/icons/usp-detail-icon-1.png' alt='icon' />
            </div>
            <div>cam kết 7 ngày hiệu quả</div>
          </div>
          <div className={styles.support}>
            <div>
              <img src='https://shop.30shine.com/icons/usp-detail-icon-2.png' alt='icon' />
            </div>
            <div>mua 1 hưởng 5 đặc quyền</div>
          </div>
          <div className={styles.support}>
            <div>
              <img src='https://shop.30shine.com/icons/usp-detail-icon-3.png' alt='icon' />
            </div>
            <div>chính sách hoàn tiền 120%</div>
          </div>
          <div className={styles.support}>
            <div>
              <img src='https://shop.30shine.com/icons/usp-detail-icon-4.png' alt='icon' />
            </div>
            <div>chất lượng sản phẩm cấp cao nhất</div>
          </div>
          <div className={styles.support}>
            <div>
              <img src='https://shop.30shine.com/icons/usp-detail-icon-5.png' alt='icon' />
            </div>
            <div>giao hàng siêu tốc 2h</div>
          </div>
          <div className={styles.support}>
            <div>
              <img src='https://shop.30shine.com/icons/usp-detail-icon-6.png' alt='icon' />
            </div>
            <div>đổi trả tận nơi trong 24h</div>
          </div>
          <div className={styles.support}>
            <div>
              <img src='https://shop.30shine.com/icons/usp-detail-icon-7.png' alt='icon' />
            </div>
            <div>Tổng đài tư vấn mọi lúc mọi nơi</div>
          </div>
          <div className={styles.support}>
            <div>
              <img src='https://shop.30shine.com/icons/usp-detail-icon-8.png' alt='icon' />
            </div>
            <div>An toàn chuẩn giao vận quốc tế</div>
          </div>
          <div className={styles.oder}>
            <img src='https://shop.30shine.com/icons/icon-phone.svg' alt='icon' />
            <div className={styles.hotlineOder}>
              <div>Hotline đặt hàng</div>
              <div>1900.27.27.30</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.otherProducts}>
        <div>SẢN PHẨM CÙNG LOẠI</div>
        <div className={styles.similarProducts}>
          <Carousel
            dotPosition={dotPosition}
            autoplay={true}
            dots={true}
            slidesToShow={4}
            ref={imagesRef}
            className={styles.itemCarousel}
          >
            {relatedProducts.map((item: any) => {
              return (
                <div
                  className={styles.informationProduct}
                  onClick={() => window.location.assign(`/detail-product/${item.id}`)}
                >
                  <img className={styles.otherImage} src={item.image} alt='icon' />
                  <div>{item.name}</div>
                  <div className={styles.priceProduct}>
                    <div>
                      {item.originPrice}
                      <span>đ</span>
                    </div>
                    <div>
                      {item.salePrice}
                      <span>đ</span>
                    </div>
                  </div>
                  <div>
                    {item.star === 5 && (
                      <div>
                        <StarOutlined style={{ color: 'yellow' }} />
                        <StarOutlined style={{ color: 'yellow' }} />
                        <StarOutlined style={{ color: 'yellow' }} />
                        <StarOutlined style={{ color: 'yellow' }} />
                        <StarOutlined style={{ color: 'yellow' }} />
                      </div>
                    )}
                    {item.star === 4 && (
                      <div>
                        <StarOutlined style={{ color: 'yellow' }} />
                        <StarOutlined style={{ color: 'yellow' }} />
                        <StarOutlined style={{ color: 'yellow' }} />
                        <StarOutlined style={{ color: 'yellow' }} />
                        <StarOutlined style={{ color: 'gray' }} />
                      </div>
                    )}
                    {item.star === 3 && (
                      <div>
                        <StarOutlined style={{ color: 'yellow' }} />
                        <StarOutlined style={{ color: 'yellow' }} />
                        <StarOutlined style={{ color: 'yellow' }} />
                        <StarOutlined style={{ color: 'gray' }} />
                        <StarOutlined style={{ color: 'gray' }} />
                      </div>
                    )}
                    {item.star === 2 && (
                      <div>
                        <StarOutlined style={{ color: 'yellow' }} />
                        <StarOutlined style={{ color: 'yellow' }} />
                        <StarOutlined style={{ color: 'gray' }} />
                        <StarOutlined style={{ color: 'gray' }} />
                        <StarOutlined style={{ color: 'gray' }} />
                      </div>
                    )}
                    {item.star === 1 && (
                      <div>
                        <StarOutlined style={{ color: 'yellow' }} />
                        <StarOutlined style={{ color: 'gray' }} />
                        <StarOutlined style={{ color: 'gray' }} />
                        <StarOutlined style={{ color: 'gray' }} />
                        <StarOutlined style={{ color: 'gray' }} />
                      </div>
                    )}
                    {item.star === 0 && (
                      <div>
                        <StarOutlined style={{ color: 'gray' }} />
                        <StarOutlined style={{ color: 'gray' }} />
                        <StarOutlined style={{ color: 'gray' }} />
                        <StarOutlined style={{ color: 'gray' }} />
                        <StarOutlined style={{ color: 'gray' }} />
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </Carousel>
          <div onClick={handleImagePrev} className={styles.otherPrev}>
            {'<'}
          </div>
          <div onClick={handleImageNext} className={styles.otherNext}>
            {'>'}
          </div>
        </div>
      </div>
      
      {isModalOpen && (
        <Modal className={styles.modal} centered width={400} open={isModalOpen} onCancel={handleCancel} footer={false}>
          <div className={styles.modalCart}>
            <div className={styles.cart}>
              <div>GIỎ HÀNG</div>
              <div>Thêm giỏ hàng thành công</div>
            </div>
            <div className={styles.detailCart}>
              <img src={detailProduct?.images[0]} alt='' />
              <div className={styles.priceProductCart}>
                <div>{detailProduct.name}</div>
                <div className={styles.price}>
                  <div className={styles.priceSale}>
                    <div>
                      {detailProduct.salePrice}
                      <span>đ</span>
                    </div>
                    <div>
                      {detailProduct.originPrice} <span>đ</span>
                    </div>
                  </div>
                  <div>x{count}</div>
                </div>
              </div>
            </div>
            <div className={styles.numberProduct}>Giỏ hàng của bạn đang có: {totalCart} sản phẩm</div>
            <div className={styles.totalMoney}>
              <div>TỔNG TIỀN: </div>
              <div>
                {detailProduct.salePrice * count}
                <span>đ</span>
              </div>
            </div>
            <div className={styles.buyNow}>
              <Button type='primary' size='large' onClick={() => navigate('/cart')}>
                XEM GIỎ HÀNG
              </Button>
              <Button size='large' onClick={() => handleBuyNow(detailProduct.id, count)}>
                MUA NGAY
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  )
}
export default DetailProduct
{
  // /* <div>Giảm {100 - (detailProduct.salePrice / detailProduct.originPrice) * 100} %</div>
}
function useREf(arg0: null): [any, any] {
  throw new Error('Function not implemented.')
}
function setTab(key: string) {
  throw new Error('Function not implemented.')
}
