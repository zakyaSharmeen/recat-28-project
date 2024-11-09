import React from 'react'
import "./checkout.css"

import { formatPrice } from '../../utils/helpers';
import { useSelector } from 'react-redux';



function Checkout() {
    const { itemsCount, totalAmount} = useSelector((state) => state.cart);
  
    

  return (
    <div>
        
        <div className='check-main-container'>
              <div className='check-wrapped'>
                <h1>YOUR FINAL LISTS</h1>
            <div className='font-manrope fw-5'>Total ({itemsCount}) items: </div>
            <h4>FINAL AMPONT TO PAY:<span className='text-orange fs-22 mx-2 fw-6'>{formatPrice(totalAmount)}</span></h4>
        </div>
        </div>
    </div>
  )
}

export default Checkout