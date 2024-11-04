import React, { useEffect, useState } from 'react'
import FoodData from "../data/FoodData"
import { useDispatch, useSelector } from 'react-redux'
import { setCategory } from '../redux/slice/CategorySlice'

function CategoryMenu() {

  const [categories, setCategories] = useState([])
  const dispatch = useDispatch()
  const selectedCategory = useSelector((state) => state.category.category)

  const listUniqueCategories = () =>{
    const uniqueCategories = [...new Set(FoodData.map((food) => food.category))
    ]
    setCategories(uniqueCategories)
    console.log(uniqueCategories);
    
  }

  useEffect(() =>{
    listUniqueCategories()
  },[])




  return (
    <div className='ml-6'>
        <h3 className='text-xl font-semibold  mb-2'>Find the best food</h3>
        <div className='my-5 flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden'>

            {/* <button className='px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white'>All</button>
            <button className='px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white'>Lunch</button>
            <button className='px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white'>Breakfast</button>
            <button className='px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white'>Dinner</button> */}
             <button
              onClick={() => dispatch(setCategory("All"))}
                  className= {`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white ${selectedCategory === "All" && "bg-green-500 text-white"}`}
             >
              All
             </button>
                 
             
                 

            {
              categories.map((category, index) =>{
                return (
                  <button 
                  onClick={() => dispatch(setCategory(category))}
                  className= {`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white ${selectedCategory === category && "bg-green-500 text-white"}`}
                   key={index}>{category}</button>
                )
              })
            }

        </div>
      
      
    
    </div>
  )
}

export default CategoryMenu