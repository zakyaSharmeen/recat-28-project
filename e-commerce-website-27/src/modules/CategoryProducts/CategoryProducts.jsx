import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Product from '../../components/Product/Product'

function CategoryProducts() {
    const {name} = useParams()

    const [products, setProducts] = useState([])

const fetchProducts = async () =>{
    const response = await fetch(`https://fakestoreapi.com/products/category/${name}`)
    const data = await response.json()
    // console.log(data);
    setProducts(data)
}
useEffect(() =>{
    fetchProducts()
},[])
   
if(products.length === 0) return <div>Loadig....</div>


  return (
    <div>
        <Product products={products}/>
    </div>
  )
}

export default CategoryProducts