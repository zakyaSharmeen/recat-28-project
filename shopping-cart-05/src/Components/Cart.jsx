// as the wrapper of all components


// passing data from props--
// import React, { useState } from 'react'
// import "./cart.css"
// import Items from '../Components/Items'
// import { Scrollbars } from 'react-custom-scrollbars-2';
// import {products} from "./Products"


// function Cart() {

//     const [item ,setItem] = useState(products)


//     return (
//         <>
//             <header>
//                 <div className="continue-shopping">
//                     <img src="./images/arrow.png" alt="" className='arrow-icon' />
//                     <h3>contibue shopping</h3>
//                 </div>

//                 <div className="cart-icon">
//                     <img src="./images/cart.png" alt="" />
//                     <p>7</p>
//                 </div>
//             </header>

//             <div className="main-cart-section">
//                 <h1>Shopping-cart</h1>
//                 <p className='total-items'>you have <span className='total-items-count'>7</span>items</p>

//                 <div className="cart-items">
//                     <div className="cart-items-container">


//                         <Scrollbars>
//                           {
//                             item.map((currItem) =>{
//                                 return <Items key={currItem.id} {...currItem}/>
//                             })
//                           }
//                         </Scrollbars>


//                     </div>
//                 </div>

//                 <div className="card-total">
//                     <h3>Cart-total: <span>2200rs</span></h3>
//                     <button>checkout</button>
//                 </div>
//             </div>

//         </>
//     )
// }

// export default Cart





// -------------------------------------------------------







import React, { createContext, useEffect, useReducer } from 'react'
import "./cart.css"

import ContextCart from './ContextCart';
import { products } from './Products';


import { reducer } from './Reducer';


export const CartContext = createContext()

  const initialState = {
    item: products,
    totalAmount:0,
    totalItem: 0,
  }


function Cart() {


        const [state, dispatch] = useReducer(reducer, initialState)

        const removeItem = (id) =>{
          return dispatch({
            type: "REMOVE_ITEM",
            payload: id
          })

        }

        const clearCart = () =>{
          return dispatch({
            type: "CLEAR_CART",
          
          })

        }


        const increment = (id) =>{
          return dispatch({
            type: "INCREMENT",
            payload: id
          })

        }

        

        const decrement = (id) =>{
          return dispatch({
            type: "DECREMENT",
            payload: id
          })

        }

        // total-item

        useEffect(() =>{
          dispatch({ type: "GET_TOTAL"})
          // console.log("zakya");
          


        }, [state.item])
        

    return (
        <>
            <CartContext.Provider value={{...state,decrement, removeItem, clearCart, increment}}>
                <ContextCart />

            </CartContext.Provider>

        </>
    )
}

export default Cart