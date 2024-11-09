import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function MealInfo() {
    const {mealid} = useParams()
    // console.log(mealid);

    const [info, setInfo] = useState()

    const getInfo = async () =>{
        const get = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`)
        const jsonData = await get.json()
        // console.log(jsonData);

        console.log(jsonData.meals[0]);
        setInfo(jsonData.meals[0])
        
    }

    if(info !== ""){
        getInfo()
    }


    
   return (
    <div>
        {
            !info ? "Data loading or not found" :
            <div className='mealInfo'> 
            <img src={info.strMealThumb} alt='images'/>
            <div className='info'>
               <h1>Recipe Detail</h1>
               <button>{info.strMeal}</button>
               <h3>Intruction's</h3>
               <p>{info.strInstructions.slice(0, 500)}</p>
               <Link to="/">Back to Options</Link>
            </div>
           </div>
        }
    </div>
  )
}

export default MealInfo