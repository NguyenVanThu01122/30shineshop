interface Product {
  // Định nghĩa các thuộc tính của một sản phẩm ở đây
}

interface User {
  // Định nghĩa các thuộc tính của một người dùng ở đây
}

interface Order {
  // Định nghĩa các thuộc tính của một đơn hàng ở đây
}

interface InitialStateType {
  count: number
  products: Product[]
  totalCart: number
  user: User
  listOrder: Order[]
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
  listOrder: []
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
    default:
      return state
  }
}
export default handleReducer
