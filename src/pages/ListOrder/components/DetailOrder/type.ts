export interface ProductType {
  name: string
  image: string
  amount: number
  price: number
}

export interface OrderItemType {
  _id: string
  status: string
  products: ProductType[]
  totalPrice: number
}

export interface ComponentDetailOrderProps {
  listStatusOrder: OrderItemType[]
  orderStatusCommon: (status: string) => string
  colorStatus: (status: string) => string
}
