import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { assets } from "../img/assets";
import CartTotal from "../components/CartTotal";
// import { useSelector } from "react-redux";

const Cart = () => {
  const { products, currency, cartsItems, updateQuantity, navigate } =
    useContext(ShopContext);
  const [cartData, setCartData] = useState([]);
  // const { cartItems } = useSelector((state) => state.cart);
  // console.log("cart", cartItems);

  useEffect(() => {
    const tempData = [];
    for (const items in cartsItems) {
      for (const item in cartsItems[items]) {
        if (cartsItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartsItems[items][item],
          });
        }
      }
    }
    setCartData(tempData);
    console.log(tempData);
  }, [cartsItems]);

  // useEffect(() => {
  //   (() => {
  //     console.log("products", products);
  //   })();
  // }, [cartItems]);

  // useEffect(() => {
  //   const tempData = [];
  //   for (const items in cartsItems) {
  //     for (const item in cartsItems[items]) {
  //       if (cartsItems[items][item] > 0) {
  //         tempData.push({
  //           _id: items,
  //           size: item,
  //           quantity: cartsItems[items][item],
  //         });
  //       }
  //     }
  //   }
  //   setCartData(tempData);
  //   console.log("tempData", tempData);
  // }, [cartsItems]);
  return (
    <div className="border-t pt-14">
      <div className="text-2xl mb-3">
        <Title title1={"YOUR"} title2={"CART"} />
      </div>
      <div>
        {cartData.map((item, index) => {
          const productData = products.find(
            (product) => product._id === item._id
          );
          return (
            <div
              key={index}
              className="py-4 border-t border-b text-gray-700 gird grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
            >
              <div className="flex items-start gap-6">
                <img
                  className="w-16 sm:w-20"
                  src={productData.image[0]}
                  alt=""
                />
                <div className="">
                  <p className="text-xs sm:text-lg font-medium">
                    {productData.name}
                  </p>
                  <div className="flex items-center gap-5 mt-2">
                    <p>
                      {currency}
                      {productData.price}
                    </p>
                    <p className="px-2  sm:px-3 sm:py-1 bg-slate-50">
                      {item.size}
                    </p>
                  </div>
                </div>
                <input
                  min={1}
                  defaultValue={item.quantity}
                  onChange={(e) =>
                    e.target.value === "" || e.target.value === "0"
                      ? null
                      : updateQuantity(
                          item._id,
                          item.size,
                          Number(e.target.value)
                        )
                  }
                  type="number"
                  className="border max-w-10 sm:max-w-20 sm:px-2 py-1"
                />
                <img
                  onClick={() => updateQuantity(item._id, item.size, 0)}
                  src={assets.bin_icon}
                  className="w-4 mr-4 cursor-pointer"
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-end my-20">
        <div className="w-full sm:w-[450px]">
          <CartTotal />
          <div className="w-full text-end">
            <button
              onClick={() => navigate("/place-order")}
              className="bg-black text-white text-sm my-8 px-8 py-3"
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
