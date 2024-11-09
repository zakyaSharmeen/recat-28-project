import React from 'react'
import { NavLink } from 'react-router-dom';

function MealCards({details}) {
    console.log(details);
    
  return (
    <div className='meals'>
            { !details ? "" : details.map((currItem) =>{
                return(
                    <div className='mealImg'>
                  <img src={currItem.strMealThumb} alt=''/>
                  <p>{currItem.strMeal}</p>
                  <NavLink to={`/${currItem.idMeal}`}><button>Recepie</button></NavLink>
                   
                </div>
                )

            })

            }
        
    </div>
  )
}

export default MealCards