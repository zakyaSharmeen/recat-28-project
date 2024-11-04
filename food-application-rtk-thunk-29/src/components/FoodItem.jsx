import React from 'react'
import FoodCard from './FoodCard'
import FoodData from '../data/FoodData'
import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';

function FoodItem() {
  const handelToast = (name) => toast.success(`${name} added to the cart`);
  const category = useSelector((state) => state.category.category)
  const search = useSelector((state) => state.search.search)



  return (
   <>
  <Toaster position='top-center' reverseOrder={false}/>
    <div className='flex flex-wrap gap-10 justify-start mx-6 my-10'>
      {
        FoodData.filter((food) =>{
         if(category === "All"){
          // return food
          return food.name.toLowerCase().includes(search.toLowerCase())
         }else{
          // return category === food.category
          return category === food.category &&
          food.name.toLowerCase().includes(search.toLowerCase())
         }

        }).map((food)=>(
          <FoodCard key={food.id} 
          id={food.id}
          name={food.name}
          price={food.price}
          desc={food.desc}
          rating={food.rating}
          img={food.img}
          handelToast={handelToast}
          />
        ))
          
          

      
      }



      {/* {
        FoodData.map((food) =>{
          const {id, name,price, desc,rating, img} = food
          return (
            <FoodCard key={food.id} 
            id={id}
            name={name}
            price={price}
            desc={desc}
            rating={rating}
            img={img}
            handelToast={handelToast}
            />
          )

        })
      } */}
       
    </div>
   </>
  )
}

export default FoodItem