import { combineReducers } from 'redux'
import appSlice from '../appSlices'

const rootReducer = combineReducers({
  app: appSlice // đây là reducer của app
})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer
