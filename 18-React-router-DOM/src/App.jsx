// import { Route } from 'lucide'
import React from 'react'
import Home from "./pages/Home.jsx"
import { Route, Routes } from 'react-router-dom'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Navbar from './components/Navbar.jsx'
import Product from './pages/Product.jsx'



const App = () => {
  return (
    <div>
      <Navbar/>
     <Routes>
 <Route path='/' element={<Home/>}/>
 <Route path='/About' element={<About/>}/>
 <Route path='/Contact' element={<Contact/>}/>
 <Route path='/Product' element={<Product/>}/>


     </Routes>
    </div>
  )
}

export default App
