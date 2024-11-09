import React, { useEffect } from 'react'
import SliderHome from '../../components/Slider/Slider'


import { useSelector, useDispatch } from 'react-redux'
import { getAllCategories } from '../../store/categorySlice'
import { fetchAsyncProducts, getAllProducts, getAllProductsStatus } from '../../store/productSlice'
import ProductList from "../../components/ProductList/ProductList"
import { STATUS } from '../../utils/status'
import Loader from '../../components/Loader/Loader'



function HomePage() {
  const dispatch = useDispatch()
  const categories = useSelector(getAllCategories)
  useEffect(() =>{
    dispatch(fetchAsyncProducts(50))
  },[])

  const products = useSelector(getAllProducts)
  // console.log(products);
  
  const productStatus = useSelector(getAllProductsStatus)

  // randomising the product
  const tempProducts =[]
  if(products.length > 0) {
    for (let i in products){
      let randomIndex = Math.floor(Math.random() * products.length)

      while(tempProducts.includes(products[randomIndex])){
        randomIndex = Math.floor(Math.random() *products.length)
      }
      tempProducts[i] = products[randomIndex]
    }
  }

 
  // let cartProductOne = products.filter(product => product.category === categories[0].name)



  return (
   <main>
     <div className='slider-wrapper'>
      <SliderHome/>
      
      </div>
      <div className='main-content bg-whitesmoke'>
        <div className='container'>
          <div className='categories py-5'>
            <div className='categories-item'>
              <div className='title-md'>
                <h3>See our products</h3>
              </div>


              {
                productStatus === STATUS.LOADING ? <Loader/> : <ProductList products={tempProducts}/>
              }
            </div>
           
            
          </div>
        </div>
      </div>


   </main>
  )
}

export default HomePage