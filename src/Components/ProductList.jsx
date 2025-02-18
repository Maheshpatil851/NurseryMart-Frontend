import React, { useEffect } from 'react'
import ProductCard from './ProductCard'
import { useSelector ,useDispatch } from 'react-redux'
import { SearchProducts } from '../Features/ProductSlice';

function ProductList() {
    const{ products } = useSelector(state => state.product);
    var dispatch = useDispatch();
    useEffect(() => {
        fetchData();
    }, [dispatch]);

    const fetchData = async () => {
        try {
            await dispatch(SearchProducts(null));
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };


  return (
    <div>
    <div className="bg-gray-100 min-h-full">
        <div className="mx-auto  max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <div className="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                {products.length > 0  ? (
                    products.map((product) => (
                        <ProductCard product={product} key={`${product.productId}-${product.title}`} showDelCart={false} />
                    ))  
                ) : (
                    <div>No products found</div>
                )}
            </div>
        </div>
    </div>
</div>
  )
}

export default ProductList
