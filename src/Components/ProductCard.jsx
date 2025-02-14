import React from "react";
import { useNavigate } from "react-router-dom";
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

function ProductCard({ product, showDelCart }) {
  const navigate = useNavigate();

  function goToProductDetails(id) {
    navigate(`/productpage/${id}`);
  }

  return (
    <article
  onClick={() => goToProductDetails(product?.productId)}
  className="group border-2 border-gray-300 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:border-gray-400 p-4"
>
  <div className="relative w-full h-64">
    <img
      src={product?.imageUrl}
      alt={product?.name}
      className="w-full h-full rounded-t-lg object-cover object-center transition duration-300 ease-in-out"
    />
  </div>
  <h2 className="mt-4 text-sm text-gray-700 truncate transition duration-300 ease-in-out">
    {product?.name}
  </h2>
  <p className="mt-1 text-lg font-medium text-gray-900">
    ${product?.price}
  </p>
  <div className="flex items-center justify-between">
    <span className="text-left flex items-center">
      {Array.from({ length: 5 }, (_, i) => {
        if (i < Math.floor(product?.rating)) {
          return <FaStar key={i} className="text-black" />;
        }
        if (i === Math.floor(product?.rating) && product?.rating % 1 >= 0.5) {
          return <FaStarHalfAlt key={i} className="text-gray-700" />;
        }
        return <FaRegStar key={i} className="text-gray-700" />;
      })}
      <span className="ml-1">{Math.round(product?.rating * 10) / 10}</span>
    </span>
  </div>
</article>

  

  );
}
export default ProductCard;
