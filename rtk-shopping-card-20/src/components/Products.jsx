import React, { useEffect, useState } from 'react'
import { add } from '../store/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../store/productSlice'

import { STATUSES } from '../store/productSlice'


function Products() {
  

  const{data, status} = useSelector((state) => state.product)
  const dispatch = useDispatch()


  useEffect(() =>{
    dispatch(fetchProducts())
    
  
  },[])

  const handleAdd = (product) =>{
    dispatch(add(product))

  }

  if(status === STATUSES.LOADING){
    return <h2>Loading............... please wait</h2>
  }

  
  if(status === STATUSES.ERROR){
    return <h2>Error...............</h2>
  }



  return (
    <div className='productsWrapper'>
      {
        data.map((product) =>(
          <div className="card" key={product.id}>
            <img src={product.image} alt="" />
            <h4>{product.title}</h4>
            <h5>{product.price}</h5>
            <button className='btn' onClick={() => handleAdd(product)}>Add to cart</button>
          </div>

        ))
      }
      
    </div>
  )
}

export default Products