// import React, { useEffect, useState } from 'react'
// import "./productSingle.scss"
// import { useDispatch, useSelector } from 'react-redux'
// import { useParams } from 'react-router-dom'
// import { fetchAsyncProductSingle, getProductSingle, getSingleProductStatus } from '../../store/productSlice'
// import { STATUS } from '../../utils/status'
// import Loader from '../../components/Loader/Loader'
// import { formatPrice } from '../../utils/helpers'
// import { addToCart, setCartMessageOff, setCartMessageOn, getCartMessageStatus} from '../../store/cartSlice'


// function ProductSingle() {
//   const {id} = useParams()
//   const dispatch = useDispatch()
//   const product = useSelector(getProductSingle)
//   const productSingleStatus = useSelector(getSingleProductStatus)
//   const[quantity, setQuantity] = useState(1)
//   const cartMessageStatus = useSelector(getCartMessageStatus)


//   useEffect(() =>{
//     dispatch(fetchAsyncProductSingle(id))
//   }, [dispatch, id])
  
//   console.log(product);
//   let discountedPrice = (product?.price) - (product?.price * (product?.discountPercentage / 100));
//   if(productSingleStatus === STATUS.LOADING) {
//     return <Loader />
//   }

//   const increaseQty = () => {
//     setQuantity((prevQty) => {
//       let tempQty = prevQty + 1;
//       if(tempQty > product?.stock) tempQty = product?.stock;
//       console.log(quantity);
      
//       return tempQty;
//     })
//   }

//   const decreaseQty = () => {
//     setQuantity((prevQty) => {
//       let tempQty = prevQty - 1;
//       if(tempQty < 1) tempQty = 1;
//       return tempQty;
//     })
//   }

//   const addToCartHandler = (product) => {
//     let discountedPrice = (product?.price) - (product?.price * (product?.discountPercentage / 100));
//     let totalPrice = quantity * discountedPrice;

//     dispatch(addToCart({...product, quantity: quantity, totalPrice, discountedPrice}));
//     dispatch(setCartMessageOn)
//   }

  



//   return (
//     <main className='py-5 bg-whitesmoke'>
//     <div className='product-single'>
//       <div className='container'>
//         <div className='product-single-content bg-white grid'>
//           <div className='product-single-l'>
//             <div className='product-img'>
//               <div className='product-img-zoom'>
//                 <img src = {product?(product.images ? product.images[0] : "") : ""} alt = "" className='img-cover' />
//               </div>

             
//             </div>
//           </div>

//           <div className='product-single-r'>
//             <div className='product-details font-manrope'>
//               <div className='title fs-20 fw-5'>{product?.title}</div>
//               <div>
//                 <p className='para fw-3 fs-15'>{product?.description}</p>
//               </div>
//               <div className='info flex align-center flex-wrap fs-14'>
//                 <div className='rating'>
//                   <span className='text-orange fw-5'>Rating:</span>
//                   <span className='mx-1'>
//                     {product?.rating}
//                   </span>
//                 </div>
//                 <div className='vert-line'></div>
//                 <div className='brand'>
//                   <span className='text-orange fw-5'>Brand:</span>
//                   <span className='mx-1'>{product?.brand}</span>
//                 </div>
//                 <div className='vert-line'></div>
//                 <div className='brand'>
//                   <span className='text-orange fw-5'>Category:</span>
//                   <span className='mx-1 text-capitalize'>
//                     {product?.category ? product.category.replace("-", " ") : ""}
//                   </span>
//                 </div>
//               </div>

//               <div className = "price">
//                 <div className='flex align-center'>
//                   <div className='old-price text-gray'>
//                     {formatPrice(product?.price)}
//                   </div>
//                   <span className='fs-14 mx-2 text-dark'>
//                     Inclusive of all taxes
//                   </span>
//                 </div>

//                 <div className='flex align-center my-1'>
//                   <div className='new-price fw-5 font-poppins fs-24 text-orange'>
//                     {formatPrice(discountedPrice)}
//                   </div>
//                   <div className='discount bg-orange fs-13 text-white fw-6 font-poppins'>
//                     {product?.discountPercentage}% OFF
//                   </div>
//                 </div>
//               </div>

//               <div className='qty flex align-center my-4'>
//                 <div className='qty-text'>Quantity:</div>
//                 <div className='qty-change flex align-center mx-3'>
//                   <button type = "button" className='qty-decrease flex align-center justify-center' onClick={() => decreaseQty()}>
//                     <i className='fas fa-minus'></i>
//                   </button>
//                   <div className = "qty-value flex align-center justify-center">{quantity}</div>
//                   <button type = "button" className='qty-increase flex align-center justify-center' onClick={() => increaseQty()}>
//                     <i className='fas fa-plus'></i>
//                   </button>
//                 </div>
//                 {
//                   (product?.stock === 0) ? <div className ='qty-error text-uppercase bg-danger text-white fs-12 ls-1 mx-2 fw-5'>out of stock</div> : ""
//                 }
//               </div>

//               <div className='btns'>
//                 <button type = "button" className='add-to-cart-btn btn'>
//                   <i className='fas fa-shopping-cart'></i>
//                   <span className='btn-text mx-2'
//                   onClick={() => {addToCartHandler(product)}}
//                   >add to cart</span>
//                 </button>
//                 <button type = "button" className='buy-now btn mx-3'>
//                   <span className='btn-text'>buy now</span>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>

  

//   </main>
//   )
// }

// export default ProductSingle 


import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import "./productSingle.scss"
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchAsyncProductSingle, getProductSingle, getSingleProductStatus } from '../../store/productSlice'
import { STATUS } from '../../utils/status'
import Loader from '../../components/Loader/Loader'
import { formatPrice } from '../../utils/helpers'
import { addToCart, setCartMessageOff, setCartMessageOn, getCartMessageStatus } from '../../store/cartSlice'


function ProductSingle() {
  const { id } = useParams()
  const dispatch = useDispatch()
  const product = useSelector(getProductSingle)
  const productSingleStatus = useSelector(getSingleProductStatus)
  const [quantity, setQuantity] = useState(1)
  const cartMessageStatus = useSelector(getCartMessageStatus)

  useEffect(() => {
    dispatch(fetchAsyncProductSingle(id))
  }, [dispatch, id])

  let discountedPrice = (product?.price) - (product?.price * (product?.discountPercentage / 100))
  if (productSingleStatus === STATUS.LOADING) {
    return <Loader />
  }

  const increaseQty = () => {
    setQuantity((prevQty) => {
      let tempQty = prevQty + 1;
      if (tempQty > product?.stock) tempQty = product?.stock;
      return tempQty;
    })
  }

  const decreaseQty = () => {
    setQuantity((prevQty) => {
      let tempQty = prevQty - 1;
      if (tempQty < 1) tempQty = 1;
      return tempQty;
    })
  }

  const addToCartHandler = (product) => {
    let discountedPrice = (product?.price) - (product?.price * (product?.discountPercentage / 100))
    let totalPrice = quantity * discountedPrice

    // Dispatch add to cart action
    dispatch(addToCart({ ...product, quantity: quantity, totalPrice, discountedPrice }))
    dispatch(setCartMessageOn())

    // Show toast notification
    toast.success("Item added to cart!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  return (
    <main className='py-5 bg-whitesmoke'>
      <div className='product-single'>
        <div className='container'>
          <div className='product-single-content bg-white grid'>
            <div className='product-single-l'>
              <div className='product-img'>
                <div className='product-img-zoom'>
                  <img src={product ? (product.images ? product.images[0] : "") : ""} alt="" className='img-cover' />
                </div>
              </div>
            </div>

            <div className='product-single-r'>
              <div className='product-details font-manrope'>
                <div className='title fs-20 fw-5'>{product?.title}</div>
                <div>
                  <p className='para fw-3 fs-15'>{product?.description}</p>
                </div>
                <div className='info flex align-center flex-wrap fs-14'>
                  <div className='rating'>
                    <span className='text-orange fw-5'>Rating:</span>
                    <span className='mx-1'>
                      {product?.rating}
                    </span>
                  </div>
                  <div className='vert-line'></div>
                  <div className='brand'>
                    <span className='text-orange fw-5'>Brand:</span>
                    <span className='mx-1'>{product?.brand}</span>
                  </div>
                  <div className='vert-line'></div>
                  <div className='brand'>
                    <span className='text-orange fw-5'>Category:</span>
                    <span className='mx-1 text-capitalize'>
                      {product?.category ? product.category.replace("-", " ") : ""}
                    </span>
                  </div>
                </div>

                <div className="price">
                  <div className='flex align-center'>
                    <div className='old-price text-gray'>
                      {formatPrice(product?.price)}
                    </div>
                    <span className='fs-14 mx-2 text-dark'>
                      Inclusive of all taxes
                    </span>
                  </div>

                  <div className='flex align-center my-1'>
                    <div className='new-price fw-5 font-poppins fs-24 text-orange'>
                      {formatPrice(discountedPrice)}
                    </div>
                    <div className='discount bg-orange fs-13 text-white fw-6 font-poppins'>
                      {product?.discountPercentage}% OFF
                    </div>
                  </div>
                </div>

                <div className='qty flex align-center my-4'>
                  <div className='qty-text'>Quantity:</div>
                  <div className='qty-change flex align-center mx-3'>
                    <button type="button" className='qty-decrease flex align-center justify-center' onClick={() => decreaseQty()}>
                      <i className='fas fa-minus'></i>
                    </button>
                    <div className="qty-value flex align-center justify-center">{quantity}</div>
                    <button type="button" className='qty-increase flex align-center justify-center' onClick={() => increaseQty()}>
                      <i className='fas fa-plus'></i>
                    </button>
                  </div>
                  {
                    (product?.stock === 0) ? <div className='qty-error text-uppercase bg-danger text-white fs-12 ls-1 mx-2 fw-5'>out of stock</div> : ""
                  }
                </div>

                <div className='btns'>
                  <button type="button" className='add-to-cart-btn btn' onClick={() => addToCartHandler(product)}>
                    <i className='fas fa-shopping-cart'></i>
                    <span className='btn-text mx-2'>add to cart</span>
                  </button>
                  <button type="button" className='buy-now btn mx-3'>
                    <span className='btn-text'>buy now</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Toast Container */}
      <ToastContainer />
    </main>
  )
}

export default ProductSingle
