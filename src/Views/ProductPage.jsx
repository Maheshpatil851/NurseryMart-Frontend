import React, { useEffect } from 'react'
import ProductCard from '../Components/ProductCard'
import { GetProductById } from '../Features/ProductSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

function ProductPage() {
    const {product} = useSelector(state => state.product)
    var dispatch = useDispatch();
    const { id } = useParams();
useEffect(  () =>
    (async function (){
    await dispatch(GetProductById(id))
    })
,[dispatch])

console.log(product);

  return (
    <div>
         <div className="bg-white min-h-full  w-full  max-w-xl mx-auto p-4 mt-21">
                <ProductCard product={product} />
            </div>
    </div>
  )
}

export default ProductPage
