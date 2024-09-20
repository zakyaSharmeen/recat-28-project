// here we have only brought the json data

import React, { useState } from 'react'
import Data from "../Data.json"
import Product from '../Components/Product'

function Products() {

    const [products, setProducts] = useState(Data.products)
    


  return (
    <>
       <div className="container mt-5">
        <div className="row row-cols-1 row-cols-md-3 g-4">
        {
            products.map(p => (
                <Product product = {p}/>
            ))
        }
        </div>
       </div>
    </>
  )
}

export default Products