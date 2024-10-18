import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../store/cartSlice'


function Cart() {

  // bringing the data from store
  const products = useSelector((state) => state.cart)

  // ---------------------------

  const dispatch = useDispatch()


  const handleDelete = (productId) =>{
    dispatch(remove(productId))

  }


  return (
    <div>
      <h3>CART ITEMS LISTED</h3>
      <div className="cartWrapper">
        {
          products.map((pro) => (
            <div className="cartCard">
              <img src={pro.image} alt="images" />
              <h5>{pro.title}</h5>
              <h5>{pro.price}</h5>
              <button className='btn' onClick={() => handleDelete(pro.id)}>DELETE</button>
            </div>

          ))
        }
      </div>
    </div>
  )
}

export default Cart 