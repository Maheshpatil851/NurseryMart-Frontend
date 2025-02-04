import React, { useEffect } from 'react'
import ProductCard from './ProductCard'
import { useSelector ,useDispatch } from 'react-redux'
import { SearchProducts } from '../Features/ProductSlice';

function ProductList() {
    const{ products } = useSelector(state => state.product);
    var dispatch = useDispatch();
    useEffect(() => {
        console.log('Component mounted or dispatch changed.');
        fetchData();
    }, [dispatch]);

    const fetchData = async () => {
        try {
            console.log("fetchdata called")
            await dispatch(SearchProducts(null));
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    console.log(products);

  return (
    <div>
    <div className="bg-white min-h-full">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
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
