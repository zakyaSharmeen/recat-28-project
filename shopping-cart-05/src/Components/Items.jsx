// for showing the individual items



// passing data from porps
// import React from 'react'


// function Items({title, description, price, img }) {
//   return (
//     <>
//         <div className="items-info">
//             <div className="product-img">
//                <img src={img} alt="" />
//             </div>

//             <div className="tile">
//                 <h2>{title}</h2>
//                 <p>{description}</p>
//             </div>

//             <div className="add-minus-quantity">
//             <i class="fa-solid fa-minus minus"></i>
//             <input type="text"placeholder='2'/>
//             <i class="fa-solid fa-plus add"></i>

//             </div>

//             <div className="price">
//                 <h3>{price}</h3>
//             </div>

//             <div className="remove-item">
//             <i class="fa-solid fa-trash remove"></i>
//             </div>
            
//         </div>
//         <hr />
//     </>
//   )
// }

// export default Items


// -------------------------------------------------------
import React, { useContext } from 'react'
import { CartContext } from './Cart'


function Items({title, description, price, img, id , quantity}) {

  const {removeItem, increment, decrement} = useContext(CartContext)

  return (
    <>
        <div className="items-info">
            <div className="product-img">
               <img src={img} alt="" />
            </div>

            <div className="tile">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>

            <div className="add-minus-quantity">
            <i className="fa-solid fa-minus minus" onClick={()=> decrement(id)}></i>
            <input type="text"placeholder={quantity}/>
            <i className="fa-solid fa-plus add" onClick={()=> increment(id)}></i>

            </div>

            <div className="price">
                <h3>{price}</h3>
            </div>

            <div className="remove-item">
            <i class="fa-solid fa-trash remove" 
            onClick={()=> removeItem(id)}
            ></i>
            </div>
            
        </div>
        <hr />
    </>
  )
}

export default Items