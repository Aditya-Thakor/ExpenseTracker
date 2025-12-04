import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ETRoutes from './routes/Routes.jsx'
import SignIn from './pages/signup&signin/SignIn.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ETRoutes/> 
  </StrictMode>,
)
