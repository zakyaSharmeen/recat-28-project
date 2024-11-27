import React from "react";
import Sdata from "./Sdata";



// for swiper -just install and copy this
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";


export default function Slide() {
  return (
    <>
      <div className="slide">
      <h2>Single -items</h2>
      <Swiper className="mySwiper"  modules={[Pagination]}   pagination={{ clickable: true }} 
      >
         {Sdata.map((card) => (
            <SwiperSlide>
                <div className="box">
                    <div className="img">
                        {/* <img src={card.cover} alt="img" /> */}
                        <img src="../../../public/Images/blog2.jpg" alt="" />
                    </div>
                    <div className="text">
                        <span>{card.category}</span>
                        <h2>{card.title}</h2>
                        <p>{card.desc}</p>
                    </div>

                </div>

            </SwiperSlide>

       )) }
      
       
      </Swiper>
      </div>
    </>
  );
}
