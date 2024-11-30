import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItems from './ProductItems'

const LatestCollections = () => {
  const {products} = useContext(ShopContext);
  const [getProducts, setGetProducts] = useState([]);
  useEffect(()=>{
    setGetProducts(products.slice(0,10))
  }, [])
  console.log(products)
  return (
    <div className='my-10'>
      <div className='text-center py-3 text-3xl'>
        <Title title1={'Latest'} title2={'Collections'} />
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, quidem.</p>
      </div>
      {/* Redndering Products */}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 gap-y-6'>
        {getProducts.map((item, index)=>(
          <ProductItems key={index} id={item._id} name={item.name} price={item.price} image={item.image} />
        ))}
      </div>
    </div>
  )
}

export default LatestCollections
