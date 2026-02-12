import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Another_one from './new1.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Another_one/>
  </StrictMode>
)
