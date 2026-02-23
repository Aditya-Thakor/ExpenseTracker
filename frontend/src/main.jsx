import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ETRoutes from './routes/Routes.jsx'
import { TransactionProvider } from './context/transactionContext/TransactionContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <TransactionProvider>
      <ETRoutes/> 
   </TransactionProvider>
   
  </StrictMode>
)
