
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart, removeItemFromCart } from '../Features/CartSlice';
import { IoIosAdd } from "react-icons/io";
import { IoIosRemove } from "react-icons/io";
import { FaClipboardList } from 'react-icons/fa';
import { CiShoppingCart } from 'react-icons/ci';
import { useNavigate } from 'react-router-dom';


function AddToCartBtn({ product, type ,name }) {
    var navigate = useNavigate();
    const dispatch = useDispatch();

    function handleAddToCart() {
        if (type == 'delete') {
            dispatch(removeItemFromCart(product))
        }
        else if(type == 'cart'){
            navigate("/cart");
        }
        else {
            dispatch(addItemToCart(product))
        }
    }

    return (
        <button
  className="relative py-2 px-2  rounded-lg text-white bg-gradient-to-r from-green-400 to-blue-500 hover:bg-gradient-to-r hover:from-green-500 hover:to-blue-600 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl focus:outline-none flex items-center"
     onClick={handleAddToCart}   >
  <CiShoppingCart size={24} className="mr-1 font-bold"  />
  <span className="text-sm font-semibold">{name}</span>
</button>
    )
}

export default AddToCartBtn