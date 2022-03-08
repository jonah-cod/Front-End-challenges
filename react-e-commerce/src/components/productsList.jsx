import React from 'react'
import { useSelector } from 'react-redux'
import Product from './product'

const ProductsList = () => {
    const loading = useSelector(state=>state.loading)
    const data = useSelector(state=>state.allProducts.data)

  return (
    <div className="products">
        {loading? "loading data...": (data.map(product=>(<Product key={product.id} product={product}/>)))}
    </div>
  )
}

export default ProductsList