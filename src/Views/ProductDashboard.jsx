import React from 'react'
import { SearchProducts } from '../Features/ProductSlice'
import ProductSectionHeader from '../Components/ProductSectionHeader'
import ProductList from '../Components/ProductList'

function ProductDashboard() {
  return (
    <div >
           <ProductSectionHeader showSearchBar={true} showFilter={true} showCategoriesPills={true}  />
            <ProductList />
    </div>
  )
}

export default ProductDashboard
