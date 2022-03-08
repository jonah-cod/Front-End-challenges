import React from 'react'

const Product = ({product}) => {
    let {title, price, category, image} = product
  return (
    <div className='product'>
        <img src={image} alt="" />
        <div className="details">
            <h5>{title}</h5>
            <span>USD: {price}$</span>
            <span>Category: {category}</span>
        </div>
    </div>
  )
}

export default Product