import { useDispatch } from 'react-redux';

// import { setPriceOrder, setRatingOrder } from "../Features/ProductSlice";

function ProductFilter() {
    const dispatch = useDispatch();
    
    const handlePriceOrder = (e) => {
        // dispatch(setPriceOrder(e.target.value)); 
    }

    const handleRatingOrder = (e) => {
        // dispatch(setRatingOrder(e.target.value)); 
    }

    return (
        <div className='flex flex-row justify-center items-center gap-2'>
            <label htmlFor="price-order" className="flex items-center">
                Price:
                <select id="price-order" onChange={handlePriceOrder} className="ml-1">
                    <option value="">Default</option>
                    <option value="asc">Low to High</option>
                    <option value="desc">High to Low</option>
                </select>
            </label>
            <label htmlFor="rating-order" className="flex items-center">
                Rating:
                <select id="rating-order" onChange={handleRatingOrder} className="ml-1">
                    <option value="">Default</option>
                    <option value="asc">Low to High</option>
                    <option value="desc">High to Low</option>
                </select>
            </label>
        </div>
    );
}

export default ProductFilter;