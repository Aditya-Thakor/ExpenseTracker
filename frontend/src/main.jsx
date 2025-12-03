import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ETRoutes from './routes/Routes.jsx'
import Demo from './components/model-pop/Demo.jsx'
import AddTransaction from './components/model-pop/AddTransaction.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <ETRoutes/> */}
    <AddTransaction/>
  </StrictMode>,
)
