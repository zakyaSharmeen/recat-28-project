import React, { useEffect, useState } from 'react'
import Category from '../Category/Category'
import Product from '../../components/Product/Product'

function Products() {
    const [products, setProducts] = useState([])

    const fetchProducts = async () =>{
      const response = await fetch(`https://fakestoreapi.com/products`)
      const data = await response.json()
    //   console.log(data);
      setProducts(data)
      
    }
    useEffect(() =>{
        fetchProducts()
    },[])
  
  return (
    <div>
        <Category/>

        {/* this is from component like productCard */}
      
        {
            products.length > 0 ? 
            <Product/>:
            <div>Loading....</div>
        }
    </div>
  )
}

export default Products