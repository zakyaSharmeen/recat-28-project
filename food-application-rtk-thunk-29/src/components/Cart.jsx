import React, { useState } from 'react'
import { IoClose } from "react-icons/io5";
import CartItem from './CartItem';
import { useSelector } from 'react-redux';
import { FaShoppingCart } from "react-icons/fa";

import { useNavigate } from 'react-router-dom';



function Cart() {

    const [activeCart, setActiveCart] = useState(false)

    const cartItems = useSelector((state) => state.zakya.cart)
    // console.log(cartItems);

    const totalQty= cartItems.reduce((totalQty, item) => totalQty + item.qty,0)
    const totalPrice= cartItems.reduce((total, item) => total+ item.qty * item.price,0)

    const navigate = useNavigate();






    return (
        <>
            <div className={`fixed right-0 top-0 w-full lg:w-[20vw] h-full bg-white p-5 ${activeCart ? "translate-x-0" : "translate-x-full"} transition-all duration-500 z-50`}

            >
                <div className="flex justify-between items-center my-3">
                    <span className="text-xl font-bold text-gray-800">My Order</span>
                    <IoClose
                        onClick={() => setActiveCart(!activeCart)}
                        className="border-2 border-gray-600 text-gray-600 font-bold  p-1 text-xl  rounded-md hover:text-red-300 hover:border-red-300 cursor-pointer"
                    />
                </div>

                { cartItems.length > 0 ?
                    cartItems.map((food) => {
                        const { id, name, price, desc, rating, img,qty } = food

                        return (
                            <CartItem
                                id={id}
                                name={name}
                                price={price}
                                desc={desc}
                                rating={rating}
                                img={img}
                                qty={qty}

                            />

                        )
                    }): <h1 className='text-xl font-extrabold'>your cart is emoty</h1>
                }


                <div className="absolute bottom-0 ">
                    <h3 className="font-semibold text-gray-800">Items : {totalQty}</h3>
                    <h3 className="font-semibold text-gray-800">
                        Total Amount :{totalPrice}
                    </h3>
                    <hr className="w-[90vw] lg:w-[18vw] my-2" />
                    <button
                        onClick={()=> navigate("/success")}
                        className="bg-green-500 font-bold px-3 text-white py-2 rounded-lg w-[90vw] lg:w-[18vw] mb-5"
                    >   
                        Checkout
                    </button>
                </div>
            </div>

            <FaShoppingCart
                onClick={() => setActiveCart(!activeCart)}
                className={`rounded-full bg-white shadow-md text-5xl p-3 fixed bottom-4 right-4 cursor-pointer
                    ${totalQty > 0 && "animate-bounce delay-500 transition-all"}`} 
                />

        </>
    )
}

export default Cart