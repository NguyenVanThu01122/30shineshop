import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import { applyMiddleware, compose, createStore } from 'redux'
import App from './App'
import './index.css'
import { rootReducer } from './redux/reducers'
import myStore from './redux/store'

// const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
// const myStore = createStore(rootReducer, composeEnhancers(applyMiddleware()))
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <Provider store={myStore}>
    <ToastContainer />
    <App />
  </Provider>
  
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
