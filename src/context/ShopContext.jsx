import { createContext, useEffect, useState } from "react";
import { products } from "../img/assets";
import { toast } from "react-toastify";


export const ShopContext = createContext();

const ShopContextProvider = (props) =>{
    const currency = "$";
    const delevery_fee = 10;
    const[search, setSearch] = useState(''); 
    const [showSearch, setShowSearch] = useState(false);
    const [cartsItems, setCartsItems] = useState({});

    const addToCart = (itemId, size) => {

        if(!size){
            toast.error("Please Select The Size")
            return;
        }
        // creating a copy of cartItems state
        let cartData = structuredClone(cartsItems);

        if(cartData[itemId]){ // if cartData have any property like itemId then -
            if(cartData[itemId][size]){ //if any cartItem has product with itemId & size then - increase product entry by 1
               cartData[itemId][size] += 1;
            }
            else{ // if we have product entry but don't have product entry with same size - then create new entry
                cartData[itemId][size] = 1;
            }
        }
        else{ // if in above cartData we don't have any entry with this particular itemId - then will craete a new entry
            cartData[itemId] = {}; 
            cartData[itemId][size] = 1;
        }
        setCartsItems(cartData); // saving these cartData in cartItems state
    }

    useEffect(()=>{
        console.log(cartsItems)
    }, [cartsItems])

    // cart items inacreasing function 
    const getCartCount = () =>{
        let totalCount = 0;
        for(const items in cartsItems){ // iterate the items
            for (const item in cartsItems[items]){ // iterate the product size 
                try {
                    if(cartsItems[items][item] > 0 ){// if in cartItem we have the product with particular size
                        totalCount += cartsItems[items][item]; // increase the totalCount by the product quantity

                    }
                } catch (error) {
                    
                }

            }
        }
        return totalCount;
    }

    //*********// 
    const values = {
        products, currency, delevery_fee, search,setSearch, showSearch, setShowSearch, cartsItems, addToCart, getCartCount
    }
    return (
       <ShopContext.Provider value={values}>
        {props.children}
       </ShopContext.Provider>
    )
}
export default ShopContextProvider;