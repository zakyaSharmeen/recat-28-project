import React, { useState } from 'react'
import Homes from '../homes/Homes'
import Upcomming from '../upcomming/Upcomming'
import { latest, recommended, upcome } from '../../dummyData'
import Trending from '../trending/Trending'

function HomePage() {

  const[items, setItems] = useState(upcome)
  const[item, setItem] = useState(latest)
  
  return (
    <> 
    <Homes/>
    
    <Upcomming items= {items} title= "Upcoming Movies"/>
    <Upcomming items= {item} title= "Latest Movies"/>
    <Trending/>
    <Upcomming items= {recommended} title= "Recommended Movies"/>

    </>
  )
}

export default HomePage