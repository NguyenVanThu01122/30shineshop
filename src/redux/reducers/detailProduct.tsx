const initalState = {
  count: 0,
  products: [],
  detailProduct: {}
  // relateProduct: []
}

const handleReducer = (state = initalState, action: any) => {
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
    // case 'RELATE_PRODUCT':
    //     return {
    //       ...state,
    //       relateProduct: action.payload
    //     }
    case 'SAVE_DETAIL_PRODUCT':
      return {
        ...state,
        detailProduct: action.payload
      }
    default:
      return state
  }
}
export default handleReducer;
