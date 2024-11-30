import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../img/assets';
import Title from '../components/Title';
import ProductItems from '../components/ProductItems';

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);

  const[sortType, setSortType] = useState('relevant');

  // Log products to ensure they are populated correctly
  useEffect(() => {
    console.log("Products:", products);
  }, [products]);

  // Toggle function for category
  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory(prev => prev.filter(item => item !== e.target.value));
    } else {
      setCategory(prev => [...prev, e.target.value]);
    }
  };

  // Toggle function for subCategory
  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory(prev => prev.filter(item => item !== e.target.value));
    } else {
      setSubCategory(prev => [...prev, e.target.value]);
    }
  };

  // Filter function that applies category and sub-category filters
  const applyFilter = () => {
    let productsCopy = products.slice();
    if(search && showSearch){
      productsCopy = productsCopy.filter(item=> item.name.toLowerCase().includes(search.toLowerCase()))
    };
    if (category.length > 0) {
      console.log("Category Filter:", category);
      productsCopy = productsCopy.filter(item => category.includes(item.category));
    }
    
    if (subCategory.length > 0) {
      console.log("SubCategory Filter:", subCategory);
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory));
    }
    setFilterProducts(productsCopy);
  };

  // Run applyFilter whenever category or subCategory changes
  useEffect(() => {
    applyFilter();
  },[category, subCategory, search, showSearch]);

  // Initial load of products when products data is available
  useEffect(() => {
    setFilterProducts(products);
  }, [products]);


  // sort products
  const sortProducts = (e) => {
    let filterProductCopy = filterProducts.slice();
    switch(sortType){
      case "low-high" :
        setFilterProducts(filterProductCopy.sort((a,b)=>(a.price - b.price)));
        break;

      case "high-low" :
        setFilterProducts(filterProductCopy.sort((a,b)=>(b.price - a.price)));
          break;

        default:
          applyFilter();
          break;
      }
  }
  useEffect(()=>{
    sortProducts()
  },[sortType]);
  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/* Filter Options */}
      <div className='min-w-60'>
        <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>
          FILTER
           {/* Category filter - Mobile */}
          <img className={`${showFilter ? 'rotate-90' : ''} h-3 sm:hidden `} src={assets.dropdown_icon} />
        </p>
        <div className={`border ${showFilter ? '' : 'hidden'} border-gray-700 pl-5 py-3 mt-6 sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORY</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input type='checkbox' className='w-3' onChange={toggleCategory} value={'Men'} /> MEN
            </p>
            <p className='flex gap-2'>
              <input type='checkbox' className='w-3' onChange={toggleCategory} value={'Women'} /> WOMEN
            </p>
            <p className='flex gap-2'>
              <input type='checkbox' className='w-3' onChange={toggleCategory} value={'Kids'} /> KIDS
            </p>
          </div>
        </div>
        {/* Sub Category Filter */}
        <div className={`border ${showFilter ? '' : 'hidden'} border-gray-700 pl-5 py-3 my-6 sm:block`}>
          <p className='mb-3 text-sm font-medium'>TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input type='checkbox' className='w-3' onChange={toggleSubCategory} value={'Topwear'} /> Topwear
            </p>
            <p className='flex gap-2'>
              <input type='checkbox' className='w-3' onChange={toggleSubCategory} value={'Bottomwear'} /> Bottomwear
            </p>
            <p className='flex gap-2'>
              <input type='checkbox' className='w-3' onChange={toggleSubCategory} value={'Winterwear'} /> Winterwear
            </p>
          </div>
        </div>
      </div>
      {/* Right Side */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title title1={'ALL'} title2={'COLLECTIONS'} />
          {/* Product Sort */}
          <select onChange={(e)=>setSortType(e.target.value)} className='border border-gray-400 text-sm px-2'>
            <option value="relevent">Sort By : Relevant</option>
            <option value="low-high">Sort By : Low to High</option>
            <option value="high-low">Sort By : High to Low</option>
          </select>
        </div>
        {/* Map Products */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {filterProducts.map((item, index) => (
            <ProductItems key={index} name={item.name} id={item._id} image={item.image} price={item.price} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Collection;
