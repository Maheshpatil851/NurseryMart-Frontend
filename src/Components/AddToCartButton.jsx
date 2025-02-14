
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart, removeItemFromCart } from '../store/cartSlice';
import { IoIosAdd } from "react-icons/io";
import { IoIosRemove } from "react-icons/io";






function AddToCartBtn({ product, type }) {

    const dispatch = useDispatch();

    function handleAddToCart() {

        if (type == 'delete') {
            dispatch(removeItemFromCart(product))

        }
        else {
            dispatch(addItemToCart(product))

        }
    }

    return (

        <div className='flex cursor-pointer items-center justify-start' onClick={(e) => { e.stopPropagation(); handleAddToCart(); }}>

            {type == 'delete' ? <IoIosRemove className='mr-1' /> : <IoIosAdd className='mr-1' />}


            <span className='text-sm text-semibold'>{type == 'add' ? 'Add to cart' : 'Remove from cart'}</span>
        </div>
    )
}

export default AddToCartBtn