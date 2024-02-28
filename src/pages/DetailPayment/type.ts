export interface ProductType {
  amount: number
  id: string
  image: string
  name: string
  price: number
}
export interface DetailPaymentType {
  deliveryPrice?: number
  products?: ProductType[]
  totalOriginPrice?: number
  totalPrice?: number
}

export interface FormValuesType {
  name: string
  email: string
  phone: string
  address: string
}
