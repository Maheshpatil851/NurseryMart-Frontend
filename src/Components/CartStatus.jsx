import { Link } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
import { useSelector } from "react-redux";

function CartStatus() {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { count } = useSelector((state) => state.cart);


  return (
    <>
      {isLoggedIn && (
        <div className="fixed z-50 bottom-4 left-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-4 rounded-full shadow-lg transform transition-all hover:scale-110 hover:shadow-2xl hover:rotate-12">
          <Link to="/cart" className="flex items-center text-white space-x-2">
            <CiShoppingCart size={24} />
            <span className="text-lg font-semibold">{count}</span>{" "}
            {/* You can replace '3' with the dynamic cart item count */}
          </Link>
        </div>
      )}
    </>
  );
}

export default CartStatus;
