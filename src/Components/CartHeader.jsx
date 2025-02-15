import React, { useMemo } from 'react';
import { CiShoppingCart } from 'react-icons/ci';
import { useDispatch, useSelector } from 'react-redux';
import { Clear } from '../Features/CartSlice';

function CartHeader() {
  const dispatch = useDispatch();
  const { product } = useSelector(state => state.cart);

  // Calculate total price
  const totalPrice = useMemo(() => {
    return product.reduce((total, item) => total + item.price, 0);
  }, [product]);


  // Handle clearing the cart
  const handleClearCart = () => {
    dispatch(Clear());
  };

  return (
    <div className="flex flex-row items-center justify-between bg-gradient-to-r from-blue-500 to-purple-600 text-white py-6 px-8 rounded-lg shadow-lg transform transition-all ">
      <div className="flex items-center space-x-2  transform transition-all duration-300 hover:scale-105">
        <CiShoppingCart className="ml-2 text-white text-4xl animate-bounce" />
        <span className="text-3xl font-semibold">Cart</span>
      </div>

      <div className="space-y-2 text-center mt-3">
  {/* Total Items */}
  <div className="text-xl font-medium text-shadow-md  text-white">
    Total Items: {product.length}
  </div>

  {/* Total Price */}
  <div className="text-xl font-medium text-shadow-md  text-white">
    Total Price: {totalPrice} ₹
  </div>
</div>


      <button 
        onClick={handleClearCart} 
        className="mt-6 bg-gradient-to-r from-green-500 to-yellow-500 text-white px-8 py-3 rounded-md hover:bg-gradient-to-r hover:from-green-600 hover:to-yellow-600 transition duration-300 ease-in-out transform hover:scale-105"
      >
        Clear Cart
      </button>
    </div>
  );
}

export default CartHeader;
