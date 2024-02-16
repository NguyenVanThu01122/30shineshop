import { StarOutlined } from '@ant-design/icons'
import { Button, Form, Input, Rate, message } from 'antd'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { TypeEvaluate, getlistEvaluete, sendEvaluate } from '../../../../service/detailProduct'
import styles from './styles.module.scss'
export const CustomerFeedback = ({ detailProduct, handleDetail }: any) => {
  const [listFeedback, setListFeedback] = useState<any>([])
  const [numberStar, setNumberStar] = useState(0)
  const [errorStar, setErrorStar] = useState<any>('')
  const [isOpenFeedback, setIsOpenFeedback] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [comment, setComment] = useState('')
  const [form] = Form.useForm()
  const params = useParams()

  const handleRateChange = (value: any) => {
    setNumberStar(value)
    if (value === 0) {
      setErrorStar('Vui lòng chọn ít nhất 1 sao.')
    } else {
      setErrorStar('')
    }
  }

  // hàm lấy danh sách đánh giá sản phẩm
  const handleGetlistEvaluete = () => {
    getlistEvaluete(params?.id)
      .then((res) => {
        setListFeedback(res.data?.data)
      })
      .catch((error) => {
        message.error(error.response?.data?.message)
      })
  }

  // hàm tạo đánh giá sản phẩm
  const sendPostEvaluate = (body: TypeEvaluate) => {
    const data = { comment: body.comment, product: params.id, numberStar }
    if (!errorStar && numberStar && comment) {
      sendEvaluate(data)
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
    } else {
      setErrorStar('Vui lòng chọn ít nhất 1 sao.')
    }
  }

  const openFeedback = () => {
    setIsOpenFeedback(true)
  }

  const closeFeedback = () => {
    setIsOpenFeedback(false)
    form.resetFields()
    setNumberStar(0)
    setErrorStar('')
    setComment('')
  }

  // hàm gửi yêu cầu đánh giá sp
  const handleSubmit = () => {
    form.submit()
  }

  useEffect(() => {
    handleGetlistEvaluete()
  }, [])

  return (
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
                <div>{detailProduct?.listStar?.fiveStar} </div>
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
              <div className={styles.closeFeedback} onClick={closeFeedback}>
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
                <Rate value={numberStar} onChange={handleRateChange} />
              </span>
              <div className={styles.errorStar}>{errorStar}</div>
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
                    onChange={(e) => setComment(e.target.value)}
                    className={styles.textArea}
                    placeholder='Nhập đánh giá về sản phẩm...'
                    size='large'
                  />
                </Form.Item>
                <div className={styles.itemForm}>
                  <Button
                    disabled={(!comment && errorStar) || (!numberStar && !comment)}
                    size='large'
                    type='primary'
                    onClick={handleSubmit}
                  >
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
  )
}
