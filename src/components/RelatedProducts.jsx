import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import ProductItems from './ProductItems'

const RelatedProducts = ({category, subCategory}) => {
    const {products} = useContext(ShopContext);
    const [relatedProducts, setRelatedProducts] = useState([]);

    useEffect(()=>{
        let productsCopy = products.slice();
        if(products.length > 0){
            productsCopy = productsCopy.filter((item)=> category === item.category)
            productsCopy = productsCopy.filter((item)=> subCategory === item.subCategory)
            setRelatedProducts(productsCopy)
            console.log(productsCopy.slice(0,10))
        }
    }, [products])

  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 mt-10 gap-4'>
      {
        relatedProducts.map((item, index)=> (
            <ProductItems key={index} id={item._id} name={item.name} price={item.price} image={item.image} />
        ))
      }
      
    </div>
  )
}

export default RelatedProducts
