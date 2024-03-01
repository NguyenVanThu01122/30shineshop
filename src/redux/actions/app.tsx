const increase = () => {
  return {
    type: 'INCREASE'
  }
}
const decrease = () => {
  return {
    type: 'DECREASE'
  }
}

const addListProduct = (payload: string) => {
  return {
    type: 'ADD_LIST_PRODUCT',
    payload
  }
}

const saveDetailProduct = (payload: any) => {
  return {
    type: 'SAVE_DETAIL_PRODUCT',
    payload
  }
}
const saveTotalCart = (payload: number) => {
  return {
    type: 'SAVE_TOTAL_CART',
    payload
  }
}
const updateAccount = (payload: any) => {
  return {
    type: 'UPDATE_ACCOUNT',
    payload
  }
}
const addListOrder = (payload: any) => {
  return {
    type: 'ADD_LIST_ORDER',
    payload
  }
}
const saveKeywordSearch = (payload: string) => {
  return {
    type: 'SAVE_KEYWORD_SEARCH',
    payload
  }
}
const saveProductSearch = (payload: any) => {
  return {
    type: 'SAVE_PRODUCT_SEARCH',
    payload
  }
}
const saveIsLoading = (payload: any) => {
  return {
    type: 'SAVE_IS_lOADING',
    payload
  }
}

export {
  addListOrder,
  addListProduct,
  decrease,
  increase,
  saveDetailProduct,
  saveKeywordSearch,
  saveProductSearch,
  saveTotalCart,
  updateAccount,
  saveIsLoading
}
