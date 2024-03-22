import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface ProductResultType {
  id?: number
  name?: string
  image?: string
  salePrice?: number
  originPrice?: number
  star?: number
}
export interface UserType {
  name?: string
  phone?: number
  email?: string
  birthday?: string
}

export interface OrderItemType {
  _id: string
  status: string
  products: ProductResultType[]
  totalPrice: number
}

interface InitialStateType {
  products: ProductResultType[] | []
  relateProducts: ProductResultType[]
  totalCart: number
  user: UserType
  listOrder: OrderItemType[]
  keywordSearch: string
  productSearch: ProductResultType[] | []
  isLoading: boolean
  isLogin: boolean
  isDialogLogin: boolean
}

const initialState: InitialStateType = {
  products: [],
  relateProducts: [],
  totalCart: 0,
  user: {},
  listOrder: [],
  productSearch: [],
  keywordSearch: '',
  isLoading: false,
  isLogin: false,
  isDialogLogin: false
}

// createSlice này sẽ được sử dụng để tạo ra các action và reducer cho app
const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    addListProduct: (state, action: PayloadAction<ProductResultType[]>) => {
      state.products = action.payload
    },
    saveTotalCart: (state, action: PayloadAction<number>) => {
      state.totalCart = action.payload
    },
    saveUser: (state, action: PayloadAction<UserType>) => {
      state.user = action.payload
    },
    addListOrder: (state, action: PayloadAction<OrderItemType[]>) => {
      state.listOrder = action.payload
    },
    saveKeywordSearch: (state, action: PayloadAction<string>) => {
      state.keywordSearch = action.payload
    },
    saveProductSearch: (state, action: PayloadAction<ProductResultType[] | []>) => {
      state.productSearch = action.payload
    },
    saveIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    },
    saveRelateProducts: (state, action: PayloadAction<ProductResultType[]>) => {
      state.relateProducts = action.payload
    },
    isLogin: (state, action: PayloadAction<boolean>) => {
      state.isLogin = action.payload
    },
    isDialogLogin: (state, action: PayloadAction<boolean>) => {
      state.isDialogLogin = action.payload
    }
  }
})
export const {
  addListProduct,
  saveTotalCart,
  saveUser,
  addListOrder,
  saveKeywordSearch,
  saveProductSearch,
  saveIsLoading,
  saveRelateProducts,
  isLogin,
  isDialogLogin
} = appSlice.actions

export default appSlice.reducer
