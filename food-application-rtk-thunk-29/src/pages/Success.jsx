import React, { useEffect, useState } from 'react'
import {SyncLoader} from "react-spinners"

function Success() {
  const [loading, setLoading] = useState(true)
  useEffect(() =>{
   setTimeout(() =>{
    setLoading(false)
   }, 2000)
  
  }, [])
  return (
   <>
    <div className='flex flex-col items-center justify-center h-screen'>
      {
        loading ? ( <SyncLoader  color="#36d7b7"/>) :
        (
          <div>
          <h2 className="text-3xl font-semibold mb-4 text-center">
          
            Order Successful!
          </h2>
          <p>Your order has been sucessfully placed</p>
      </div>
        )
      }
    </div>
      {/* <div>
          <h2 className="text-3xl font-semibold mb-4 text-center">
          <SyncLoader  color="#36d7b7"/>
            Order Successful!
          </h2>
          <p>Your order has been sucessfully placed</p>
      </div>
     */}
    
   </>
  )
}

export default Success