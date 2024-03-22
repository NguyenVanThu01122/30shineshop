import { configureStore } from '@reduxjs/toolkit'
import rootReducer from '../Slices/rootReducer'

const store = configureStore({
  reducer: rootReducer // đây là reducer của app
})
export default store
