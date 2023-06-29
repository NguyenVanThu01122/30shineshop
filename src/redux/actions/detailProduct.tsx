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

const addListProduct =(payload:any)=>{
  return{
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
// const relateProduct =(payload:any)=>{
//   return{
//     type: 'RELATE_PRODUCT',
//     payload
//   }
// }

export { decrease, increase,addListProduct, saveDetailProduct}
