import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ETRoutes from './routes/Routes.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   
      <ETRoutes/> 
   
  </StrictMode>
)
