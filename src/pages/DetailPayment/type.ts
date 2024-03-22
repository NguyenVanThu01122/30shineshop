export interface ProductType {
  amount: number
  id: string
  image: string
  name: string
  price: number
}
// export interface DetailPaymentType {
//   deliveryPrice?: number
//   products?: ProductType[]
//   totalOriginPrice?: number
//   totalPrice?: number
// }

export interface FormValuesType {
  name: string
  email: string
  phone: string
  address: string
}


export interface AddressType {
  name: string;
  email: string;
  phone: string;
  detailAddress: string;
}

export interface DetailPaymentType {
  paymentId: string;
  address: AddressType;
  noteOrder: string;
  timeDelivery: Date; 
  methodPayment: string;
}
