import { combineReducers } from 'redux'
import AppSlice from '../appSlices'

const rootReducer = combineReducers({
  app: AppSlice // đây là reducer của app
})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer
