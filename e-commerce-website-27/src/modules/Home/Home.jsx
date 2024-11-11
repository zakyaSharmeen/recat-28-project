import React, { useEffect, useState } from 'react'
import Hero from '../../components/Hero/Hero'
import Product from '../../components/Product/Product'
import FeatureCard from '../../components/FeatureCard/FeatureCard'
import StatCard from '../../components/StatCard/StatCard'
import Category from '../Category/Category'

function Home() {

  const[products, setProducts] = useState([])

  const fetchProducts = async () => {
    const respnse = await fetch ("https://fakestoreapi.com/products")
    const data = await respnse.json()
    console.log(data);
    setProducts(data)
  
  }
  useEffect(() => {
    fetchProducts()
  },[])



  return (
    <div>
      <Hero/>
      <div className="flex flex-col text-center w-full mb-20 text-gray-400 bg-gray-900">
      <h2 className="text-xs text-indigo-400 tracking-widest font-medium title-font mb-1">ROOF PARTY POLAROID</h2>
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-white">Master Cleanse Reliac Heirloom</h1>
    </div>
    <Category/>
    <div className="flex flex-col text-center w-full mb-20 text-gray-400 bg-gray-900">
      <h2 className="text-xs text-indigo-400 tracking-widest font-medium title-font mb-1">ROOF PARTY POLAROID</h2>
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-white">Master Cleanse Reliac Heirloom</h1>
    </div>
    
      {
        products.length > 0 ?  <Product products={products}/> : <div>Loading........</div>
      }
      
      
      <div className="flex flex-col text-center w-full mb-20 text-gray-400 bg-gray-900">
      <h2 className="text-xs text-indigo-400 tracking-widest font-medium title-font mb-1">STATS SECTION-INFO</h2>
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-white">STATS SECTION</h1>
    </div>
      <StatCard/>
      <div className="flex flex-col text-center w-full mb-20 text-gray-400 bg-gray-900">
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-white">FOOTER SECTION</h1>
    </div>
    </div>
    
  )
}

export default Home