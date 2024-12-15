import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../img/assets";
import RelatedProducts from "../components/RelatedProducts";
import Title from "../components/Title";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/slices/cartSlice";

const Product = () => {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);

  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [sizes, setSizes] = useState("");

  const fetchProductItem = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        console.log(item);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductItem();
  }, [productData]);
  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/*   Product Datas */}
      <div className="flex flex-col-reverse flex-1 sm:flex-row gap-3">
        <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] h-full ">
          {productData.image.map((item, index) => (
            <img
              onClick={() => setImage(item)}
              src={item}
              key={index}
              className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
            />
          ))}
        </div>
        <div className="w-full sm:w-[80%] h-auto">
          <img src={image} className="w-full  h-auto" />
        </div>
        {/*-------------------- Product Details --------------------- */}
        <div className="flex-auto">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="" className="w-3" />
            <img src={assets.star_icon} alt="" className="w-3" />
            <img src={assets.star_icon} alt="" className="w-3" />
            <img src={assets.star_icon} alt="" className="w-3" />
            <img src={assets.star_dull_icon} alt="" className="w-3" />
            <p className="pl-2">(99)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">
            {currency}
            {productData.price}
          </p>
          <p className="mt-5 text-gray-800 md:w-4/5">
            {productData.description}
          </p>
          <div className="flex flex-col gap-4 my-8">
            <p className="font-bold">Select Size</p>
            <div className="flex gap-2 ">
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSizes(item)}
                  className={`py-2 border px-4 bg-gray-100 ${
                    item === sizes ? "border-orange-400" : ""
                  }`}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button
            // onClick={() => dispatch(addCart({ id: productData._id, sizes }))}
            onClick={() => addToCart(productData._id, sizes)}
            className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700"
          >
            ADD TO CART
          </button>
          <hr className="mt-8 sm:w-4/5 " />
          <div className="text text-gray-500 mt-5 flex flex-col gap-1">
            <p> 100% Original Prouduct</p>
            <p> Easy Return and free shipping.</p>
            <p>Free exchange in 14 days easy return. </p>
          </div>
        </div>
      </div>
      {/* ------------------Description and review section ----------------- */}
      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">Description</b>
          <b className="border px-5 py-3 text-sm">Reviews(99)</b>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
            expedita voluptates asperiores a possimus. Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Ab, consequatur.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            non earum est voluptatem debitis? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Saepe voluptas a optio, dolore enim
            architecto accusantium fuga libero quisquam neque.
          </p>
        </div>
      </div>
      {/* --------------------- Display related Products ------------------ */}
      <div className="my-24">
        <div className="text-3xl text-center py-2">
          <Title title1={"Related"} title2={"Products"} />
        </div>
      </div>
      <div className="">
        <RelatedProducts
          category={productData.category}
          subCategory={productData.subCategory}
        />
      </div>
    </div>
  ) : (
    <div></div>
  );
};
export default Product;
