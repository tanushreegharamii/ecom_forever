import { useEffect, useState } from "react";
// import { ShopContext } from "../context/ShopContext";
import ProductItems from "../components/ProductItems";
import { useSelector } from "react-redux";
import { products } from "../img/assets";

const Cart = () => {
  // const { products, currency, cartItems } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);
  const { cartItems } = useSelector((state) => state.cart);
  console.log("cart", cartItems);

  // useEffect(() => {
  //   const tempData = [];
  //   for (const items in cartItems) {
  //     for (const item in cartItems[items]) {
  //       if (cartItems[items][item] > 0) {
  //         tempData.push({
  //           _id: items,
  //           size: item,
  //           quantity: cartItems[items][item],
  //         });
  //       }
  //     }
  //   }
  //   setCartData(tempData);
  //   console.log(tempData);
  // }, [cartItems]);

  useEffect(() => {
    (() => {
      console.log("products", products);
    })();
  }, [cartItems]);

  return (
    <div>
      {cartData.map((index, item) => (
        <ProductItems
          key={index}
          name={item.name}
          image={item.image}
          price={item.price}
        />
      ))}
    </div>
  );
};

export default Cart;
