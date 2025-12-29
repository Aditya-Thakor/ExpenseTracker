import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ETRoutes from './routes/Routes.jsx'
import SignIn from './pages/signup&signin/SignIn.jsx'  //demo removed by adi-codespace
import FancyChart from './components/charts/Demo2.jsx'
import AddTransaction from './components/addTransactions/AddTransaction.jsx'
import TransactionContextProvider from './context/Provider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   
      <ETRoutes/> 
   
    {/* <AddTransaction/> */}
  </StrictMode>
)
