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

export { addListProduct, decrease, increase, saveDetailProduct }
