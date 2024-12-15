import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';

const Orders = () => {
    const {currency, products} = useContext(ShopContext);
  return (
    <div className='border-t pt-16'>
      
      <div className='text-2xl'>
        <Title title1={'MY'} title2={'ORDER'} />
      </div>

      <div className=''>
        {
            products.slice(1,4).map((item, index)=>(
                <div key={item} className='py-4 border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4' >
                    <div className='flex items-start gap-6 text-sm'>
                        <img src={item.image[0]} className='w-16 sm:w-20' />
                       
                       <div className='flex justify-between'>
                       <div>
                            <p className='sm:text-base font-medium'>{item.name}</p>
                            <div className='flex items-center gap-3 mt-2 text-base text-gray-800 '></div>
                                <p className='text-lg'>{currency}{item.price}</p>
                                <p>Quantity : 1</p>
                                <p>Size : M</p>
                                <p className='mt-2'>Date : <span className='text-gray-400 '>09 Jan, 2024</span></p>
                        </div>
                        <div className='md:w-1/2 flex justify-between'>
                       <div className='flex items-center gap-2'>
                        <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
                        <p className='text-sm md:text-base'>Ready to Ship</p>
                       </div>
                        </div>
                       </div>
                       
                    </div>
            
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default Orders;
