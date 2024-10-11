import React from 'react'
import { useNavigate } from 'react-router-dom'

function MealsItem({props}) {
  // console.log(props);
  let navigate = useNavigate()
  
  return (
    <>
    {
      (!props) ? "Not fount" : props.map(item =>{
        return(
          <div className="card" key={item.idMeal} onClick={() =>{navigate(`/${item.idMeal}`)}}>
          <img src={item.strMealThumb} alt="" />
          <h3>{item.strMeal}</h3>
      </div>
        )
      })
    }
    </>
  )
}

export default MealsItem