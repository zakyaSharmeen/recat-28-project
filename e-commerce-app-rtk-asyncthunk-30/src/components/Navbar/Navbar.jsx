import React, { useEffect } from 'react'
import "./navbar.scss"
import { Link } from 'react-router-dom'
import {  setSidebarOn } from '../../store/sidebarSlice'
import { useDispatch, useSelector } from 'react-redux'
import {  getAllCategories } from '../../store/categorySlice'

import{getAllCarts, getCartItemsCount, getCartTotal} from "../../store/cartSlice"
import CartModal from '../CartModal/CartModal'







function Navbar() {
    const dispatch = useDispatch()
    // const categories = useSelector(getAllCategories)
    // console.log(categories);
    const carts = useSelector(getAllCarts)
    const itemsCount = useSelector(getCartItemsCount)
    console.log(itemsCount);
    


    useEffect(() =>{
      dispatch(getCartTotal())
    },[])
    
   
    
  return (
    <nav className='navbar'>
      <div className='navbar-cnt flex align-center'>
        <div className='brand-and-toggler flex align-center'>
          <button type = "button" className='sidebar-show-btn text-white' 
          onClick={() => dispatch(setSidebarOn())}
          >
            <i className='fas fa-bars'></i>
          </button>
          <Link to = "/" className='navbar-brand flex align-center'>
            <span className='navbar-brand-ico'>
              <i className='fa-solid fa-bag-shopping'></i>
            </span>
            <span className='navbar-brand-txt mx-2'>
              <span className='fw-7'>Snap</span>Up.
            </span>
          </Link>
        </div>

        <div className='navbar-collapse w-100'>
          

         
        </div>
        <div className='navbar-cart flex align-center'>
          <Link to = "/cart" className='cart-btn'>
            <i className='fa-solid fa-cart-shopping'></i>
            <div className='cart-items-value'>{itemsCount}</div>
            <CartModal carts = {carts} />
          </Link>
        </div>
      
      </div>
    </nav>


  )
}

export default Navbar