import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItems from './ProductItems';

const BestSeller = () => {
    const {products} = useContext(ShopContext);
    const [bestseller, setBestSeller] = useState([]);

    useEffect(()=>{
        const bestProducts = products.filter((item)=>(item.bestseller));
        setBestSeller(bestProducts.slice(0,5));
        console.log("bestProducts", bestProducts)
    },[])
  return (
    <div className='my-10'>
      <div className='text-center text-3xl py-8'>
        <Title title1={'BEST'}  title2={'SELLERS'}/>
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, deleniti!</p>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 gap-y-6'>
        {bestseller.map((item, index)=>(
          <ProductItems key={index} id={item._id} name={item.name} price={item.price} image={item.image} />
        ))}
      </div>
    </div>
  )
}

export default BestSeller
