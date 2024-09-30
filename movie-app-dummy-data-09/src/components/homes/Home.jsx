import React from 'react'
import HomesCard from "./HomesCard" 


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';

import "swiper/css";
import 'swiper/css/navigation';


function Home({items}) {
  return (
    <div>
       <div className="homeContainer">
       {/* {
          items.map((item) => (
            <HomesCard key={item.id} item= {item}/>
          ))
        } */}
         <Swiper className="mySwiper" navigation={true} modules={[Navigation]} >
        
           {
          items.map((item) => (<SwiperSlide key={item.id} >
            <HomesCard key={item.id} item= {item}/>
            </SwiperSlide>
          ))
        }
          
      
       
      </Swiper>
  
       </div>
    </div>
  )
}

export default Home