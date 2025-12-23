import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/Navbar' 
import TransactionContextProvider from './context/Provider'

function App() { 

  return (
    // <TransactionContextProvider>
      <div className='flex bg-[#F5F8FF]'>
        <Navbar/>
        <Outlet/>
      </div>
    // </TransactionContextProvider>
  )
}

export default App
