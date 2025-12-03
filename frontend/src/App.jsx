import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/Navbar' 

function App() { 

  return (
    <div className='flex bg-[#F5F8FF]'>
       <Navbar/>
       <Outlet/>
    </div>
  )
}

export default App
