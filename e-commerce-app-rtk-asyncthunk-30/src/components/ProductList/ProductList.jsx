import React from 'react'
import "./productList.scss"
import Product from '../Product/Product'

function ProductList({products}) {
  return (
    <div>
        <div className="product-lists grid bh-whitesmoke my-3">
            {
                products.map(product => {
                    let discountedPrice = (product.price) -(product.price * (product.discountPercentage / 100))

                    return(
                        <Product key={product.id} product={{...product, discountedPrice}}/>
                    )
                })
            }
        </div>
        
    </div>
  )
}

export default ProductList