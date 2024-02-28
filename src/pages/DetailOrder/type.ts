export interface AddressType {
  name: string
  phone: string
  email: string
  detailAddress: string
}

export interface ProductType {
  id: string
  image: string
  name: string
  amount: number
  price: number
}

export interface TimelineDetailItemType {
  timeUpdate: string // ISO date string
  status: string
}

export interface OrderDetailType {
  address: AddressType
  timelineDetail: TimelineDetailItemType[]
  products: ProductType[]
  totalOriginPrice: number
  deliveryPrice: number
  totalPrice: number
  status: string
  methodPayment: string
}
