import React from 'react'
import { assets } from '../img/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex mb-6 flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 mt-40 text-sm'>
        <div className=''>
            <img src={assets.logo} className='mb-5 w-32' />
            <p className='w-full md:w-2/3 text-gray-400'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum ad voluptate tempore mollitia illum.
            </p>
        </div>
        <div className=''>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>ABOUT</li>
                <li>DELIVERY</li>
                <li>PRIVACY POLICY</li>
            </ul>
        </div>
        <div className=''>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+1 657 2929</li>
                <li>tanushree@gmail.com</li>
            </ul>
        </div>
        </div>
        <div>
            <hr/>
            <p className='py-5 text-sm text-center'>Copyright 2024@ shop9.com All Right Reserved</p>
        </div>
    </div>
  )
}

export default Footer
