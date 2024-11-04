import React from 'react'
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';


import  {removeToCart}  from '../redux/slice/CartSlice';
import { incrementQty, decrementQty } from '../redux/slice/CartSlice';






function CartItem({id, name,price, img,qty}) {
  const cartItems = useSelector((state) => state.zakya.cart)
  console.log(cartItems);

  const dispatch = useDispatch()
  


  return (
    <div>
        <div className="flex gap-2 shadow-md rounded-lg p-2 mb-3">
        <MdDelete
  onClick={() => {
    dispatch(removeToCart({id, img, name, price, qty}));
    toast.error(`${name} is deleted from cart`);
  }}
  className="absolute right-7 text-gray-600 cursor-pointer"
/>



      <img src={img}
 alt="" className="w-[50px] h-[50px] " />
      <div className="leading-5">
        <h2 className="font-bold text-gray-800">{name}</h2>
        <div className="flex justify-between ">
          <span className="text-green-500 font-bold">₹ {price}</span>
          <div className="flex justify-center items-center gap-2 absolute right-7">
            <FaMinus 
              onClick={()=> qty >1 ? dispatch(decrementQty({id})) : dispatch(removeToCart({id, img, name,price, qty}))}
              className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer"
            />
            <span>{qty}</span>
            <FaPlus 
              onClick={()=> dispatch(incrementQty({id}))}
              className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default CartItem