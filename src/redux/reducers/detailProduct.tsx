const initalState = {
  count: 0,
  products: [],
  totalCart: 0,
  user: {},
  listOrder: []
}

const handleReducer = (state = initalState, action: { type: string; payload: any }) => {
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
