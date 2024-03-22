import { Form, Rate } from 'antd'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { StarProduct } from '../../../../components/StarProduct'
import { ButtonGeneral } from '../../../../components/Ui/button'
import { TextArealInput } from '../../../../components/Ui/textAreaInput'
import { MESSAGE_PICK_STAR, NUMBER_STAR, PLACEHOLDER } from '../../../../helpers/contanst'
import { scrollToTop } from '../../../../helpers/scrollToTop'
import { validateComment } from '../../../../helpers/validationRules'
import imgStarYellow from '../../../../images/images-star-yellow.jpg'
import { TypeEvaluate, getListEvaluate, sendEvaluate } from '../../../../services/detailProduct'
import styles from './styles.module.scss'
import { isDialogLogin } from '../../../../redux/Slices/appSlices'
export const dataStar = [
  {
    numberStar: 5
  },
  {
    numberStar: 4
  },
  {
    numberStar: 3
  },
  {
    numberStar: 2
  },
  {
    numberStar: 1
  }
]
interface TypeDataStar {
  numberStar: number
}
interface FeedbackType {
  id: string
  user: string
  star: number
  time: string
  comment: string
}
interface TypeListStar {
  fiveStar: number
  fourStar: number
  threeStar: number
  twoStar: number
  oneStar: number
}

export const CustomerFeedback = ({ detailProduct, handleGetDetail }: any) => {
  const [listFeedback, setListFeedback] = useState<FeedbackType[]>([])
  const [numberStar, setNumberStar] = useState(NUMBER_STAR)
  const [errorStar, setErrorStar] = useState<any>()
  const [isOpenFeedback, setIsOpenFeedback] = useState(false)
  const [comment, setComment] = useState('')
  const [form] = Form.useForm()
  const params = useParams()
  const dispatch = useDispatch()
  const login = useSelector((state: any) => state.app.isLogin)

  // hàm lấy danh sách đánh giá sản phẩm
  const handleGetListEvaluate = () => {
    getListEvaluate(params?.id)
      .then((res) => {
        setListFeedback(res.data?.data)
      })
      .catch((error) => toast.error(error.response?.data?.message))
  }

  // hàm tạo đánh giá sản phẩm
  const sendPostEvaluate = (body: TypeEvaluate) => {
    const data = { comment: body.comment, product: params.id, numberStar }
    if (!errorStar && numberStar && comment) {
      sendEvaluate(data)
        .then((res) => {
          toast.success(res.data?.message)
          closeFeedback()
          handleGetListEvaluate()
          handleGetDetail()
          scrollToTop()
        })
        .catch((error) => {
          toast.error(error.response?.data?.message)
        })
    } else {
      setErrorStar(MESSAGE_PICK_STAR.MESSAGE)
    }
  }

  const closeFeedback = () => {
    setIsOpenFeedback(false)
    form.resetFields()
    setNumberStar(0)
    setErrorStar('')
    setComment('')
  }

  const handleRateChange = (value: number) => {
    setNumberStar(value)
    if (value === 0) {
      setErrorStar(MESSAGE_PICK_STAR.MESSAGE)
    } else {
      setErrorStar('')
    }
  }

  // hàm tính toán số lượng đánh giá
  const calculateStar = (star: number, listStar: TypeListStar) => {
    return star === 5
      ? listStar?.fiveStar
      : star === 4
      ? listStar?.fourStar
      : star === 3
      ? listStar?.threeStar
      : star === 2
      ? listStar?.twoStar
      : listStar?.oneStar
  }

  const openFeedback = () => setIsOpenFeedback(true)

  // hàm gửi yêu cầu đánh giá sp
  const handleSubmit = () => {
    if (login) {
      form.submit()
    } else {
      dispatch(isDialogLogin(true))
    }
  }

  useEffect(() => {
    handleGetListEvaluate()
  }, [])

  return (
    <div className={styles.CustomerFeedback}>
      <div>Phản hồi khách hàng</div>
      <div className={styles.feedback}>
        <div className={styles.animationFeedback}>
          <div className={styles.noFeedback}>
            <div>{detailProduct?.star}</div>
            <div>
              <StarProduct numberYellow={detailProduct?.star ?? 0} numberGray={5 - (detailProduct?.star ?? 0)} />
            </div>
            <div>{detailProduct?.totalEvaluate} phản hồi</div>
          </div>
          <div className={styles.starOder}>
            {dataStar.map((item: TypeDataStar, index: number) => {
              return (
                <div className={styles.reviewStar} key={index}>
                  <div className={styles.star}>
                    <div>{item?.numberStar}</div>
                    <div>
                      <img className={styles.iconStarYellow} src={imgStarYellow} />
                    </div>
                    <div className={styles.Crossbar}></div>
                    <div>{calculateStar(item?.numberStar, detailProduct?.listStar)}</div>
                  </div>
                </div>
              )
            })}
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
                <Form.Item name='comment' rules={validateComment} className={styles.formItemText}>
                  <TextArealInput
                    onChange={(e) => setComment(e.target.value)}
                    className={styles.textArea}
                    placeholder={PLACEHOLDER.ENTER_PRODUCT_REVIEW}
                    size='large'
                  />
                </Form.Item>
                <div className={styles.itemForm}>
                  <ButtonGeneral
                    disabled={(!comment && errorStar) || (!numberStar && !comment)}
                    size='large'
                    type='primary'
                    onClick={handleSubmit}
                    className={styles.btnSubmit}
                  >
                    Gửi đánh giá
                  </ButtonGeneral>
                </div>
              </Form>
            </div>
          </div>
        )}

        {/* item deatail feedback */}
        <div className={styles.itemDetailFeedback}>
          {listFeedback.map((item: FeedbackType) => {
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
