import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ProductFeatures from "../Components/ProductFeatures";
import { CreateOrder } from '../Features/OrderSlice';
import PurchaseForm from '../Components/PurchaseForm'; 

function OrderPage() {
  const { productId } = useParams();
  const { product } = useSelector((state) => state.cart);
  const item = product.find((p) => p.id === productId);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const handlePlaceOrder = async (data) => {
    console.log("Order Data:", data);
    data.quantity = quantity;
    await dispatch(CreateOrder(data));
  };

  const handleQuantityChange = (action) => {
    if (action === "increase") {
      setQuantity(quantity + 1);
    } else if (action === "decrease" && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const totalPrice = item ? item.price * quantity : 0;
  const totalPriceWithDiscount = item
    ? (item.price - item.discount) * quantity
    : 0;

  return (
    <div className="bg-gray-50 text-black p-8">
      {item ? (
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-3xl font-semibold text-gray-800">{item.name}</h2>

          {/* Image with 3D effect */}
          <div className="flex justify-center items-center">
            <div className="relative mt-4 w-100 h-64 p-4 justify-center items-center">
              <img
                src={item.imageUrl}
                alt={item.name}
                className="w-full h-full rounded-lg object-cover shadow-2xl transform transition-all duration-300 hover:scale-105"
              />
            </div>
          </div>

          <p className="mt-4 text-gray-600">{item.description}</p>

          {/* Price Breakdown */}
          <div className="mt-6 flex justify-between">
            <div>
              <span className="text-lg font-semibold">
                Price: {item.price} ₹
              </span>
            </div>
            <div>
              <span className="text-lg font-semibold text-gray-500 line-through">
                {item.price} ₹
              </span>
            </div>
          </div>
          <div className="mt-2 flex justify-between">
            <div>
              <span className="text-lg font-semibold text-gray-600">
                Discount: {item.discount} ₹
              </span>
            </div>
            <div>
              <span className="text-lg font-semibold text-green-500">
                You Save: {item.discount} ₹
              </span>
            </div>
          </div>

          {/* Quantity Selection */}
          <div className="mt-6 flex items-center justify-between">
            <label className="font-semibold">Quantity:</label>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => handleQuantityChange("decrease")}
                className="bg-gradient-to-r w-10 from-blue-500 to-purple-600 text-xl text-white rounded-full p-3 hover:scale-105 transition-all"
              >
                -
              </button>
              <span className="text-xl font-bold">{quantity}</span>
              <button
                onClick={() => handleQuantityChange("increase")}
                className="bg-gradient-to-r w-10 from-blue-500 to-purple-600 text-xl text-white rounded-full p-3 hover:scale-105 transition-all"
              >
                +
              </button>
            </div>
          </div>

          {/* Total Price */}
          <div className="mt-4 border-t-2 border-gray-300 pt-4">
            <div className="flex justify-between">
              <span className="text-lg font-semibold">
                Total Price (without discount): {totalPrice} ₹
              </span>
            </div>
            <div className="flex justify-between mt-2">
              <span className="text-lg font-semibold">
                Total Price (with discount): {totalPriceWithDiscount} ₹
              </span>
            </div>
          </div>

          {/* Features Table */}
          <ProductFeatures features={item} />

          {/* Purchase Form */}
          <PurchaseForm
            productId={item.productId} 
            handlePlaceOrder={handlePlaceOrder} 
            product={item}
          />
        </div>
      ) : (
        <div className="text-center text-xl font-semibold">
          Product not found
        </div>
      )}
    </div>
  );
}

export default OrderPage;
