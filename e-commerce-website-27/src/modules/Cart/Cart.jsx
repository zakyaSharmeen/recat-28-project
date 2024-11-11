import React from 'react'
import "./cart.css"
import { Link } from 'react-router-dom'

function Cart() {
  return (
    <div>
         <div className="shopping-cart">
            {/* Cart Items Section */}
            <div className="cart-items">
                <h2>Shopping Cart</h2>
                <div className="cart-item">
                    <img src="https://via.placeholder.com/150" alt="iPhone 6S" className="item-image" />
                    <div className="item-details">
                        <div>
                        <h4>iPhone 6S</h4>
                        <p>Apple</p>
                        </div>
                        <div className="quantity-controls">
                        <h4>Quantity</h4>
                           <div>
                           <button className="quantity-btn">-</button>
                            <span className="quantity-value">1</span>
                            <button className="quantity-btn">+</button>
                           </div>
                        </div>
                        <div className="price">
                        <h4>Price</h4>
                        <h3>$890</h3>
                        </div>
                        <div className="price">
                        <h4>Total</h4>
                        <h3>$890</h3>
                        </div>
                    </div>
                </div>
                <Link to="/category"  className="continue-shopping">← Continue Shopping</Link>
            </div>

            {/* Order Summary Section */}
            <div className="order-summary">
                <h3>Order Summary</h3>
                <div className="summary-line">
                    <span>Items 3</span>
                    <span>$590</span>
                </div>
                <div className="summary-line">
                    <span>Shipping</span>
                    <span>$10.00</span>
                </div>
                <div className="promo-code">
                    <input type="text" placeholder="Enter your code" className="promo-input" />
                    <button className="apply-btn">Apply</button>
                </div>
                <div className="total-cost">
                    <span>Total Cost</span>
                    <span>$600</span>
                </div>
                <button className="checkout-button">Checkout</button>
            </div>
        </div>
    </div>
  )
}

export default Cart