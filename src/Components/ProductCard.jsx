import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import AddToCartBtn from "./AddToCartButton";

function ProductCard({ product, showDelCart }) {
  const navigate = useNavigate();

  function goToProductDetails(id) {
    navigate(`/productpage/${id}`);
  }

  return (
    <article
      onClick={() => goToProductDetails(product?.productId)}
      className="group border-2 border-gray-300 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:border-gray-400 p-4 relative pb-12"
    >
      <div className="relative w-full h-64">
        <img
          src={product?.imageUrl}
          alt={product?.name}
          className="w-full h-full rounded-t-lg object-cover object-center transition-all duration-300 ease-in-out transform hover:scale-105 hover:opacity-100 hover:shadow-xl"
        />
      </div>
      <h2 className="mt-4 text-lg font-semibold text-gray-700 truncate transition duration-300 ease-in-out">
        {product?.name}
      </h2>
      <p className="mt-1  text-lg font-medium text-gray-900">
        <span>
          {new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "INR",
          }).format(product?.price)}
        </span>
      </p>
      <div className="flex mb-1 items-center justify-between">
        <span className="text-left flex items-center">
          {Array.from({ length: 5 }, (_, i) => {
            if (i < Math.floor(product?.rating)) {
              return <FaStar key={i} className="text-black" />;
            }
            if (
              i === Math.floor(product?.rating) &&
              product?.rating % 1 >= 0.5
            ) {
              return <FaStarHalfAlt key={i} className="text-gray-700" />;
            }
            return <FaRegStar key={i} className="text-gray-700" />;
          })}
          <span className="ml-1">{Math.round(product?.rating * 10) / 10}</span>
        </span>
        
       

      </div>
      <div className="flex items-center justify-between text-right fixed bottom-2 left-2 right-2 z-10">
          <AddToCartBtn
            product={product}
            type={showDelCart ? "delete" : "add"}
            name={"Add to cart"}
          />
            <Link 
          to={`/purchase-order/${product?.productId}`} 
          className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-4 rounded-md hover:scale-105 transition-transform">
          Order
        </Link>
        </div>
    </article>
  );
}
export default ProductCard;
