import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { MenuMobileProvider } from "./context/MenuMobileContext";


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <MenuMobileProvider>
    <App />
  </MenuMobileProvider>
</StrictMode>,
)
