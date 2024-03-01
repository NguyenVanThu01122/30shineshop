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
  count: number
  products: ProductResultType[]
  totalCart: number
  user: UserType
  listOrder: OrderItemType[]
  keywordSearch: string
  productSearch: ProductResultType[]
  isLoading: boolean
}

interface ActionType {
  type: string
  payload: any
}

const initialState: InitialStateType = {
  count: 0,
  products: [],
  totalCart: 0,
  user: {},
  listOrder: [],
  productSearch: [],
  keywordSearch: '',
  isLoading: false
}

const handleReducer = (state: InitialStateType = initialState, action: ActionType) => {
  switch (action.type) {
    case 'INCREASE':
      return {
        ...state,
        count: state.count + 1
      }
    case 'DECREASE':
      if (state.count > 0) {
        return {
          ...state,
          count: state.count - 1
        }
      } else {
        return {
          ...state
        }
      }
    case 'ADD_LIST_PRODUCT':
      return {
        ...state,
        products: action.payload
      }
    case 'SAVE_DETAIL_PRODUCT':
      return {
        ...state,
        detailProduct: action.payload
      }
    case 'SAVE_TOTAL_CART':
      return {
        ...state,
        totalCart: action.payload
      }
    case 'UPDATE_ACCOUNT':
      return {
        ...state,
        user: action.payload
      }
    case 'ADD_LIST_ORDER':
      return {
        ...state,
        listOrder: action.payload
      }

    case 'SAVE_KEYWORD_SEARCH':
      return {
        ...state,
        keywordSearch: action.payload
      }

    case 'SAVE_PRODUCT_SEARCH':
      return {
        ...state,
        productSearch: action.payload
      }
    case 'SAVE_IS_lOADING':
      return {
        ...state,
        isLoading: action.payload
      }
    default:
      return state
  }
}
export default handleReducer
