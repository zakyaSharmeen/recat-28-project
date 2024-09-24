import React, { useContext } from 'react'
import { Scrollbars } from 'react-custom-scrollbars-2';
import Items from '../Components/Items'

import { CartContext } from './Cart';


function ContextCart() {

    const { item, clearCart,  totalItem, totalAmount  } = useContext(CartContext)

    if (item.length === 0) {
        return (
            <>
                <header>
                    <div className="continue-shopping">
                        <img src="./images/arrow.png" alt="" className='arrow-icon' />
                        <h3>contibue shopping</h3>
                    </div>

                    <div className="cart-icon">
                        <img src="./images/cart.png" alt="" />
                        <p>{totalItem}</p>
                    </div>
                </header>

                <div className="main-cart-section">
                    <h1>Shopping-cart</h1>
                    <p className='total-items'>you have <span className='total-items-count'>{totalItem}</span>items</p>



                </div>
            </>



        )
    }


    return (
        <>
            <header>
                <div className="continue-shopping">
                    <img src="./images/arrow.png" alt="" className='arrow-icon' />
                    <h3>contibue shopping</h3>
                </div>

                <div className="cart-icon">
                    <img src="./images/cart.png" alt="" />
                    <p>{totalItem}</p>
                </div>
            </header>

            <div className="main-cart-section">
                <h1>Shopping-cart</h1>
                <p className='total-items'>you have <span className='total-items-count'>{totalItem}</span>items</p>

                <div className="cart-items">
                    <div className="cart-items-container">


                        <Scrollbars>
                            {
                                item.map((currItem) => {
                                    return <Items key={currItem.id} {...currItem} />
                                })
                            }
                        </Scrollbars>


                    </div>
                </div>

                <div className="card-total">
                    <h3>Cart-total: <span>&#8377;{totalAmount}</span></h3>
                    <button>checkout</button>
                    <button className='clear-cart' onClick={clearCart}>Clear Cart</button>

                </div>
            </div>

        </>
    )
}

export default ContextCart