// store.ts
import { applyMiddleware, compose, createStore, Middleware } from 'redux'
import { rootReducer } from '../reducers'

// Tạo biến composeEnhancers để kết hợp các middleware với Redux DevTools Extension (nếu có)
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// Middleware Redux để lưu trạng thái vào localStorage
const saveStateMiddleware: Middleware = (store) => (next) => (action) => {
  // Gọi hàm next(action) để chuyển tiếp action đến middleware hoặc reducer tiếp theo trong chuỗi middleware
  const result = next(action)
  // Lưu trạng thái mới của Redux store vào localStorage dưới dạng chuỗi JSON
  localStorage.setItem('reduxState', JSON.stringify(store.getState()))
  // Trả về kết quả của hàm next(action) (action đã được chuyển tiếp đến middleware hoặc reducer)
  return result
}

// Tạo store Redux với rootReducer, trạng thái khởi tạo từ localStorage và các middleware
const myStore = createStore(
  rootReducer, // Reducer chính của ứng dụng
  JSON.parse(localStorage.getItem('reduxState') || '{}'), // Trạng thái ban đầu của Redux store được khởi tạo từ localStorage
  composeEnhancers(applyMiddleware(saveStateMiddleware)) // Kết hợp các middleware và Redux DevTools Extension (nếu có)
)

// Xuất store Redux để sử dụng trong ứng dụng
export default myStore
