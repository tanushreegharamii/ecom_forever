import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Contact from './pages/Contact'
import Collection from './pages/Collection'
import Cart from './pages/Cart'
import Product from './pages/Product'
import About from './pages/About'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Practice from './components/Practice';
import Orders from './components/Orders';
import PlaceOrder from './pages/PlaceOrder'


const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <ToastContainer/>
      <Navbar/>
      <SearchBar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/product/:productId' element={<Product/>} />
        <Route path='/collection' element={<Collection/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/practice' element={<Practice/>} />
        <Route path='/place-order' element={<PlaceOrder/>} />
        <Route path='/order' element={<Orders/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
