import React, { useEffect, useState } from 'react'
import FeatureCard from '../../components/FeatureCard/FeatureCard'

function Category() {
    const [categories, setCategories] = useState([])

  const fetchCategory = async () =>{
    const response = await fetch(`https://fakestoreapi.com/products/categories`)
    const data = await response.json()
    console.log(data);
    setCategories(data)
    
  }
  useEffect(() =>{
    fetchCategory()
  },[])

  if(categories.length === 0 ) return <div>Loading.....</div>

  return (
    <div>
        <FeatureCard cards={categories}/>
       
       
    </div>
  )
}

export default Category