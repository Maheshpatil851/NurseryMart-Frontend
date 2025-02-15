import React, { useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CiShoppingCart } from "react-icons/ci";
import { Clear } from '../Features/CartSlice';
import CheckoutModal from '../Components/CheckOutModal';
import CartHeader from '../Components/CartHeader'; // New header component
import CartItemRow from '../Components/CartItemRow'; // New row component

function Cart() {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const { product } = useSelector(state => state.cart);
  const totalPrice = useMemo(() => {
    if (product.length === 0) return 0;
    return product.reduce((total, item) => total + item.price * item.quantity, 0);
  }, [product]);

  const handleClearCart = () => {
    dispatch(Clear());
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <div className="bg-white">
        {/* Header Component */}
        <CartHeader  />
        
        {/* Cart Items */}
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="space-y-4">
            {product.length > 0 ? (
              product.map(item => (
                <CartItemRow key={item.productId} item={item} />
              ))
            ) : (
              <div className="text-center py-8 text-lg text-gray-600">No items in cart</div>
            )}
          </div>
        </div>

        {/* Checkout Button */}
        {product.length > 0 && (
          <div className="flex justify-end mb-4 p-2">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-md hover:scale-105 transition-transform" onClick={toggleModal}>
              Checkout
            </button>
          </div>
        )}
      </div>

      {showModal && <CheckoutModal totalAmount={totalPrice} closeModal={toggleModal} />}
    </>
  );
}

export default Cart;
