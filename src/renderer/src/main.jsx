import './assets/main.css'

import { StrictMode, createContext, useContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import LoginForm from './LoginForm'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
      <App />
  </StrictMode>
)
