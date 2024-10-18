import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


function Navbar() {

  const item = useSelector((state) => state.cart)


  return (
    <div style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
        <span className='logo'>REDUX STORE</span>
        <div style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
          <Link style={{padding: "20px"}} className='navlink' to="/">HOME</Link>
          <Link className='navlink' to="/cart">CARTS</Link>
          <span className='cartCount'>Cart Items: {item.length}</span>

        </div>

    </div>
  )
}

export default Navbar