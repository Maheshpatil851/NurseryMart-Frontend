import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {removeItemFromCart}  from '../Features/CartSlice'

function CartItemRow({ item }) {
  const dispatch = useDispatch();

  const  handleRemove = async (id) => {
    console.log(id);
     await dispatch(removeItemFromCart(id));
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between bg-gray-50 border border-gray-300 p-6 rounded-md shadow-lg space-y-4 sm:space-y-0 sm:space-x-6">
      {/* Product Image and Name */}
      <div className="flex items-center space-x-6">
        <img src={item.imageUrl} alt={item.name} className="w-24 h-24 object-cover rounded-md" />
        <span className="text-2xl font-semibold text-gray-700">{item.name}</span>
      </div>

      {/* Price Details */}
      <div className="flex flex-col space-y-2 text-lg text-gray-700">
        <div className="flex justify-between">
          <span className="font-medium">Actual Price:</span>
          <span>{item.price} ₹</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Discount Price:</span>
          <span>{item.discount || 0} ₹</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Total Price:</span>
          <span className="font-semibold">{(item.price - (item.discount || 0)) * item.quantity} ₹</span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex space-x-4">
        {/* Remove Button */}
        <button 
          onClick={() => handleRemove(item?.productId)} 
          className="bg-red-500 text-white py-2 px-4 rounded-md hover:scale-105 transition-transform">
          Remove
        </button>

        {/* Order Button */}
        <Link 
          to={`/purchase-order/${item.productId}`} 
          className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-4 rounded-md hover:scale-105 transition-transform">
          Order
        </Link>
      </div>
    </div>
  );
}

export default CartItemRow;
