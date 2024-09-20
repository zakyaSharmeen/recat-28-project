import React, { useContext } from 'react'
import { CartContext } from '../StateManage/Features/ContextProvider'
import CartProduct from '../Components/CartProduct'

const Cart = () => {
  
  const {cart} = useContext(CartContext)
  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-8">
            {
              cart.map(p => (
                <CartProduct product={p}></CartProduct>
              ))
            }
  
          </div>
          <div className="col-4 p-2">
            <div className="bg-secondary p-2 text-white">
              <h5>Total Item</h5>
              <h5>Total Price</h5>
              <button className='btn btn-warning'>Checkout</button>

            </div>

            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart