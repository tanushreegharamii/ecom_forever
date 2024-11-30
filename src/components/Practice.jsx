import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import ProductItems from './ProductItems';

const Practice = () => {

    const [category, setCategory] = useState([]);
    const [filterProducts, setFilterProducts] = useState([]);
    const {products} = useContext(ShopContext);
  
    const toggleCategory = (e) =>{
      if(category.includes(e.target.value)){
        setCategory(prev=> prev.filter(item=> item !== e.target.value))
      }
      else{
        setCategory(prev=> [...prev, e.target.value]);
      }
    };

    
    const applyFilter = () => {
      let productsCopy = products.slice();
      if(category.length > 0){
        productsCopy = productsCopy.filter(item=> category.includes(item.category))
      }
      setFilterProducts(productsCopy)
    }

    useEffect(()=>{
      applyFilter()
    }, [category])

  return (
    <div>
    
    {/* FILTERS */}
    <label htmlFor='filter'>Men:</label>
    <input type='checkbox' value={'Men'} name='filter' onChange={toggleCategory} /><br/>
    <label htmlFor='filter'>Women:</label>
    <input type='checkbox' value={'Women'} name='filter' onChange={toggleCategory} /><br/>
    <br></br>



      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
      {/* {
        getProducts.map((product, index)=>(
          <ProductItems key={index} name={product.name} image={product.image} id={product.id} />
        ))
      } */}
      {
        filterProducts.map((item, index)=>(
          <ProductItems name={item.name} image={item.image} price={item.price} />
        ))
      }
      </div>
    </div>
  )
}

export default Practice;













































































// import React, { useContext, useEffect, useState } from 'react'
// import { ShopContext } from '../context/ShopContext';
// import ProductItem from './ProductItems';

// const Practice = () => {
//   const {products} = useContext(ShopContext);
//   const [filteredProducts, setFilterProducts] = useState([]);
//   const [category, setCategory] = useState([]);

//   const toggleCategory = (e) => {
//     if(category.includes(e.target.category)){
//       setCategory(prevArray=> prevArray.filter((item)=> {item !== e.target.value}))
//     }
//     setCategory(prevArray=> [...prevArray, e.target.value])
//   };

//   const applyFilter = (e) => {
//     let productsCopy = products.slice();
//     if(category.length > 0){
//       productsCopy = productsCopy.filter((item)=> {category.includes(item.category)})
//     }
//     setFilterProducts(productsCopy)
//   };

//   useEffect(()=>{
//     applyFilter();
//   },[category])
 

  /////////////////////
    // useEffect(() => {
    //   const socket = new WebSocket('wss://example.com/socket');
  
    //   socket.onmessage = (event) => {
    //     setMessages((prev) => [...prev, event.data]);
    //   };
  
    //   return () => socket.close(); // Cleanup
    // }, []);




  //   useEffect(()=>{
  //     let interval;
  //     if(isRunning){
  //         interval = setInterval(()=>setTime((prev)=> prev +1), 1000)
  //         console.log("rendered")
  //     }
  //     return () => clearInterval(interval);
  // },[isRunning]);

  // const timer = ()=> setIsRunning((prev)=> !prev);



//   return (
//     <div>
  // {/* Add your own functionality here */}
  // <p>Timer:{time}s</p><br></br>
  // <button onClick={timer}>{isRunning? "Stop" : "Start"}</button><br></br>
  // <button onClick={()=>{setTime(0); stopTimer()}} >Reset</button><br></br>

//       <h1 className='text-2xl'>Filter Products</h1>
//       <label>Women</label>
//       <input type='checkbox' onChange={toggleCategory} value={'Women'} /><br/>
//       <label>Men</label>
//       <input type='checkbox' onChange={toggleCategory} value={'Men'} /><br/>
//       <label>Kids</label>
//       <input type='checkbox' onChange={toggleCategory} value={'Kids'} /><br/>
//      <div className=" grid sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 ">
//      {
//         filteredProducts.map((item, index)=>(
//           <ProductItem key={index} id={item.id}  name={item.name} image={item.image}/>
//         ))
//       }
//      </div>
//     </div>
//   );
// };

// export default Practice;
