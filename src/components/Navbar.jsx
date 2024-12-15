import React, { useContext, useState } from 'react'
import {assets} from '../img/assets'
import { Link, NavLink } from 'react-router-dom'
import Home from '../pages/Home'
import { ShopContext } from '../context/ShopContext'
const Navbar = () => {
  const [visibleMenuItems, setVisibleMenuItems] = useState(false);
  const {setShowSearch, getCartCount} = useContext(ShopContext)
  return (
    <div className='flex items-center justify-between py-5 font-medium'>
      <Link to="/" ><img src={assets.logo} className='w-36' /></Link>
      <ul className='hidden sm:flex gap-5 text-sm text-gray-800'>
        <NavLink to='/' className="flex flex-col items-center gap-1" >
            <p>HOME</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'></hr>
        </NavLink>
        <NavLink to='/collection' className="flex flex-col items-center gap-1" >
            <p>COLLECTIONS</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'></hr>
        </NavLink>
        <NavLink to='/contact' className="flex flex-col items-center gap-1" >
            <p>CONTACT</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'></hr>
        </NavLink>
        <NavLink to='/about' className="flex flex-col items-center gap-1" >
            <p>ABOUT</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'></hr>
        </NavLink>
      </ul>
      <div className='flex items-center gap-6'>
        <img onClick={()=>setShowSearch(true)} src={assets.search_icon} className='w-5 cursor-pointer ' />
        <div className='group relative'>
          <img src={assets.profile_icon} className='w-5 cursor-pointer' />
          <div className='hidden group-hover:block absolute dropdown-menu right-0 pt-4' >
              <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-600 rounded' >
                <div className=''>
                  <p className='cursor-pointer hover:text-black'>Profile</p>
                  <p className='cursor-pointer hover:text-black'>Orders</p>
                  <p className='cursor-pointer hover:text-black'>Logout</p>
                </div>
              </div>
          </div>
        </div>
        <Link to="/cart" className='relative'>
        <img src={assets.cart_icon} className='w-5 cursor-pointer min-w-5' />
        <p  className='absolute w-4 text-center right-[-5px] bottom-[-5px] leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
        </Link>
      {/* For Mobile Navigation Bar */}
      <img src={assets.menu_icon} onClick={()=>setVisibleMenuItems(true)}  className='w-5 cursor-pointer sm:hidden '/>
      </div>
      <div className={`${visibleMenuItems ? "w-full" : "w-0"} absolute bg-white top-0 right-0 bottom-0 overflow-hidden transition-all `}>
        <div className='flex flex-col text-gray-800'>
          <div className='flex items-center gap-4 p-3 ' onClick={()=>setVisibleMenuItems(false)}  >
            <img src={assets.dropdown_icon} className='h-4 rotate-180'/>
            <p>Back</p>
          </div>
          <NavLink onClick={()=>setVisibleMenuItems(false)} to="/" className="py-2 pl-6 border">Home</NavLink>
          <NavLink onClick={()=>setVisibleMenuItems(false)} to="/collection" className="py-2 pl-6 border">Collection</NavLink>
          <NavLink onClick={()=>setVisibleMenuItems(false)} to="/about" className="py-2 pl-6 border">About</NavLink>
          <NavLink onClick={()=>setVisibleMenuItems(false)} to="/contact" className="py-2 pl-6 border">Contact</NavLink>
        </div>
      </div>
    </div>
  )
}

export default Navbar
