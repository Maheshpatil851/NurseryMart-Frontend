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
      className="group"
    >
      <img
        src={product?.imageUrl}
        alt={product?.name}
        className="aspect-square w-full rounded-lg bg-gray-200 object-cover transition duration-300 ease-in-out group-hover:scale-105 xl:aspect-[7/8]"
      />
      <h3 className="mt-4 text-sm text-gray-700 truncate transition duration-300 ease-in-out">
        {product?.name}
      </h3>
      <p className="mt-1 text-lg font-medium text-gray-900">
        ${product?.price}
      </p>
      <div className="flex items-center justify-between">
      

<span className="text-left flex items-center">
  {Array.from({ length: 5 }, (_, i) => {
    if (i < Math.floor(product?.rating)) {
      return <FaStar key={i} className="text-black" />;  // Full star
    }
    // If it's the next star and there's a decimal part (for half star)
    if (i === Math.floor(product?.rating) && product?.rating % 1 >= 0.5) {
      return <FaStarHalfAlt key={i} className="text-gray-700" />;  // Half star
    }
    // Empty star for all remaining
    return <FaRegStar key={i} className="text-gray-700" />;  // Empty star
  })}
  <span className="ml-1">{Math.round(product?.rating * 10) / 10}</span>
</span>


        {/* <div className="text-right">
                    <AddToCartBtn product={product} type={showDelCart ? 'delete' : 'add'} />
                </div> */}
      </div>
    </article>
  );
}
export default ProductCard;
