import React from 'react'
import { NavLink } from 'react-router-dom'

function ErrorPage() {


 
  

  return (
    <div>
      <h1>OOPS ! error</h1>
     
      <NavLink to="/"><button>GO Home</button></NavLink>

    </div>
  )
}

export default ErrorPage